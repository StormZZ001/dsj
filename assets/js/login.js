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

//从 layui 中获取 form 对象
let form = layui.form
let layer = layui.layer
//通过 form.verify()函数自定义校验规则
form.verify({
    //自定义了一个叫做 pwd 校验规则
    pwd:[/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
    //校验两次密码是否一致的规则
    repwd:function(value){
        //通过行参拿到的是确认密码框中的内容
        //还需要拿到密码框中的内容
        //然后进行一次等于的判断
        //如果判断失败，则return一个提示消息即可
        var pwd = $('.reg-box [name=password]').val()
        if(pwd !== value){
            return '两次密码不一致！'
        }
    }
})