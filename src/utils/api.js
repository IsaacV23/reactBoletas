

function downloadPDF(base64String, fileName) {
    const linkSource = `data:application/pdf;base64,${base64String}`;
    var downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}


async function fetchData(boleta) {
    console.log('boleta: ' + boleta);
    try {
        const response = await fetch('http://192.168.1.23:8088/reimprimirBoleta/' + boleta);
        const data = await response.json();
        downloadPDF(data, boleta);
    } catch (error) {
        alert('Revisar que el numero de boleta este bien ingresado');
    }
}

export default fetchData








