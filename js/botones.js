/*todo sobre el index-----*/
const zoomBtnDerecha = document.getElementById('.botonSiguiente');
const zoomBtnIzquierda = document.getElementById('.botonAnterior');
const btnRegistrarse = document.getElementById('.botonRegistrarse');

    zoomBtnIzquierda.addEventListener('mouseover', () => {
    zoomBtnIzquierda.style.transform = 'scale(1.2)';
    }); 
    zoomBtnIzquierda.addEventListener('mouseout', () => {
    zoomBtnIzquierda.style.transform = 'scale(1)';
    });

    zoomBtnDerecha.addEventListener('mouseover', () => {
    zoomBtnDerecha.style.transform = 'scale(1.2)';
    });
    zoomBtnDerecha.addEventListener('mouseout', () => {
    zoomBtnDerecha.style.transform = 'scale(1)';
    });

    btnRegistrarse.addEventListener('mouseover', () => {
    btnRegistrarse.style.transform = 'scale(1.2)';
    });
  
    btnRegistrarse.addEventListener('mouseout', () => {
    btnRegistrarse.style.transform = 'scale(1)';
    });

/* Todo sobre el index--------*/