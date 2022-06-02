 var yzm = document.querySelector('.fs')
 var num = 6
 var timer = null
 var sum = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)
 yzm.addEventListener('click', function() {
     clearInterval(timer)
     timer = setInterval(function() {
         num--
         if (num > 0) {
             yzm.innerHTML = `${num}秒后重试`

         } else {
             yzm.innerHTML = `发送验证码`
             num = 6
             alert(`您的验证吗是${sum}`)
             clearInterval(timer)
         }

     }, 1000)
 })
 console.log(sum);
 var reg = /^[A-Za-z0-9]+$/
 var psd1 = document.querySelector('.psd1')
 var psd2 = document.querySelector('.psd2')
 var psd3 = document.querySelector('.psd3')
 var psd4 = document.querySelector('.psd4')
 var lv = document.querySelectorAll('.green')
 var btn = document.querySelector('.tj')
 psd1.addEventListener('blur', function() {
     if (reg.test(psd1.value)) {
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
     if (this.value == sum) {
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
 psd3.addEventListener('blur', function() {
     if (reg.test(psd3.value)) {
         lv[2].style.display = 'block'
         lv[2].innerHTML = '输入正确'
         lv[2].className = 'green'
     } else if (psd3.value.length == 0) {
         lv[2].style.display = 'block'
         lv[2].className = 'red'
         lv[2].innerHTML = '不能为空'
     } else {
         lv[2].style.display = 'block'
         lv[2].innerHTML = '输入有误'
         lv[2].className = 'red'
     }
 })
 psd4.addEventListener('blur', function() {
     if (this.value == psd3.value) {
         lv[3].style.display = 'block'
         lv[3].innerHTML = '输入正确'
         lv[3].className = 'green'
     } else if (psd3.value.length == 0) {
         lv[3].style.display = 'block'
         lv[3].className = 'red'
         lv[3].innerHTML = '不能为空'
     } else {
         lv[3].style.display = 'block'
         lv[3].innerHTML = '输入有误'
         lv[3].className = 'red'
     }
 })
 btn.addEventListener('click', function() {
     if (psd4.value == psd3.value && reg.test(psd1.value) && psd2.value == sum && reg.test(psd1.value)) {
         alert('修改成功')
         window.location.href = './1.html'
     } else {
         console.log('有bug!cnm');
     }
 })