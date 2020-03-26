window.$user = null;
window.logout = logout;

boot();

function boot() {
    if (isLoginIn())
        load()
    else
        render()
};

function isLoginIn(params) {
    return localStorage.getItem('session');
}

function load() {
    api(
        'user/first', { where: { and: { id: isLoginIn() } }, only: ['id', 'name', 'username'] },
        r => {
            if (!r.data) {
                return;
            } else {
                $user = r.data;
                render()
            }
        }
    )
}

function render() {
    if ($user) {
        navItemName.innerText = $user.name || $user.username;
        tourist.hidden = !(loggedIn.hidden = false);
    } else {
        tourist.hidden = !(loggedIn.hidden = true);
    }
}

function logout() {
    localStorage.removeItem('session');
    location.reload();
}