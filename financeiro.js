import prompt from 'prompt-sync'
let ler = prompt()

import { banner, verm, ama, ver, azul, cia, mage, bra, pre, fundPre, fundVer, fundAma, fundVerm, fundAzu, fundCia, fundMag, fundBra, } from './exibir.js';

let saldo = 0;

export function Deposito() {
    let continuar = true;

    while (continuar) {
        console.log(ver, "Digite o valor a ser depositado ou 'c' para cancelar: \n");
        let depositos = ler();

        if (depositos.toLowerCase() === 'c') {
            continuar = false;
        } else {
            depositos = Number(depositos);
            if (!isNaN(depositos) && depositos > 0) {
                saldo += depositos;
                console.log(fundVer, `Valor depositado: ${depositos}`);
            } else {
                console.log(ama, "Valor inválido.");
            }
        }
    }
    return saldo;
}

export function lerSaque() {
    let continuar = true;

    while (continuar) {
        console.log(verm, "Digite o valor a ser sacado ou 'c' para cancelar: \n");
        let saques = ler();

        if (saques.toLowerCase() === 'c') {
            continuar = false;
        } else {
            saques = Number(saques);
            if (!isNaN(saques) && saques > 0) {
                if (saques <= saldo) {
                    saldo -= saques;
                    console.log(fundVerm, `Valor sacado: ${saques}`);
                } else {
                    console.log(fundVerm, "Saldo insuficiente.");
                }
            } else {
                console.log(ama, "Valor inválido.");
            }
        }
    }

    return saldo;
}

export function lerExtrato() {
    console.log(fundAma, `Seu saldo atual é: ${saldo}`);
}

export function lerJurosComposto(money, juros, tempo) {
    let jurosComposto = money * Math.pow(( 1 + ( juros / 100 )), tempo)
    return jurosComposto
}