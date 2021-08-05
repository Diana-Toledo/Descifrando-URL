function delStrangeThings( texto ) {
    let arSThings = [ [ "a", "á" ], [ "o", "ó" ], [ "", " " ] ];
    for ( let j = 0; j < arSThings.length; j++ ) {
        texto = texto.split( arSThings[ j ][ 1 ] ).join( arSThings[ j ][ 0 ] );
    }			
    return texto;
}

function descifrar( codEgipcio, claveNumerica, nodo ) { 
    let pos = 0;
    let nodos;
    let idInterval;
    let nodoFin;
    
    codEgipcio = codEgipcio.trim().toLowerCase();
    codEgipcio = delStrangeThings( codEgipcio );

    for ( let i = 0; i < codEgipcio.length; i++ ) {
        nodo.insertAdjacentHTML( 'beforeend', "<span class='sindescifrar'>" + codEgipcio[ i ] + "</span>" );
    }
    nodos = document.querySelectorAll( "div#descifrando span" );
    
    idInterval = setInterval( function() {
        nodos[ claveNumerica[ pos] ].innerText = codEgipcio[ pos ];
        nodos[ claveNumerica[ pos] ].classList.remove( "sindescifrar");
        nodos[ claveNumerica[ pos] ].classList.add( "descifrado" );
        pos++;
        
        if ( pos === codEgipcio.length ) {
            clearInterval( idInterval );
            nodoFin = document.getElementById( "fin" );
            nodoFin.classList.remove( "oculto" );
        }
    }, 100 );
}    

// Se ejecuta cuando la ventana está cargada.
function init() {
    let arNumeros = [ 23, 24, 25, 18, 19, 5, 6, 7, 20, 15, 17, 8, 10, 11, 4, 3, 12, 2, 16, 14, 9, 21, 0, 1, 13, 22 ];
    let textoDescifrar = "Cómo será dar con Nekgikis V...";
    let nodo = document.getElementById( "descifrando" );
    descifrar( textoDescifrar, arNumeros, nodo );
}
window.onload = init;

