var nav = document.querySelector('nav.nav');
let navItems = Array.prototype.slice.call(nav.children);
let pathname = document.location.pathname;
navItems.forEach(item => {
    if (item.pathname === pathname)
        $(item).toggleClass('is-active');
});
