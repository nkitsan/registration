document.querySelector(".user-pic-input").addEventListener('change', updatePicture);;
console.log("Event added");

function updatePicture() {
    let input = document.querySelector(".user-pic-input");
    let img = document.querySelector(".user-pic");
    let files = input.files;
    if (files.length !==0 && (files[0].type === 'image/jpeg' || files[0].type === 'image/png')){
        img.src = URL.createObjectURL(files[0]);
    }
}