<h>README - Gerador de Carteira Bitcoin com Hierarquia Determinística (HD)</h>

Este repositório contém um exemplo simples de como gerar uma carteira Bitcoin utilizando Hierarquia Determinística (HD) usando Node.js e as bibliotecas bip32, bip39 e bitcoinjs-lib.

<h>Pré-requisitos:</h>

Certifique-se de ter o Node.js instalado na sua máquina.

<h>Instalação</h>

1. Clone este repositório:

git clone [https://github.com/yohanaff/dio-criando-e-utilizando-a-sua-carteira-de-criptomoedas.git]

<h>Instale as dependências necessárias:</h>

npm install bip32 bip39 bitcoinjs-lib

<h>Uso</h>

Execute o script createWallet.js para gerar uma carteira Bitcoin no Testnet:

node createWallet.js

<h>Detalhes do Código:</h>

O script createWallet.js realiza os seguintes passos:

Importa as bibliotecas necessárias:

const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

Define a rede de Bitcoin como Testnet (rede de testes da blockchain do Bitcoin):

const network = bitcoin.networks.testnet;

Define o caminho para a derivação HD:

const path = `m/49'/1'/0'/0`;

Gera um mnemonic (palavras de senha) para a seed da carteira:

let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

Cria a raiz da carteira HD a partir da seed:

let root = bip32.fromSeed(seed, network);

Deriva uma conta específica usando o caminho definido:

let account = root.derivePath(path);
let node = account.derive(0).derive(0);

Gera o endereço Bitcoin e exibe no console:

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;


Exibe a mensagem "Carteira gerada" no console, assim como as informações referentes à carteira criada, como o endereço (btcAddress), a chave privada (node.toWIF), e a seed (mnemonic):

console.log("Carteira gerada");
console.log("Endereço: ", btcAddress);
console.log("Chave privada: ", node.toWIF());
console.log("Seed: ", mnemonic);

<h>Notas</h>
Este exemplo utiliza a biblioteca bitcoinjs-lib para operações relacionadas à carteira Bitcoin.
O script gera um endereço e uma chave privada válidos para a rede Testnet do Bitcoin.
Guarde com segurança o mnemonic gerado, pois ele é crucial para restaurar a carteira no futuro.

![Screenshot](https://github.com/user-attachments/assets/debd4e45-26ba-473d-8a2b-26c81c74fd6a)

## Buscando o meu bloco em um buscador de blocos. 

Acessei o blockexplorer.one [blockexplorer.one](https://blockexplorer.one/).

1. Cliquei no ícone do Bitcoin.
![BlockExplorer.one - Passo 01](images/blockexplorer-01.png)

2. Digitei no buscador o endereço da minha carteira.

Observei que ali há um alerta falando que se trata um endereço testnet.

Observei também que não há nenhuma transação e o saldo está zerado.

![Screen Shot 2024-07-14 at 12 16 22](https://github.com/user-attachments/assets/84ca764e-1e27-4963-9226-3b9a2dd070f2)

## Obtendo faucets (criptomoedas de teste)

1. Acessei [coinfaucet.eu](https://coinfaucet.eu/).

2. Coloquei o endereço da minha carteira.

Mostrou uma tela como esta:

![Screen Shot 2024-07-14 at 12 16 52](https://github.com/user-attachments/assets/c265367b-06e1-4779-88d3-6ecaf41c5c3d)

## Confirmando a transação (criptomoedas de teste)

Acessei o live.blockcypher.com/btc-testnet/

E inseri o código tx da transação realizada.

![Screen Shot 2024-07-14 at 12 18 31](https://github.com/user-attachments/assets/14975789-170f-4cd9-8eda-a55a0d9337cc)
