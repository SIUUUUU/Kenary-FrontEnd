function login(){
	username = document.getElementById("username").value;
	pass = document.getElementById("password").value;
	axios.get('http://localhost:8080/login/'+username+'/'+pass)
	.then(function(response){
		if(response.data["uPassword"] == pass){
			if(response.data["uType"] == "Estudiante"){
				window.localStorage.setItem("student",  username);
				window.location = "../modules/student/home.html";
			}else if(response.data["uType"] == "Tutor"){
				window.localStorage.setItem("tutor",  username);
				window.location = "../modules/tutor/home.html";
			}else{
				window.localStorage.setItem("admin",  username);
				window.location = "../modules/admin/home.html";
			}
		}else{
			alert("Datos de inicio de Sesion Erroneos");
		}
	})
	.catch(function(error){
		console.log(error)
	})
	.then(function (){

	});
}

function register(){
	name = document.getElementById("name").value;
	lastname = document.getElementById("lastname").value;
	username = document.getElementById("username").value;
	pass = document.getElementById("pass").value;
	repass = document.getElementById("repass").value;
	name = document.getElementById("name").value;
	date = document.getElementById("date").value;
	gender = document.getElementById("gender").value;
	grade = document.getElementById("grade").value;
	type = document.getElementById("type").value;
	career = document.getElementById("career").value;
	if(pass == repass){
		axios.post('http://localhost:8080/user',{
		"uPhoto": "mifoto.png",
		"uFirstName": name,
		"uLastName": lastname,
		"uUsername": username,
		"uPassword": pass,
		"uBirthday": date,
		"uCountry": "El Salvador",
		"uInstitution": "UCA",
		"uGender": gender,
		"uDegree": grade,
		"uType": type,
		"uCareer": career
	})
	.then(function(response){
		consolse.log(response);
	})
	.catch(function(error){
		console.log(error);
	})
	.then(function(){
		window.location = "login.html";
	});
	}else{
		alert("Las contraseñas no Coinciden");
	}
}

function getAllUsers(){
	var div = document.getElementById('userTable');
	var table = document.createElement('table');
	var tableBody = document.createElement('tbody');
  	table.appendChild(tableBody);
	axios.get('http://localhost:8080/usersList')
	.then(function(response){
		console.log(response.data[0]["uFirstName"]);
		for(i = 0 ; i< response.data.length; i++){
			console.log(i);
			var tr = document.createElement('tr');
			tableBody.appendChild(tr);
			for(key in response.data[i]){
				var td = document.createElement('td');
				td.appendChild(document.createTextNode(response.data[i][key]));
				tr.appendChild(td);
			}
		}
	})
	.catch(function(error){
		console.log(error);
	})
	.then(function(){
		
	});
	div.appendChild(table);

}
function validateDuplicate(username){
	axios.get('http://localhost:8080/login/'+username+'/123')
	  .then(function (response) {
		  if(response.data[""]){

		  }
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function getAllRequest()
{
	axios.get('http://localhost:8080/item')
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function getFilteredRequest()
{
	axios.get('http://localhost:8080/item', {
		params: {
			filter : 'myFilter'
		}
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function getByIdRequest()
{
	id = 10;
	axios.get('http://localhost:8080/user/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function postRequest()
{
	axios.post('http://localhost:8080/item', {
		data: 'NewItem'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function putRequest()
{
	id = 10;
	axios.put('http://localhost:8080/item/' + id, {
		data: 'NewItem'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function patchRequest()
{
	id = 10;
	axios.patch('http://localhost:8080/item/' + id, {
		data: 'NewItem'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function deleteRequest()
{
	id = 10;
	axios.delete('http://localhost:8080/item/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}
