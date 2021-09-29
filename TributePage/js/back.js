const button = document.getElementById("backbtn")
const goBack = () =>{
    window.history.back();
};
button.addEventListener("click", (event) => {
    goBack();
})