const convertis = document.getElementById("Convertis")

const binaire = document.querySelectorAll("#binary")

let base2 = document.querySelector(".base2")

const base2_result = document.querySelector(".base2_result")

const base8_result = document.querySelector(".base8_result")

const base10_result = document.querySelector(".base10_result")

const base16_result = document.querySelector(".base16_result")


convertis.addEventListener('click',fonction_convert)


function fonction_convert() {
  base2 = base2.value
  base2_result.textContent = base2.toString(2)
  base8_result.textContent = base2.toString(8)
  base10_result.textContent = base2.toString(10)
  base16_result.textContent = base2.toString(16)
  
  function fonctionBin() {
    alert()
  }
  
  binaire.forEach(bin => { 
    bin.addEventListener('click', fonctionBin)
  })
  
  //console.log(Number.parseInt(base2,16));
  
}


//let n = Number(prompt("Nombre : "))

//console.log(n.toString(2));