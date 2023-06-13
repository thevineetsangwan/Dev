document.querySelectorAll('span')

const spans = document.querySelectorAll('span')

// Finds the reply button and adds an event listener to it
for(const span of spans){
    if(span.innerText === "Reply"){
        span.addEventListener('click', function() {
            console.log('Reply button has been clicked');
        }
       )
    }
}