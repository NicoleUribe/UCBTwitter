//import sumar from "./sumador";

const tittle = document.querySelector("#titulo");
const text_ = document.querySelector("#detalle");
const form = document.querySelector("#TwitterUCB");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(tittle.value == ""){
    div.innerHTML = `<p> No es posible publicar un post sin título <p>`;
  }
  else{
    div.innerHTML =`<p>Publicación <p> 
    <p>Titulo: ${tittle.value}<p>
    <p>Detalle: ${text_.value}</p>`;
  }
});
  
  
