/* Escreva uma função chamada espereNSegundos(), que obedece as premissas abaixo:
Recebe um numero inteiro como parametro;
Retorna uma promessa;
Se o número não for inteiro (ex: 1,5) reject a promessa com uma mensagem de erro;
Espere a quantidade de segundos indicada, e então resolve com sucesso a promessa; */

function espereNSegundos(int) {

    let promise = new Promise(function (resolve, reject) {
        if (Number.isInteger(int) == true) {
            var result = int * 1000
            setTimeout(() => {
                resolve("É inteiro e foi esperado:" + result / 1000 + " segundos");
            }, result)
            console.log(result)
        } else {
            reject("Não é inteiro")
        }
    }).then(res => {
        console.log(res)

    }).catch(err => {
        console.log(err)
    }).finally(() => {
        console.log("Promessa finalizada")
    })
    return promise

}
/* espereNSegundos(3.5) */

/* Crie um sistema de carregamento de tela para indicar ao usuário que a página está carregando. Crie uma interface de carregamento, pode ser uma mensagem de texto, uma representação visual como uma barra de carregamento, enfim, utilize sua imaginação. Utilize uma promessa para indicar quando o carregamento dos recursos foi finalizado com sucesso, atualizando a interface com uma nova representação visual, ou uma outra interface da sua escolha. */

var body = document.getElementById("Tela")

function carregaPagina() {

    let promise = new Promise(function (resolve, reject) {

        setTimeout(() => {
            resolve("Pagina carregada com sucesso");
        }, 3000)
        

    }).then(res => {
        alert(res)

    }).finally(() => {
        body.innerHTML = ` <h3 id="Carregado">Seja bem vindo a pagina cinza</h3> `
    })
    return promise

}
carregaPagina()