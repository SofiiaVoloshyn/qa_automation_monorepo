import { test } from '@playwright/test';

// test('Цикл for', async () => {
// for (let i = 0; i < 3; i++) {
//     console.log(`перевірка товару номеру ${i+1}`)
// }
// });

// test('Цикл for..of, перебір масиву товарів', async ({page}) => {
//     const productNames = ['Phone', 'Laptop', 'Tablet', 'Watch'];
//     for (const product of productNames) 
//     {
//     console.log(`тестую додавання у кошиk: ${product}`);
// }
// });

// test('Перевірка знижки для кожного товару', async ({page}) => {
//     const planPrice = [199, 299, 499, 1000]
//     for (const price of planPrice) {
//        const discountedPrice = price * 0.9;
//        console.log(`Тариф ${price} грн зі знижкою коштує ${discountedPrice}`)
//     }
// });

test('Перевірка знижки для товару: помилка на межі', async ({page}) => {
    const planPrice = [199, 299, 499]
    const count = planPrice.length

    for (let i = 0; i < count; i++) {
       const discountedPrice = planPrice[i] * 0.9;
       console.log(`Тариф ${planPrice[i]} грн зі знижкою коштує ${discountedPrice}грн`)
    }
});