document.querySelectorAll('.draw-button').forEach(button => {
    button.addEventListener('click', function() {
        const challengeToShow = document.getElementById('challenge' + this.dataset.challenge);

        // If the clicked challenge is already visible, hide it
        if (!challengeToShow.classList.contains('hidden')) {
            challengeToShow.classList.add('hidden');
        } else {
            // Hide all other challenges
            document.querySelectorAll('.cs').forEach(challenge => {
                challenge.classList.add('hidden');
            });
            // Show the clicked challenge
            challengeToShow.classList.remove('hidden');
        }
    });
});
