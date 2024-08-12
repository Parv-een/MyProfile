// alert('hello');

const closeModalBtn = document.getElementById("close_modal");
const modal =document.getElementById("modal");

closeModalBtn.addEventListener('click',function() {
    modal.classList.add("hide");
}
);