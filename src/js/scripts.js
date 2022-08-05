function calculate(){
    let nome=document.getElementById("nome").value
    let altura=document.getElementById("altura").value
    let peso=document.getElementById("peso").value
    let imc = peso / (altura * altura);
    let text=""
    
    if(imc < 18.5){
        text=(`Olá, ${nome} você está abaixo do peso..`);
    } else if(imc >=18.5 && imc <= 24.9){
        text=(`Olá, ${nome} você está com o peso normal..`);
    } else if(imc >=25 && imc <= 29.9){
        text=(`Olá, ${nome} você está sobrepeso..`);
    } else if (imc >= 30 && imc <= 34.9){
        text=(`Olá, ${nome} você está com obesidade Grau 1..`);
    } else if (imc >= 35 && imc <= 39.9){
        text=(`Olá, ${nome} você está com obesidade Grau 2..`);
    } else if (imc >= 40){
        text=(`Olá, ${nome} você está com obesidade Grau 3..`);
    } else {
        text=(`Ola, ${nome} digite algo...`);
    }
   document.getElementById("text_area").innerText=text
}