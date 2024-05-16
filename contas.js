function Rachar() {
    let gas = document.getElementById('gas').value;
    let kmpl = document.getElementById('kmpl').value;
    let distancia = document.getElementById('distancia').value;
    let pessoas = document.getElementById('pessoas').value;
    
    let p1 = distancia / kmpl;
    let rachado = (p1 * gas) / pessoas;

    if(document.getElementById('gas').value === "" || document.getElementById('kmpl').value === "" || document.getElementById('distancia').value === "" || document.getElementById('pessoas').value === ""){
        document.getElementById("resultado").innerHTML = "Erro | Preencha todos os valores"
    }else{
        document.getElementById("resultado").innerHTML = "Cada indivíduo deve R$" + rachado.toFixed(2)
    }

    //window.alert("Cada indivíduo deve pagar R$ " + rachado.toFixed(2));
}