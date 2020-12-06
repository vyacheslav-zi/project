/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelectorAll('.promo__adv img').forEach(item=>item.remove());
document.querySelector('.promo__genre').textContent = 'драма'; 
document.querySelector('.promo__bg').style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat';


function sortDB(func){
    movieDB.movies.sort();
    func();
}

function reFull(){
    const filmList = document.querySelector('.promo__interactive-list');
    filmList.innerHTML = '';
    movieDB.movies.forEach((item, number)=>{
        filmList.innerHTML += `
        <li class="promo__interactive-item">${number + 1}. ${item}
        <div class="delete"></div>
        </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) =>{
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
        });
    });
}

sortDB(reFull);


document.querySelector('button').addEventListener('click', (event)=>{
    event.preventDefault();

    const check = document.querySelector('[type="checkbox"]');
    if(check.checked){
        console.log('додаємо улублений фільм');
    }

    let addMove = document.querySelector('.adding__input').value;

        if(addMove.length > 21){
            addMove = `${addMove.substring(0, 22)}...`;
        }
        
    movieDB.movies.push(addMove);
    sortDB(reFull);
});


