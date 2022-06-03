var reg = /^[A-Za-z0-9]+$/
var reg2 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
var psd1 = document.querySelector('.psd1')
var psd2 = document.querySelector('.psd2')
var lv = document.querySelectorAll('.green')
var btn = document.querySelector('.tj')
psd1.addEventListener('blur', function() {
    if (reg2.test(psd1.value)) {
        lv[0].style.display = 'block'
        lv[0].innerHTML = '输入正确'
        lv[0].className = 'green'
    } else if (psd1.value.length == 0) {
        lv[0].style.display = 'block'
        lv[0].className = 'red'
        lv[0].innerHTML = '不能为空'
    } else {
        lv[0].style.display = 'block'
        lv[0].innerHTML = '输入有误'
        lv[0].className = 'red'
    }
})
psd2.addEventListener('blur', function() {
    if (reg.test(psd2.value)) {
        lv[1].style.display = 'block'
        lv[1].innerHTML = '输入正确'
        lv[1].className = 'green'
    } else if (psd2.value.length == 0) {
        lv[1].style.display = 'block'
        lv[1].className = 'red'
        lv[1].innerHTML = '不能为空'
    } else {
        lv[1].style.display = 'block'
        lv[1].innerHTML = '输入有误'
        lv[1].className = 'red'
    }
})

touch.on(btn, 'tap', function() {
    if (reg2.test(psd1.value) && reg.test(psd2.value)) {
        alert('登录成功')
        window.location.href = './1.html'
    } else {
        console.log('有bug!cnm');
    }
})
var yzm = document.querySelector('.yzm')

touch.on(yzm, 'tap', function() {
    window.location.href = './12.html'
})