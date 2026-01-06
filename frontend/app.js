// ==============================================
// KONFIGŪRACIJA
// ==============================================

// ⚠️ SVARBU: Po deployment pakeiskite šiuos duomenis!
const CONTRACT_ADDRESSES = {
    sepolia: "0xe2c00c3d4642bf05f71f0e232b9e0dae70563a17",
    mainnet: "ĮRAŠYKITE_MAINNET_CONTRACT_ADDRESS", // Optional
    ganache: "ĮRAŠYKITE_GANACHE_CONTRACT_ADDRESS"  // Optional
};

// Network konfigūracijos
const NETWORKS = {
    1: { name: 'Ethereum Mainnet', explorer: 'https://etherscan.io' },
    11155111: { name: 'Sepolia Testnet', explorer: 'https://sepolia.etherscan.io' },
    5: { name: 'Goerli Testnet', explorer: 'https://goerli.etherscan.io' },
    1337: { name: 'Ganache Local', explorer: null },
    31337: { name: 'Hardhat Local', explorer: null }
};

// Rekomenduojamas network ID (Sepolia)
const RECOMMENDED_CHAIN_ID = 11155111;

// Contract ABI - nukopijuokite iš Remix po kompiliavimo
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
let currentChainId;
let contractAddress;

// ==============================================
// INICIALIZACIJA
// ==============================================

window.addEventListener('load', async () => {
    // Patikriname ar yra MetaMask
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask aptiktas!');
        
        // Klausomės account pasikeitimų
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);
        
        // Bandome automatiškai prisijungti jei anksčiau buvo prisijungęs
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            handleAccountsChanged(accounts);
        }
        
    } else {
        rodytiPranesima('❌ MetaMask nerastas! Įdiekite MetaMask naršyklėje: https://metamask.io/', 'error');
        document.getElementById('account-info').innerHTML = 
            '❌ <a href="https://metamask.io/" target="_blank">Įdiekite MetaMask</a>';
    }
    
    // Connect mygtukas
    document.getElementById('connect-button').addEventListener('click', connectWallet);
    
    // Disconnect mygtukas
    document.getElementById('disconnect-button').addEventListener('click', disconnectWallet);
    
    // Network switch mygtukas (jei pridėsite HTML'e)
    const switchBtn = document.getElementById('switch-network-button');
    if (switchBtn) {
        switchBtn.addEventListener('click', switchToSepolia);
    }
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
        
        // Patikriname network
        await checkNetwork();
        
        rodytiPranesima('✅ Sėkmingai prisijungta!', 'success');
        
    } catch (error) {
        console.error('Prisijungimo klaida:', error);
        if (error.code === 4001) {
            rodytiPranesima('❌ Prisijungimas atšauktas', 'error');
        } else {
            rodytiPranesima('❌ Nepavyko prisijungti: ' + error.message, 'error');
        }
    } finally {
        rodytiLoading(false);
    }
}

