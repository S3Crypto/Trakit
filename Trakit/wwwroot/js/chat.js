var TrakitChat = (function () {
    var observer = new MutationObserver(function (mutations) {
        // Observer logic if needed
    });

    var init = function () {
        // Get elements
        var chatIcon = document.getElementById('chat-icon');
        var chatPanel = document.getElementById('chatPanel');
        var closeButton = document.getElementById('closeChatPanel');
        var messageCards = document.querySelectorAll('.message-card');
        var composeButton = document.getElementById('composeButton');
        var composeModal = document.getElementById('composeModal');
        var closeComposeModal = document.getElementById('closeComposeModal');
        var sendButton = document.getElementById('sendButton');
        var recipientDropdown = document.getElementById('recipientDropdown');
        var composeTextarea = document.getElementById('composeTextarea');
        var senderId = window.senderId;

        // Toggle the chat panel visibility
        if (chatIcon) {
            chatIcon.addEventListener('click', function () {
                chatPanel.classList.toggle('show');
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
        });

        // Send button logic
        if (sendButton) {
            sendButton.addEventListener('click', function () {
                var userId = recipientDropdown.value;
                var messageContent = composeTextarea.value;

                if (userId && messageContent) {
                    // Send the message via AJAX
                    var message = {
                        userId: userId,
                        senderId: senderId,
                        messageContent: messageContent
                    };

                    $.ajax({
                        url: '/Messages/Send', // Adjust the endpoint to your message sending API
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(message),
                        success: function (response) {
                            alert('Message sent successfully!');
                            // Clear the input fields after sending
                            recipientDropdown.value = '';
                            composeTextarea.value = '';
                            // Close the modal
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

        // Add click event for message cards
        messageCards.forEach(function (card) {
            card.addEventListener('click', function () {
                // Show the message pop-up with details
                var messageId = this.dataset.messageId;
                // Fetch and display message details (dummy data for now)
                alert('Message clicked: ' + messageId);
            });
        });
    };

    // Function to load users into the dropdown
    var loadUsers = function () {
        $.ajax({
            url: '/Home/GetUsers', // Adjust the endpoint to your user list API
            type: 'GET',
            success: function (users) {
                var recipientDropdown = document.getElementById('recipientDropdown');
                recipientDropdown.innerHTML = ''; // Clear existing options
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

    return {
        init: init
    };
})();

// Initialize the chat when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    TrakitChat.init();
});
