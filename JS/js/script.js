// let frutas1 = ['maçã', 'banana'];
// frutas1.push('laranja'); // Adiciona 'laranja' ao final
// console.log(frutas1); // ['maçã', 'banana', 'laranja']

// let frutas2 = ['maçã', 'banana', 'laranja'];
// let ultimaFruta = frutas2.pop(); // Remove 'laranja'
// console.log(ultimaFruta); // 'laranja'
// console.log(frutas2); // ['maçã', 'banana']

// let frutas4 = ['maçã', 'banana', 'laranja'];
// let primeiraFruta = frutas4.shift(); // Remove 'maçã'
// console.log(primeiraFruta); // 'maçã'
// console.log(frutas4); // ['banana', 'laranja']

// let frutas = ['banana', 'laranja'];
// frutas.unshift('maçã'); // Adiciona 'maçã' no início
// console.log(frutas); // ['maçã', 'banana', 'laranja']


// let nota = 9;

// if (nota >= 9) {
//   console.log("Aprovado com distinção");
// } else if (nota >= 7) {
//   console.log("Aprovado");
// } else {
//   console.log("Reprovado");
// }

// let dia = 7;
// switch (dia) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda-feira");
//         break;
//     case 3:
//         console.log("Terça-feira");
//         break;
//     case 4:
//         console.log("Quarta-feira");
//         break;
//     case 5:
//         console.log("Quinta-feira");
//         break;
//     case 6:
//         console.log("Sexta-feira");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Dia inválido");
// }

// for(let x = 0; x <= 10; x += 1){
//     console.log("X = " + x)
// }

// let loop = 0;

// do {
//     console.log("loop: " + loop);
//     loop += 1;
// } while (loop <= 10);


// let pessoa = {
//   nome: "João",
//   idade: 25,
//   cidade: "São Paulo",
//   profissão: "Estudante"
// };

// for(let chave in pessoa){
//     console.log(chave + " : " + pessoa[chave]);
// }


// let frutas3 = ['maçã', 'banana', 'laranja','ata'];

// for (let fruta of frutas3) {
//   console.log(fruta);
// }

// for (let i = 0; i < 10; i++) {
//     if (i >= 5) {
//         continue; // Interrompe o loop quando i for igual a 5
//     }
//     console.log(i);
// }

// let x = 0;
// let y = 1;
// // X^y
// // console.log(" Resposta: " + potencia2 (x,y));

// function potencia2(n1, n2) {
//     let n = n1;

//     if (n2 === 0) {
//         return 1;
//     }

//     for (let x = 1; x < n2; x++) {
//         n1 = n1 * n;
//     }
//     return n1;
// }

// // console.log(Potencia(x, y));

// function Potencia(n1, n2) {
//     let pot = 1;
//     for (let i = 0; i < n2; i++) {
//         pot = pot * n1;
//     }
//     return pot;
// }

// let numeros = [3, 7, 1, 8, 90, 33, 23, 12, 6, 8];

// // console.log(numeros);
// // console.log(getImpares(numeros));

// function getImpares(numeros) {
//     let vetorDeImpar = new Array();
//     for (let numero of numeros) {
//         if ((numero % 2) == 0) {
//             vetorDeImpar.push(numero);
//         }
//     }
//     return vetorDeImpar;
// }


// console.log(fibonaci(10));

// function fibonaci(n) {
//     let fibo = new Array();
//     for (let i = 0; i < n; i++) {
//         if (i < 2) {
//             fibo.push(1);
//         }else{
//             fibo.push(fibo[i-2] + fibo[i-1]);
//         }
//     }
//     return fibo;
// }

let numeros = [8, 9, 1, 15, 24, 78, 5, 3, 6, 7, 9, 100, 15];


// console.log("O maior número é: " + numeros);
console.log("FIBONACI: " + fibo(10));

function fibo(n) {
    let fibos = new Array();
    for (let i = 0; i < n; i += 1) {
        if (i < 2) {
            fibos.push(1);
        } else {
            fibos.push(fibos[i - 1] + fibos[i - 2]);
        }
    }
    return fibos;

}
//1, 1, 2, 3, 5, 8

function pares(numeros) {
    let pares = new Array();
    for (let num of numeros) {
        if ((num % 2) == 0) {
            pares.push(num);
        }
    }
    return pares;
}

function maior(numeros) {
    let maior = 0;
    for (let v1 of numeros) {
        if (v1 > maior) {
            maior = v1;
        }
    }
    return maior;
}





function trocaImagem() {
    let elemento = document.getElementById("myimage");

    if (elemento.src.match("apagada")) {
        elemento.src = "img/acesa.png";
    } else {
        elemento.src = "img/apagada.png";
    }
}

function validarForm() {
    var val = document.getElementById("valido");
    try {
        var x = document.forms["meuForm"]["nome"].value;
        if (x == null || x == "" || x.length < 10) {
            throw "O Nome deve ser preenchido!";
        }

        var y = document.forms["meuForm"]["email"].value;
        var atpos = y.indexOf("@");
        var dotpos = y.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= y.length) {

            throw "Digite um e-mail válido!";
        }
        return true;
    } catch (err) {
        val.style.color = "#FF0000";
        val.innerHTML = "Erro: " + err;
        return false;
    } //Fim catch
} //Fim function

function verificar() {
    try {
        var x = document.getElementById("valor").value;
        if (x == "") throw "Campo vazio";
        if (isNaN(x)) throw "não é um número válido";
        if (x > 10) throw "Alto demais";
        if (x < 5) throw "Baixo demais";
        document.getElementById("mesg").innerHTML = "Número aceito!";
    } catch (err) {
        var y = document.getElementById("mesg");
        y.innerHTML = "Erro: " + err + ".";
    }
}

function adicionar() {
    var texto = document.getElementById("texto").value;
    var para = document.createElement("h1");
    para.innerHTML = texto;
    var corpo = document.getElementById("corpo");
    corpo.appendChild(para);
}

function remover() {
    var pai = document.getElementById("corpo");
    var filho = document.getElementById("texto2");
    pai.removeChild(filho);
}

function checkCookie() {
    var user = getCookie("user");
    var msg = document.getElementById("msg");
    if (user != null && user != "") {
        msg.innerHTML = "Bem-vindo de volta " + user;
    } else {
        user = prompt("Digite seu nome:", "");
        if (user != null && user != "") {
            setCookie("user", user, 365);
            msg.innerHTML = "Bem-vindo " + user;
        }
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1; var c_end = c_value.indexOf(";", c_start); if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

