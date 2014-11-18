
/*
Element = tag = Node


Element - type 1
Attribute - type 2
Text - type 3


document.getElementById('main')
document.querySelector('.active')
document.querySelectorAll('.active')


var columns = document.querySelectorAll('.columns');

for(var item in columns){
    columns[item].onclick = function(){
        this.style.display = "none";
    }
}
*/

$('.toggle').click(function(){
    $('.toggle + p').fadeToggle('Fast');
});