let h2 = document.querySelector(".paymentAmount");
document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const btn = document.querySelector('.payBtnHide');
    const totalPriceBtn = document.getElementById('totalPriceBtn');
    let totalPrice = 0;



    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('Selected')) {
                seat.classList.add('Selected');
                btn.classList.add('payBtnShow');
                totalPrice += parseInt(seat.dataset.price, 10);
            } else {
                seat.classList.remove('Selected');
                totalPrice -= parseInt(seat.dataset.price, 10);
            }
            totalPriceBtn.textContent = `Pay Rs.${totalPrice}`;


        });
    });
});



// seat change

// document.addEventListener('DOMContentLoaded', () => {
//     const colorDivButtons = document.querySelectorAll('.colorDiv');
//     colorDivButtons.forEach(button => {
//         button.addEventListener('click', toggleBookedClass);
//     });
// });

// function toggleBookedClass() {
//     const seats = document.querySelectorAll('.seat');
//     seats.forEach(seat => {
//         seat.classList.remove('Booked');
//     });

//     // Determine the number of seats to mark as Booked (random number between 1 and total seats count)
//     const numberOfSeatsToBook = Math.floor(Math.random() * seats.length) + 1;

//     // Shuffle the array of seats
//     const seatsArray = Array.from(seats);
//     shuffleArray(seatsArray);

//     // Add 'Booked' class to a subset of seats
//     for (let i = 0; i < numberOfSeatsToBook; i++) {
//         seatsArray[i].classList.add('Booked');
//     }
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    const colorDivButtons = document.querySelectorAll('.colorDiv');
    colorDivButtons.forEach(button => {
        button.addEventListener('click', toggleBookedClass);
    });

    // Initial update of remaining seats
    updateRemainingSeats();
});

function toggleBookedClass() {
    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.classList.remove('Booked');
    });

    // Determine the number of seats to mark as Booked (random number between 1 and total seats count)
    const numberOfSeatsToBook = Math.floor(Math.random() * seats.length) + 1;

    // Shuffle the array of seats
    const seatsArray = Array.from(seats);
    shuffleArray(seatsArray);

    // Add 'Booked' class to a subset of seats
    for (let i = 0; i < numberOfSeatsToBook; i++) {
        seatsArray[i].classList.add('Booked');
    }

    // Update the number of remaining seats
    updateRemainingSeats();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateRemainingSeats() {
    const seats = document.querySelectorAll('.seat');
    const availableSeats = Array.from(seats).filter(seat => !seat.classList.contains('Booked')).length;
    const remainingSeatsText = document.querySelector('.remain p');
    remainingSeatsText.textContent = `${availableSeats} seats remaining`;
}




















// color change on click
var colorDivs = document.querySelectorAll(".colorDiv");

// Loop through each element and add an event listener
colorDivs.forEach(function (div) {
    div.addEventListener("click", function () {
        // Remove the 'red-background' class from all divs
        colorDivs.forEach(function (d) {
            d.classList.remove("clickBtn");
        });
        // Add the 'red-background' class to the clicked div
        this.classList.add("clickBtn");
    });
});
