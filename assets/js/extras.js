document.getElementById("logOut").addEventListener("click",()=>{
    window.localStorage.setItem("student",  null);
    window.localStorage.setItem("admin",  null);
    window.localStorage.setItem("tutor",  null);
    session = null;
    window.location= "../../dist/login.html";
});