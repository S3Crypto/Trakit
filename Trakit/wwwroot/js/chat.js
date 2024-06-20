var TrakitChat = (function () {
    var observer = new MutationObserver(function (mutations) {
        // Your observer logic
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
            });
        }

        // Close the compose message modal
        if (closeComposeModal) {
            closeComposeModal.addEventListener('click', function () {
                composeModal.style.display = 'none';
            });
        }

        // Send button logic
        if (sendButton) {
            sendButton.addEventListener('click', function () {
                var messageContent = document.getElementById('composeTextarea').value;
                alert('Message sent: ' + messageContent);
                composeModal.style.display = 'none';
                // Clear the textarea after sending the message
                document.getElementById('composeTextarea').value = '';
                // Add logic to actually send the message if needed
            });
        }

        // Close the modals when clicking outside of them
        window.addEventListener('click', function (event) {
            if (event.target == composeModal) {
                composeModal.style.display = 'none';
            }
        });

        // Event listeners for message cards
        messageCards.forEach(function (card) {
            card.addEventListener('click', function () {
                // Show the message pop-up with details
                alert('Message clicked: ' + this.dataset.messageId);
                // Populate the message modal with content (you can customize this part)
                var messageContent = 'Detailed content of message ' + this.dataset.messageId;
                document.getElementById('messageContent').innerText = messageContent;
                // Show the message modal
                document.getElementById('messageModal').style.display = 'flex';
            });
        });

        // Close the message modal
        var closeMessageModal = document.getElementById('closeMessageModal');
        if (closeMessageModal) {
            closeMessageModal.addEventListener('click', function () {
                document.getElementById('messageModal').style.display = 'none';
            });
        }
    };

    return {
        init: init
    };
})();

// Initialize the chat when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    TrakitChat.init();
});
