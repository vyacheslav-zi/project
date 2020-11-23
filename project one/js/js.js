"use strict";


let numberOfFilms = '';

function start(){
    while(numberOfFilms == null || numberOfFilms == '' || numberOfFilms.length > 50 || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('скільки фільмів ви вже переглянули?', '');
    }
}

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

   
function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let film = '',
            ocinka = '';
            while(film == null || film ==''|| film.length > 50){
                film = prompt('один із останніх переглянутих фільмів?','');
            }
            while(ocinka == null || ocinka ==''|| ocinka.length >50){
                ocinka = prompt('на скільки ви оцінюєте його','');
            }
        personalMovieDB.movies[film] = ocinka; 
    }
}

rememberMyFilms();



 function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert('переглянуто мало фільмів');
    } else if(personalMovieDB.count < 30){
       alert('ви класичний глядач');
    } else{
       alert('ви кіноман');
    }
 }

 detectPersonalLevel();


 function showMyDB(privetOrNot){
    if(!privetOrNot){
        console.log(personalMovieDB);
    }
 }

 showMyDB(personalMovieDB.privat);

 function writeYourGenres(){
     for(let i = 0; i < 3; i++){
         personalMovieDB.genres[i] = prompt(`ваш улуюблений жанр під номером ${i + 1}`, '');
     }
 }

 writeYourGenres();