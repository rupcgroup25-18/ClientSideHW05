function showMessage(message) {
    const $dialog = $("#messageDialog");
    const $messageText = $("#messageText");

    $messageText.text(message);
    $dialog[0].showModal();

    setTimeout(() => {
        $dialog[0].close();
    }, 2000);
}