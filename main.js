function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState=="4" && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send(null);
}
//json("data.json",function(text){
	//let d=JSON.parse(text);
	//console.log(d);
	//carr(d.carrier);
	//basics(d.basicdetails);
	//edu(d.education);
	//techskills(d.skills);
	//achivements(d.achivement);
	//description(d.description);
//})

//fetch API
fetch("data.json")
.then(function(response){
return response.json();
})
.then(function(d){
console.log(d);

})

var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);

function basics(basic){
	var i=document.createElement("img");
	i.src=basic.image;
	i.alt="profile photo";
	l.appendChild(i);
	var nam=document.createElement("h3");
	nam.textContent=basic.name;
	l.appendChild(nam);

var k=document.createElement("h3");
k.textContent=basic.email;
l.appendChild(k);
var a=document.createElement("h3");
a.textContent=basic.phnno;
l.appendChild(a);
}

var r=document.createElement("div")
r.classList.add("right");
main.appendChild(r);

function edu(e){
	var e1=document.createElement("div");
	e1.classList.add("educa");
	r.appendChild(e1);
	var head=document.createElement("h2");
	head.textContent="Educational Details";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
	for(var i=0;i< e.length;i++){
		var h=document.createElement("h2");
		h.textContent=e[i].course;
		e1.appendChild(h);
		var u=document.createElement("ul");
		e1.appendChild(u);
		var list=document.createElement("li");
		list.textContent=e[i].college;
		u.appendChild(list);
		var list1=document.createElement("li");
		list1.textContent=e[i].percentage;
		list.appendChild(list1);
	}
	function carrier(c){
		var c1=document.createElement("div");
		c1.textContent="carrier set";
		r.appendChild(c1);
		var h1=document.createElement("h1");
		h1.textContent="carrier objective";
		c1.appendChild(h1);
		h1.appendChild(document.createElement("HR"));
		var para=document.createElement("p");
		para.textContent=car.ca;
		c1.appendChild(para);
		
	}

function techskills(s){
	var d=document.createElement("div");
	d.textContent="Skills Set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0; i<s.length; i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function achivements(ach){
	var a1=document.createElement("div");
	a.appendChild(a1);
	var f1=document.createElement("f1");
	f1.textContent="achivements";
	a1.appendChild(f1);
	f1.appendChild(document.createElement("HR"));
	for(i in ach){
		var u=document.createElement("u1");
		d.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ach[i];
		u.appendChild(list);
	}

}
function description(dec){
	var d1=document.createElement("div");
	b.appendChild(d1);
	var f1 =document.createElement("f1");
	f1.textContent="description";
	d1.appendChild(f1);
	f1.appendChild(document.createElement("HR"));


}


