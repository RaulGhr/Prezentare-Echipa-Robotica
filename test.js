const modal = document.querySelector('.eve');
const previews = document.querySelectorAll(".evenimenteac img");
const fundal =document.querySelector('.fundal');
const eveniment1=document.querySelector('.exemplu1');
const eveniment2=document.querySelector('.exemplu2');


var alegere;


previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        
        
        const originalSrc = preview.getAttribute("data-original");
        alegere = `${originalSrc}`;
        if(alegere=='eveniment-ac1'){eveniment1.classList.add("vazut");}
        if(alegere=='eveniment-ac2'){eveniment2.classList.add("vazut");}
      

    })
        
    
})

modal.addEventListener("click",(e) => {
    if(e.target.classList.contains("eve")){
        modal.classList.remove('open');
        eveniment1.classList.remove('vazut');
        eveniment2.classList.remove('vazut');
        
    }
})