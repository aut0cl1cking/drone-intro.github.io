function greetUser() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    const notification = document.getElementById('notification');
    notification.textContent = greeting; // Set the greeting text
    notification.classList.add('show'); // Show the notification

    setTimeout(() => {
        notification.classList.remove('show'); // Hide the notification after 3 seconds
    }, 3000); // 3000 milliseconds delay
}
