//Eventos

const img = document.querySelector('img');


//criando callback separada da função
function callback(event){
  //  console.log(event);
}

img.addEventListener('click', callback);

//criando callback direto no addEventListener

img.addEventListener('click', (event) =>{
   
//    console.log(event)
    
})

const imagensLista = document.querySelector('.animais-lista');


imagensLista.addEventListener('click', (event) => {

    console.log(event.currentTarget); //Pai da tag
    console.log(event.target); //propria tag
    console.log(event.type); //tipo de evento


})

const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.addEventListener('click', (event) => {
    event.preventDefault();

})