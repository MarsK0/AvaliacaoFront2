import { themeListSelect } from "./theme.js"

//Rotina para gerar controles de tema

function createThemeControl(){
    const themeControl = document.createElement('div')
    themeControl.setAttribute('id','themeControl')
    
    const themeList = document.createElement('div')
    themeList.setAttribute('id','themeList')
    themeList.addEventListener('click', (e)=>themeListSelect(e))
    const btnThemeSongPlay = document.createElement('button')
    btnThemeSongPlay.setAttribute('id','btnThemeSongPlay')

    const themeButtonDay = createThemeButtons('day', 'Dia')
    const themeButtonNight = createThemeButtons('night', 'Noite')
    const themeButtonRain = createThemeButtons('rain', 'Chuva')

    themeList.appendChild(themeButtonDay)
    themeList.appendChild(themeButtonNight)
    themeList.appendChild(themeButtonRain)
    
    themeControl.appendChild(themeList)
    themeControl.appendChild(btnThemeSongPlay)

    return themeControl
}

function createThemeButtons(theme, name){
    const themeOptionButton = document.createElement('button')
    themeOptionButton.classList.add('themeOptionButton')
    themeOptionButton.textContent = name
    themeOptionButton.value = theme

    return themeOptionButton
}

//Rotina para gerar a página de login/cadastro ========================================================

export function generateIndexPage(){
    const index = document.getElementById('index')
    const bodyHeader = document.getElementById('bodyHeader')
    const header = document.createElement('header')
    const themeControl = createThemeControl()
    const main = document.createElement('main')
    const accordionUserForms = createAccordionUserForms()

    header.appendChild(themeControl)
    bodyHeader.appendChild(header)
    main.appendChild(accordionUserForms)

    index.appendChild(main)
    
}
//Rotina para gerar os forms de usuário

function createAccordionUserForms(){
    const accordionUserForms = document.createElement('div')
    accordionUserForms.setAttribute('id','accordionUserForms')
    accordionUserForms.classList.add('accordions')

    const formLogin = createFormLogin()
    const formRegister = createFormRegister()

    accordionUserForms.appendChild(formLogin)
    accordionUserForms.appendChild(formRegister)

    return accordionUserForms
}

function createFormLogin(){
    const formLogin = document.createElement('div')
    formLogin.setAttribute('id','formLogin')
    formLogin.classList.add('accordionContainer')

    const accordionItem = document.createElement('div')
    accordionItem.classList.add('accordionItem')

    const accordionHeader = document.createElement('div')
    accordionHeader.classList.add('accordionHeader')
    accordionHeader.setAttribute('onclick','accordionScript(this)')
    const accordionHeaderSpan = document.createElement('span')
    accordionHeaderSpan.textContent = 'Login'
    const accordionHeaderIcon = document.createElement('div')
    accordionHeaderIcon.classList.add('icon')
    accordionHeaderIcon.textContent = '+'
    
    accordionHeader.appendChild(accordionHeaderSpan)
    accordionHeader.appendChild(accordionHeaderIcon)

    const accordionContent = document.createElement('div')
    accordionContent.classList.add('accordionContent')
    const formLoginInputUser = createFormInput('formLoginInputUser','Usuário')
    const formLoginInputPass = createFormInput('formLoginInputPass','Senha')
    formLoginInputPass.setAttribute('type','password')
    const formLoginBtnLogin = document.createElement('button')
    formLoginBtnLogin.setAttribute('id','formLoginBtnLogin')
    formLoginBtnLogin.textContent = 'Login'

    accordionContent.appendChild(formLoginInputUser)
    accordionContent.appendChild(formLoginInputPass)
    accordionContent.appendChild(formLoginBtnLogin)

    accordionItem.appendChild(accordionHeader)
    accordionItem.appendChild(accordionContent)
    formLogin.appendChild(accordionItem)

    return formLogin
    
}

function createFormRegister(){
    const formRegister = document.createElement('div')
    formRegister.setAttribute('id','formRegister')
    formRegister.classList.add('accordionContainer')

    const accordionItem = document.createElement('div')
    accordionItem.classList.add('accordionItem')

    const accordionHeader = document.createElement('div')
    accordionHeader.classList.add('accordionHeader')
    accordionHeader.setAttribute('onclick','accordionScript(this)')
    const accordionHeaderSpan = document.createElement('span')
    accordionHeaderSpan.textContent = 'Cadastrar'
    const accordionHeaderIcon = document.createElement('div')
    accordionHeaderIcon.classList.add('icon')
    accordionHeaderIcon.textContent = '+'
    
    accordionHeader.appendChild(accordionHeaderSpan)
    accordionHeader.appendChild(accordionHeaderIcon)

    const accordionContent = document.createElement('div')
    accordionContent.classList.add('accordionContent')
    const formRegisterInputUser = createFormInput('formRegisterInputUser','Usuário')
    const formRegisterInputPass = createFormInput('formRegisterInputPass','Senha')
    formRegisterInputPass.setAttribute('type','password')
    const formRegisterInputRepeatPass = createFormInput('formRegisterInputRepeatPass','Repitir senha')
    formRegisterInputRepeatPass.setAttribute('type','password')
    const formRegisterBtnRegister = document.createElement('button')
    formRegisterBtnRegister.setAttribute('id','formRegisterBtnRegister')
    formRegisterBtnRegister.textContent = 'Cadastrar'

    accordionContent.appendChild(formRegisterInputUser)
    accordionContent.appendChild(formRegisterInputPass)
    accordionContent.appendChild(formRegisterInputRepeatPass)
    accordionContent.appendChild(formRegisterBtnRegister)

    accordionItem.appendChild(accordionHeader)
    accordionItem.appendChild(accordionContent)
    formRegister.appendChild(accordionItem)
    
    return formRegister
}

function createFormInput(formInputId, placeholder){
    const input = document.createElement('input')
    input.setAttribute('id', formInputId)
    input.setAttribute('placeholder', placeholder)
    input.classList.add('formInput')

    return input
}

//Rotina para gerar a página Home ====================================================================

export function generateHomePage(){
    const index = document.getElementById('index')
    index.innerHTML = ''
    const main = document.createElement('main')
    const buttonNewMessage = document.createElement('button')
    buttonNewMessage.setAttribute('id','buttonNewMessage')
    buttonNewMessage.textContent = 'Novo Recado'
    buttonNewMessage.setAttribute('onclick','newMsg()')
    buttonNewMessage.setAttribute('data-bs-toggle','modal')
    buttonNewMessage.setAttribute('data-bs-target','#staticBackdrop')
    const messageList = document.createElement('div')
    messageList.setAttribute('id', 'messageList')
    messageList.classList.add('accordions')
    const titleMessageList = document.createElement('h2')
    titleMessageList.textContent = 'Recados'

    messageList.appendChild(titleMessageList)

    main.appendChild(buttonNewMessage)
    main.appendChild(messageList)
    
    index.appendChild(main)
}