const centerdiv = document.getElementById("centerdiv");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
  .then((apidata) => {
    return apidata.json();
  })
  .then((jsondata) => {
    jsondata.map((val) => {
      key = val.id;
      let img = document.createElement("img");
      img.src = `https://picsum.photos/200/350?random=${val.url}`;
      centerdiv.appendChild(img);
    //   console.log(val.url);
    });
  });
