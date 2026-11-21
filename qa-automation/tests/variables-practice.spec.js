import { test, expect } from '@playwright/test';
// test('мутація масиву тестових email', async () => { 
//     const testEmails = [
//       'sv@gmail.com', 
//       'guest@gmail.com', 
//       '123@gmail.com', 
//       'sofiyavoloshen1998@gmail.com'];
//     // (testEmails.push('another@example.com'))
//   console.log(testEmails)
//  })

// test('Версія з витоком var', async () => {
//   let recipeCount = 0;

//   if (true) {
//     var count = 3; // var «витікає» за межі блоку if
//   }

//   recipeCount = count;
//   console.log(recipeCount); // 3
// });

// test('Версія з витоком let', async () => {

// // let recipeCount = 0;
// // let count = 0; // оголошуємо до if

// // if (true) {
// //   count = 3;
// // }

// // recipeCount = count;
// // console.log(recipeCount); // 3
// })

// test('Перевірка перетворення лічильника рецептів у число', async ({ page }) => {
//   await page.goto('http://localhost:5173');

//   const rawText = await page.getByText(/^\d+ recipes$/).textContent();
//   const converted = Number(rawText);

//   console.log(rawText);                 // Наприклад: "285 recipes"
//   console.log(typeof converted);        // "number"
//   console.log(Number.isNaN(converted)); // true

//   const count = Number(rawText.replace(' recipes', ''));
//   console.log(count); // 285
// });

