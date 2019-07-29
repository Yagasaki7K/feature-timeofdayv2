window.setInterval(function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')

    var data = new Date() 
    var hora = data.getHours()
    var minutos = data.getMinutes()

    // HORAS E MINUTOS COM ZEROS
    if (minutos == 1) {
        minutos = '01'
    } else if (minutos == 2) {
        minutos = '02'
    } else if (minutos == 3) {
        minutos = '03'
    } else if (minutos == 4) {
        minutos = '04'
    } else if (minutos == 5) {
        minutos = '05'
    } else if (minutos == 6) {
        minutos = '06'
    } else if (minutos == 7) {
        minutos = '07'
    } else if (minutos == 8) {
        minutos = '08'
    } else if (minutos == 9) {
        minutos = '09'
    } else if (minutos == 0) {
        minutos = '00'
    }

    if (hora == 1) {
        hora = '01'
    } else if (hora == 2) {
        hora = '02'
    } else if (hora == 3) {
        hora = '03'
    } else if (hora == 4) {
        hora = '04'
    } else if (hora == 5) {
        hora = '05'
    } else if (hora == 6) {
        hora = '06'
    } else if (hora == 7) {
        hora = '07'
    } else if (hora == 8) {
        hora = '08'
    } else if (hora == 9) {
        hora = '09'
    } else if (hora == 0) {
        hora = '00'
    }

    msg.innerHTML = `<strong>${hora}:${minutos}</strong>`

    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        document.body.style.backgroundImage = "url('img/Morning.png')";
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        document.body.style.backgroundImage = "url('img/Day.png')";
    } else {
        // BOA NOITE
        document.body.style.backgroundImage = "url('img/Night.png')";
    }
})
