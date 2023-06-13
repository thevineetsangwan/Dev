window.location

window.location.hash

// Triggers when you click on an email from the inbox
window.onhashchange = function () {
    if(window.location.hash.startsWith('#inbox')){
        console.log('The hash has been changed in inbox to' + window.location.hash)
    }
    else if(window.location.hash.startsWith('#label/')){
        console.log('The hash has been changed in labels to' + window.location.hash)
    }
    else if(window.location.hash.startsWith('#spam')){
        console.log('The hash has been changed in spam to' + window.location.hash)
    }
    else  {
        console.log('Hash not changed')
    }
}