"use strict";
document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.style.display = "none";
        });

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }
    
    function showTabsContent(i = 0){
        tabsContent[i].style.display = "block";
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });


    //timer

    const dataDeadLine = '2021-01-01';

    function countDown(endDate){
        const t = Date.parse(endDate) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minute = Math.floor((t / (1000 * 60)) % 60),
              second = Math.floor((t / 1000) % 60);

              return {
                  'days': days,
                  'hours': hours,
                  'minute': minute,
                  'second': second,
                  'total': t
              };
    }

    function setDate(blockTime){
        const timer = document.querySelector(blockTime),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minute = timer.querySelector('#minutes'),
              second = timer.querySelector('#seconds'),
              timeout = setInterval(pasteDate, 1000);
              
        function getZero(item){
            if(item < 10){
                return `0${item}`;
            }
            else{
                return item;
            }
        }      

        function pasteDate(){
            const t = countDown(dataDeadLine);
            if(t.total > 0){
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minute.innerHTML = getZero(t.minute);
                second.innerHTML = getZero(t.second);
            }
            else{
                clearInterval(timeout);
            }
        }

        pasteDate();

    }

    setDate('.timer');

});


// function interval(){
//     setTimeout(()=>{
//         console.log('work');
//         interval();
//     },500);
// }

// interval();

// let id = setTimeout(function log(){
//     console.log('hello');
//     id = setTimeout(log, 500);
// },500);



// dialog window 


const btn = document.querySelectorAll('[data-modal]'),
      btnClose = document.querySelector('[data-close]'),
      modalWindow = document.querySelector('.modal'),
      autoModalShow = setTimeout(showWindow,3000);               


function showWindow(){
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
            // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = 'hidden';
    clearInterval(autoModalShow);
}

function hideWindow(){
    modalWindow.classList.remove('show');
    modalWindow.classList.add('hide');
            // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = '';
}

btn.forEach((item)=>{
    item.addEventListener('click', showWindow);
});

btnClose.addEventListener('click', hideWindow);


modalWindow.addEventListener('click', (event)=>{
    if (event.target === modalWindow && modalWindow.classList.contains('show')){
        hideWindow();
    }
});


document.addEventListener('keydown', (event)=>{
    if (event.code === 'Escape' && modalWindow.classList.contains('show')){
        hideWindow();
    }
});


function showWindowByScroll(){
    //console.log(window.pageYOffset);
    if(window.pageYOffset + document.documentElement.clientHeight + 0.5 >= document.documentElement.scrollHeight){
        showWindow();
        window.removeEventListener('scroll', showWindowByScroll);
    }
}

window.addEventListener('scroll', showWindowByScroll);

