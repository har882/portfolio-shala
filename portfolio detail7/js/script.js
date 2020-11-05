var i = 1;
var star = 0;
function mystar(no) {
  for( i = 1 ; i <= no ; i++ ){
      document.getElementById("star" + i).innerHTML = "★";
      document.getElementById("star" + i).style.color = "gold";
  }
  for (; i < 6 ; i++ ) {
    document.getElementById("star" + i).innerHTML = "☆";
    document.getElementById("star" + i).style.color = "gray";
  }
}
function myoutstar() {
  mystar(star);
}
function mystarclick(no){
  star = no;
  myoutstar();
}
