
let personalMovieDb = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function(){
  
    personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while(personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)){
      personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  
  rememberMyFilms: function() {
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
  },

detectPersonalLevel: function(){
  if(personalMovieDb.count < 10){
    console.log('Просмотрено довольно мало фильмов')
  } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30){
    console.log('Вы классический зритель')
  } else if (personalMovieDb.count >= 30){
    console.log('Вы киноман')
  } else { 
    console.log('произошла ошибка')
  }
},
showMyDB: function(obj) {
  if(obj.privat === false){
    console.log('Access is denied')
  }else if(obj.privat === true){
    console.log(personalMovieDb)
  }
 },

 writeYourGenres: function() {
  for(let i = 1; i <= 3; i++){     
    personalMovieDb.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`)
    if(personalMovieDb.genres[i - 1] === null || personalMovieDb.genres[i - 1] == ''){
      i--
    }
  }
},
toggleVisibleMyDB: function(obj){
  if(obj.privat === false){
    obj.privat = true
  }else if(obj.privat === true){
    obj.privat = false;
  }
}
};
personalMovieDb.start();
personalMovieDb.rememberMyFilms();
personalMovieDb.detectPersonalLevel();
personalMovieDb.showMyDB(personalMovieDb);
personalMovieDb.writeYourGenres();
personalMovieDb.toggleVisibleMyDB(personalMovieDb);


//  function writeYourGenres() {
//   for(let i = 1; i <= 3; i++){
//     peremenay = prompt(`Ваш любимы жанр под номером ${i}`)
//     if(peremenay === null || peremenay === ''){
//       i--
//     }
//   }
// }
// writeYourGenres();


