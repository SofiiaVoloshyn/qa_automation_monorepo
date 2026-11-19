// import { test, expect } from '@playwright/test';

// test('if\else конструкції', async ({ page }) => {
//   const USER_AGE = 101
//   if (USER_AGE === 18) {
//     console.log(' Вітаємо з повноліттям');
//   } 
// //   else if (USER_AGE <18) {
// //     console.log('Доступно лише повнолітнім');
// //   } else {
// //     console.log('Доступ за віком')
// //   }
// });

// test('оператори порівняння', async ({ page }) => {
//     console.log(18 === 18)
//     console.log(18 === '18')
// });

// test('перевірка за віком та згодою', async ({ page }) => {
//     const USER_AGE = 19;
//     const hasAgreedToTerms = true;
//     const isEligible = USER_AGE >= 18 && hasAgreedToTerms

//     if  (isEligible) {
//         console.log('вітаємо з повноліттям')
//     } else {
//         console.log ('доступ відхилено')
//     }
// });

import { test } from '@playwright/test';

test('перевіряє час приготування', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const text = await page.getByText('150', { exact: true }).first().textContent();
  console.log(typeof text);

  if (Number(text) === 150) {
    console.log('Правильно');
  } else {
    console.log('Неправильно');
  }
});