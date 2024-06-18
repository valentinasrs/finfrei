import prompt from 'prompt-sync'
let ler = prompt()


import { Deposito, lerSaque, lerExtrato, lerJurosComposto } from "./financeiro.js";
import { banner, verm, ama, ver, azul, cia, mage, bra, pre, fundPre, fundVer, fundAma, fundVerm, fundAzu, fundCia, fundMag, fundBra, } from './exibir.js';

function menu() {
    const menu = `
    MENU PRINCIPAL:
    
    1 – DEPOSITAR
    2 – SAQUE
    3 – EXTRATO
    4 - SIMULAÇÃO DE INVESTIMENTO 
    5 - ENCERRAR APLICAÇÃO
    `;
    console.log(mage, menu);
}

export function Opcoes() {
    let continuar = true;
    while (continuar) {
        banner();
        menu();
        let opcaoEscolha = Number(ler("Escolha uma opção: "));

        if (opcaoEscolha === 1) {
            console.clear();
            banner();
            Deposito();
        } else if (opcaoEscolha === 2) {
            console.clear();
            banner();
            lerSaque();        
        } else if (opcaoEscolha === 3) {
            banner();
            console.clear();
            lerExtrato();
            console.log(fundCia, 'Aperte ENTER para contiuar');
            ler();
        } else if (opcaoEscolha === 4) {
            console.clear();
            banner();
            let money = Number(ler('Qual seu Capital?: '));
            let juros = Number(ler('Quanto está a taxa de juros?: '));
            let tempo = Number(ler('Em quanto tempo deseja guardar?: '));
            let resultado = lerJurosComposto(money, juros, tempo);
            console.log(fundAma, `Em ${tempo} anos, seu acumulo será de ${resultado.toFixed(5)}`);
            console.log(fundAma, 'Aperte enter para contiuar');
            ler();
            } else if (opcaoEscolha === 5) {
            console.clear();
            banner();
            console.log(fundCia, "Operação encerrada.");
            continuar = false;
        } else {
            console.log("Opção inválida.");
        }
    }
}