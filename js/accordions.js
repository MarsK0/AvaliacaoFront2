const accordionItem = document.querySelectorAll('.accordionItem')

accordionItem.forEach((e)=>{
    const accordionHeader = e.querySelector('.accordionHeader')

    accordionHeader.addEventListener('click', ()=>{
        const accordionContent = e.querySelector('.accordionContent')

        const contentActivated = document.querySelector('.accordionActive')

        verifyActivated(e, accordionContent, contentActivated)
    })
})

function verifyActivated(e, accordionContent, contentActivated){
    const iconItem = e.querySelector('.icon')

    const icons = document.querySelectorAll('.icon')

    icons.forEach((e)=>(e.innerHTML = '+'))

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