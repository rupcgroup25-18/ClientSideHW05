function isLoggedIn()
{
    return localStorage.getItem("loggedInUser") !== null;
}

function getLoggedInUser()
{
    return JSON.parse(localStorage.getItem("loggedInUser"));
}

function showLoginDialogIfNeeded()
{
    if (!isLoggedIn())
    {
        const $dialog = $(`
            <dialog style="padding: 20px; border: none; border-radius: 8px; box-shadow: 0 0 10px #aaa;">
                <p>You must be logged in to view this page.</p>
            </dialog>
        `);

        $("body").append($dialog);
        $dialog[0].showModal();

        setTimeout(function ()
        {
            $dialog[0].close();
            window.location.href = "LoginAndRegister.html";
        }, 2000);
    }
}
