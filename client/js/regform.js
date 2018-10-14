document.querySelector(".user-pic-input").addEventListener("change", updatePicture);


function updatePicture() {
    let input = document.querySelector(".user-pic-input");
    let img = document.querySelector(".user-pic");
    let files = input.files;
    if (files.length !== 0){
        img.src = URL.createObjectURL(files[0]);
    }
}