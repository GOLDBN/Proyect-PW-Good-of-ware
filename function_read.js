fetch("./datos.json")
.then(function(response){
   return response.json();
})

.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `

      <div class="carousel-item">
         <div class="row">
           <div class="col-md-6">
             <h1 class="controller_text">${product.name}</h1>
             <p class="banner_text">${product.descripcion}</div>
           </div>

           <div class="col-md-6">
             <div class="image_1"><img src='${product.image}'></div>
           </div>
         </div>
      </div>
      `;
   }
 
   placeholder.innerHTML = out;
});


fetch("./Nominaciones.json")
.then(function(response){
   return response.json();
})

.then(function(nominaciones){
   let placeholder = document.querySelector("#nominaciones");
   let out = "";
   for(let nominacion of nominaciones){
      out += `
      <tr>
         <td >${nominacion.nominacion}</td>
      </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});

fetch("./caracteristicas.json")
.then(function(response){
   return response.json();
})

.then(function(caracteristicas){
   let placeholder = document.querySelector("#caracteristicas");
   let out = "";
   for(let carac of caracteristicas){
      out += `

         <div class="col-md-6">
         <div class="image_2"><img style="width: 160px;" src='${carac.image}'></div>
         <h1 class="game_text">${carac.caract}</h1>
         <p class="long_text">${carac.descripcion}</p>
       </div>
      `;
   }
 
   placeholder.innerHTML = out;
});

fetch("./alumnos.json")
.then(function(response){
   return response.json();
})

.then(function(alumnnos){
   let placeholder = document.querySelector("#alumnnos");
   let out = "";
   for(let alu of alumnnos){
      out += `

      <div class="col-md-6">
      <div class="image_2"><img style="width: 160px;" src='${alu.image}'></div>
      <h1 class="game_text">${alu.alumno}</h1>
 
    </div>
      `;
   }
 
   placeholder.innerHTML = out;
});