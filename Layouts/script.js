const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(maiorQue120(dataRecebida)) {
        mensagem = "Você tem mesmo mais de 120 anos?"
    }

    if(!maiorQue18(dataRecebida)) {
        mensagem = "Você deve ter mais de 18 anos."
    }
    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}

function maiorQue120(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 120, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}


const formLogin = document.querySelector('#logar')
const formRegistrar = document.querySelector('#registrar')
const login = document.querySelector('#login')
const register = document.querySelector('#register')

function registrarOn() {
    formLogin.style.display = "none"
    formRegistrar.style.display = "flex"
    register.style.borderBottom = "1px solid rgb(255, 40, 112)"
    register.style.fontWeight = "bold"
    register.style.opacity = "1"
    login.style.opacity = "0.4"
    login.style.border = "none"
    login.style.fontWeight = "100"
}

function loginOn() {
formLogin.style.display = "flex"
formRegistrar.style.display = "none"
login.style.opacity = "1"
register.style.opacity = "0.4"
register.style.border = "none"
register.style.fontWeight = "100"
login.style.fontWeight = "bold"
login.style.borderBottom = "1px solid rgb(255, 40, 112)"
}
