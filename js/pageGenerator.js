//Rotina para gerar a página de login/cadastro ========================================================

export function generateIndexPage(){
    const index = document.getElementById('index')
    const themeControl = createThemeControl()
    const accordionUserForms = createAccordionUserForms()

    index.appendChild(themeControl)
    index.appendChild(accordionUserForms)
    
}

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
    formLogin.classList.add('formAccordion')

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
    const inputLoginUser = createFormInput('inputLoginUser')
    const inputLoginPass = createFormInput('inputLoginPass')
    const buttonLogin = document.createElement('button')
    buttonLogin.setAttribute('id','buttonLogin')
    buttonLogin.textContent = 'LOGIN'

    accordionContent.appendChild(inputLoginUser)
    accordionContent.appendChild(inputLoginPass)
    accordionContent.appendChild(buttonLogin)

    accordionItem.appendChild(accordionHeader)
    accordionItem.appendChild(accordionContent)
    formLogin.appendChild(accordionItem)

    return formLogin
    
}

function createFormRegister(){
    const formRegister = document.createElement('div')
    formRegister.setAttribute('id','formRegister')
    formRegister.classList.add('formAccordion')

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
    const inputRegisterUser = createFormInput('inputRegisterUser')
    const inputRegisterPass = createFormInput('inputRegisterPass')
    const inputRegisterRepPass = createFormInput('inputRegisterRepPass')
    const buttonRegister = document.createElement('button')
    buttonRegister.setAttribute('id','buttonRegister')
    buttonRegister.textContent = 'CADASTRAR'

    accordionContent.appendChild(inputRegisterUser)
    accordionContent.appendChild(inputRegisterPass)
    accordionContent.appendChild(inputRegisterRepPass)
    accordionContent.appendChild(buttonRegister)

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