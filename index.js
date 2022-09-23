const body = document.body;

fetch('http://ec2-34-238-151-86.compute-1.amazonaws.com:8000/dbversion')
    .then((response) => response.json())
    .then((data) => body.append(data[0].versionString));


