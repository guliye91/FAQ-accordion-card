const icons = document.querySelectorAll('.icon');

icons.forEach((icon)=>{
    icon.addEventListener('click',(e)=>{
        icons.forEach((icon2)=>{
            if(icon2.parentElement.nextElementSibling !== e.currentTarget.parentElement.nextElementSibling){
                icon2.parentElement.nextElementSibling.classList.remove('show');
            }
        })
        const questionTitle = e.currentTarget.previousElementSibling;
        const showAnswer = e.currentTarget.parentElement.nextElementSibling;
        questionTitle.classList.toggle('dark-grey');
        showAnswer.classList.toggle('show')
    })
})