const prompt = require("prompt-sync")()

let tecnica1 = {
    nome: "Chiaroescuro",
    descricao: "O chiaroscuro usa o contraste forte entre luz e sombra para criar profundidade e impacto dramático na obra.",
    pros: "Aumenta o realismo ao criar profundidade e volume.",
    contras: "Pode esconder detalhes e dificultar a leitura da obra."
}

let tecnica2 = {
    nome: "Aquarela",
    descricao: "Técnica feita com pigmentos diluídos em água, aplicada em camadas transparentes sobre o papel.",
    pros: "Leve, rápida e produz efeitos delicados.",
    contras: "Difícil de corrigir e difícil controlar manchas."
}

let tecnica3 = {
    nome: "Óleo",
    descricao: "Tinta feita com pigmentos misturados a óleo, permitindo secagem lenta e misturas profundas.",
    pros: "Permite retoques e misturas ricas, criando acabamento detalhado.",
    contras: "Seca muito devagar e exige muitos materiais."
}

let tecnica4 = {
    nome: "Acrilica",
    descricao: "Tinta à base de água que seca rapidamente, sendo versátil e fácil de usar.",
    pros: "Barata, versátil e fácil de limpar.",
    contras: "Seca rápido demais, dificultando misturas suaves."
}

let tecnica5 = {
    nome: "Guache",
    descricao: "Tinta opaca à base de água, mais espessa e com maior cobertura que a aquarela.",
    pros: "Cores vivas e ótima cobertura.",
    contras: "Pode rachar em camadas grossas e reativa com água."
}

let tecnica6 = {
    nome: "Pastel seco",
    descricao: "Bastões de pigmento seco aplicados diretamente no papel, com textura e cor intensas.",
    pros: "Cores fortes e textura rica.",
    contras: "Sujeira fácil e necessidade de fixador."
}

let tecnica7 = {
    nome: "Tempera",
    descricao: "Técnica feita com pigmentos misturados a emulsões, como gema de ovo, resultando em secagem rápida.",
    pros: "Alta durabilidade e secagem rápida.",
    contras: "Pouca flexibilidade de cor e difícil de corrigir."
}

let tecnicas = [tecnica1, tecnica2, tecnica3, tecnica4, tecnica5, tecnica6, tecnica7]

console.log("Bem vindo ao Guia de Técnicas de Pintura \n")
let opcao = prompt(`Que Técnica você quer saber sobre: 
1 - Chiaroescuro
2 - Aquarela
3 - óleo
4 - Acrilica
5 - Guache
6 - Pastel seco
7 - Tempera

`)

if(opcao < 8 || opcao > 0) {
    console.log(tecnicas[opcao-1])
    
} else {
    console.log("\nDado incorreto, por favor reinicie o sistema!")
}

console.log(`
Para ver mais reinicie o sistema!
Volte sempre!`)