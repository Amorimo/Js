function hello(){
    console.log("Hello function")
}
console.log(typeof(hello))
hello()

// Função Atribuida
const hello2=function(){
    console.log("hello function assigned")
} 
console.log(typeof(hello2))
hello2()

// Arrow function => Simplificação da função atribuida
// function = "=>"
const hello3=()=>{
    console.log("Hello arrow function")
}
console.log(typeof(hello3))
hello3()

// Funções com passagem de parâmetros e retorno
// Função simples
function somarS(num1,num2){
    return(console.log(num1+num2))
}
somarS(20,40)

// Função atribuida
const somarA =function(num1,num2){
    return(console.log(num1+num2))
}

somarA(20,30)

// Arrow function
const somarAF=(num1,num2)=>{
    return(console.log(num1+num2))
}

somarAF(10,30)

// Arrow function simplificado (retorno simplificado)
const somarAFS = (num1,num2)=>console.log(num1+num2)
somarAFS(10,20)