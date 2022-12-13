//Rotina para gerar controles de tema

function createThemeControl(){
    const themeControl = document.createElement('div')
    themeControl.setAttribute('id','themeControl')
    
    const themeButtons = document.createElement('div')
    themeButtons.setAttribute('id','themeButtons')

    const buttonPlay = document.createElement('button')
    buttonPlay.setAttribute('id','buttonPlay')

    const themeButtonDay = createThemeButtons('day')
    const themeButtonNight = createThemeButtons('night')
    const themeButtonRain = createThemeButtons('rain')

    themeButtons.appendChild(themeButtonDay)
    themeButtons.appendChild(themeButtonNight)
    themeButtons.appendChild(themeButtonRain)
    
    themeControl.appendChild(themeButtons)
    themeControl.appendChild(buttonPlay)

    return themeControl
}

function createThemeButtons(theme){
    const themeButton = document.createElement('button')
    themeButton.classList.add('themeButton')
    themeButton.textContent = theme

    return themeButton
}

//Rotina para gerar a página de login/cadastro ========================================================

export function generateIndexPage(){
    const index = document.getElementById('index')
    const header = document.createElement('header')
    const main = document.createElement('main')
    const themeControl = createThemeControl()
    const accordionUserForms = createAccordionUserForms()

    header.appendChild(themeControl)
    main.appendChild(accordionUserForms)

    index.appendChild(header)
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
    const accordionHeaderSpan = document.createElement('span')
    accordionHeaderSpan.textContent = 'Login'
    const accordionHeaderIcon = document.createElement('div')
    accordionHeaderIcon.classList.add('icon')
    accordionHeaderIcon.textContent = '+'
    
    accordionHeader.appendChild(accordionHeaderSpan)
    accordionHeader.appendChild(accordionHeaderIcon)

    const accordionContent = document.createElement('div')
    accordionContent.classList.add('accordionContent')
    const formLoginInputUser = createFormInput('formLoginInputUser')
    const formLoginInputPass = createFormInput('formLoginInputPass')
    formLoginInputPass.setAttribute('type','password')
    const formLoginBtnLogin = document.createElement('button')
    formLoginBtnLogin.setAttribute('id','formLoginBtnLogin')
    formLoginBtnLogin.textContent = 'LOGIN'

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
    const accordionHeaderSpan = document.createElement('span')
    accordionHeaderSpan.textContent = 'Cadastrar'
    const accordionHeaderIcon = document.createElement('div')
    accordionHeaderIcon.classList.add('icon')
    accordionHeaderIcon.textContent = '+'
    
    accordionHeader.appendChild(accordionHeaderSpan)
    accordionHeader.appendChild(accordionHeaderIcon)

    const accordionContent = document.createElement('div')
    accordionContent.classList.add('accordionContent')
    const formRegisterInputUser = createFormInput('formRegisterInputUser')
    const formRegisterInputPass = createFormInput('formRegisterInputPass')
    formRegisterInputPass.setAttribute('type','password')
    const formRegisterInputRepeatPass = createFormInput('formRegisterInputRepeatPass')
    formRegisterInputRepeatPass.setAttribute('type','password')
    const formRegisterBtnRegister = document.createElement('button')
    formRegisterBtnRegister.setAttribute('id','formRegisterBtnRegister')
    formRegisterBtnRegister.textContent = 'CADASTRAR'

    accordionContent.appendChild(formRegisterInputUser)
    accordionContent.appendChild(formRegisterInputPass)
    accordionContent.appendChild(formRegisterInputRepeatPass)
    accordionContent.appendChild(formRegisterBtnRegister)

    accordionItem.appendChild(accordionHeader)
    accordionItem.appendChild(accordionContent)
    formRegister.appendChild(accordionItem)
    
    return formRegister
}

function createFormInput(formInputId){
    const input = document.createElement('input')
    input.setAttribute('id', formInputId)
    input.classList.add('formInput')

    return input
}

//Rotina para gerar a página Home ====================================================================

export function generateHomePage(){
    const index = document.getElementById('index')
    index.innerHTML = ''
    const header = document.createElement('header')
    const main = document.createElement('main')
    const themeControl = createThemeControl()
    const buttonNewMessage = document.createElement('button')
    buttonNewMessage.setAttribute('id','buttonNewMessage')
    buttonNewMessage.textContent = 'Novo Recado'
    const messageList = document.createElement('div')
    messageList.setAttribute('id', 'messageList')
    messageList.classList.add('accordions')
    const titleMessageList = document.createElement('h2')
    titleMessageList.textContent = 'Recados'

    messageList.appendChild(titleMessageList)

    header.appendChild(themeControl)
    header.appendChild(buttonNewMessage)

    main.appendChild(messageList)

    index.appendChild(header)
    index.appendChild(main)
}