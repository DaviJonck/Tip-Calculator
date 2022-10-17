

document.querySelector('#tip-form').onchange = function () {

    var tipValue = document.getElementById('tipRange').value;
    document.getElementById('tipPer').innerHTML = `${tipValue}% `;

}



function calculateTotal() {
    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipRange').value;
    var totalTip = bill * (tip / 100)
    var totalAccount = bill + totalTip


    document.getElementById('results').innerHTML = `Your tip was ${totalTip}$ and your total account is: ${totalAccount.toFixed(2)}$`

}



