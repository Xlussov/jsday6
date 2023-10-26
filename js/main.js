const autput = document.querySelector('.autput')
const ok = document.querySelector('.ok')

ok.addEventListener('click', function ok(){
   const inp = document.querySelector('.input').value
   const num = inp
   let fin = ''
   for(i = num; i >= 0; i--){
      let check2 = num % i
      if(check2 == 0){
         fin = fin + ' ' + i
         console.log(i);
      }else {}
   }
   autput.textContent = fin
})


const autput1 = document.querySelector('.autput1')
const ok1 = document.querySelector('.ok1')
ok1.addEventListener('click', function ok1(){
   const inp = document.querySelector('.input1').value
   let simple = ''
   for(i = 2; i <= inp; i++){
      let check1 = i % 2
      let check2 = i % 3
      let check3 = i % 5
      let check4 = i % 7
      if ((check1 > 0 && check2 > 0 && check3 > 0 && check4 > 0) || (i == 5 || i == 7)){
         simple = simple + ' ' + i
         console.log(i);
      }else {}
   }
   autput1.textContent = simple
})

