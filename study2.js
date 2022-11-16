let click = document.querySelector('.click');
click.addEventListener('click', function() {
    alert('hello');
}); // 클릭 이벤트 

// <button id = "click" class="mybtn"> click </button> // html 태그

window.onload = function() {
    var el = document.getElementById("my-div");
    el.onclick = hello;
}

function hello() {
    alert('안녕하세요');
} 

window.addEventListener('load', function(){
    var btn = document.querySelector('button');
btn.addEventListener('click', function(event, a, b, c){
    console.log('버튼 클릭.', event.clientX);
});
}); // 클릭 이벤트

const hi = function hi() {
    console.log('hello!');
};

const 