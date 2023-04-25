

function displayImage() {
  const file = document.getElementById("fileUpload").files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const imagePreview = document.getElementById("imagePreview");
    const imageBackground = document.querySelector('.avatar-bg');
    const remove = document.querySelector('.remove')
    imagePreview.src = e.target.result;
    imagePreview.style.display = "block";
    imageBackground.style.display = "block";
    remove.style.display = "block";
  }

  reader.readAsDataURL(file);
//   document.getElementById("fileName").innerHTML = file.name;
}

function removeImage(){
    const imageBackground = document.querySelector('.avatar-bg');
    imageBackground.style.display = "none";

}