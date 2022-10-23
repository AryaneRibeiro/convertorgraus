function calcular(){

    var celsius= document.getElementById('celsius').value;
    celsius = parseFloat(celsius);

    var conversao = (celsius * 9/5) + 32;
    var resultado = document.getElementById('resultado');
    resultado.value = conversao;


};

