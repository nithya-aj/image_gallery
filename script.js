const images = [
    { url: 'assets/aesthetic.jpg', category: 'Nature' },
    { url: 'assets/architecture.jpg', category: 'Architecture' },
    { url: 'assets/bike.jpg', category: 'Vehicle' },
    { url: 'assets/car.jpg', category: 'Vehicle' },
    { url: 'assets/creative-photography.jpg', category: 'Photography' },
    { url: 'assets/digital-art.jpg', category: 'Art' },
    { url: 'assets/drawings.jpg', category: 'Art' },
    { url: 'assets/earphone.jpg', category: 'Gadgets' },
    { url: 'assets/fruits.jpg', category: 'Food' },
    { url: 'assets/glass.jpg', category: 'Eyewear' },
    { url: 'assets/icecream.jpg', category: 'Food' },
    { url: 'assets/lakes.jpg', category: 'Nature' },
    { url: 'assets/modern-house.jpg', category: 'Architecture' },
    { url: 'assets/mountain-landscape.jpg', category: 'Nature' },
    { url: 'assets/nail-art.jpg', category: 'Art' },
    { url: 'assets/photography-camera.jpg', category: 'Photography' },
    { url: 'assets/road-photography.jpg', category: 'Photography' },
    { url: 'assets/sweets.jpg', category: 'Food' },
    { url: 'assets/street-photography.jpg', category: 'Photography' },
    { url: 'assets/travel-photography.jpg', category: 'Photography' },
];

const galleryP = document.querySelector('.tag')
// to load images 
function populateGallery() {
    const gallery = document.querySelector('.gallery-items')
    gallery.innerHTML = '';
    images.forEach(image => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const p = document.createElement('p')
        img.src = image.url
        img.alt = 'image'
        p.textContent = image.category
        li.appendChild(p)
        li.appendChild(img)
        gallery.appendChild(li)
    })
}

// to filter images
function filterImages(query) {
    const lowerCaseQuery = query.toLowerCase()
    const filteredImages = images.filter(image => {
        const lowerCaseCategory = image.category.toLowerCase()
        return lowerCaseCategory.includes(lowerCaseQuery)
    })
    const gallery = document.querySelector('.gallery-items')
    gallery.innerHTML = ''
    filteredImages.forEach(image => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const p = document.createElement('p')
        img.src = image.url
        img.alt = 'image'
        p.textContent = image.category
        li.appendChild(p)
        li.appendChild(img)
        gallery.appendChild(li)
    })
}

// to fetch query by the user
const searchInput = document.querySelector('input[type="text"]')
searchInput.addEventListener('input', function () {
    const query = this.value.trim()
    if (query !== '') {
        filterImages(query)
        galleryP.textContent = 'Search results';
    } else {
        populateGallery()
        galleryP.textContent = 'All images';
    }
})

populateGallery()

