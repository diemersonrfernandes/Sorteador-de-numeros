const botaoSortear = document.querySelector(".botao-sortear");

function clicar(){
    
    const min = Math.ceil (document.querySelector(".input-min").value);
    const max = Math.floor (document.querySelector(".input-max").value);

    const resultadoNumero = Math.floor(Math.random() * (max - min +1)) + min;

    if(isNaN(resultadoNumero)){
      resultadoNumero = "Valor Inválido"
  }

    document.querySelector(".resultado").textContent = resultadoNumero;

}

botaoSortear.addEventListener("click",clicar);

//const botaoLimpar = document.querySelector(".limpar-numeros");
//botaoLimpar.addEventListener("click",limparCampos)

function limparCampos(){
  const camposUm = document.querySelector(".input-min");
  const camposDois = document.querySelector(".input-max");
  const LimparParagrafo = document.querySelector(".resultado");

  camposUm.value = "";
  camposDois.value = "";
  LimparParagrafo.innerHTML= "--";
}