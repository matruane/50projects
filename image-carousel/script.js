const imgContainer = document.querySelector('.image-container')
const prevBtn = document.getElementById('left')
const nextBtn = document.getElementById('right')

const numImages = imgContainer.children.length

let current = 0

let interval

function run() {
  nextImage()
  updateImageContainer()
}

function updateImageContainer() {
  imgContainer.style.transform = `translateX(-${current * 500}px)`
  resetInterval()
}

function nextImage() {
  current = (current + 1) % numImages
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2e3)
}

prevBtn.addEventListener('click', () => {
  current = (current + numImages - 1) % numImages
  updateImageContainer()
})

nextBtn.addEventListener('click', () => {
  nextImage()
  updateImageContainer()
})

updateImageContainer()
