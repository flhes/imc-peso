function calcular(){
    var fPeso = parseFloat(document.getElementById("peso").value)
    var fAltura = parseFloat(document.getElementById("altura").value)
    var fImc = fPeso /(fAltura*fAltura)
    document.getElementById("imc").innerHTML = fImc.toFixed(2)

    if(fImc<18.5){
        document.getElementById("status").innerHTML = "STATUS: BAIXO PESO"
    }
    else if(fImc>=20.9){
        document.getElementById("status").innerHTML = "STATUS: PESO IDEAL"

    }
    else if(fImc>29.9){
        document.getElementById("status").innerHTML = "STATUS: SOBREPESO"
    }
    else if(fImc>34.9){
        document.getElementById("status").innerHTML = "STATUS: OBESIDADE 1"

    }
    else if(fImc>39.9){
        document.getElementById("status").innerHTML = "STATUS: OBESIDADE 2"
    }
    else{
        document.getElementById("status").innerHTML = "STATUS: OBESIDADE MORBIDA"
    }
}