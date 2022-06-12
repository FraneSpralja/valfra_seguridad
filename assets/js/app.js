import { nuevoClienteValfra } from "./firebase.js";


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


/* regular expresion */
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// EVENT LISTENERS
eventListener()

function eventListener () {
    
    document.addEventListener('DOMContentLoaded', () => {

        pageHero.classList.add('slide-uno')

        sliderHero();
        disableButton();
    });

    formulario.addEventListener('submit', enviarFormulario)
    formularioBottom.addEventListener('submit', enviarFormularioBottom)

    nombre.addEventListener('blur', validarFormulario);
    nombreBottom.addEventListener('blur', validarFormularioBottom);
    email.addEventListener('blur', validarFormulario);
    emailBottom.addEventListener('blur', validarFormularioBottom);
    asunto.addEventListener('blur', validarFormulario);
    asuntoBottom.addEventListener('blur', validarFormularioBottom);

};

// FUNCIONES

/* slide portada */

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
        let slide = document.querySelector('.slide-dos');
    }

    function slideTres() {
        pageHero.classList.remove('slide-dos');
        pageHero.classList.add('slide-tres');
        let slide = document.querySelector('.slide-tres');
    }

    function slideUno () {
        pageHero.classList.remove('slide-tres');
        pageHero.classList.add('slide-uno');
        let slide = document.querySelector('.slide-uno');
    }

    setInterval(slider, 9000)
}

// FORMULARIO

/* Disable button */

function disableButton() {
    formularioBtn.setAttribute('disabled', true);
    formularioBtn.classList.add('button-disabled');

    formularioBottomBtn.setAttribute('disabled', true);
    formularioBottomBtn.classList.add('button-disabled');
}

/* validar formulario */

function validarFormulario(e) {
    if(e.target.value.length !== 0) {
        const error = document.querySelector('p.error-mensaje');
        if(error) {
            error.remove();
        };

        e.target.classList.remove('error');
        e.target.classList.add('success');
    }else{
        e.target.classList.remove('success');
        e.target.classList.add('error');

        mostrarError('Los campos son obligatorios')
    };

    if (e.target.type === 'email') {

        if(er.test(e.target.value)){
            const error = document.querySelector('p.error-mensaje');
            if(error) {
                error.remove();
            };

            e.target.classList.remove('error');
            e.target.classList.add('success')
        }else{
            e.target.classList.add('error');
            e.target.classList.remove('success')

            mostrarError('El email no es válido')
        };
    };

    if(er.test(email.value) && nombre.value !== "" && asunto.value !== "") {
        formularioBtn.disabled = false;
        formularioBtn.classList.remove('button-disabled');
    }
};

function validarFormularioBottom(e) {
    if(e.target.value.length !== 0) {
        const error = document.querySelector('p.error-mensaje');
        if(error) {
            error.remove();
        };

        e.target.classList.remove('error');
        e.target.classList.add('success');
    }else{
        e.target.classList.remove('success');
        e.target.classList.add('error');

        mostrarErrorBottom('Los campos son obligatorios')
    }

    if (e.target.type === 'email') {

        if(er.test(e.target.value)){
            const error = document.querySelector('p.error-mensaje');
            if(error) {
                error.remove();
            };

            e.target.classList.remove('error');
            e.target.classList.add('success')
        }else{
            e.target.classList.add('error');
            e.target.classList.remove('success')

            mostrarError('El email no es válido')
        };
    };

    if(er.test(emailBottom.value) && nombreBottom.value !== "" && asuntoBottom.value !== "") {
        formularioBottomBtn.disabled = false;
        formularioBottomBtn.classList.remove('button-disabled');
    }
}

/* Mensaje de error */

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error-mensaje', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 1) {
        formulario.appendChild(mensajeError);
    };
};

function mostrarErrorBottom(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error-mensaje', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 1) {
        formularioBottom.appendChild(mensajeError);
    };
};

/* Reset formulario */

function resetFormulario() {
    formulario.reset()
    disableButton();
}

function resetFormularioBottom() {
    formularioBottom.reset()
    disableButton();
}

/* enviar formulario */

function enviarFormulario(e) {
    e.preventDefault();

    
    setTimeout(() => {
        const parrafoSuccess = document.createElement('p');
        parrafoSuccess.textContent = 'Mensaje enviado correctamente';
        parrafoSuccess.classList.add('mensaje-success');

        formulario.appendChild(parrafoSuccess);

        setTimeout(() => {
            parrafoSuccess.remove();

            resetFormulario();
        }, 5000)
    }, 1000)

    nuevoClienteValfra(nombre.value, email.value, asunto.value, selector.value)

    // enviar a base de datos
};

function enviarFormularioBottom(e) {
    e.preventDefault();

    setTimeout(() => {
        const parrafoSuccess = document.createElement('p');
        parrafoSuccess.textContent = 'Mensaje enviado correctamente';
        parrafoSuccess.classList.add('mensaje-success');

        formularioBottom.appendChild(parrafoSuccess);

        setTimeout(() => {
            parrafoSuccess.remove();

            resetFormularioBottom();
        }, 5000)
    }, 1000)

    nuevoClienteValfra(nombreBottom.value, emailBottom.value, asuntoBottom.value, selectorBottom.value)
};