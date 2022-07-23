
//変数に格納
const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

// activeを付ける
btn.addEventListener('click', function(e){
  e.preventDefault();
  modal.classList.add('active');
  overlay.classList.add('active');
});

//activeクラスを外す
closeBtn.addEventListener('click', function(){
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

// activeクラスを外す
overlay.addEventListener('click', function() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});



// 送れません
function clickEvent() {
  alert("準備中です。御用の方はLINEまたはSlackにお願い致します。");
}