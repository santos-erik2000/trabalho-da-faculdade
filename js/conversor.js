
function convertValue (valueCountry){
    var valor = document.getElementById('reais').value;
    const result = valor * valueCountry
    document.getElementById('lbResultado').innerHTML = '$ ' + result;    
}





