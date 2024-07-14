# Criando e utilizando a minha primeira carteira de criptomoedas

Nesse desafio vou criar um gerador de carteiras bitcoin, utilizando pares de chave pública e privada. Eu irei desenvolver um gerador para criar endereços de depósito e de envio de bitcoin para a carteira gerada.

## Requisitos

Para executar o gerador de carteiras bitcoin, eu precisei dos seguintes requisitos instalados em meu sistema:

- Node.js versão 16 ou superior
- npm (Node Package Manager)

## Clonando o repositório

```
git clone [https://github.com/yohanaff/dio-criando-e-utilizando-a-sua-carteira-de-criptomoedas.git]
```
## Executando o projeto

```
cd src
node createWallet.js
```
O output será a carteira gerada, junto com o seu endereço, chave privada e seed.

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
