// Triggers when you click on an email from the inbox
window.onload = function () {
    window.onhashchange = () => {
        if (window.location.hash.startsWith('#inbox/')) {
            console.log('Entered into email');
        }
    };
}

// Finds the reply button and adds an event listener to it
const spans = document.querySelectorAll('span');
for (const span of spans) {
  if (span.innerText === 'Reply') {
	span.addEventListener('click', function() {
		console.log('Reply button pressed');
	});
  }
}

