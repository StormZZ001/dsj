$(function () {

})
var layer = layui.layer
//获取用户的基本信息
function getUserInfo() {
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        Headers:{
            Authorization:localStorage.getItem('token') || ''
        },
        success:function (res) { 
            console.log(res)
         }
    })
}