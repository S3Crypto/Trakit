var TrakitChat = (function () {
    var init = function () {
        var chatIcon = document.getElementById('chat-icon');
        var chatPanel = document.getElementById('chatPanel');
        var closeButton = document.getElementById('closeChatPanel');
        var composeButton = document.getElementById('composeButton');
        var composeModal = document.getElementById('composeModal');
        var closeComposeModal = document.getElementById('closeComposeModal');
        var sendButton = document.getElementById('sendButton');
        var recipientDropdown = document.getElementById('recipientDropdown');
        var composeTextarea = document.getElementById('composeTextarea');
        var chatMessages = document.getElementById('chatMessages');
        var messageModal = document.getElementById('messageModal');
        var messageContent = document.getElementById('messageContent');
        var closeMessageModal = document.getElementById('closeMessageModal');
        var senderId = window.senderId;

        // Toggle the chat panel visibility
        if (chatIcon) {
            chatIcon.addEventListener('click', function () {
                chatPanel.classList.toggle('show');
                if (chatPanel.classList.contains('show')) {
                    loadMessages(senderId);
                }
            });
        }

        // Close the chat panel
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                chatPanel.classList.remove('show');
            });
        }

        // Open the compose message modal
        if (composeButton) {
            composeButton.addEventListener('click', function () {
                composeModal.style.display = 'flex';
                loadUsers(); // Load users when opening the modal
            });
        }

        // Close the compose message modal
        if (closeComposeModal) {
            closeComposeModal.addEventListener('click', function () {
                composeModal.style.display = 'none';
            });
        }

        // Close modal if clicking outside of it
        window.addEventListener('click', function (event) {
            if (event.target == composeModal) {
                composeModal.style.display = 'none';
            }
            if (event.target == messageModal) {
                messageModal.style.display = 'none';
            }
        });

        // Close message modal
        if (closeMessageModal) {
            closeMessageModal.addEventListener('click', function () {
                messageModal.style.display = 'none';
            });
        }

        // Send button logic
        if (sendButton) {
            sendButton.addEventListener('click', function () {
                var recipientId = recipientDropdown.value;
                var messageContent = composeTextarea.value;

                if (recipientId && messageContent) {
                    // Send the message via AJAX
                    $.ajax({
                        url: '/Messages/Send',
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            userId: recipientId,
                            senderId: senderId,
                            messageContent: messageContent
                        }),
                        success: function (response) {
                            alert('Message sent successfully!');
                            recipientDropdown.value = '';
                            composeTextarea.value = '';
                            composeModal.style.display = 'none';
                        },
                        error: function (xhr, status, error) {
                            alert('Failed to send message: ' + error);
                        }
                    });
                } else {
                    alert('Please select a recipient and type a message.');
                }
            });
        }

        // Function to load messages
        var loadMessages = function (userId) {
            $.ajax({
                url: '/Messages/' + userId,
                type: 'GET',
                success: function (messages) {
                    chatMessages.innerHTML = '';
                    messages.forEach(function (message) {
                        var card = document.createElement('div');
                        card.className = 'message-card';
                        card.dataset.messageId = message.id;
                        card.innerHTML = `
                            <div class="message-sender">From: ${message.senderId}</div>
                            <div class="message-content-preview">${message.messageContent.substring(0, 20)}...</div>
                            <div class="message-timestamp">${new Date(message.timestamp).toLocaleString()}</div>
                        `;
                        card.addEventListener('click', function () {
                            openMessageModal(message);
                        });
                        chatMessages.appendChild(card);
                    });
                },
                error: function (xhr, status, error) {
                    alert('Failed to load messages: ' + error);
                }
            });
        };

        // Function to open the message modal with details
        var openMessageModal = function (message) {
            messageContent.innerHTML = `
                <h4>From: ${message.senderId}</h4>
                <p>${message.content}</p>
                <p><small>Sent on: ${new Date(message.timestamp).toLocaleString()}</small></p>
            `;
            messageModal.style.display = 'flex';
        };

        // Function to load users into the dropdown
        var loadUsers = function () {
            $.ajax({
                url: '/Home/GetUsers',
                type: 'GET',
                success: function (users) {
                    recipientDropdown.innerHTML = '';
                    users.forEach(function (user) {
                        var option = document.createElement('option');
                        option.value = user.id;
                        option.textContent = user.userName;
                        recipientDropdown.appendChild(option);
                    });
                },
                error: function (xhr, status, error) {
                    alert('Failed to load users: ' + error);
                }
            });
        };
    };

    return {
        init: init
    };
})();

// Initialize the chat when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    TrakitChat.init();
});
