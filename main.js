/* var idade = prompt("Qual sua idade?");
if (idade>=18) {
    alert("Maior de idade");
}
else {
    alert("Menor de Idade")
} */

/* var count = 0;
while (count <= 5){
    alert(count);
    count++;
}; */

/* var count;
for(count = 0; count<=10; count++) {
    alert(count);
}; */

/* let validar = 0
function validarIdade(idade){
    let validar;
    if(idade>=18){
        validar = true
    }
    else {
        validar = false;
    }
    return validar;
}

let idade = prompt("Qual a sua idade");
console.log(validarIdade(idade));
console.log(validar); */

/* if(mediaEscolar(media)>=6){
    console.log("O aluno " + aluno + " foi aprovado com média " + mediaEscolar);
}
else{
    console.log("O aluno " + aluno + " foi reprovado com média " + mediaEscolar);
}
*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Acesse o meu LINKEDIN</b>";
};

function redirecionar(){
    HTMLParamElement.onclick = window.open("https://www.linkedin.com/in/rodolfidas")
};

function trocar(){
    document.getElementById("mouse").innerHTML = "<b>Acesse também meu GITHUB</b>"
    HTMLParamElement.onclick = window.open("https://www.github.com/rodolfidas")
};

function voltar(){
    document.getElementById("mouse").innerHTML = "Passe o mouse aqui</b>"
}

function load(){
    alert("pagina carregada")
};

function funcaoChange(elemento){
    console.log(elemento.value)
};



