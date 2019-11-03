function getDate() {
    const date = new Date();
    const weeks = ['일', '월', '화', '수', '목', '금', '토', '일'];
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var dayOfWeek = date.getDay();

    return `${year}.${month}.${day} (${weeks[dayOfWeek]})`
}

function getTime() {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var period = '오전';

    if (hours >= 12) {
        period = '오후';
        hours = hours - 12;
    }

    return `${period} ${hours}시 ${minutes}분 ${seconds}초`
}

function init() {
    const dateText = document.getElementById('date');
    const timeText = document.getElementById('time');
    dateText.innerText = getDate();
    timeText.innerText = getTime();
    setInterval(init, 1000);
}

init();