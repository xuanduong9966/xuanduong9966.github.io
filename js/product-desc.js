//Code to handle color choice
let color = document.getElementById("color");
let color1 = document.getElementById("color1");
let mag_img = document.getElementById("mag-image");
let imgArr = document.getElementsByClassName("min-image");
let colorArr = document.getElementsByClassName("choose-color");
function setBlueColor() {
  color.innerHTML = "Xanh Aqua";
  color1.innerHTML = "Xanh Aqua";
  for (let i = 0; i < colorArr.length; i++) {
    colorArr[i].classList.remove("choose-color-amp");
  }
  colorArr[0].classList.add("choose-color-amp");
  imgArr[0].src = "./ảnh/mag-photo-1a.jpg";
  imgArr[1].src = "./ảnh/mag-photo-2a.jpg";
  imgArr[2].src = "./ảnh/mag-photo-3a.jpg";
  imgArr[3].src = "./ảnh/mag-photo-4a.jpg";
  imgArr[4].src = "./ảnh/mag-photo-5a.jpg";
  imgArr[5].src = "./ảnh/mag-photo-6a.jpg";
  mag_img.src = "./ảnh/mag-photo-1a.jpg";
}

let images = document.querySelectorAll(".min-image");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    mag_img.src = images[i].src;
    for (let j = 0; j < images.length; j++) {
      images[j].classList.remove("min-image-amp");
    }
    images[i].classList.add("min-image-amp");
  });
}

function setBlackColor() {
  color.innerHTML = "Ghi đen";
  color1.innerHTML = "Ghi đen";
  for (let i = 0; i < colorArr.length; i++) {
    colorArr[i].classList.remove("choose-color-amp");
  }
  colorArr[1].classList.add("choose-color-amp");
  imgArr[0].src = "./ảnh/mag-photo-1b.jpg";
  imgArr[1].src = "./ảnh/mag-photo-2b.jpg";
  imgArr[2].src = "./ảnh/mag-photo-3b.jpg";
  imgArr[3].src = "./ảnh/mag-photo-4b.jpg";
  imgArr[4].src = "./ảnh/mag-photo-5b.jpg";
  imgArr[5].src = "./ảnh/mag-photo-6b.jpg";
  mag_img.src = "./ảnh/mag-photo-1b.jpg";
}

// Code to handle size choice
let size = document.getElementById("size");
let size1 = document.getElementById("size1");
let sizeDesc = document.getElementById("size-desc");
let sizeArr = document.getElementsByClassName("choose-size");

function setMSize() {
  size.innerHTML = "M";
  size1.innerHTML = "M";
  sizeDesc.innerHTML = "(1m60 - 1m64, 51kg - 60kg)";
  for (let i = 0; i < sizeArr.length; i++) {
    sizeArr[i].classList.remove("size-picked");
  }

  sizeArr[0].classList.add("size-picked");
}

function setLSize() {
  size.innerHTML = "L";
  size1.innerHTML = "L";
  sizeDesc.innerHTML = "(1m65 - 1m70, 61kg - 70kg)";
  for (let i = 0; i < sizeArr.length; i++) {
    sizeArr[i].classList.remove("size-picked");
  }
  sizeArr[1].classList.add("size-picked");
}

function setXLSize() {
  size.innerHTML = "XL";
  size1.innerHTML = "XL";
  sizeDesc.innerHTML = "(1m70 - 1m74, 71kg - 80kg)";
  for (let i = 0; i < sizeArr.length; i++) {
    sizeArr[i].classList.remove("size-picked");
  }
  sizeArr[2].classList.add("size-picked");
}

function set2XLSize() {
  size.innerHTML = "2XL";
  size1.innerHTML = "2XL";
  sizeDesc.innerHTML = "(Trên 1m75, 81kg - 85kg)";
  for (let i = 0; i < sizeArr.length; i++) {
    sizeArr[i].classList.remove("size-picked");
  }
  sizeArr[3].classList.add("size-picked");
}
