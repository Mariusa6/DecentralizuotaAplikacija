// ==============================================
// KONFIGŪRACIJA
// ==============================================

const CONTRACT_ADDRESS = "ĮRAŠYKITE_JŪSŲ_CONTRACT_ADDRESS_ČIA";

const CONTRACT_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum TradingContract.Busena",
				"name": "naujaBusena",
				"type": "uint8"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "atliko",
				"type": "address"
			}
		],
		"name": "BusenosPasikeitimas",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "pardavejui",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "suma",
				"type": "uint256"
			}
		],
		"name": "LesuPervedimas",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "atliko",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "grazintaSuma",
				"type": "uint256"
			}
		],
		"name": "UzsakymasAtsauktas",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "pirkejas",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "pardavejas",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "kaina",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "aprasymas",
				"type": "string"
			}
		],
		"name": "UzsakymasSukurtas",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "aktyvuota",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "atsauktiUzsakyma",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "avarinisIsemimas",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gautiBalansa",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "gautiUzsakyma",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "pirkejas",
						"type": "address"
					},
					{
						"internalType": "address payable",
						"name": "pardavejas",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "kurjeris",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "kaina",
						"type": "uint256"
					},
					{
						"internalType": "enum TradingContract.Busena",
						"name": "busena",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "sukurimo_laikas",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "aprasymas",
						"type": "string"
					}
				],
				"internalType": "struct TradingContract.Uzsakymas",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum TradingContract.Busena",
				"name": "_busena",
				"type": "uint8"
			}
		],
		"name": "gautibusenosPavadinima",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "patvirtintiGavima",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "patvirtintiIsiuntima",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "patvirtintiPristatyma",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "perjungtiAktyvuma",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "savininkas",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_pardavejas",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_kurjeris",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_aprasymas",
				"type": "string"
			}
		],
		"name": "sukurtiUzsakyma",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uzsakymai",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "pirkejas",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "pardavejas",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "kurjeris",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "kaina",
				"type": "uint256"
			},
			{
				"internalType": "enum TradingContract.Busena",
				"name": "busena",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "sukurimo_laikas",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "aprasymas",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uzsakymuSkaicius",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// ==============================================
// GLOBALŪS KINTAMIEJI
// ==============================================

let web3;
let contract;
let currentAccount;

// ==============================================
// INICIALIZACIJA
// ==============================================

window.addEventListener('load', async () => {
    // Patikriname ar yra MetaMask
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask aptiktas!');
        
        // Klausomės account pasikeitimų
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', () => window.location.reload());
        
    } else {
        rodytiPranesima('Įdiekite MetaMask naršyklėje!', 'error');
    }
    
    // Connect mygtukas
    document.getElementById('connect-button').addEventListener('click', connectWallet);
});

// ==============================================
// WALLET FUNKCIJOS
// ==============================================

async function connectWallet() {
    try {
        rodytiLoading(true);
        
        // Prašome prisijungti
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        
        handleAccountsChanged(accounts);
        
        rodytiPranesima('Sėkmingai prisijungta!', 'success');
        
    } catch (error) {
        console.error('Prisijungimo klaida:', error);
        rodytiPranesima('Nepavyko prisijungti: ' + error.message, 'error');
    } finally {
        rodytiLoading(false);
    }
}

async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // Vartotojas atsijungė
        currentAccount = null;
        updateUIDisconnected();
    } else {
        currentAccount = accounts[0];
        await initWeb3();
        await updateUIConnected();
    }
}

async function initWeb3() {
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    console.log('Web3 ir Contract inicializuoti');
}

// ==============================================
// UI UPDATE FUNKCIJOS
// ==============================================

