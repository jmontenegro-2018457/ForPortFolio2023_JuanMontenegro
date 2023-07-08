
var lista = document.getElementById("myUL");
var myNodelist = document.getElementsByTagName("LI");
var i;
var j =1;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var span1 = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  var editImg = document.createElement("img");
  var upS = document.createTextNode("Ʌ");
  var downS = document.createTextNode('V');
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span1.className = "arriba";
  span1.appendChild(upS);
  span2.className = "abajo";
  span2.appendChild(downS);
  editImg.className = "edit";
  editImg.src = 'https://cdn-icons-png.flaticon.com/512/45/45706.png'
  myNodelist[i].appendChild(span1);
  myNodelist[i].appendChild(span2);
  myNodelist[i].appendChild(editImg);
  myNodelist[i].appendChild(span);
}



var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var edit = document.getElementsByClassName("edit");

for(i = 0; i < edit.length; i++){
 
  edit[i].onclick = function(){
    var div = this.parentElement;
    var info = div.innerHTML;
    var inf = info.split('<');
    document.getElementById("myInput").value = inf[0];
    div.style.display = "none";
 
  }
  
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Debes escribir algo!");
    } else {
      lista.appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var span1 = document.createElement("SPAN");
    var span2 = document.createElement("SPAN");
    var editImg = document.createElement("img");
    var upS = document.createTextNode("Ʌ");
    var downS = document.createTextNode("V");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span1.className = "arriba";
    span1.appendChild(upS);
    span2.className = "abajo";
    span2.appendChild(downS);
    editImg.className = "edit";
    editImg.src = 'https://cdn-icons-png.flaticon.com/512/45/45706.png'
    myNodelist[i].appendChild(span1);
    myNodelist[i].appendChild(span2);
    myNodelist[i].appendChild(editImg);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    for(i = 0; i < edit.length; i++){
 
      edit[i].onclick = function(){
        var div = this.parentElement;
        var info = div.innerHTML;
        var inf = info.split('<');
        document.getElementById("myInput").value = inf[0];
        div.style.display = "none";
     
      }
      
    }

    for (i = 0; i < up.length; i++) {
      up[i].onclick = function() {
        var div = this.parentElement;
        var lugar = Array.prototype.indexOf.call(div.parentNode.children, div);
        lista.insertBefore(div, lista.children[lugar-1]);
      }
      
    }

    for (i = 0; i < down.length; i++) {
      down[i].onclick = function() {
        var div = this.parentElement;
        var lugar = Array.prototype.indexOf.call(div.parentNode.children, div);
        lista.insertBefore(div, lista.children[lugar+2]);
      }
  
    }


  }


  var up = document.getElementsByClassName("arriba");

  for (i = 0; i < up.length; i++) {
    up[i].onclick = function() {
      var div = this.parentElement;
      var lugar = Array.prototype.indexOf.call(div.parentNode.children, div);
      lista.insertBefore(div, lista.children[lugar-1]);
    }
    
  }


  var down = document.getElementsByClassName("abajo");

  for (i = 0; i < down.length; i++) {
    down[i].onclick = function() {
      var div = this.parentElement;
      var lugar = Array.prototype.indexOf.call(div.parentNode.children, div);
      lista.insertBefore(div, lista.children[lugar+2]);
    }

  }