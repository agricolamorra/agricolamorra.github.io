function openMenu() {
    document.getElementById("menu-page").style.height = "100vh";
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    document.getElementById("menu-page").style.height = "0";
    document.body.style.overflow = 'overlay';
}