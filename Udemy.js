"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
}

for (let i = 0; i < 2; i++) {
    let movie = prompt('Один из последних просмотренных фильмов?', "");
    let grade = prompt('На сколько оцениете его?', '');
    personalMovieDB.movies[movie] = grade;
}

console.log(personalMovieDB);