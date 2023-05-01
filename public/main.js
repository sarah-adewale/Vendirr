
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

}

function removeImage(){
    const imageBackground = document.querySelector('.avatar-bg');
    imageBackground.style.display = "none";

}

const copyTextareaBtn = document.querySelector('.js-textareacopybtn');

        copyTextareaBtn.addEventListener('click', (event) => {
            const copyTextarea = document.querySelector('.js-copytextarea');
            copyTextarea.focus();
            copyTextarea.select();

            try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            } catch (err) {
                    console.log('Oops, unable to copy');
                }

        });
