const textArea = document.querySelector('textarea');
const button = textArea.nextElementSibling;

const callback = function(mutationList, observer) {
	for (const mutation of mutationList) {
		if (mutation.attributeName === 'disabled') {
			if (button.disabled === false) {
				console.log('GPT response finished');
			}
		}
	}
};

const observer = new MutationObserver(callback);
observer.observe(button, {attributes: true});