const menuicon = document.querySelector("#menubar");
const navlinks = document.querySelector(".navlist")

menuicon.onclick =()=>{
    navlinks.classList.toggle("active");
}

