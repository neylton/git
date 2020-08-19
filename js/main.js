window.addEventListener('load',function(){
	let form = document.querySelector('.form');
	form.addEventListener('submit',function(e){
		e.preventDefault();
		let formData = new FormData(this);
		let xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('POST',this.action);
		xhr.addEventListener('load',function(event){
			console.log(this.response);
			let res = this.response;
			if(res.error){
				new Alerts({message : res.response.message, type:'error'});
			}else if(!res.error){
				new Alerts({message : res.response.message, type:'success'});	
				location.reload();
				//atualizar página caso os dados seja cadastrado!			
			}
		})
		xhr.send(formData);

	})
});