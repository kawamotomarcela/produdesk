document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btn-salvar').addEventListener('click', function() {
        showModal();
    });

    document.querySelector('.close').addEventListener('click', function() {
        closeModal();
    });
});

function showModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