async function disconnectWallet() {
    try {
        // Išvalome lokalius duomenis
        currentAccount = null;
        web3 = null;
        contract = null;
        contractAddress = null;
        currentChainId = null;
        
        // Atnaujiname UI
        updateUIDisconnected();
        
        rodytiPranesima('✅ Atsijungta sėkmingai', 'success');
        
        // Papildoma: jei norite atjungti ir iš MetaMask pusės
        // (Tai veikia tik jei svetainė turi leidimą)
        // Pastaba: MetaMask nepalaiko programinio disconnect per API
        // Vartotojas turi atjungti rankiniu būdu per MetaMask UI
        
    } catch (error) {
        console.error('Atsijungimo klaida:', error);
        rodytiPranesima('❌ Atsijungimo klaida: ' + error.message, 'error');
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

async function handleChainChanged(chainId) {
    console.log('Network pasikeitė į:', chainId);
    // Perkrauname puslapį kai pasikeičia network
    window.location.reload();
}

async function initWeb3() {
    web3 = new Web3(window.ethereum);
    
    // Gauname chain ID
    currentChainId = await web3.eth.getChainId();
    
    // Nustatome contract address pagal network
    contractAddress = getContractAddress(currentChainId);
    
    if (contractAddress && contractAddress !== "ĮRAŠYKITE_SEPOLIA_CONTRACT_ADDRESS") {
        contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
        console.log('Web3 ir Contract inicializuoti');
        console.log('Network:', currentChainId);
        console.log('Contract address:', contractAddress);
    } else {
        console.warn('Contract address nenustatytas šiam network');
        contract = null;
    }
}

// ==============================================
// NETWORK FUNKCIJOS
// ==============================================

function getContractAddress(chainId) {
    switch(chainId) {
        case 11155111: // Sepolia
            return CONTRACT_ADDRESSES.sepolia;
        case 1: // Mainnet
            return CONTRACT_ADDRESSES.mainnet;
        case 1337: // Ganache
        case 31337: // Hardhat
            return CONTRACT_ADDRESSES.ganache;
        default:
            return null;
    }
}

async function checkNetwork() {
    const chainId = await web3.eth.getChainId();
    
    if (chainId !== RECOMMENDED_CHAIN_ID) {
        const networkName = NETWORKS[chainId]?.name || `Unknown (${chainId})`;
        const recommendedName = NETWORKS[RECOMMENDED_CHAIN_ID]?.name || 'Sepolia';
        
        rodytiPranesima(
            `⚠️ Jūs esate ${networkName} tinkle. Rekomenduojama naudoti ${recommendedName}. Spauskite "Perjungti į Sepolia" mygtuką.`,
            'warning'
        );
        
        // Rodom switch mygtuką
        const switchBtn = document.getElementById('switch-network-button');
        if (switchBtn) {
            switchBtn.style.display = 'inline-block';
        }
        
        return false;
    }
    
    return true;
}

async function switchToSepolia() {
    try {
        rodytiLoading(true);
        
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }], // Sepolia chainId in hex
        });
        
        rodytiPranesima('✅ Perjungta į Sepolia testnet!', 'success');
        
        // Paslėpti switch mygtuką
        const switchBtn = document.getElementById('switch-network-button');
        if (switchBtn) {
            switchBtn.style.display = 'none';
        }
        
    } catch (error) {
        console.error('Network switch klaida:', error);
        
        // Jei network nepridėtas, pridedame
        if (error.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0xaa36a7',
                        chainName: 'Sepolia Testnet',
                        nativeCurrency: {
                            name: 'SepoliaETH',
                            symbol: 'ETH',
                            decimals: 18
                        },
                        rpcUrls: ['https://rpc.sepolia.org'],
                        blockExplorerUrls: ['https://sepolia.etherscan.io']
                    }]
                });
                rodytiPranesima('✅ Sepolia network pridėtas ir pasirinktas!', 'success');
            } catch (addError) {
                console.error('Network pridėjimo klaida:', addError);
                rodytiPranesima('❌ Nepavyko pridėti Sepolia network', 'error');
            }
        } else if (error.code === 4001) {
            rodytiPranesima('❌ Network keitimas atšauktas', 'error');
        } else {
            rodytiPranesima('❌ Network keitimo klaida: ' + error.message, 'error');
        }
    } finally {
        rodytiLoading(false);
    }
}

async function addNetwork(networkConfig) {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [networkConfig]
        });
        rodytiPranesima('✅ Network pridėtas sėkmingai!', 'success');
    } catch (error) {
        console.error('Network pridėjimo klaida:', error);
        rodytiPranesima('❌ Nepavyko pridėti network', 'error');
    }
}

// ==============================================
// UI UPDATE FUNKCIJOS
// ==============================================

