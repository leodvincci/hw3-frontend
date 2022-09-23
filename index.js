const body = document.body;

fetch('http://34.238.151.86:8000/dbversion')
    .then((response) => response.json())
    .then((data) => body.append(data[0].versionString));


