/*
    https://www.thecocktaildb.com/api/json/v1/1/search.php?s=TERMINO_A_BUSCAR
    https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=ID_DE_LA_BEBIDA
    
    1. Implementar busqueda //Uso del DOM para traer termino
    2. Renderizar los resultados de la busqueda //Uso del DOM, arreglos y bucles
    3. Cuando le doy click a algo debe hacer una llamada a: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17135 // eventos y fetch
*/

function buscar(termino){
//const buscar = (s) =>{
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=wine";
    
    fetch(url).then(function(response){
        return response.json();
    }).then(function(datos){
        //Aqui ocupamos los datos
        console.log(datos);
        console.log(datos.drinks[2].strDrink); // El nombre del segundo trago
        console.log(datos.drinks[2].strDrinkThumb);
        
    });
}