async function updateUIConnected() {
    // Account info
    const accountShort = `${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;
    document.getElementById('account-info').innerHTML = 
        `Prisijungęs: <strong>${accountShort}</strong>`;
    
    // Network info
    const chainId = await web3.eth.getChainId();
    const networkName = getNetworkName(chainId);
    document.getElementById('network-info').textContent = 
        `Tinklas: ${networkName}`;
    
    // Balance
    const balance = await web3.eth.getBalance(currentAccount);
    const ethBalance = web3.utils.fromWei(balance, 'ether');
    document.getElementById('balance-info').textContent = 
        `Balansas: ${parseFloat(ethBalance).toFixed(4)} ETH`;
    
    // Pakeisti mygtuko tekstą
    document.getElementById('connect-button').textContent = 'Prisijungęs ✓';
    document.getElementById('connect-button').disabled = true;
    
    // Atnaujinti sutarties info
    await atnaujintiSutartiesInfo();
}

function updateUIDisconnected() {
    document.getElementById('account-info').textContent = 'Neprisijungęs';
    document.getElementById('network-info').textContent = '';
    document.getElementById('balance-info').textContent = '';
    document.getElementById('connect-button').textContent = 'Prisijungti su MetaMask';
    document.getElementById('connect-button').disabled = false;
}

function getNetworkName(chainId) {
    const networks = {
        1: 'Ethereum Mainnet',
        11155111: 'Sepolia Testnet',
        5: 'Goerli Testnet',
        1337: 'Ganache Local'
    };
    return networks[chainId] || `Unknown (${chainId})`;
}

// ==============================================
// CONTRACT FUNKCIJOS
// ==============================================

async function sukurtiUzsakyma() {
    if (!currentAccount) {
        rodytiPranesima('Pirmiausia prisijunkite su MetaMask!', 'error');
        return;
    }
    
    const pardavejas = document.getElementById('pardavejas').value;
    const kurjeris = document.getElementById('kurjeris').value;
    const aprasymas = document.getElementById('aprasymas').value;
    const kaina = document.getElementById('kaina').value;
    
    // Validacija
    if (!web3.utils.isAddress(pardavejas)) {
        rodytiPranesima('Neteisingas pardavėjo adresas!', 'error');
        return;
    }
    if (!web3.utils.isAddress(kurjeris)) {
        rodytiPranesima('Neteisingas kurjerio adresas!', 'error');
        return;
    }
    if (!aprasymas) {
        rodytiPranesima('Įveskite prekės aprašymą!', 'error');
        return;
    }
    if (!kaina || kaina <= 0) {
        rodytiPranesima('Įveskite teisingą kainą!', 'error');
        return;
    }
    
    try {
        rodytiLoading(true);
        
        const kainaWei = web3.utils.toWei(kaina, 'ether');
        
        const tx = await contract.methods
            .sukurtiUzsakyma(pardavejas, kurjeris, aprasymas)
            .send({ 
                from: currentAccount, 
                value: kainaWei 
            });
        
        console.log('Transaction:', tx);
        
        rodytiPranesima('Užsakymas sėkmingai sukurtas! TX: ' + tx.transactionHash, 'success');
        
        // Išvalome formos laukus
        document.getElementById('pardavejas').value = '';
        document.getElementById('kurjeris').value = '';
        document.getElementById('aprasymas').value = '';
        document.getElementById('kaina').value = '';
        
        await atnaujintiSutartiesInfo();
        
    } catch (error) {
        console.error('Klaida:', error);
        rodytiPranesima('Klaida: ' + error.message, 'error');
    } finally {
        rodytiLoading(false);
    }
}

async function gautiUzsakyma() {
    if (!currentAccount) {
        rodytiPranesima('Pirmiausia prisijunkite su MetaMask!', 'error');
        return;
    }
    
    const id = document.getElementById('uzsakymo-id').value;
    
    if (!id || id <= 0) {
        rodytiPranesima('Įveskite teisingą užsakymo ID!', 'error');
        return;
    }
    
    try {
        rodytiLoading(true);
        
        const uzsakymas = await contract.methods.gautiUzsakyma(id).call();
        
        // Konvertuojame būseną į tekstą
        const busenos = ['Sukurta', 'Apmokėta', 'Išsiųsta', 'Pristatyta', 'Baigta', 'Atšaukta'];
        const busenaTekstas = busenos[uzsakymas.busena];
        
        // Konvertuojame kainą į ETH
        const kainaETH = web3.utils.fromWei(uzsakymas.kaina, 'ether');
        
        // Konvertuojame timestamp į datą
        const data = new Date(uzsakymas.sukurimo_laikas * 1000).toLocaleString('lt-LT');
        
        // Rodom informaciją
        const infoDiv = document.getElementById('uzsakymo-detalės');
        infoDiv.innerHTML = `
            <p><strong>ID:</strong> ${uzsakymas.id}</p>
            <p><strong>Pirkėjas:</strong> ${uzsakymas.pirkejas}</p>
            <p><strong>Pardavėjas:</strong> ${uzsakymas.pardavejas}</p>
            <p><strong>Kurjeris:</strong> ${uzsakymas.kurjeris}</p>
            <p><strong>Aprašymas:</strong> ${uzsakymas.aprasymas}</p>
            <p><strong>Kaina:</strong> ${kainaETH} ETH</p>
            <p><strong>Būsena:</strong> <span class="status-badge status-${uzsakymas.busena}">${busenaTekstas}</span></p>
            <p><strong>Sukurta:</strong> ${data}</p>
        `;
        
        document.getElementById('uzsakymo-info').style.display = 'block';
        
    } catch (error) {
        console.error('Klaida:', error);
        rodytiPranesima('Klaida: ' + error.message, 'error');
    } finally {
        rodytiLoading(false);
    }
}

async function patvirtintiIsiuntima() {
    await vykdytiVeiksma('patvirtintiIsiuntima', 'Išsiuntimas patvirtintas!');
}

async function patvirtintiPristatyma() {
    await vykdytiVeiksma('patvirtintiPristatyma', 'Pristatymas patvirtintas!');
}

async function patvirtintiGavima() {
    await vykdytiVeiksma('patvirtintiGavima', 'Gavimas patvirtintas! Lėšos pervestos.');
}

async function atsauktiUzsakyma() {
    if (!confirm('Ar tikrai norite atšaukti užsakymą? Lėšos bus grąžintos.')) {
        return;
    }
    await vykdytiVeiksma('atsauktiUzsakyma', 'Užsakymas atšauktas! Lėšos grąžintos.');
}

async function vykdytiVeiksma(metodas, sekmesZinute) {
    if (!currentAccount) {
        rodytiPranesima('Pirmiausia prisijunkite su MetaMask!', 'error');
        return;
    }
    
    const id = document.getElementById('veiksmo-id').value;
    
    if (!id || id <= 0) {
        rodytiPranesima('Įveskite teisingą užsakymo ID!', 'error');
        return;
    }
    
    try {
        rodytiLoading(true);
        
        const tx = await contract.methods[metodas](id).send({ from: currentAccount });
        
        console.log('Transaction:', tx);
        rodytiPranesima(sekmesZinute + ' TX: ' + tx.transactionHash, 'success');
        
        await atnaujintiSutartiesInfo();
        
    } catch (error) {
        console.error('Klaida:', error);
        rodytiPranesima('Klaida: ' + error.message, 'error');
    } finally {
        rodytiLoading(false);
    }
}

async function atnaujintiSutartiesInfo() {
    if (!contract) return;
    
    try {
        // Contract address
        document.getElementById('contract-address').textContent = CONTRACT_ADDRESS;
        
        // Užsakymų skaičius
        const skaicius = await contract.methods.uzsakymuSkaicius().call();
        document.getElementById('uzsakymu-skaicius').textContent = skaicius;
        
        // Sutarties balansas
        const balansas = await contract.methods.gautiBalansa().call();
        const balansasETH = web3.utils.fromWei(balansas, 'ether');
        document.getElementById('contract-balance').textContent = 
            parseFloat(balansasETH).toFixed(4) + ' ETH';
        
    } catch (error) {
        console.error('Klaida gaunant sutarties info:', error);
    }
}

// ==============================================
// UI HELPER FUNKCIJOS
// ==============================================

function rodytiLoading(show) {
    document.getElementById('loading-overlay').style.display = show ? 'flex' : 'none';
}

function rodytiPranesima(zinute, tipas) {
    const notification = document.getElementById('notification');
    notification.textContent = zinute;
    notification.className = 'notification ' + tipas;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}
