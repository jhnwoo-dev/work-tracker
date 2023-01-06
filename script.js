// var dateTime = dayjs().format('MMM D, YYYY hh:mm:ss');
// $('#date-time').text(dateTime);
setInterval(todayDate,1000);

function todayDate() {
    var jsTime = dayjs().format('MMM D, YYYY hh:mm:ss');
$('#date-time').text(jsTime);
}


// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

$(function datepicker() {
    $('#datepicker').datepicker();
});