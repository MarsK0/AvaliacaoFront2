//DECLARAÇÕES DE FUNCTIONS ========================================================
function msgManipulation(){
    let editMsgDesc = document.getElementById('editMsgDesc')
    let editMsgDetail = document.getElementById('editMsgDetail')
    const msgID = JSON.parse(localStorage.getItem('msgID'))

    if(msgID === -1){
        if(editMsgDesc.value === '' || editMsgDetail.value === ''){
            alert('Preencha ambos os campos!')
            return
        }

        const users = JSON.parse(localStorage.getItem('users'))
        const userLogin = JSON.parse(localStorage.getItem('userLogin'))
        const userLoginArrMsg = userLogin.arrMsg

        let arrMsg = [editMsgDesc.value,editMsgDetail.value]

        userLoginArrMsg.push(arrMsg)
        users[userLogin.id].arrMsg = userLoginArrMsg
        
        localStorage.setItem('userLogin',JSON.stringify(userLogin))
        localStorage.setItem('users', JSON.stringify(users))

        editMsgDesc.value = ''
        editMsgDetail.value = ''
        geraTabela()
        closeModal()
    }else{
        if(editMsgDesc.value === '' || editMsgDetail.value === ''){
            alert('Preencha ambos os campos!')
            return
        }

        const users = JSON.parse(localStorage.getItem('users'))
        const userLogin = JSON.parse(localStorage.getItem('userLogin'))
        const userLoginArrMsg = userLogin.arrMsg
        
        userLoginArrMsg[msgID][0] = editMsgDesc.value
        userLoginArrMsg[msgID][1] = editMsgDetail.value
        
        users[userLogin.id].arrMsg = userLoginArrMsg

        localStorage.setItem('userLogin', JSON.stringify(userLogin))
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('msgID','-1')
        editMsgDesc.value = ''
        editMsgDetail.value = ''
        geraTabela()
        closeModal()
    }
}

function geraTabela(){
    let messageList = document.getElementById('messageList')
    
    messageList.innerHTML = ''
    const titleMessageList = document.createElement('h2')
    titleMessageList.textContent = 'Recados'
    messageList.appendChild(titleMessageList)

    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const userLoginArrMsg = userLogin.arrMsg

    if(userLoginArrMsg != null){
        userLoginArrMsg.forEach((e, i)=>{
            let accordionItem = createAccordionItem()
            let accordionHeader = createAccordionHeader()
            let accordionHeaderSpan = createAccordionHeaderSpan()
            let accordionHeaderIcon = createAccordionHeaderIcon()
            let accordionContent = createAccordionContent()
            let editMessageButtons = createEditMessageButtons()
            
            accordionHeader.setAttribute('id', `msg${i}`)
            accordionHeaderSpan.textContent = `#${i+1} - ${e[0]}`
            accordionContent.querySelector('p').textContent = e[1]

            accordionItem = accordionItemAssemble(
                accordionItem, 
                accordionHeader, 
                accordionHeaderSpan, 
                accordionHeaderIcon, 
                accordionContent, 
                editMessageButtons)
    
            messageList.appendChild(accordionItem)
        })
    }
}

function closeModal(){
    const staticBackdrop = document.getElementById('staticBackdrop')
    const modal = bootstrap.Modal.getInstance(staticBackdrop)
    modal.hide()
    document.body.removeAttribute('class')
    const backdrop = document.querySelectorAll('.modal-backdrop')
    backdrop.forEach((e)=>{
        e.remove()
    })
}
//Functions auxiliares geraTabela()

function createAccordionItem(){
    let accordionItem = document.createElement('div')
    accordionItem.classList.add('accordionItem')
    return accordionItem
}

function createAccordionHeader(){
    let accordionHeader = document.createElement('div')
    accordionHeader.classList.add('accordionHeader')
    accordionHeader.setAttribute('onclick','accordionScript(this)')
    return accordionHeader
}

function createAccordionHeaderSpan(){
    let accordionHeaderSpan = document.createElement('span')
    return accordionHeaderSpan
}

function createAccordionHeaderIcon(){
    let accordionHeaderIcon = document.createElement('div')
    accordionHeaderIcon.classList.add('icon')
    accordionHeaderIcon.textContent = '+'
    return accordionHeaderIcon
}

