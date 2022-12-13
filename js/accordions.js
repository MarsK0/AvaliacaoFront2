function accordionScript(e){
    let accordionItem = e.parentElement

    const accordionContent = accordionItem.querySelector('.accordionContent')

    const contentActivated = document.querySelector('.accordionActive')

    verifyActivated(accordionItem, accordionContent, contentActivated)
}

function verifyActivated(accordionItem, accordionContent, contentActivated){
    const iconItem = accordionItem.querySelector('.icon')

    const icons = document.querySelectorAll('.icon')

    icons.forEach((accordionItem)=>(accordionItem.innerHTML = '+'))

    if(contentActivated){
        contentActivated.style.height = 0
        contentActivated.classList.remove('accordionActive')
    }

    if(accordionContent !== contentActivated){
        iconItem.innerHTML = '-'
        accordionContent.classList.add('accordionActive')
        accordionContent.style.height = accordionContent.scrollHeight + 10 + 'px'
    }
}

