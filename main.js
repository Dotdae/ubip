function searchIP() {

    // Extraer el la información escrita.

    ip = document.getElementById('ip').value;

    // Seleccionamos donde mostraremos los datos.

    ipFind = document.getElementById('ipFind');
    cityFind = document.getElementById('cityFind');
    stateFind = document.getElementById('stateFind');
    countryFind = document.getElementById('countryFind');
    postalFind = document.getElementById('postalFind');
    latFind = document.getElementById('latFind');
    longFind = document.getElementById('longFind');
    timeFind = document.getElementById('timeFind');
    ladaFind = document.getElementById('ladaFind');

    // Realizamos la petición a la API.

    fetch(`https://ipapi.co/${ip}/json`)
    .then((respuesta) => {

        respuesta.json().then(datos => {

            const {ip, city, region, country_name, postal, latitude, longitude, timezone, country_calling_code } = datos;

            ipFind.innerText = ip;
            cityFind.innerText = city;
            stateFind.innerText = region;
            countryFind.innerText = country_name;
            postalFind.innerText = postal;
            latFind.innerText = latitude;
            longFind.innerText = longitude;
            timeFind.innerText = timezone;
            ladaFind.innerText = country_calling_code;

        })

    })
    .catch((error) => {

        console.error(error)

    })

}