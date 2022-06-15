'use strict';
let domen = document.location.pathname;
if(domen == '/index.html'){
document.querySelector('button').addEventListener('click', () => {
    let name = document.getElementById('name').value
        , reg_name = /^[a-zа-я]+$/i;
    if (!reg_name.test(name)) {
        alert('error');
        document.getElementById('name').value = '';
    } else {
        localStorage.setItem('name', name);
        location.href = "task_1.html";
    }
});
}

else if(domen == '/task_1.html') {
  
    document.querySelector('div[class="choice"]').addEventListener('click', () => {
      let rightAnswers = 0;
      for(let i = 1; i<=4; i++){
        let _element = document.getElementById(String(i));
        
        console.log(_element.value)
        }
    });

}