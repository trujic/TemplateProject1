const app = () => {

let showContact = () => {
  document.querySelector(".contact-form").style.display="block";
  document.querySelector("body").style.background="black";
  document.querySelector("nav").style.opacity="0.2";
  document.querySelector(".container").style.opacity="0.2";
  document.querySelector(".background").style.opacity="0.2";
  document.querySelector(".contact-form").style.top="5em";
  document.querySelector("body").style.overflow="hidden";
}

let contact = document.querySelector('#contact').addEventListener("click", function(){
  showContact();
});


let formName = document.querySelector(".contact-block").addEventListener("click", function() {
  document.querySelector(".contact-block").style.top="20px";
});

let closeBtn = document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".contact-form").style.display="none";
  document.querySelector("body").style.background="none";
  document.querySelector("nav").style.opacity="1";
  document.querySelector(".container").style.opacity="1";
  document.querySelector(".background").style.opacity="1";
  document.querySelector("body").style.overflow="visible";
})


  let footerContact = document.querySelector('#footer-contact').addEventListener("click", function(){
    showContact();
  });

}

window.onload = function() {
  app();
}
