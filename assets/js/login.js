$(function(){
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })

    $('#link_log').on('click',function(){
        $('.reg-box').hide()
        $('.login-box').show()
    })
})