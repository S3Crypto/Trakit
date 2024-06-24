document.addEventListener('DOMContentLoaded', function () {
    // Smooth slide-in effect for goals panel
    document.getElementById('goalsPanel').classList.add('slide-in');

    // Hover effect for goal cards
    var goalCards = document.querySelectorAll('.goal-card');
    goalCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            card.classList.add('hover');
        });
        card.addEventListener('mouseleave', function () {
            card.classList.remove('hover');
        });
    });
});

// CSS for the effects
// Add to your CSS file
.slide -in {
    animation: slide -in 0.5s forwards;
}

@keyframes slide -in {
    from {
    transform: translateX(100 %);
}
    to {
    transform: translateX(0);
}
}

.goal - card.hover {
    box - shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
