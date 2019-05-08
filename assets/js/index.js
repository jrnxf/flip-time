function updateDate() {
    $('#date').html(moment().format('dddd[,] MMMM Do[,] YYYY'));
}

$(document).ready(function () {
    $('#clock').FlipClock({
        clockFace: 'TwelveHourClock'
    });

    updateDate();
    setInterval(updateDate, 1000);
});

