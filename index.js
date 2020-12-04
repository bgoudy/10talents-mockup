//openNav, closeNav functions are for opening and closing the sideNav

function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//close sideNav Block