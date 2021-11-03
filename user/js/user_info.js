$(function () {
    var form = layui.form
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称长度必须在 1 - 6个字符之间'
            }
        }
    })
    initUserInfo()
})
var layer = layui.layer
var form = layui.form
function initUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function (res) {
            if (res.code !== 0) {
                return layer.msg('获取用户信息失败')
            }
            console.log(res)
            form.val('formUserInfo',res.data)
        }
    })
}

// 实现表单的重置效果
$('#btnReset').on('click',function (e) { 
    //1.阻止表单的默认提交行为
    e.preventDefault();
    initUserInfo()
 })