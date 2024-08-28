const lineClick = document.querySelectorAll(".active-portable-links")
const portableLink = document.querySelectorAll(".portable-link")
const portableLinks = document.querySelector(".portable-links")

lineClick.forEach(line => {
    line.addEventListener('mouseenter', () => {
        hiddenLine();
        showLink();
    })
    line.addEventListener('mouseout', () => {
        showLine();
        hiddenLink();
    })
})

portableLink.forEach(link => {
    link.addEventListener('mouseenter', () => {
        showLink();
        hiddenLine();
    })
    link.addEventListener('mouseout', () => {
        hiddenLink();
        showLine();
    })
})

function hiddenLine() {
    lineClick.forEach(line => {
        line.style.visibility = "hidden"
    })
}

function hiddenLink() {
    portableLink.forEach(link => {
        link.style.visibility = "hidden"
    })
}

function showLink() {
    portableLink.forEach(link => {
        link.style.visibility = "visible"
    })
}

function showLine() {
    lineClick.forEach(line => {
        line.style.visibility = "visible"
    })
}