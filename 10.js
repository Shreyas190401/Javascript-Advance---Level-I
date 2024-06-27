const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCount();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount();
});

updateCount();
