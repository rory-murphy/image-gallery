let currentImageIndex = 0;

function loadImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = getImageUrl(currentImageIndex);
    img.alt = 'Random Image';
    img.addEventListener('click', () => replaceImage(img));

    imageContainer.appendChild(img);
    gallery.appendChild(imageContainer);
}

function getImageUrl(index) {
    return `https://picsum.photos/1920/1080?random=${index}`;
}

function replaceImage(imageElement) {
    currentImageIndex = Math.floor(Math.random() * 1000);
    imageElement.src = getImageUrl(currentImageIndex);
}

function showNextImage() {
    currentImageIndex++;
    loadImages();
}

function showPreviousImage() {
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : 0;
    loadImages();
}

document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPreviousImage);

// Load images when the page loads
loadImages();