// fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
//   .then(response => response.json())
//   .then(data => {
//     // console.log(data)
//     for (i=0; i < 151; i++){
//       // console.log(data.results[i])
//       // $("#pokemonDiv" ).append( "<p>"+data.results[i].name+"</p>" );
//       fetch(data.results[i].url)
//         .then(response => response.json())
//         .then(data => {
//           // console.log(data.sprites.front_default)
//           // console.log(data.sprites.front_default)
//           // console.log(data.name)
//           // console.log(data.types.length)
//           pokemonName = data.name
//           console.log(pokemonName[0].toUpperCase())
//           // $(".pokemonDiv" ).append( "<h2 class='pokemonName'>"+data.name+"<h2>" );
//           // $(".pokemonDiv" ).append( "<img src='"+data.sprites.front_default+"'></img>" );
//           // console.log(data.types[0].type.name)
//           // console.log(data.types[1].type.name)
//           // $(".pokemonDiv" ).append( "<p>"+data.types[0].type.name+"<p>" );
//           // $(".pokemonDiv" ).append( "<p>"+data.types[1].type.name+"<p>" );
//       })

//     }
//   })

// fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
//   .then(response => response.json())
//   .then(data => {
//     for (i=0; i < 151; i++){
//       $("#pokemonDiv" ).append( "<p>"+data.results[i].name+"</p>" );
//       fetch(data.results[i].url)
//         .then(response => response.json())
//         .then(data => {
//           $(".pokemonDiv" ).append('<div class="pokemonShell">'+ "<h2 class='pokemonName'>"+data.name+"</h2>"+"<img src='"+data.sprites.front_default+"'></img>"+"<p>"+data.types[0].type.name+"<p>"+"<p>"+data.types[1].type.name+"<p>"+'</div>')
//       })
//     }
//   })

fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
  .then(response => response.json())
  .then(data => {
    for (i=0; i < 151; i++){
      $("#pokemonDiv" ).append( "<p>"+data.results[i].name+"</p>" );
      fetch(data.results[i].url)
        .then(response => response.json())
        .then(data => {
          pokeName = data.name
          if (data.types.length === 2){
            $(".pokemonDiv" ).append('<div class="pokemonShell">'+ "<h2 class='pokemonName'>"+pokeName[0].toUpperCase()+pokeName.slice(1)+"</h2>"+"<img class='pokeImage' src='"+data.sprites.front_default+"'></img>"+"<p>"+data.types[0].type.name+"<p>"+"<p>"+data.types[1].type.name+"<p>"+'</div>')
          }
          else{
            $(".pokemonDiv" ).append('<div class="pokemonShell">'+ "<h2 class='pokemonName'>"+pokeName[0].toUpperCase()+pokeName.slice(1)+"</h2>"+"<img class='pokeImage' src='"+data.sprites.front_default+"'></img>"+"<p>"+data.types[0].type.name+"<p>"+'</div>')
          }
          
      })
    }
  })