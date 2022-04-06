
const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();

    const campoEmail = document.querySelector(".c-form__campo")
    const campoSenha = document.querySelector("#senha")

    const valorEmail = campoEmail.value
    const valorSenha = campoSenha.value

    if (valorEmail === "" || valorSenha === ""){
        alert("algum campo está vazio favor prencher");
    }

    console.log(valorEmail)
    console.log(valorSenha)
});

/////validacao de remocao de espaço valores dos campos

// campoEmail.addEventListener('blur', function(evento) {

//     const valorCampoEmail = evento.target.value.trim();

// })



// function ValidarEmail (email) {
//     var emailusuario =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//     return emailusuario.test(email); 
// }
// console.log('teste');
// console.log(ValidarEmail('teste@teste@teste.com'));
// console.log(ValidarEmail('teste@teste.com'));
// console.log(ValidarEmail('teste@.teste.com.br'));