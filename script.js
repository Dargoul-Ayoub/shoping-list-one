


var text = document.querySelector("input");
var button = document.querySelector("button");
var list=document.querySelector("ul");
var btn =document.createElement("button");
var i=0;

function addToTheList(){
	var textDelete=document.createTextNode("delete");
    var btnDlt=document.createElement("button");
    btnDlt.appendChild(textDelete);
	var li = document.createElement("li");
	var textNode =document.createTextNode(text.value);
	li.appendChild(textNode);
	li.appendChild(btnDlt);
	li.addEventListener("click",deleteChild);
	list.appendChild(li);
	text.value="";
}

button.addEventListener("click",function(){
	if(text.value.length>0){
		addToTheList();
}
})

text.addEventListener("keypress",function(event){
	
if(event.keyCode === 13 && text.value.length>0){
	addToTheList();
}
})

function deleteChild(event){
	event.target.parentNode.remove();
	console.log(event);
}

