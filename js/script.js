const form = document.getElementById("formKontak");
const hasilForm = document.getElementById("hasilForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;

    hasilForm.textContent = "Terima kasih, " + nama + ". Pesan berhasil dikirim.";
    hasilForm.style.color = "green";

    form.reset();
});