"use strict";

let numberOfFilms = '';
    while(numberOfFilms == null || numberOfFilms == '' || numberOfFilms.length > 50){
        numberOfFilms = +prompt('скільки фільмів ви вже переглянули?', '');
    }

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

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

 if(personalMovieDB.count < 10){
     alert('переглянуто мало фільмів');
 } else if(personalMovieDB.count < 30){
    alert('ви класичний глядач');
 } else{
    alert('ви кіноман');
 }