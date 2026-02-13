document.addEventListener('DOMContentLoaded', () => {
    const copyTextElements = document.querySelectorAll('.copy-clipboard');

    copyTextElements.forEach(element => {
        element.addEventListener('click', () => {
            // Get the text from the data attribute
            const textToCopy = element.getAttribute('data-copy-clipboard');

            // Create a temporary textarea to hold the text
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            
            // Select the text
            textarea.select();
            textarea.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text to clipboard
            document.execCommand('copy');

            // Remove the temporary textarea
            document.body.removeChild(textarea);

            // Show the notification
            showCopyNotification();
        });
    });
});
