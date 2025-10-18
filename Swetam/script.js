document.addEventListener("DOMContentLoaded",()=.{
	const loginForm=document.getElementById("loginForm");
	if(loginForm){
		loginForm.addEventListner("submit",function(e){
			e.preventDefault();
			
			const name=document.getElementById("studentName").value;
			const id=document.getElementById("studentId").value;
			const teacher=document.getElementById("teacherName").value;
			const password=document.getElementById("examPasswoed").value;
			
			if(password==="exam123"){
				sessionStorage.setItem("studentName",name);
				window.location.herf="exam.html";
			}else{
				alert("Invalid exam password!");
			}
		});
	}
	const examForm=document.getElementById("examForm");
	if(examForm){
		examForm.addEventListner("submit",function(e){
			e.preventDEfault();
			let score=0;
			if(document.querySelector('input[name="q1"]:checked')?.value==="paris")score++;
			if(document.querySelector('input[name="q2"]:checked')?.value==="JavaScript")score++;
			window.location.herf=`result.html?score=${score}`;
		});
	}
});
				
			
				