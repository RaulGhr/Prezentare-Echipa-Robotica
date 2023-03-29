const modal = document.querySelector('.eve');
const previews = document.querySelectorAll(".evenimenteac img");
const fundal =document.querySelector('.fundal');
const inapoi =document.querySelector('.bt-inapoi');
const navbar =document.querySelector('.nav-sus')
var inaltime_eveniment=0;
var alegere;
// SEZ 5
const eveniment22=document.querySelector('.viziere-sez5');
const eveniment23=document.querySelector('.robot-to-the-rescue-sez5');
const eveniment24=document.querySelector('.dev-talks-sez5');
const eveniment25=document.querySelector('.server-discord-sez5');
const eveniment26=document.querySelector('.flight-sez-5');
// SEZ 4
const eveniment1=document.querySelector('.flight-festival-sez4');
const eveniment2=document.querySelector('.international-science-week-sez4');
const eveniment3=document.querySelector('.xeo-talks-sez4');
const eveniment4=document.querySelector('.carity-demo-sez4');
const eveniment5=document.querySelector('.secret-santa-sez4');
const eveniment6=document.querySelector('.caravana-sez4');
const eveniment7=document.querySelector('.mental-health-sez4');
const eveniment8=document.querySelector('.donare-sange-sez4');
const eveniment9=document.querySelector('.regionala-sez4');
const eveniment10=document.querySelector('.demo-nostru-sez4');
// SEZ 3
const eveniment11=document.querySelector('.dev-talks-sez3');
const eveniment12=document.querySelector('.esentza-summer-camp-sez3');
const eveniment13=document.querySelector('.ora-de-a-cumoaste-sez3');
const eveniment14=document.querySelector('.a-new-team-sez3');
const eveniment15=document.querySelector('.tedx-sez3');
const eveniment16=document.querySelector('.xeo-talks-sez3');
const eveniment17=document.querySelector('.regionala-sez3');
const eveniment18=document.querySelector('.caravana-sez3');
const eveniment19=document.querySelector('.nationala-sez3');
const eveniment20=document.querySelector('.america-sez3');
const eveniment21=document.querySelector('.germania-sez3');




previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        
        
        const originalSrc = preview.getAttribute("data-original");
        alegere = `${originalSrc}`;


        // SEZ 5
        if(alegere=='viziere-sez5'){eveniment22.classList.add("vazut");}
        if(alegere=='robot-to-the-rescue-sez5'){eveniment23.classList.add("vazut");}
        if(alegere=='dev-talks-sez5'){eveniment24.classList.add("vazut");}
        if(alegere=='server-discord-sez5'){eveniment25.classList.add("vazut");}
        if(alegere=='flight-sez-5'){eveniment26.classList.add("vazut");}
        // SEZ 4
        if(alegere=='flight-festival-sez4'){eveniment1.classList.add("vazut");}
        if(alegere=='international-science-week-sez4'){eveniment2.classList.add("vazut");}
        if(alegere=='xeo-talks-sez4'){eveniment3.classList.add("vazut");}
        if(alegere=='carity-demo-sez4'){eveniment4.classList.add("vazut");}
        if(alegere=='secret-santa-sez4'){eveniment5.classList.add("vazut");}
        if(alegere=='caravana-sez4'){eveniment6.classList.add("vazut");}
        if(alegere=='mental-health-sez4'){eveniment7.classList.add("vazut");}
        if(alegere=='donare-sange-sez4'){eveniment8.classList.add("vazut");}
        if(alegere=='regionala-sez4'){eveniment9.classList.add("vazut");}
        if(alegere=='demo-nostru-sez4'){eveniment10.classList.add("vazut");}
        // SEZ 3
        if(alegere=='dev-talks-sez3'){eveniment11.classList.add("vazut");}
        if(alegere=='esentza-summer-camp-sez3'){eveniment12.classList.add("vazut");}
        if(alegere=='ora-de-a-cumoaste-sez3'){eveniment13.classList.add("vazut");}
        if(alegere=='a-new-team-sez3'){eveniment14.classList.add("vazut");}
        if(alegere=='tedx-sez3'){eveniment15.classList.add("vazut");}
        if(alegere=='xeo-talks-sez3'){eveniment16.classList.add("vazut");}
        if(alegere=='regionala-sez3'){eveniment17.classList.add("vazut");}
        if(alegere=='caravana-sez3'){eveniment18.classList.add("vazut");}
        if(alegere=='nationala-sez3'){eveniment19.classList.add("vazut");}
        if(alegere=='america-sez3'){eveniment20.classList.add("vazut");}
        if(alegere=='germania-sez3'){eveniment21.classList.add("vazut");}
        document.getElementById("navbar").classList.add("invizibil");

      

    })
        
    
})

modal.addEventListener("click",(e) => {
    if(e.target.classList.contains("eve")){
        modal.classList.remove('open');
        eveniment1.classList.remove('vazut');
        eveniment2.classList.remove('vazut');
        eveniment3.classList.remove('vazut');
        eveniment4.classList.remove('vazut');
        eveniment5.classList.remove('vazut');
        eveniment6.classList.remove('vazut');
        eveniment7.classList.remove('vazut');
        eveniment8.classList.remove('vazut');
        eveniment9.classList.remove('vazut');
        eveniment10.classList.remove('vazut');
        eveniment11.classList.remove('vazut');
        eveniment12.classList.remove('vazut');
        eveniment13.classList.remove('vazut');
        eveniment14.classList.remove('vazut');
        eveniment15.classList.remove('vazut');
        eveniment16.classList.remove('vazut');
        eveniment17.classList.remove('vazut');
        eveniment18.classList.remove('vazut');
        eveniment19.classList.remove('vazut');
        eveniment20.classList.remove('vazut');
        eveniment21.classList.remove('vazut');
        eveniment22.classList.remove('vazut');
        eveniment23.classList.remove('vazut');
        eveniment24.classList.remove('vazut');
        eveniment25.classList.remove('vazut');
        eveniment26.classList.remove('vazut');
    }
})

function inchis(){
    modal.classList.remove('open');
    eveniment1.classList.remove('vazut');
    eveniment2.classList.remove('vazut');
    eveniment3.classList.remove('vazut');
    eveniment4.classList.remove('vazut');
    eveniment5.classList.remove('vazut');
    eveniment6.classList.remove('vazut');
    eveniment7.classList.remove('vazut');
    eveniment8.classList.remove('vazut');
    eveniment9.classList.remove('vazut');
    eveniment10.classList.remove('vazut');
    eveniment11.classList.remove('vazut');
    eveniment12.classList.remove('vazut');
    eveniment13.classList.remove('vazut');
    eveniment14.classList.remove('vazut');
    eveniment15.classList.remove('vazut');
    eveniment16.classList.remove('vazut');
    eveniment17.classList.remove('vazut');
    eveniment18.classList.remove('vazut');
    eveniment19.classList.remove('vazut');
    eveniment20.classList.remove('vazut');
    eveniment21.classList.remove('vazut');
    eveniment22.classList.remove('vazut');
    eveniment23.classList.remove('vazut');
    eveniment24.classList.remove('vazut');
    eveniment25.classList.remove('vazut');
    eveniment26.classList.remove('vazut');
}
inaltime_eveniment=modal.offsetHeight-navbar.offsetHeight;
fundal.style.height=inaltime_eveniment+"px";