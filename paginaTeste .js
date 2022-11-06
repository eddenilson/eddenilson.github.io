function trabalho1() {
 
    let trabalho = parseFloat(document.getElementById("limp").value);
   
    if (trabalho == 1) {
        document.getElementById("na").innerHTML = "cortes e costura";
    }
   
   else if (trabalho == 2) {
        document.getElementById("na").innerHTML = "sombrançelha serviços";
    }
   
   else if (trabalho == 3) {
        document.getElementById("na").innerHTML = "cadernos";
    }
    else {
        document.getElementById("na").innerHTML = "ERROR";

    }
}