const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

if(toggle){
    toggle.addEventListener("click",()=>{
        nav.classList.toggle("show");
    });
}

const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){
        scrollBtn.style.display="block";
    }else{
        scrollBtn.style.display="none";
    }

});

if(scrollBtn){
    scrollBtn.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(el=>{
    observer.observe(el);
});