function createAccordionContent(){
    let accordionContent = document.createElement('div')
    let paragraph = document.createElement('p')
    paragraph.classList.add('contentMessage')
    accordionContent.appendChild(paragraph)
    accordionContent.classList.add('accordionContent')
    return accordionContent
}

function createEditMessageButtons(){
    let editMessageButtons = document.createElement('div')
    editMessageButtons.classList.add('editMessageButtons')
    let buttonEdit = document.createElement('button')
    buttonEdit.classList.add('msgButtonEdit')
    buttonEdit.textContent = 'EDITAR'
    buttonEdit.setAttribute('onclick','editMsg(this)')
    buttonEdit.setAttribute('data-bs-toggle','modal')
    buttonEdit.setAttribute('data-bs-target','#staticBackdrop')
    let buttonDelete = document.createElement('button')
    buttonDelete.setAttribute('onclick','deleteMsg(this)')
    buttonDelete.classList.add('msgButtonDelete')
    buttonDelete.textContent = 'EXCLUIR'

    editMessageButtons.appendChild(buttonEdit)
    editMessageButtons.appendChild(buttonDelete)
    return editMessageButtons
}

function accordionItemAssemble(accordionItem, accordionHeader, accordionHeaderSpan, accordionHeaderIcon, accordionContent, editMessageButtons){
    accordionHeader.appendChild(accordionHeaderSpan)
    accordionHeader.appendChild(accordionHeaderIcon)

    accordionContent.appendChild(editMessageButtons)

    accordionItem.appendChild(accordionHeader)
    accordionItem.appendChild(accordionContent)
    
    return accordionItem
}

function editMsg(msg){
    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const userLoginArrMsg = userLogin.arrMsg

    msgItem = msg.parentElement.parentElement.parentElement
    msgHeader = msgItem.querySelector('.accordionHeader')
    msgHeaderId = msgHeader.getAttribute('id')
    msgId = msgHeaderId.substring(3)

    editMsgDesc.value = userLoginArrMsg[msgId][0]
    editMsgDetail.value = userLoginArrMsg[msgId][1]

    localStorage.setItem('msgID', msgId)
}

function newMsg(){
    localStorage.setItem('msgID','-1')
}

function deleteMsg(msg){
    const users = JSON.parse(localStorage.getItem('users'))
    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    let userLoginArrMsg = userLogin.arrMsg

    msgItem = msg.parentElement.parentElement.parentElement
    msgHeader = msgItem.querySelector('.accordionHeader')
    msgHeaderId = msgHeader.getAttribute('id')
    msgId = msgHeaderId.substring(3)

    delete userLogin.arrMsg[msgId]
    userLoginArrMsg = userLoginArrMsg.filter(e => e != null)
    
    users[userLogin.id].arrMsg = userLoginArrMsg
    userLogin.arrMsg = userLoginArrMsg

    localStorage.setItem('userLogin', JSON.stringify(userLogin))
    localStorage.setItem('users', JSON.stringify(users))
    geraTabela()
}

function cancelMsg(){
    editMsgDesc.value = ''
    editMsgDetail.value = ''
}

function createBtnMsgListEdit(btnMsgListEdit){
    btnMsgListEdit.classList.add('tableMsgListEdit')
    btnMsgListEdit.setAttribute('onclick','editMsg(this)')
    btnMsgListEdit.innerHTML = 'EDITAR'

    return btnMsgListEdit
}

function createBtnMsgListDelete(btnMsgListDelete){
    btnMsgListDelete.classList.add('tableMsgListDelete')
    btnMsgListDelete.setAttribute('onclick','deleteMsg(this)')
    btnMsgListDelete.innerHTML = 'EXCLUIR'

    return btnMsgListDelete
}

function appendButtons(btnMsgListEdit, btnMsgListDelete, rowButtons){
    rowButtons.appendChild(btnMsgListEdit)
    rowButtons.appendChild(btnMsgListDelete)

    return rowButtons
}

function appendElementsInRow(msgId, msgDesc, msgDetail, rowButtons, row){
    row.appendChild(msgId)
    row.appendChild(msgDesc)
    row.appendChild(msgDetail)
    row.appendChild(rowButtons)

    return row
}


