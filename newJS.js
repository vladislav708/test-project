let numberOfFilms;

function start() {

  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();



let personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms(){
  let i = 0;
do {
  let a = prompt('Один из последних просмотреных фильмов', "");
  let b = prompt('На сколько оцените его', "");
  if(a != null && b != null && a != "" && b != "" && a.length < 50 ){
    personalMovieDb.movies[a] = b;
    console.log('done')
  }else {
    console.log('error');
    i--;
  }
 i++
}while( i < 2);
}
rememberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDb.count < 10){
    console.log('Просмотрено довольно мало фильмов')
  } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30){
    console.log('Вы классический зритель')
  } else if (personalMovieDb.count >= 30){
    console.log('Вы киноман')
  } else { 
    console.log('произошла ошибка')
  }
}
detectPersonalLevel();


function showMyDB(obj){
 if(obj.privat === false){
   console.log(personalMovieDb)
 }else console.log('error')
}
showMyDB(personalMovieDb);

function writeYourGenres(){
  for(let i = 1; i <= 3; i++){     
    personalMovieDb.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`)
  }
}
writeYourGenres();
console.log(personalMovieDb);