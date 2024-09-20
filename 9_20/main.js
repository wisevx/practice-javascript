function changecolor(){
document.getElementById("text").style.color = "red";
}

//document.get ElementById("text").style.color = "red";
/*これは、ドキュメントの中の「text」というIdを持っているタグのスタイルの色を赤にしてください*/
let count = 0;
function increaseCount(){
count++;
document.getElementById("counter").innerText=count;
if(count==5){
    count = -1;
}
}

function dicreaseCount(){
    count--;
    document.getElementById("counter").innerText=count;
    if(count==-5){
        count = 1;
    }
}