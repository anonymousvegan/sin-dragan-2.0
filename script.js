const btn = document.getElementById("btn")
const tekst = document.getElementById("tekst")
const video =  document.getElementById("video")
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.onresult = function(event){
    const current = event.resultIndex;
    const rezultat = event.results[current][0].transcript;
    tekst.textContent=rezultat;
    odgovori(rezultat.toLowerCase());
}
btn.addEventListener('click', () => {
recognition.start();
video.pause();
document.getElementById("dostupne").style.display="none";
});

function odgovori(poruka){
    console.log(poruka)
if(poruka=="prikaži dostupne komande" ||poruka=="komande" || poruka=="pokaži dostupne komande" || poruka=="prikaži komande" ){
    document.getElementById("dostupne").style.display="block";
    video.style.display="none";
}

else if(poruka=="ja bi da mi to koljemo kume" || poruka=="ja bih da mi to koljemo kume" || poruka=="ja bih da mi to koljemo kume ionako će da priča da smo je klali" || poruka=="ja bi da mi to koljemo kume ionako će da priča da smo je klali" ||  poruka=="ionako će da priča da smo je klali" || poruka=="ionako će pričati da smo je klali"){
    video.style.display="block";
    video.src="ja-bi-da-mi-to-koljemo-kume.mp4"
    video.play();
    console.log("pustio kuma")
}
else if(poruka=="ja sam sin dragan" || poruka=="sin dragan" || poruka=="najviše volim da jedem musaku"){
    video.style.display="block";
    video.src="ja-sam-sin-dragan.mp4"
    video.play();
}
else if(poruka=="sjedi đe si" || poruka=="sjedi gde si" || poruka=="sedi đe si" || poruka=="ni za dje si nijesi" || poruka=="sedi gde si" || poruka=="ni za gde si nisi" ||  poruka=="ni za gde si nisi" || poruka=="sedi đe si ni za đe si nijesi"|| poruka=="sedi gde si ni za gde si ni jesi"){
    video.style.display="block";
    video.src="sedi-dje-si.mp4"
    video.play();
}
else if(poruka=="reko tata ne dirajte ništa" || poruka=="rekao tata ne dirajte ništa" || poruka=="reko tata ne dirajte ništa dok se on ne vrne" || poruka=="dok se ja ne vrnem" || poruka=="dok se ja ne vratim")  {
    video.style.display="block";
    video.src="reko-tata-ne-dirajte-nista.mp4"
    video.play();
}
else if(poruka=="leva skija suade" || poruka=="desna skija suade" || poruka=="skija suade" || poruka=="suade" || poruka=="desna skija" ){
    video.style.display="block";
    video.src="desna-skija-suade.mp4"
    video.play();
}
else if(poruka=="majka šestoro dece" || poruka=="ja sam majka šestoro dece" || poruka=="nemoj da me gledaš" || poruka=="u šta da gledam u luster da gledam" || poruka=="u luster da gledam" ){
    video.style.display="block";
    video.src="majka-sestoro-dece.mp4"
    video.play();
}

else if(poruka=="nije lepo to što lažeš sramota u tvojim godinama" || poruka=="nije lepo to što lažeš" || poruka=="nije lepo smejati se tuđoj nesreći" || poruka=="mrtav ladan" || poruka=="mrtav hladan" ){
    video.style.display="block";
    video.src="nije-lepo-to-sto-lazes.mp4"
    video.play();
}
else if(poruka=="pičiguz" ){
    video.style.display="block";
    video.src="piciguz.mp4";s
    video.play();
}
else if(poruka=="milane čiji je ono točak"  || poruka=="čiji je ono točak" || poruka=="milane či je ono točak"  || poruka=="či je ono točak" ){
    video.style.display="block";
    video.src="ciji-je-ono-tocak.mp4";
    video.play();
}
else if(poruka=="vučić priča kineski"  || poruka=="vučić govori kineski" || poruka=="vučić"  || poruka=="vučić kinez" ){
    video.style.display="block";
    video.src="vucic-prica-kineski.mp4";
    video.play();
}
else if(poruka=="aluminijum" ){
    video.style.display="block";
    video.src="aluminijum.mp4";
    video.play();
}
else if(poruka=="nesam školovala" || poruka=="nisam školovala" ){
    video.style.display="block";
    video.src="nesam-skolovala.mp4";
    video.play();
}
else if(poruka=="neće ona niđe" || poruka=="neće ona nigde" || poruka=="neće ona nigde" ){
    video.style.display="block";
    video.src="nece-ona-nidje.mp4";
    video.play();
}
else{
    video.style.display="none";
}
}

function startuj(){
    recognition.start();
}

function sakri(){
    document.getElementById("dostupne").style.display="none";
}