async function updateUIConnected() {
    // Account info
    const accountShort = `${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;
    document.getElementById('account-info').innerHTML = 
        `✅ Prisijungęs: <strong>${accountShort}</strong>`;
    
    // Network info
    const chainId = await web3.eth.getChainId();
    const networkInfo = NETWORKS[chainId];
    const networkName = networkInfo ? networkInfo.name : `Unknown (${chainId})`;
    
    let networkHTML = `🌐 Tinklas: ${networkName}`;
    
    // Perspėjimas jei ne Sepolia
    if (chainId !== RECOMMENDED_CHAIN_ID) {
        networkHTML += ' <span style="color: orange;">⚠️ Rekomenduojama Sepolia</span>';
    }
    
    document.getElementById('network-info').innerHTML = networkHTML;
    
    // Balance
    const balance = await web3.eth.getBalance(currentAccount);
    const ethBalance = web3.utils.fromWei(balance, 'ether');
    document.getElementById('balance-info').textContent = 
        `💰 Balansas: ${parseFloat(ethBalance).toFixed(4)} ETH`;
    
    // Contract address info
    if (contractAddress && contractAddress !== "ĮRAŠYKITE_SEPOLIA_CONTRACT_ADDRESS") {
        const contractShort = `${contractAddress.substring(0, 6)}...${contractAddress.substring(38)}`;
        document.getElementById('contract-address').textContent = contractShort;
        document.getElementById('contract-address').title = contractAddress; // Pilnas adresas per tooltip
    } else {
        document.getElementById('contract-address').textContent = 'Nenustatytas šiam network';
        document.getElementById('contract-address').style.color = 'red';
    }
    
    // Pakeisti mygtuko tekstą ir rodyti/slėpti
    document.getElementById('connect-button').style.display = 'none';
    document.getElementById('disconnect-button').style.display = 'inline-block';
    
    // Rodom/slepiame switch network mygtuką
    const switchBtn = document.getElementById('switch-network-button');
    if (switchBtn) {
        switchBtn.style.display = chainId !== RECOMMENDED_CHAIN_ID ? 'inline-block' : 'none';
    }
    
    // Atnaujinti sutarties info
    if (contract) {
        await atnaujintiSutartiesInfo();
    }
}

function updateUIDisconnected() {
    document.getElementById('account-info').textContent = 'Neprisijungęs';
    document.getElementById('network-info').textContent = '';
    document.getElementById('balance-info').textContent = '';
    
    // Rodom connect, slepiame disconnect
    document.getElementById('connect-button').style.display = 'inline-block';
    document.getElementById('disconnect-button').style.display = 'none';
    
    // Paslėpti switch network mygtuką
    const switchBtn = document.getElementById('switch-network-button');
    if (switchBtn) {
        switchBtn.style.display = 'none';
    }
    
    // Išvalyti contract info
    document.getElementById('contract-address').textContent = '-';
    document.getElementById('uzsakymu-skaicius').textContent = '-';
    document.getElementById('contract-balance').textContent = '-';
}

function getNetworkName(chainId) {
    return NETWORKS[chainId]?.name || `Unknown (${chainId})`;
}

// ==============================================
// CONTRACT FUNKCIJOS
// ==============================================

async function sukurtiUzsakyma() {
    if (!currentAccount) {
        rodytiPranesima('❌ Pirmiausia prisijunkite su MetaMask!', 'error');
        return;
    }
    
    if (!contract) {
        rodytiPranesima('❌ Contract nepasiekiamas šiame network. Perjunkite į Sepolia testnet.', 'error');
        return;
    }
    
    const pardavejas = document.getElementById('pardavejas').value;
    const kurjeris = document.getElementById('kurjeris').value;
    const aprasymas = document.getElementById('aprasymas').value;
    const kaina = document.getElementById('kaina').value;
    
    // Validacija
    if (!web3.utils.isAddress(pardavejas)) {
        rodytiPranesima('❌ Neteisingas pardavėjo adresas!', 'error');
        return;
    }
    if (!web3.utils.isAddress(kurjeris)) {
        rodytiPranesima('❌ Neteisingas kurjerio adresas!', 'error');
        return;
    }
    if (!aprasymas) {
        rodytiPranesima('❌ Įveskite prekės aprašymą!', 'error');
        return;
    }
    if (!kaina || kaina <= 0) {
        rodytiPranesima('❌ Įveskite teisingą kainą!', 'error');
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
        
        const txHash = tx.transactionHash;
        const explorer = NETWORKS[currentChainId]?.explorer;
        const explorerLink = explorer ? `${explorer}/tx/${txHash}` : '';
        
        let message = '✅ Užsakymas sėkmingai sukurtas!';
        if (explorerLink) {
            message += ` <a href="${explorerLink}" target="_blank">Peržiūrėti Etherscan</a>`;
        }
        
        rodytiPranesima(message, 'success');
        
        // Išvalome formos laukus
        document.getElementById('pardavejas').value = '';
        document.getElementById('kurjeris').value = '';
        document.getElementById('aprasymas').value = '';
        document.getElementById('kaina').value = '';
        
        await atnaujintiSutartiesInfo();
        
    } catch (error) {
        console.error('Klaida:', error);
        handleContractError(error);
    } finally {
        rodytiLoading(false);
    }
}

async function gautiUzsakyma() {
    if (!currentAccount) {
        rodytiPranesima('❌ Pirmiausia prisijunkite su MetaMask!', 'error');
        return;
    }
    
    if (!contract) {
        rodytiPranesima('❌ Contract nepasiekiamas. Perjunkite į Sepolia testnet.', 'error');
        return;
    }
    
    const id = document.getElementById('uzsakymo-id').value;
    
    if (!id || id <= 0) {
        rodytiPranesima('❌ Įveskite teisingą užsakymo ID!', 'error');
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
        handleContractError(error);
    } finally {
        rodytiLoading(false);
    }
}

async function patvirtintiIsiuntima() {
    await vykdytiVeiksma('patvirtintiIsiuntima', '✅ Išsiuntimas patvirtintas!');
}

async function patvirtintiPristatyma() {
    await vykdytiVeiksma('patvirtintiPristatyma', '✅ Pristatymas patvirtintas!');
}

async function patvirtintiGavima() {
    await vykdytiVeiksma('patvirtintiGavima', '✅ Gavimas patvirtintas! Lėšos pervestos.');
}

async function atsauktiUzsakyma() {
    if (!confirm('⚠️ Ar tikrai norite atšaukti užsakymą? Lėšos bus grąžintos.')) {
        return;
    }
    await vykdytiVeiksma('atsauktiUzsakyma', '✅ Užsakymas atšauktas! Lėšos grąžintos.');
}

async function vykdytiVeiksma(metodas, sekmesZinute) {
    if (!currentAccount) {
        rodytiPranesima('❌ Pirmiausia prisijunkite su MetaMask!', 'error');
        return;
    }
    
    if (!contract) {
        rodytiPranesima('❌ Contract nepasiekiamas. Perjunkite į Sepolia testnet.', 'error');
        return;
    }
    
    const id = document.getElementById('veiksmo-id').value;
    
    if (!id || id <= 0) {
        rodytiPranesima('❌ Įveskite teisingą užsakymo ID!', 'error');
        return;
    }
    
    try {
        rodytiLoading(true);
        
        const tx = await contract.methods[metodas](id).send({ from: currentAccount });
        
        console.log('Transaction:', tx);
        
        const txHash = tx.transactionHash;
        const explorer = NETWORKS[currentChainId]?.explorer;
        const explorerLink = explorer ? `${explorer}/tx/${txHash}` : '';
        
        let message = sekmesZinute;
        if (explorerLink) {
            message += ` <a href="${explorerLink}" target="_blank">Peržiūrėti Etherscan</a>`;
        }
        
        rodytiPranesima(message, 'success');
        
        await atnaujintiSutartiesInfo();
        
    } catch (error) {
        console.error('Klaida:', error);
        handleContractError(error);
    } finally {
        rodytiLoading(false);
    }
}

async function atnaujintiSutartiesInfo() {
    if (!contract) {
        document.getElementById('contract-address').textContent = 'Nenustatytas';
        document.getElementById('uzsakymu-skaicius').textContent = '-';
        document.getElementById('contract-balance').textContent = '-';
        return;
    }
    
    try {
        // Contract address
        const contractShort = `${contractAddress.substring(0, 6)}...${contractAddress.substring(38)}`;
        const explorer = NETWORKS[currentChainId]?.explorer;
        
        if (explorer) {
            document.getElementById('contract-address').innerHTML = 
                `<a href="${explorer}/address/${contractAddress}" target="_blank">${contractShort}</a>`;
        } else {
            document.getElementById('contract-address').textContent = contractShort;
        }
        
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
// ERROR HANDLING
// ==============================================

function handleContractError(error) {
    let message = 'Klaida: ';
    
    if (error.code === 4001) {
        message = '❌ Transakcija atšaukta vartotojo';
    } else if (error.message.includes('insufficient funds')) {
        message = '❌ Nepakanka lėšų (ETH) transakcijai';
    } else if (error.message.includes('Tik pirkejas')) {
        message = '❌ Tik pirkėjas gali atlikti šią operaciją';
    } else if (error.message.includes('Tik pardavejas')) {
        message = '❌ Tik pardavėjas gali atlikti šią operaciją';
    } else if (error.message.includes('Tik kurjeris')) {
        message = '❌ Tik kurjeris gali atlikti šią operaciją';
    } else if (error.message.includes('Netinkama busena')) {
        message = '❌ Netinkama užsakymo būsena šiam veiksmui';
    } else if (error.message.includes('Kaina turi buti didesne uz 0')) {
        message = '❌ Kaina turi būti didesnė už 0';
    } else {
        message += error.message;
    }
    
    rodytiPranesima(message, 'error');
}

// ==============================================
// UI HELPER FUNKCIJOS
// ==============================================

function rodytiLoading(show) {
    document.getElementById('loading-overlay').style.display = show ? 'flex' : 'none';
}

function rodytiPranesima(zinute, tipas) {
    const notification = document.getElementById('notification');
    notification.innerHTML = zinute; // Naudojame innerHTML kad veiktų HTML (links)
    notification.className = 'notification ' + tipas;
    notification.style.display = 'block';
    
    // Automatiškai paslepiame po 8 sekundžių
    setTimeout(() => {
        notification.style.display = 'none';
    }, 8000);
}

// Papildoma funkcija - warning su ilgesniu laiku
function rodytiWarning(zinute) {
    const notification = document.getElementById('notification');
    notification.innerHTML = zinute;
    notification.className = 'notification warning';
    notification.style.display = 'block';
    
    // Warning ilgiau rodomas
    setTimeout(() => {
        notification.style.display = 'none';
    }, 12000);
}
