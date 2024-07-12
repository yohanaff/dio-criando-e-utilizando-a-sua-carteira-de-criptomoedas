//importando as dependencias

const bip32 = require ('bip32')

const bip39 = require ('bip39')

const bitcoin = require ('bitcoinjs-lib')



//definir a rede

//Bitcoin -rede principal - mainnet

//testnet - rede de teste - testnet

const network = bitcoin.networks.testnet



//Derivacao de carteiras HD

const path = `m/49'/1'/0'/0`



//criando mnemonic para seed

let mnemonic = bip39.generateMnemonic()

const seed = bip39.mnemonicToSeedSync(mnemonic)



//criando a raiz da carteira HD

let root = bip32.fromSeed(seed,network)



//criando uma conta - par pvt-pub keys

let account = root.derivepath(path)

let node = account.derive(0).derive(0)



let btcaddress = bitcoin.payments.p2pkh({

    pubkey: node.publickey,

    network: network,

}).address



console.log("Carteira gerada")

console.log("Endereco:", btcaddress)

console.log("Chave privada:",node.toWIF())

console.log("Seed",mnemonic)
