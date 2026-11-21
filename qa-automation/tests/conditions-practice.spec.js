import { test } from '@playwright/test';

test('запасне значення для автора рецепта', async () => {
  let recipeAuthor;

//   recipeAuthor = null;
//   console.log(recipeAuthor || 'Автор невідомий');

//   recipeAuthor = '';
//   console.log(recipeAuthor || 'Автор невідомий');

//   recipeAuthor = 'Марія';
//   console.log(recipeAuthor || 'Автор невідомий');

// // Те саме через if/else
// recipeAuthor = null;
// if (recipeAuthor) {
//   console.log(recipeAuthor);
// } else {
//   console.log('Автор невідомий');
// }
// recipeAuthor = '';
// if (recipeAuthor) {
//   console.log(recipeAuthor);
// } else {
//   console.log('Автор невідомий');
// }

// recipeAuthor = 'Марія';
// if (recipeAuthor) {
//   console.log(recipeAuthor);
// } else {
//   console.log('Автор невідомий');
// }

// const category = 'dessert';
// let categoryFilter;

// if (category === 'dessert') {
//   categoryFilter = 'Desserts';
// } else if (category === 'vegetarian') {
//   categoryFilter = 'Vegetarian';
// } else {
//   categoryFilter = 'All recipes';
// }

// // Далі використовуємо categoryFilter у пошуку та expect.
 test('додає рецепт в обрані', async ({ page }) => {
  const icon = page.locator('.favorite-icon');

  // Передумова: рецепт ще не в обраному.
  await expect(icon).toHaveAttribute('data-favorited', 'false');

  await icon.click();

  // Результат: рецепт додано до обраного.
  await expect(icon).toHaveAttribute('data-favorited', 'true');
});

test('прибирає рецепт з обраного', async ({ page }) => {
  const icon = page.locator('.favorite-icon');

  // Передумова: рецепт уже в обраному.
  await expect(icon).toHaveAttribute('data-favorited', 'true');

  await icon.click();

  // Результат: рецепт прибрано з обраного.
  await expect(icon).toHaveAttribute('data-favorited', 'false');
});
});