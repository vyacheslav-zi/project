"use strict";

    const numberOfFilms = +prompt('скільки фільмів ви вже переглянули?', '');
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    for(let i = 0; i < 2; i++){
        let film = prompt('один із останніх переглянутих фільмів?','');
        let ocinka = prompt('на скільки ви оцінюєте його','');

        personalMovieDB.movies[film] = ocinka; 
    }

    console.log(personalMovieDB);