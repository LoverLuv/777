window.onscroll = function showHeader () {

    const header = document.querySelector ('.main__header')
    const mainText = document.querySelector ('.p--white-color')
    const mainItem = document.querySelector ('.main__item')
    
    if (window.pageYOffset > 1) {
        header.classList.add ('main__header--fixed')
        mainText.classList.add ('margin-top-text')
        mainItem.classList.add ('padding-bottom-text')
    } 
    
    else {
        header.classList.remove ('main__header--fixed')
        mainText.classList.remove ('margin-top-text')
        mainItem.classList.remove ('padding-bottom-text')
    }
}

