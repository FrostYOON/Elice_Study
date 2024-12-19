window.addEventListener("DOMContentLoaded", () => {
  const upload = document.getElementById("upload");
  const img = document.getElementById("img");
  const deleteBtn = document.getElementById("delete");

  function saveImageToLocalStorage(file) {
    localStorage.setItem("image", file);
  }

  function loadImageFromLocalStorage() {
    const imageData = localStorage.getItem("image");
    if (imageData) {
      img.src = imageData;
    }
  }

  upload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        saveImageToLocalStorage(imageData);
        img.src = imageData;
      }
      reader.readAsDataURL(file);
    }
  })

  deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("image");
    // localStorage.clear();
    img.src = "";
  })

  loadImageFromLocalStorage();
})