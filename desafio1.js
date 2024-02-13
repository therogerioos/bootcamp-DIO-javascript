let nomeHeroi = 'Toretto'
let nivelExperiencia = 5050
let nomenclaturaDeNiveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']
const textoPadraoParte1 = 'O Herói de nome '
const textoPadraoParte2 = ' está no nível de '

switch(true){
    case (nivelExperiencia <= 1000):
        console.log(textoPadraoParte1 + nomeHeroi + textoPadraoParte2 + nomenclaturaDeNiveis[0])
        break
    case (nivelExperiencia >= 1001 && nivelExperiencia <= 2000):
        console.log(textoPadraoParte1 + nomeHeroi + textoPadraoParte2 + nomenclaturaDeNiveis[1])
        break
    case (nivelExperiencia >= 2001 && nivelExperiencia <= 5000):
        console.log(textoPadraoParte1 + nomeHeroi + textoPadraoParte2 + nomenclaturaDeNiveis[2])
        break
    case (nivelExperiencia >= 5001 && nivelExperiencia <= 7000):
        console.log(textoPadraoParte1 + nomeHeroi + textoPadraoParte2 + nomenclaturaDeNiveis[3])
        break
    case (nivelExperiencia >= 7001 && nivelExperiencia <= 8000):
        console.log(textoPadraoParte1 + nomeHeroi + textoPadraoParte2 + nomenclaturaDeNiveis[4])
        break
    case (nivelExperiencia >= 8001 && nivelExperiencia <= 9000):
        console.log(textoPadraoParte1 + nomeHeroi + textoPadraoParte2 + nomenclaturaDeNiveis[5])
        break
    case (nivelExperiencia >= 9001 && nivelExperiencia <= 10000):
        console.log(textoPadraoParte1 + nomeHeroi + textoPadraoParte2 + nomenclaturaDeNiveis[6])
        break
    case (nivelExperiencia > 10000):
        console.log(textoPadraoParte1 + nomeHeroi + textoPadraoParte2 + nomenclaturaDeNiveis[7])
        break
    default:
        console.log("Erro: Não é possível identificar o nível do herói, tente novamente!")
        break
}