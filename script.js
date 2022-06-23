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

function animationScroll(){

    const sections = document.querySelectorAll('.js-scroll')

    function animaScroll(){
        sections.forEach((section) => {
            
            const sectionTop = section.getBoundingClientRect().top; // retorna cordenadas do elemento em relação a pagina getBoundingClientRect()
            
            if(sectionTop < 0){
                section.classList.add('ativo')
            }

        })
    }

    window.addEventListener('scroll', animaScroll) // window fala com a janela do browser (não com a pagina)

}

function transitionScroll(){

    const sectionList = document.querySelectorAll('.js-animaScroll');
    const windowMetade = window.innerHeight * 0.6; // Pegando o tamanho da tela do usuario


    function transitionAnimation(){
        sectionList.forEach((sectionItem) =>{
            const sectionTop = sectionItem.getBoundingClientRect().top - windowMetade;
            if(sectionTop < 0){
                sectionItem.classList.add('ativo');
            }
        })
    }
    transitionAnimation();
    window.addEventListener('scroll', transitionAnimation);

}

transitionScroll();









