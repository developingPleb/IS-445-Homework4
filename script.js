const paragraph = document.querySelector('p');

function handleKeyup(event) {
    // how we are going to infate and deflate the symbol
    if (event.code == 'KeyI'){
        inflate()
    }

    if (event.code == 'KeyD'){
    deflate()
    }
}

/* this was my logic but I couldn't call my document elemts correctly */ 


