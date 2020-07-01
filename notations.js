/* const a = prompt("Один из последних просмотреных фильмов", ""),
  b = prompt("На сколько оцените его", ""),
  c = prompt("Один из последних просмотреных фильмов", ""),
  d = prompt("На сколько оцените его", ""); */


  /* if(a === "" && b === ""){
    //   const a = prompt("Один из последних просмотреных фильмов", ""),
    // b = prompt("На сколько оцените его", ""),
    // }
    */
/* 
    for(let i = 0; i < 2; i++){
      let a = prompt('Один из последних просмотреных фильмов', "");
      let b = prompt('На сколько оцените его', "")
      if(a != null && b != null && a != "" && b != "" && a.length < 50 ){
        personalMovieDb.movies[a] = b;
        console.log('done')
      }else {
        console.log('error');
        i--;
      } */
      
      
/* 
let i = 0
      while(i < 2){
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
      } */
    /*          РАБОТА СО ВЛОЖЕНЫМИ ОБЬЕКТАМИ И КАК ИХ ПЕРЕБИРАТЬ 
    let obj = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'green',
    bg: 'red'
  }
} 

for(let key in obj){
  if(typeof(obj[key]) === 'object'){
    for (let i in obj[key] ){
      console.log(`Обьект COLORS содержите в себе Ключ ${i} и значение ${obj[key][i]}`)
    }
  }else console.log(`SVOJSTVA ${key} imeet zna4enie ${obj[key]}`);
  
}              РАБОТА СО ВЛОЖЕНЫМИ ОБЬЕКТАМИ И КАК ИХ ПЕРЕБИРАТЬ */
//  .............................................................................

//                ПРИМЕР С ДЕСТРУКТОРИЗАЦИЕЙ И КАК ОНА РАБОТАЕТ
// let data = {
//   name: 'vlad',
//   lastname: 'bondariev',
//   adress: {city: 'odessa', street: 'malinovskogo 41'},
//   education: 'High education',
//   relatives: {brother_name: 'slavik', sisters: {first_sister: 'darina', second_siste: 'olya'}},
//   whoseObjectIsIt: function(){
//    return console.log(`object holder is ${data["name"]} ${data["lastname"]}`)
    
//   }
// }
// const {first_sister,second_siste } = data.relatives.sisters
// console.log(`${first_sister}, ${second_siste}`);
//                     ПРИМЕР С ДЕСТРУКТОРИЗАЦИЕЙ И КАК ОНА РАБОТАЕТ
    //   .....................................................................................