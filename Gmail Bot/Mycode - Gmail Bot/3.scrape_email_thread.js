
window.onhashchange = () => {

    if(window.location.hash.startsWith('#inbox')){
        console.log('The hash has been changed in inbox to' + window.location.hash);
        const spans = document.querySelectorAll('span')
        for(const span of spans){
            if(span.innerText === "Reply"){
               span.addEventListener('click', function() {
                const email = document.querySelector('.adn.ads');
                console.log(email.textContent);
               }
             )
           }
       }
   }

    else if(window.location.hash.startsWith('#label/')){
        console.log('The hash has been changed in labels to' + window.location.hash);
        const spans = document.querySelectorAll('span')
        for(const span of spans){
            if(span.innerText === "Reply"){
                span.addEventListener('click', function() {
                 const email = document.querySelector('.adn.ads');
                 console.log(email.textContent);
                }
              )
           }
       }
   }

    else if(window.location.hash.startsWith('#spam')){
        console.log('The hash has been changed in spam to' + window.location.hash);
        const spans = document.querySelectorAll('span')
        for(const span of spans){
            if(span.innerText === "Reply"){
                span.addEventListener('click', function() {
                 const email = document.querySelector('.adn.ads');
                 console.log(email.textContent);
                }
              )
           }
       }
   }

   else if(window.location.hash.startsWith('#trash')){
    console.log('The hash has been changed in bin to' + window.location.hash);
    const spans = document.querySelectorAll('span')
    for(const span of spans){
        if(span.innerText === "Reply"){
            span.addEventListener('click', function() {
             const email = document.querySelector('.adn.ads');
             console.log(email.textContent);
            }
          )
       }
   }
}

    else  {
        console.log('Hash not changed');
    }

}
