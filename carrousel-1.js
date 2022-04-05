 //Busco todos los enlaces 
 /*var lnks = Array.from(document.getElementsByTagName('carrosuel-item__button--left'));
 //si es enlace interno le asocio el controlador al evento click 
lnks.forEach(function (v) {
if (/#[a-z,0-9]+/.test(v.hash))
v.addEventListener("click", animScroll, false)
})

function animScroll() {
    var id, dst, despX;
    event.preventDefault();  
    id = event.currentTarget.hash.replace(/#/, ''); 
    dst = document.getElementById(id); 
    despX = parseInt(dst.getBoundingClientRect().top)   
    window.scrollBy({
    left: despX, top: 0, behavior: 'smooth'
    });
    
    } */
    var left_button = document.getElementsByName('izquierda');
    var right_button = document.getElementsByName('derecha');

    function left_scroll() {
        
    }
    //left_button.addEventListener().onclick()