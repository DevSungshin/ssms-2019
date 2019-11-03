const hands = document.getElementsByClassName('hand');
const hourHand = hands[0];
const minuteHand = hands[1];
const secondHand = hands[2];

function setTime() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = date.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = date.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setTime();
setInterval(setTime, 1000);