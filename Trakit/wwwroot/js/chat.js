var TrakitChat = (function () {
    // Mutation observer for future enhancements if needed
    var observer = new MutationObserver(function (mutations) {
        // Your observer logic
    });

    var init = function () {
        var chatIcon = document.getElementById('chat-icon');
        var chatPanel = document.getElementById('chatPanel');
        var closeButton = document.getElementById('closeChatPanel');
        var messageCards = document.querySelectorAll('.message-card');

        // Toggle chat panel on chat icon click
        if (chatIcon) {
            chatIcon.addEventListener('click', function () {
                chatPanel.classList.toggle('show');
            });
        }

        // Close chat panel on close button click
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                chatPanel.classList.remove('show');
            });
        }

        // Add click event listeners to message cards
        messageCards.forEach(function (card) {
            card.addEventListener('click', function () {
                // Show the message pop-up with details (you can implement a modal or similar)
                alert('Message clicked: ' + this.dataset.messageId);
            });
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
