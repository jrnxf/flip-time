function updateDate() {
    $('#date').html(moment().format('dddd[,] MMMM Do[,] YYYY'));
}

$(document).ready(function () {
    $('#clock').FlipClock({
        clockFace: 'TwelveHourClock',
        showSeconds: false,
    });

    updateDate();
    setInterval(updateDate, 1000);
});

