// Create a button to open the AI Assistant
const button = document.createElement('button');
button.innerText = 'Ask AI Assistant';
button.style.position = 'fixed';
button.style.bottom = '10px';
button.style.right = '10px';
button.style.zIndex = 1000;
document.body.appendChild(button);

// Create a modal for the AI Assistant
const modal = document.createElement('div');
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.zIndex = 1001;
modal.style.backgroundColor = 'white';
modal.style.padding = '20px';
modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
document.body.appendChild(modal);

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Ask me anything...';
modal.appendChild(input);

const submit = document.createElement('button');
submit.innerText = 'Submit';
modal.appendChild(submit);

const responseDiv = document.createElement('div');
modal.appendChild(responseDiv);

button.addEventListener('click', () => {
    modal.style.display = 'block';
});

submit.addEventListener('click', async () => {
    const question = input.value;
    const response = await fetch('https://api.example.com/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
    });
    const data = await response.json();
    responseDiv.innerText = data.answer;
});
