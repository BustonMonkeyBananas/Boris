let block_info = document.getElementsByClassName("block-info")[0];
let btn_close = document.getElementsByClassName("btn-close")[0];
let modal_info = document.getElementsByClassName("modal-info")[0];
block_info.onclick = () => {
    modal_info.classList.remove("hidden");
}

btn_close.onclick = () => {
    modal_info.classList.add("hidden");
}