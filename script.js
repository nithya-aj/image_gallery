const imageUrls = [
    'assets/aesthetic.jpg',
    'assets/architecture.jpg',
    'assets/bike.jpg',
    'assets/car.jpg',
    'assets/creative-photography.jpg',
    'assets/digital-art.jpg',
    'assets/drawings.jpg',
    'assets/earphone.jpg',
    'assets/fruits.jpg',
    'assets/glass.jpg',
    'assets/icecream.jpg',
    'assets/lakes.jpg',
    'assets/modern-house.jpg',
    'assets/mountain-landscape.jpg',
    'assets/nail-art.jpg',
    'assets/photography-camera.jpg',
    'assets/road-photography.jpg',
    'assets/sweets.jpg',
    'assets/street-photography.jpg',
    'assets/travel-photography.jpg'
]

function populateGallery() {
    const gallery = document.querySelector('.gallery-items')
    imageUrls.forEach(url => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = url
        img.alt = 'image'
        li.appendChild(img)
        gallery.appendChild(li)
    })
}

populateGallery()