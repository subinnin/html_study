const $popup= document.querySelector("#popup");
// $button or _button -> button앞에 숫자 x
$popup.children[1].addEventListener("click", dat);
function dat() {
    $popup.style.display ="none";
}
const $popdown = document.querySelector("#popdown");
$popdown.addEventListener("click", bo);
function bo() {
    $popup.style.display ="block";}

    
const $subMenu12 = document.querySelector("nav li:first-child a:last-child");
function red() {
     $subMenu12.style.background = 'red'
    }

/*const $blue12 = document.querySelector(".subMenu").children[0];
$blue12.addEventListener("click",blue12)
function blue12(){
    $blue12.style.color="blue";
    $blue12.style.textDecoration = 'none';
}*/

const $tomato12 = document.querySelector("#popup");
$tomato12.addEventListener("click",tomato00)
    function tomato00() {
        $tomato12.style.background= 'tomato';
    }

const $pink12 = document.querySelector("nav li:last-child a:last-child");
function pink(){
    $pink12.style.background ='pink'
}

//const $red11 = document.querySelector("nav li:nth-of-child[3] a:first-child");
//function lred(){
   // $red11.style.color='red'
//}


const $red12 = document.querySelectorAll(".subMenu")[1].children[1];
$red12.addEventListener("click",red22)
function red22() {
    $red12.style.color = "red";
    $red12.style.background = 'black';
}


