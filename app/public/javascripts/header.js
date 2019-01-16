var nav = document.querySelector('nav.nav');
let navItems = Array.prototype.slice.call(nav.children);
let pathname = document.location.pathname;
navItems.forEach(item => {
    let itemClasses = item.classList;  
    if (item.pathname === pathname) {
        itemClasses.add('is-active');
    } else {
        itemClasses.remove('is-active');
    }
});
