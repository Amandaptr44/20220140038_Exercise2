window.onload = function() {
    updateTanggal();
    setInterval(updateTanggal, 1000); 

    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    var formattedDate = year + '-' + month + '-' + day;
    document.getElementById("tanggal").value = formattedDate;
}

function updateTanggal() {
    var today = new Date();
    var date = today.getFullYear() + '-' + addZero(today.getMonth() + 1) + '-' + addZero(today.getDate());
    var time = addZero(today.getHours()) + ":" + addZero(today.getMinutes()) + ":" + addZero(today.getSeconds());
    document.getElementById("tanggalHariIni").innerHTML = "Tanggal hari ini: " + date + " " + time;
}

function addZero(num) {
    return (num < 10 ? '0' : '') + num;
}

function kirimData() {
    var nama = document.getElementById("nama").value;
    var domisili = document.getElementById("domisili").value;
    var favorit = document.getElementById("member").value; // Menggunakan ID yang benar
    var card = document.querySelector('input[name="card"]:checked');
    var tanggal = document.getElementById("tanggal").value;

    if (nama === "" || domisili === "" || favorit === "" || card === null || tanggal === "") {
        alert("Harap lengkapi semua field!");
        return;
    }

    var cardText = "";
    if (card) {
        cardText = card.nextElementSibling.textContent;
    }

    var data = {
        nama: nama,
        domisili: domisili,
        favorit: favorit,
        card: cardText,
        tanggal: tanggal
    };

    var message = "Data yang Anda masukkan:\n\n";
    message += "Nama: " + data.nama + "\n";
    message += "Domisili: " + data.domisili + "\n";
    message += "Member Favorit: " + data.favorit + "\n";
    message += "Warna Member Card: " + data.card + "\n";
    message += "Tanggal: " + data.tanggal;

    console.log(data);
    alert(message);
}
