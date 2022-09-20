function change(el){
	console.log(el);
	var list = document.getElementsByClassName("shape");
	for (var i = 0; i < list.length; i++) {
		list[i].classList.remove("activ");
	}
	el.closest('.shape').classList.add("activ");
	document.getElementsByClassName("shape");
	console.log(list);
	
}