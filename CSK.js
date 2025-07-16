let likesBtn=document.querySelector('#likes-btn');
let dislikesBtn=document.querySelector('#dislikes-btn');
let likesEle=document.querySelector('#likes');
let dislikesEle=document.querySelector('#dislikes');
let totalEle=document.querySelector('#total');

let likes=0;
let dislikes=0;
let total=0;

likesEle.textContent=likes;
dislikesEle.textContent=dislikes;
totalEle.textContent=likes+dislikes;

function likesCount(){
    likes++;
    likesEle.textContent=likes;
    updateTotal();
}
likesBtn.addEventListener('click', likesCount);
function dislikesCount(){
    dislikes++;
    dislikesEle.textContent=dislikes;
    updateTotal();
}
dislikesBtn.addEventListener('click', dislikesCount);
function updateTotal(){
    totalEle.textContent=likes+dislikes;
}
