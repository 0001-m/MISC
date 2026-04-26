function toggleAnswer () {
    let ans = document.getElementById(id);

    if(ans.style.display === "none" || ans.style.display === ""){
        ans.style.display = "block"
    }else{
        ans.style.display = "none"
    }
}