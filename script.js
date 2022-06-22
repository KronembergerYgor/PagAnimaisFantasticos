function initiTabNav(){

    //Navegação por tabs

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length > 0){

        tabContent[0].classList.add('ativo');

        function activeTab(index){
            tabContent.forEach((content) =>{
                content.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        
        }


        tabMenu.forEach((menu, index) => {
            menu.addEventListener('click', () => {
                activeTab(index);
            })
        })

    }
}

initiTabNav();



function initAccordion(){

    const accordionList = document.querySelectorAll('.js-accordion dt');

    if(accordionList.length > 0){

        function activeAccordion(event){
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo'); //pega o elemento nextElementSibling a seguir do selecionado

        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();

function Scroll(){
    const itensMenu = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        //forma alternativa
        //window.scrollTo({
          //  top: section.offsetTop,
          //  behavior: 'smooth',
        //})

    }

    itensMenu.forEach((item) => {
        item.addEventListener('click', scrollToSection);
    })

}

Scroll();









