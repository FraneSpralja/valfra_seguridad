// VARIABLES
const pageHero = document.querySelector('#page-hero');



// EVENT LISTENERS
eventListener()

function eventListener () {
    
    document.addEventListener('DOMContentLoaded', () => {

        pageHero.classList.add('slide-uno')

        sliderHero()
    });

}

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