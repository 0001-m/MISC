function updateProfile(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let bio = document.getElementById("bio").value;

    document.getElementById("pname").innerText = name;
    document.getElementById("pemail").innerText = email;
    document.getElementById("pbio").innerText = bio;
}