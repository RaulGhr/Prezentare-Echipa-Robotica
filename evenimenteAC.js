const modal = document.querySelector('.eve');
const previews = document.querySelectorAll(".evenimenteac img");
const fundal =document.querySelector('.fundal');
const eveniment1=document.querySelector('.nationala-academy-2019');
const eveniment2=document.querySelector('.proiect-copii');
const eveniment3=document.querySelector('.copacul-valorilor-fundamentale');
const eveniment4=document.querySelector('.regionala-2020');
const navbar =document.querySelector('.nav-sus')
var alegere;


previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        
        
        const originalSrc = preview.getAttribute("data-original");
        alegere = `${originalSrc}`;
        if(alegere=='nationala-academy-2019'){eveniment1.classList.add("vazut");}
        if(alegere=='proiect-copii'){eveniment2.classList.add("vazut");}
        if(alegere=='copacul-valorilor-fundamentale'){eveniment3.classList.add("vazut");}
        if(alegere=='regionala-2020'){eveniment4.classList.add("vazut");}
      

    })
        
    
})

modal.addEventListener("click",(e) => {
    if(e.target.classList.contains("eve")){
        modal.classList.remove('open');
        eveniment1.classList.remove('vazut');
        eveniment2.classList.remove('vazut');
        eveniment3.classList.remove('vazut');
        eveniment4.classList.remove('vazut');
        
    }
})
function inchis(){
    modal.classList.remove('open');
    eveniment1.classList.remove('vazut');
    eveniment2.classList.remove('vazut');
    eveniment3.classList.remove('vazut');
    eveniment4.classList.remove('vazut');
}
inaltime_eveniment=modal.offsetHeight-navbar.offsetHeight;
fundal.style.height=inaltime_eveniment+"px";