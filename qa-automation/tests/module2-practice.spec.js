const { test } = require('@playwright/test');

// const testEmails = [
//     '',
//   'user@example.com',
//   '',
//   'invalid-email',
//   '',
//   'user@',
//   '',
// ];

// let checksPassed = 0; // Лічильник змінюватиметься в наступному тесті

// test('тестові дані для перевірки логіну', async () => {
//   console.log('До push:', testEmails);
//   testEmails.push('another@example.com');
//   console.log('Після push:', testEmails);
// });
test('перевірка кількості знайдених рецептів', async () => {
    const recipesFoundText = '12'; // імітація значення зі сторінки
    const recipesFound = Number(recipesFoundText);
    const expectedCount = 12;
  
    if (recipesFound === 0) {
      console.log('Рецептів не знайдено');
    } else if (recipesFound === expectedCount) {
      console.log('Знайдено очікувану кількість рецептів');
    } else {
      console.log(`Знайдено іншу кількість: ${recipesFound}`);
    }
  
    const recipeAuthor = null;
    const author = recipeAuthor || 'Автор невідомий';
    console.log(author);
  });

//   test('перебір email через continue і break', async () => {
//     for (const email of testEmails) {
//       if (email === '') {
//         console.log('Порожнє значення — пропускаю');
//         continue;
//       }
  
//       if (email === 'another@example.com') {
//         console.log('Знайшли додану адресу — зупиняю цикл');
//         break;
//       }
  
//       checksPassed++;
//       console.log(`${email}; перевірок: ${checksPassed}`);
//     }
  
//     console.log(`checksPassed: ${checksPassed}`);
//   });
  
//   test('зменшення часу приготування через цикли', async () => {
//     let whileTime = 90;
//     while (whileTime >= 30) {
//       console.log(`while: ${whileTime}`);
//       whileTime -= 10; // змінює умову, щоб цикл завершився
//     }
//     console.log(`while: ${whileTime}`);
  
//     let doWhileTime = 90;
//     do {
//       console.log(`do...while: ${doWhileTime}`);
//       doWhileTime -= 10;
//     } while (doWhileTime >= 30);
//     console.log(`do...while: ${doWhileTime}`);
  
//     // Результати розійдуться, якщо стартове значення вже менше за 30.
//   });