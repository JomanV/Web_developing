'use strict';
let domen = document.location.href;
for(let i=domen.length; i>=0; i--){
  domen = (domen[i]== "/" ) ? domen.slice(i): domen;
}
if (domen == '/index.html') {
  localStorage.clear();
  document.querySelector('.button').addEventListener('click', () => {
    let name = document.getElementById('name').value
      , reg_name = /^[a-zа-я]+$/i;
    if (!reg_name.test(name)) {
      alert('error');
      document.getElementById('name').value = '';
    }
    else {
      localStorage.setItem('Name', name);
      location.href = "task_1.html";
    }
  });
}
else if (domen == '/page_result.html') {
  let sum = 0;
  for (let i = 1; i<=5;i++){
    sum += Number(localStorage.getItem('Right Answers_' + String(i)));
  }
  name = localStorage.getItem('Name');
  document.getElementById("react_text").innerHTML = (sum*5 < 70) ? `Попробуйте, еще раз, ${name}. У вас все получиться!`: 
  (sum*5 <= 80) ? `Поздравляем, ${name}! У вас много знаний об языке html!`: 
  `Невероятно, ${name}! Вы знаете язык html на высшем уровне!`;
  document.getElementById("result").innerHTML = `${sum*5}%`;
  document.querySelector('.button').addEventListener('click', () =>{
    localStorage.clear();
    location.href = 'index.html';
  })
}
else {
  for (let j = 1; j <= 5; j++) {
    if (domen == '/task_' + String(j) + '.html') {
      let rightAnswers = 0;
      document.querySelector('.button').addEventListener('click', () => {
        rightAnswers = 0;
        for (let i = 1; i <= 4; i++) {
          let _element = document.getElementById(String(i));
          if (_element.checked == _element.value) rightAnswers += 1;
        }
        localStorage.setItem('Right Answers_' + String(j), rightAnswers);
        location.href = j != 5 ? "task_" + String(j + 1) + ".html" : 'page_result.html';
      });
    }
  }
}