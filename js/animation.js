const animation = document.querySelector('.animation');
document.querySelector('.back-to-menu').addEventListener('click',()=>{
    setPropertyFunction(animation,'display','flex');
    setTimeout(() => {
        window.location.replace("../html/index.html");
        setPropertyFunction(animation,'display','none');
    }, "1500");
})