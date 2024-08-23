document.getElementById('card-number').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }

    e.target.value = formattedValue;
});
document.getElementById('expiry-date').addEventListener('input', function (e) {
    var input = e.target.value;
    if (input.length === 2 && !input.includes('/')) {
        e.target.value = input + '/';
    }
});


// button 

function showDiv1() {
    document.querySelector('.payment-container').classList.add('visible');
    document.querySelector('.upi').classList.remove('visible');
}

function showDiv2() {
    document.querySelector('.payment-container').classList.remove('visible');
    document.querySelector('.upi').classList.add('visible');
}

window.onload = showDiv1;

// popup

let popUp = document.querySelector("#popUp");

function openPopUp() {
    popUp.classList.add("openPopUp");
}
function closePopUp() {
    popUp.classList.remove("openPopUp");
}
