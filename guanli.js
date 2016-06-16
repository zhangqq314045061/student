var students=(localStorage.students)?(JSON.parse(localStorage.students)):[];
// console.log(students);
var table=document.querySelector('table');
var thead=document.querySelector('thead');
var tbody=document.querySelector('tbody');
// console.log(table,thead,tbody);
var add=document.querySelector('.xinjian');
var del=document.querySelector('.shanchu');
// console.log(add);
// add.addEventListener('click',function(){
// 	var xuehao=(students.length)?(students[students.length-1].id+1):10001;
// 	var  stu={id:xuehao,name:'',sex:'',age:''};
// 	students.push(stu);
// 	localStorage.students=JSON.stringify(students);

// render();
	
// })
// var
// arr=[],
// forEach=arr.forEach,
// filter=arr.forEach;
// var render=function(){
//   	tbody.innerHTML='';
//   	students.forEach(function(v){
//         tr = document.createElement('tr');
// 		 tr.setAttribute('data-id',v.id);
// 		tr.innerHTML = '<td>'+v.id+'</td><td active="name">'+v.name+'</t0d><td active="sex">'+v.sex+'</td><td active="age">'+v.age+'</td><td><input type="checkbox" class="ck" value="'+v.id+'"></td>';;
// 		tbody.appendChild( tr );
//   	})
//   }
//   render();

var arr=[],
forEach=arr.forEach,
filter=arr.filter;
function render(){
	console.log(tbody)
tbody.innerHTML='';
students.forEach(function(v){
	var tr=document.createElement('tr');
	tr.setAttribute('data-id',v.id)
	tr.innerHTML = '<td>'+v.id+'</td><td active="name">'+v.name+'</t0d><td active="sex">'+v.sex+'</td><td active="age">'+v.age+'</td><td><input type="checkbox" class="ck" value="'+v.id+'"></td>';
	tbody.appendChild(tr);
})
}
function shanchu(xuehao){
	var xuehao=Number(xuehao);
	var arr=[];
	students.forEach(function(v){
		if(v.id!==xuehao){
			arr.push(v);
		}
		students=arr;
	localStorage.setItem('students',JSON.stringify(students))

	})
}
del.addEventListener('click',function(){
	// alert(2);
	var els=tbody.querySelectorAll('.ck');
	forEach.call(els,function(v){
      if(v.checked){
			tbody.removeChild(v.parentElement.parentElement)
			shanchu(v.value)
		}
	})
})

add.addEventListener('click',function(){
	var xuehao=(students.length)?(students[students.length-1].id+1):10001;
	var stu={id:xuehao,name:'',sex:'',age:''};
	students.push(stu);
	localStorage.students=JSON.stringify(students);
	render();
})
render();

var toggleCheck=document.querySelector('.cks');
toggleCheck.onclick=function(){
	var els=document.querySelectorAll('.ck');
var ff=this;
	forEach.call(els,function(v){
		v.checked=ff.checked;

	})
}

 function  ckhandler(){
 	els=tbody.querySelectorAll('.ck');
 	console.log(els);
 	for(var i=0,j=0;i<els.length;i++){
 		if(els[i].checked){j+=1}
 			// console.log(j);
 	}
 toggleCheck.checked=(j===els.length);
 console.log(j);

}

// tbody.addEventListener('click',function(e){

// 	var el=e.target;
// 	console.log(e);
// 	if(el.classList.contains("ck")){
// 		ckhandler(el,e)
// 	}
// 	if(el.tagName==='TD'){
// 		var els = tbody.querySelectorAll(".editing");
// 		forEach.call(els,function(v){
// 			bianji(v);
// 		})
		
// 		bianji(el.parentElement);
		
// 	}	
// })

function bianji(tr){
		var els=tr.querySelectorAll("td[active]");
		if(tr.classList.contains("editing")){
			tr.classList.remove('editing');
			for(var i=0,el,tmp;i<els.length;i++){
				el=els[i];
				tmp=el.querySelector('input').value;
				el.innerHTML=tmp;

			}
			
		}else{
			tr.classList.add('editing')
			for(var i=0,el,tmp;i<els.length;i++){    
				el=els[i];
				tmp=el.innerHTML;  
				el.innerHTML='<input type="text" value="'+tmp+'">'
			}
		}	
	}


	thead.addEventListener('click',function(e){
		var el = e.target;
		console.log(el);
	if(el.nodeName==='TD'){
		var sortKey=el.getAttribute('data-id');
		var state = (el.getAttribute('flag')==='true')?true:false;
		console.log(state)
		el.setAttribute('flag',!state);
		students=students.sort(function(x,y){
			return state?(x[sortKey]>y[sortKey]):(x[sortKey]<y[sortKey]);
		})
		render();

	}})

table.onkeyup=function(e){
       	 var el=e.target;console.log(el) 
       	 var 
       	 xuehao=el.parentElement.parentElement.getAttribute("data-id"),

       	 k=el.parentElement.getAttribute("active");
       	 v=el.value;
       	 update(xuehao,k,v);  

       }


	function update(xuehao,k,v){
        xuehao=Number(xuehao); 
        for(var i in students){
        	// var id=parseInt(id);  
        	if(xuehao===students[i].id){
        		students[i][k]=v;
        	
        	 localStorage.students=JSON.stringify(students);
        }
       }
   }

















