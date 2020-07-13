var lis = document.getElementsByTagName('li');
var ul = document.getElementsByTagName('ul')[0];
var last = null;
var closeBtn = document.getElementsByClassName('close');
setTimeout(function(){
    ul.className = '';
},200)
Object.values(lis).forEach(function (li, index) {
    li.onclick = function(){
        ul.setAttribute('id','activeWrap');
        last && last.classList.remove('active');
        this.classList.add('active');
        last = this;
    }
    closeBtn[index].onclick = function(ev){
        ev.stopPropagation();
        ul.removeAttribute('id');
        lis[index].className = '';
        last = null;
    }
});