//为密码框定义校验规则
$(function () {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd: function (value) {
            if (value === $('[name=old_pwd]').val()) {
                return '新旧密码不能相同！'
            }
        },
        rePwd: function (value) {
            if (value !== $('[name=new_pwd]').val()) {
                return '两次密码不一致！'
            }
        }
    })
})
//发起请求重置密码的请求
$('.layui-form').on('submit', function (e) {
    //1.阻止表单的默认提交行为
    e.preventDefault();
    //2.发起ajax请求
    $.ajax({
        type: "PATCH",
        url: "/my/updatepwd",
        data: $(this).serialize(),
        success: function (res) {
            if(res.code !== 0){
                return layui.layer.msg('更新密码失败！')
            }
            layui.layer.msg('更新密码成功！')
            //重置表单
            $('.layui-form')[0].reset()
        }
    });
})