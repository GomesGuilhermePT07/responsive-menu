var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header");
var content = document.getElementById("content");
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginLeft = '-10vh';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else{
        navigationHeader.style.marginLeft = '-100vh';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar(){
    if(showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
});