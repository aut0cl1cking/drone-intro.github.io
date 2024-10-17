document.querySelectorAll('.draw-button').forEach(button => {
    button.addEventListener('click', function() {
        const challengeToShow = document.getElementById('challenge' + this.dataset.challenge);

        if (!challengeToShow.classList.contains('hidden')) {
            challengeToShow.classList.add('hidden');
        } else {
            
            document.querySelectorAll('.cs').forEach(challenge => {
                challenge.classList.add('hidden');
            });

            challengeToShow.classList.remove('hidden');
        }
    });
});
