const showDescription = document.getElementById('ristretto-img');

const mouseOver = () => document.querySelector("#ristretto").style.display="inline-flex";
const mouseOut = () => document.querySelector("#ristretto").style.display="none";

showDescription.addEventListener("mouseover", mouseOver);
showDescription.addEventListener("mouseout", mouseOut);

const showMacchiato = document.getElementById('macchiato-img');

const mouseOverMacchiato = () => document.querySelector("#macchiato").style.display="inline-flex";
const mouseOutMacchiato = () => document.querySelector("#macchiato").style.display="none";

showMacchiato.addEventListener("mouseover", mouseOverMacchiato);
showMacchiato.addEventListener("mouseout", mouseOutMacchiato);

const showDoppio = document.getElementById('doppio-img');

const mouseOverDoppio = () => document.querySelector("#doppio").style.display="inline-flex";
const mouseOutDoppio = () => document.querySelector("#doppio").style.display="none";

showDoppio.addEventListener("mouseover", mouseOverDoppio);
showDoppio.addEventListener("mouseout", mouseOutDoppio);

const showAmericano = document.getElementById('americano-img');

const mouseOverAmericano = () => document.querySelector("#americano").style.display="inline-flex";
const mouseOutAmericano = () => document.querySelector("#americano").style.display="none";

showAmericano.addEventListener("mouseover", mouseOverAmericano);
showAmericano.addEventListener("mouseout", mouseOutAmericano);
