import {test} from '@playwright/test'
// test('цикли з часом приготування', async () => { 
    
//     let time = 90;
    // while (time >= 30) {
    //     console.log (`Залишилось ${time}хв`);
    //     time -=10;
    // }
// // test('цикли з часом приготування', async () => { 
    
// //     let time = 90;
    
// // do {
// //     console.log(`Залишилось ${time}хв`)
// //     time -=10
// // }
// // while (time >=30)
// });
test('цикли з часом приготування', async () => { 

const recipes = [
    'Борщ',
    '',
    'Вареники',
    'Рамен',
    'Сирники',
    '',
    'Плов',
  ];
  
  for (const recipe of recipes) {
    if (recipe === '') {
      continue;
    }
  
    if (recipe === 'Рамен') {
      console.log('Знайшли Рамен — зупиняємо перебір');
      break;
    }
  
    console.log(`Перевіряємо рецепт: ${recipe}`);
  }
})