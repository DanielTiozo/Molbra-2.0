const form = document.querySelector(".form")
const formDiv = document.querySelector(".form-sec")
const backForm = document.querySelector(".background-form")

const showForm = () => {
    formDiv.style.left = "49.6%";
    form.style.left = "50%";
    backForm.style.visibility = "visible";
}

const closeForm = () => {
    formDiv.style.left = "-1000px";
    form.style.left = "-1000px";
    backForm.style.visibility = "hidden";
}

