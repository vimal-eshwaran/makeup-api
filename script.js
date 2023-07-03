
var container=document.createElement("div")
container.className="container"

var div=document.createElement("div")
div.style.textAlign="center"
var input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("id","brand")
input.setAttribute("placeholder","Enter your Brand")
var button=document.createElement("button")
button.setAttribute("type","button")
button.classList.add("btn","btn-primary")
button.innerHTML="search"
button.style.marginLeft="5px"
button.addEventListener("click",brandName)
var searchProduct=document.createElement("div")
searchProduct.setAttribute("id","final")
div.append(input,button,searchProduct)

var row=document.createElement("div")
row.classList.add("row","m-3")
container.append(div,row);




async function makeup(){
    var url=("https://makeup-api.herokuapp.com/api/v1/products.json")
    var res=await fetch(url)
    var res1=await res.json()
   console.log(res1)

    for(var i=0; i<res1.length; i++){
        try {

      
            row.innerHTML+=
                    `
                    <div class="card bg-light mb-3 p-3" style="max-width: 18rem;">
                    <img src="${res1[i].image_link}" class="card-img-top" alt="Product out of stock" onerror="this.src='${res1[89].image_link}';">
              
              <div class="card-body">
              <h5>${res1[i].brand}</h5>
              <p>${res1[i].name}</p>
              <p>Price:$${res1[i].price}</p>
              <p>${res1[i].product_link}</p>
              </div>
              <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Description
  </button>
  <ul class="dropdown-menu">
    <li><p class="dropdown-item">${res1[i].description}</p></li>
  </ul>
</div><br>
            
            
                        
                    </div>`
        
                    document.body.append(container)
        
      
             }
           
           

        catch (error) {
            console.log(error)
        }
    }
}

makeup()



async function brandName(){
 
  let newUrl=("https://makeup-api.herokuapp.com/api/v1/products.json")
  let newData=await fetch(newUrl)
  let newData1=await newData.json()
  var result=document.getElementById("brand").value
   searchProduct.innerHTML=" "
  for(let i=0; i<newData1.length; i++){
     try {
      if(result===newData1[i].brand){
        searchProduct.innerHTML+=`
        <div class="card bg-light mb-3" style="max-width: 18rem;">
        <img src="${newData1[i].image_link}" class="card-img-top" alt="Product out of stock" onerror="this.src='${newData1[89].image_link}';">
  
  <div class="card-body">
  <h5>${newData1[i].brand}</h5>
  <p>${newData1[i].name}</p>
  <p>Price:$${newData1[i].price}</p>
  <p>${newData1[i].product_link}</p>
  </div>
  <div class="dropdown">
<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Description
</button>
<ul class="dropdown-menu">
<li><p class="dropdown-item">${newData1[i].description}</p></li>
</ul>
<br>
</div>


            
        </div>`
  
      }
      
     } catch (error) {
       console.log(error)
     }
  }
 

}

