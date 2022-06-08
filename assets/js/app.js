// VARIABLES
const pageHero = document.querySelector('#page-hero');
const formulario = document.querySelector('#formulario');
const formularioBottom = document.querySelector('#formulario-bottom');
const nombre = document.querySelector('#formulario input[name="nombre"]');
const email = document.querySelector('#formulario input[name="correo"]');
const asunto = document.querySelector('#formulario input[name="asunto"]');
const selector = document.querySelector('#selectEmpresa');
const nombreBottom = document.querySelector('#formulario-bottom input[name="nombre"]');
const emailBottom = document.querySelector('#formulario-bottom input[name="correo"]');
const asuntoBottom = document.querySelector('#formulario-bottom input[name="asunto"]');
const selectorBottom = document.querySelector('#formulario-bottom #selectEmpresa');
const formularioBtn = document.querySelector('#formulario button');
const formularioBottomBtn =document.querySelector('#formulario-bottom button');


// EVENT LISTENERS
eventListener()

function eventListener () {
    
    document.addEventListener('DOMContentLoaded', () => {

        pageHero.classList.add('slide-uno')

        sliderHero();
        disableButton();
    });

    formulario.addEventListener('submit', () => {

    })

    nombre.addEventListener('blur', errorFormulario);
    nombreBottom.addEventListener('blur', errorFormulario);
    email.addEventListener('blur', errorFormulario);
    emailBottom.addEventListener('blur', errorFormulario);
    asunto.addEventListener('blur', errorFormulario);
    asuntoBottom.addEventListener('blur', errorFormulario);

};

// FUNCIONES

function sliderHero(){
    
    const slider = () => {setTimeout(function newSlide() {
        slideDos();

        setTimeout(() => {
                slideTres();

                setTimeout(() => {
                    slideUno();
                }, 3000)
            }, 3000)
        }, 3000)}
        

    function slideDos() {
        pageHero.classList.remove('slide-uno');
        pageHero.classList.add('slide-dos');
    }

    function slideTres() {
        pageHero.classList.remove('slide-dos');
        pageHero.classList.add('slide-tres');
    }

    function slideUno () {
        pageHero.classList.remove('slide-tres');
        pageHero.classList.add('slide-uno');
    }

    setInterval(slider, 9000)
}

function disableButton() {
    formularioBtn.setAttribute('disabled', true);
    formularioBtn.classList.add('button-disabled');

    formularioBottomBtn.setAttribute('disabled', true);
    formularioBottomBtn.classList.add('button-disabled');
}

function errorFormulario(e) {
    if(e.target.value === "") {
    e.target.classList.add('error');
    
    }else{
        e.target.classList.remove('error');
    }
}