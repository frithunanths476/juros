document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value
    const taxa = (document.getElementById('taxa').value) / 100
    const tempo = document.getElementById('tempo').value

    const total = value * (1 + taxa)**tempo

    document.getElementById('total').innerHTML = ('R$' + total.toFixed(2))
})