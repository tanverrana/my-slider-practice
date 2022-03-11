const images = [
    "images/img-1.jpeg",
    "images/img-2.jpeg",
    "images/img-3.jpeg",
    "images/img-4.jpeg",
    "images/img-5.jpeg"
];
let imageIndex = 0;
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    console.log(imgUrl)
    imageIndex++;
}, 1000)