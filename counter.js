// COUNTER

// initialize the count to 0
let count = 0;

// listen for clicks on the increment button

const button = document.getElementById('js-increment-btn');
button.addEventListener('click', increment);

// increment the count variable when the button is clicked (log it out)
// change the count in the HTML to reflect the new count
function increment(event) {
    count++;
    document.querySelector("#counter").textContent = count;
}

// save the count
const saveBtn = document.getElementById('js-save-btn');
saveBtn.addEventListener('click', save);

function save(event) {
    document.getElementById('js-text-save').textContent += count + " - ";
    count = 0;
}
