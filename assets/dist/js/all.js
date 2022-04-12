$(document).ready(function() {
    console.log('hi')
    $('#datepicker1').datepicker({ dateFormat: "yy-mm-dd" })
    $('#datepicker2').datepicker({ dateFormat: "yy-mm-dd" })
    $('.login__btn__submit').click(function() {
        console.log('click')
        $('.login__errorMessage__word').addClass('d-none')
    })
})

function loginSubmit() {
    console.log('click')
}