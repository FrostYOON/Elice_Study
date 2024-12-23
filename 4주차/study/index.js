this.addEventListener('DOMContentLoaded',()=>{
  const uploadElement = document.getElementById('upload')
  const imageElement = document.getElementById('image')
  const deleteElement = document.getElementById('delete')
  const uploadModalElement = document.getElementById('uploadModal')
  const toggleImageUploadElement = document.getElementById('toggleImageUpload')
  const imagePreviewElement = document.getElementById('imagePreview')
  const saveElement = document.getElementById('save')
  const closeElement = document.getElementById('close')


  function saveImageToLocalStorage(data){
      localStorage.setItem('image', data)
      imageElement.src=data;
  }

  function loadImageFromLocalStroage(){
      const image = localStorage.getItem('image');
      if(image){
          imageElement.src = image
      }
  }
  saveElement.addEventListener('click', ()=>{
      if(imagePreviewElement.src){
          saveImageToLocalStorage(imagePreviewElement.src)
          uploadModalElement.close();

      }

  })
  window.addEventListener('keydown', (e)=>{
      if(e.key ==='Escape')
          uploadModalElement.close();
  })
  closeElement.addEventListener('click', (e)=>{
      uploadModalElement.close();
  })

  toggleImageUploadElement.addEventListener('click', (e)=>{
      uploadModalElement.showModal();
  })

  uploadElement.addEventListener('change', (e)=>{
      console.log(e)
      const file = e.target.files[0];
      if(file){
          const reader = new FileReader()
          reader.onload = function(e) {
              const imageData = e.target.result;
              imagePreviewElement.src = imageData
          }
          reader.readAsDataURL(file)
      }
  })
  deleteElement.addEventListener('click', ()=>{
      localStorage.removeItem('image')
      // localStorage.clear()
      imageElement.src = ''
  })

  loadImageFromLocalStroage();
})