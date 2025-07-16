function makeAjaxCall(country) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://restcountries.com/v3.1/name/${country}`, true);
    xhr.send();
    return xhr;
}

function displayCountry(country) {
    console.log(country);
    const populationInMillions = (country.population / 1_000_000).toFixed(2); 
    let htmlcode = `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        <h5>Capital: ${country.capital ? country.capital[0] : 'N/A'}</h5>
        <h5>Population: ${populationInMillions} million</h5>
    </div>`;
    let dataele = document.getElementById("data-ele");
    dataele.insertAdjacentHTML("beforeend", htmlcode);
}

function getdata() {
    let req1 = makeAjaxCall("bharat");
    req1.addEventListener("load", function () {
        let serverdata = JSON.parse(req1.responseText);
        let data = serverdata[0];
        displayCountry(data);

        let req2 = makeAjaxCall("usa");
        req2.addEventListener("load", function () {
            let serverdata2 = JSON.parse(req2.responseText);
            let data2 = serverdata2[0];
            displayCountry(data2);

            let req3 = makeAjaxCall("canada");
            req3.addEventListener("load", function () {
                let serverdata3 = JSON.parse(req3.responseText);
                let data3 = serverdata3[0];
                displayCountry(data3);
            });
        });
    });
}

getdata();