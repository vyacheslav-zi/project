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
        privat: false,
        rememberMyFilms: function(){
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
        },
        detectPersonalLevel: function(){
            if(personalMovieDB.count < 10){
                alert('переглянуто мало фільмів');
            } else if(personalMovieDB.count < 30){
               alert('ви класичний глядач');
            } else{
               alert('ви кіноман');
            }
         },
        showMyDB: function(privetOrNot){
            if(!privetOrNot){
                console.log(personalMovieDB);
            }
        },
        writeYourGenres: function(){
            for(let i = 0; i < 3; i++){
                let ganres = '';
                while(ganres == '' || ganres == null){
                    ganres = prompt(`ваш улуюблений жанр під номером ${i + 1}`, '');
                }
                personalMovieDB.genres[i] = ganres;
            }
            personalMovieDB.genres.forEach((item, namber)=>{
                console.log(`Улюблений жанр під номером ${namber + 1} - це ${item}`);
            });
        },
        toggleVisibleMyDB: function(){
            (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true ;
        }
    };

   


//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();