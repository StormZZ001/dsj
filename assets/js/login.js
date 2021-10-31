$(function () {
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    $('#link_log').on('click', function () {
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
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    //校验两次密码是否一致的规则
    repwd: function (value) {
        //通过行参拿到的是确认密码框中的内容
        //还需要拿到密码框中的内容
        //然后进行一次等于的判断
        //如果判断失败，则return一个提示消息即可
        var pwd = $('.reg-box [name=password]').val()
        if (pwd !== value) {
            return '两次密码不一致！'
        }
    }
})

//监听提交事件
// 监听注册表单的提交事件
$('#form_reg').on('submit', function (e) {
    // 1. 阻止默认的提交行为
    e.preventDefault()
    // 2. 发起Ajax的POST请求
    var data = {
        username: $('#form_reg [name=username]').val(),
        password: $('#form_reg [name=password]').val()
    }
    $.post('http://api-breakingnews-web.itheima.net/api/reguser', data, function (res) {
        if (res.status !== 0) {
            return layer.msg(res.message)
        }
        layer.msg('注册成功，请登录！')
        // 模拟人的点击行为
        $('#link_log').click()
    })
})

//发起登录的ajax请求
$('#form_log').submit(function(e){
    //1.阻止表单的默认提交行为
    e.preventDefault()
    $.ajax({
        url:'http://api-breakingnews-web.itheima.net/api/login',
        method:'POST',
        //快速获取表单中的数据
        data:$(this).serialize(),
        success:function (res) { 
            if(res.status !== 0){
                return layer.msg(re.messsage)
            }
            layer.msg('登录成功')
            location.href = 'index.html'
        }
    })
})