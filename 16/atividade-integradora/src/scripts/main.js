
const botao = document.querySelector("#botao")

botao.addEventListener("click", function(evento){
    evento.preventDefault()

    const nome = document.querySelector("#nome")
    const senha = document.querySelector("#senha")

    const valorNome = nome.value
    const valorSenha = senha.value

    if (valorNome === "" || valorSenha === ""){
        alert("algum campo está vazio favor prencher");
    }


    console.log(valorNome)
    console.log(valorSenha)
})
