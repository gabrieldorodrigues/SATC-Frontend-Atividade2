document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-chat-send');
    const messageInput = document.getElementById('message');
    const messagesList = document.querySelector('.messages-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const userMessage = messageInput.value;
        if (userMessage.trim() === '') return; 

        const userMessageItem = document.createElement('div');
        userMessageItem.classList.add('message-item', 'message-user');

        const userMessageUser = document.createElement('div');
        userMessageUser.classList.add('msg-user');
        userMessageUser.innerHTML = '<strong>Você diz:</strong>';

        const userMessageText = document.createElement('div');
        userMessageText.classList.add('msg-chat');
        userMessageText.textContent = userMessage;

        userMessageItem.appendChild(userMessageUser);
        userMessageItem.appendChild(userMessageText);
      messagesList.appendChild(userMessageItem);

        messageInput.value = '';
    });
});
