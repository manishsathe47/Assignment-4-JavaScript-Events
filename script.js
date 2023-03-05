var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
    ],
    description:
      "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599,
  };
  const Info = document.querySelector(".info");
  let main = "";
  main =`<h1 id="name">${productData.name}</h1>
         <h4 id="brand">${productData.brand}</h4>
         <h3>Price: Rs <span id="price">${productData.price}</span></h3>
         <div class="description">
           <h3>Description</h3>
           <p id="description">${productData.description}</p>
         </div>`;
 Info.innerHTML = main;

 const list = document.getElementById("list");
 const imgOutput = document.getElementById("imgOutput");

 imgOutput.setAttribute("src",productData.photos[0]);

 let output = "";
 let pic = productData.photos;

 for(let i = 0; i < pic.length; i++){
    if( i == 0){
        output += `<img class="item active" src=${pic[i]}>`;
    }else {
        output += `<img class="item" src=${pic[i]}>`;
      }
 }

 
list.innerHTML = output;

list.addEventListener("click", (e) => {
  let targetSrc = e.target.getAttribute("src");
  imgOutput.setAttribute("src", targetSrc);

  let activeImg = document.querySelector("img.active");
  activeImg.classList.remove("active");
  e.target.classList.add("active");
});
