fetch("./datos.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td> <img style='width:100px;' src='${product.image}'> </td>
            <td >${product.name}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});