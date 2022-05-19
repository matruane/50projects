const images = document.querySelectorAll('.content')
const tabs = document.querySelectorAll('nav ul li')

tabs.forEach((tab, index) => {
  tab.addEventListener('mouseover', (e) => {
    clearTabs()
    setActiveTab(e.target, index)
  })
})

clearTabs = () => {
  images.forEach((image) => image.classList.remove('show'))
  tabs.forEach((tab) => tab.classList.remove('active'))
}

setActiveTab = (tab, index) => {
  tab.classList.add('active')
  images[index].classList.add('show')
}

clearTabs()
setActiveTab(tabs[0], 0)
