// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title TradingContract
 * @dev Išmanioji sutartis prekių pardavimui/pirkimui su pristatymu
 * @notice Ši sutartis veikia kaip escrow tarpininkas tarp pirkėjo, pardavėjo ir kurjerio
 */
contract TradingContract {
    
    // ============================================
    // BŪSENOS IR STRUKTŪROS
    // ============================================
    
    /**
     * @dev Užsakymo būsenos
     */
    enum Busena { 
        Sukurta,      // 0 - Užsakymas sukurtas (pradinis)
        Apmoketa,     // 1 - Pirkėjas sumokėjo
        Issiusta,     // 2 - Pardavėjas išsiuntė prekę
        Pristatyta,   // 3 - Kurjeris pristatė prekę
        Baigta,       // 4 - Pirkėjas patvirtino, lėšos pervestos
        Atsaukta      // 5 - Užsakymas atšauktas
    }
    
    /**
     * @dev Užsakymo struktūra
     */
    struct Uzsakymas {
        uint256 id;              // Unikalus ID
        address pirkejas;        // Pirkėjo adresas
        address payable pardavejas;  // Pardavėjo adresas (gali gauti ETH)
        address kurjeris;        // Kurjerio adresas
        uint256 kaina;           // Kaina Wei
        Busena busena;           // Dabartinė būsena
        uint256 sukurimo_laikas; // Timestamp
        string aprasymas;        // Prekės aprašymas
    }
    
    // ============================================
    // KINTAMIEJI
    // ============================================
    
    /// @notice Visi užsakymai (mapping)
    mapping(uint256 => Uzsakymas) public uzsakymai;
    
    /// @notice Bendras užsakymų skaičius
    uint256 public uzsakymuSkaicius;
    
    /// @notice Sutarties savininkas (deployer)
    address public savininkas;
    
    /// @notice Ar sutartis aktyvuota
    bool public aktyvuota;
    
    // ============================================
    // EVENTS (ĮVYKIAI)
    // ============================================
    
    /// @notice Išsiunčiamas kai sukuriamas naujas užsakymas
    event UzsakymasSukurtas(
        uint256 indexed id,
        address indexed pirkejas,
        address indexed pardavejas,
        uint256 kaina,
        string aprasymas
    );
    
    /// @notice Išsiunčiamas kai pasikeičia užsakymo būsena
    event BusenosPasikeitimas(
        uint256 indexed id,
        Busena naujaBusena,
        address indexed atliko
    );
    
    /// @notice Išsiunčiamas kai pervedamos lėšos
    event LesuPervedimas(
        uint256 indexed id,
        address indexed pardavejui,
        uint256 suma
    );
    
    /// @notice Išsiunčiamas kai užsakymas atšaukiamas
    event UzsakymasAtsauktas(
        uint256 indexed id,
        address indexed atliko,
        uint256 grazintaSuma
    );
    
    // ============================================
    // MODIFIKATORIAI
    // ============================================
    
    /// @dev Tikrina ar funkcijos kvietėjas yra pirkėjas
    modifier tikPirkejas(uint256 _id) {
        require(
            msg.sender == uzsakymai[_id].pirkejas,
            "Tik pirkejas gali atlikti sia operacija"
        );
        _;
    }
    
    /// @dev Tikrina ar funkcijos kvietėjas yra pardavėjas
    modifier tikPardavejas(uint256 _id) {
        require(
            msg.sender == uzsakymai[_id].pardavejas,
            "Tik pardavejas gali atlikti sia operacija"
        );
        _;
    }
    
    /// @dev Tikrina ar funkcijos kvietėjas yra kurjeris
    modifier tikKurjeris(uint256 _id) {
        require(
            msg.sender == uzsakymai[_id].kurjeris,
            "Tik kurjeris gali atlikti sia operacija"
        );
        _;
    }
    
    /// @dev Tikrina ar sutartis aktyvi
    modifier sutartisAktyvi() {
        require(aktyvuota, "Sutartis neaktyvi");
        _;
    }
    
    /// @dev Tikrina ar funkcijos kvietėjas yra sutarties savininkas
    modifier tikSavininkas() {
        require(msg.sender == savininkas, "Tik savininkas");
        _;
    }
    
    // ============================================
    // CONSTRUCTOR
    // ============================================
    
    /**
     * @dev Konstruktorius - inicializuoja sutartį
     */
    constructor() {
        savininkas = msg.sender;
        aktyvuota = true;
        uzsakymuSkaicius = 0;
    }
    
    // ============================================
    // PAGRINDINĖS FUNKCIJOS
    // ============================================
    
    /**
     * @notice Sukuria naują užsakymą
     * @param _pardavejas Pardavėjo Ethereum adresas
     * @param _kurjeris Kurjerio Ethereum adresas
     * @param _aprasymas Prekės aprašymas
     * @return Naujo užsakymo ID
     */
    function sukurtiUzsakyma(
        address payable _pardavejas,
        address _kurjeris,
        string memory _aprasymas
    ) 
        public 
        payable 
        sutartisAktyvi
        returns (uint256) 
    {
        // Validacijos
        require(msg.value > 0, "Kaina turi buti didesne uz 0");
        require(_pardavejas != address(0), "Neteisingas pardavejo adresas");
        require(_kurjeris != address(0), "Neteisingas kurjerio adresas");
        require(
            _pardavejas != msg.sender,
            "Pardavejas negali buti pirkejas"
        );
        require(bytes(_aprasymas).length > 0, "Aprasymas privalo buti");
        
        // Sukuriame naują užsakymą
        uzsakymuSkaicius++;
        
        uzsakymai[uzsakymuSkaicius] = Uzsakymas({
            id: uzsakymuSkaicius,
            pirkejas: msg.sender,
            pardavejas: _pardavejas,
            kurjeris: _kurjeris,
            kaina: msg.value,
            busena: Busena.Apmoketa,
            sukurimo_laikas: block.timestamp,
            aprasymas: _aprasymas
        });
        
        // Išsiunčiame event
        emit UzsakymasSukurtas(
            uzsakymuSkaicius,
            msg.sender,
            _pardavejas,
            msg.value,
            _aprasymas
        );
        
        return uzsakymuSkaicius;
    }
    
    /**
     * @notice Pardavėjas patvirtina prekės išsiuntimą
     * @param _id Užsakymo ID
     */
    function patvirtintiIsiuntima(uint256 _id) 
        public 
        tikPardavejas(_id)
        sutartisAktyvi
    {
        require(
            uzsakymai[_id].busena == Busena.Apmoketa,
            "Netinkama busena - turi buti Apmoketa"
        );
        
        uzsakymai[_id].busena = Busena.Issiusta;
        
        emit BusenosPasikeitimas(_id, Busena.Issiusta, msg.sender);
    }
    
    /**
     * @notice Kurjeris patvirtina prekės pristatymą
     * @param _id Užsakymo ID
     */
    function patvirtintiPristatyma(uint256 _id) 
        public 
        tikKurjeris(_id)
        sutartisAktyvi
    {
        require(
            uzsakymai[_id].busena == Busena.Issiusta,
            "Netinkama busena - turi buti Issiusta"
        );
        
        uzsakymai[_id].busena = Busena.Pristatyta;
        
        emit BusenosPasikeitimas(_id, Busena.Pristatyta, msg.sender);
    }
    
    /**
     * @notice Pirkėjas patvirtina prekės gavimą ir perveda lėšas pardavėjui
     * @param _id Užsakymo ID
     */
    function patvirtintiGavima(uint256 _id) 
        public 
        tikPirkejas(_id)
        sutartisAktyvi
    {
        require(
            uzsakymai[_id].busena == Busena.Pristatyta,
            "Netinkama busena - turi buti Pristatyta"
        );
        
        // Pakeičiame būseną
        uzsakymai[_id].busena = Busena.Baigta;
        
        // Pervedame lėšas pardavėjui
        uint256 suma = uzsakymai[_id].kaina;
        address payable pardavejas = uzsakymai[_id].pardavejas;
        
        // Pervedimas
        (bool success, ) = pardavejas.call{value: suma}("");
        require(success, "Pervedimas nepavyko");
        
        // Events
        emit BusenosPasikeitimas(_id, Busena.Baigta, msg.sender);
        emit LesuPervedimas(_id, pardavejas, suma);
    }
    
    /**
     * @notice Atšaukti užsakymą (tik jei dar neišsiųsta)
     * @param _id Užsakymo ID
     */
    function atsauktiUzsakyma(uint256 _id) 
        public 
        tikPirkejas(_id)
        sutartisAktyvi
    {
        require(
            uzsakymai[_id].busena == Busena.Apmoketa,
            "Galima atsaukti tik Apmoketa busena"
        );
        
        // Pakeičiame būseną
        uzsakymai[_id].busena = Busena.Atsaukta;
        
        // Grąžiname lėšas pirkėjui
        uint256 suma = uzsakymai[_id].kaina;
        address payable pirkejas = payable(msg.sender);
        
        (bool success, ) = pirkejas.call{value: suma}("");
        require(success, "Grazinimas nepavyko");
        
        emit UzsakymasAtsauktas(_id, msg.sender, suma);
    }
    
    // ============================================
    // VIEW FUNKCIJOS (SKAITYMO)
    // ============================================
    
    /**
     * @notice Gauti užsakymo informaciją
     * @param _id Užsakymo ID
     * @return Užsakymo duomenys
     */
    function gautiUzsakyma(uint256 _id) 
        public 
        view 
        returns (Uzsakymas memory) 
    {
        require(_id > 0 && _id <= uzsakymuSkaicius, "Neteisingas ID");
        return uzsakymai[_id];
    }
    
    /**
     * @notice Gauti sutarties balansą
     * @return Balansas Wei
     */
    function gautiBalansa() public view returns (uint256) {
        return address(this).balance;
    }
    
    /**
     * @notice Gauti būsenos tekstą
     * @param _busena Būsenos numeris
     * @return Būsenos pavadinimas
     */
    function gautibusenosPavadinima(Busena _busena) 
        public 
        pure 
        returns (string memory) 
    {
        if (_busena == Busena.Sukurta) return "Sukurta";
        if (_busena == Busena.Apmoketa) return "Apmoketa";
        if (_busena == Busena.Issiusta) return "Issiusta";
        if (_busena == Busena.Pristatyta) return "Pristatyta";
        if (_busena == Busena.Baigta) return "Baigta";
        if (_busena == Busena.Atsaukta) return "Atsaukta";
        return "Nezinoma";
    }
    
    // ============================================
    // ADMIN FUNKCIJOS
    // ============================================
    
    /**
     * @notice Perjungti sutarties aktyvavimą
     */
    function perjungtiAktyvuma() public tikSavininkas {
        aktyvuota = !aktyvuota;
    }
    
    /**
     * @notice Emergency withdraw (tik savininkas, ekstremaliais atvejais)
     */
    function avarinisIsemimas() public tikSavininkas {
        payable(savininkas).transfer(address(this).balance);
    }
}
