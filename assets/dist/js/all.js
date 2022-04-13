$(document).ready(function() {
    init();
    // datepicker--from
    $('#datepicker1').datepicker({ dateFormat: "yy-mm-dd" })
    $('#datepicker2').datepicker({ dateFormat: "yy-mm-dd" })
    
    // loginPage loading icon and errormessage
    $('.loadingDiv').hide()
    $('.login__errorMessage__word').hide()
    
    $('.login__btn__submit').click(function() {
        console.log('click')
        $('.loadingDiv').show()
        $('.login__errorMessage__word').show()
        setTimeout(function() {
            $('.loadingDiv').hide()
            $('.login__errorMessage__word').hide()
        }, 3000)
    })
})

function loginSubmit() {
    console.log('click')
}

function init() {
    // let ratio = window.innerWidth / window.innerHeight
    // if (ratio >= 1) {
    //     $('.login__img').css({'width': '300px'})
    // }
    if (window.innerHeight <= 517) {
        $('.login__subtitle__text').css({'font-size': '20px'})
        $('.login__input').css({'height': '40px'})
        $('.login__btn').css({'width': '60px'})
    }
}