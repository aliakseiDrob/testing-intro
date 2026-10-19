const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredIds = filterByCategory(products, "all").map(
      (product) => product.id,
    );
    expect(filteredIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredIds = filterByCategory(products).map((product) => product.id);
    expect(filteredIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredIds = filterByCategory(products, "").map(
      (product) => product.id,
    );
    expect(filteredIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const filteredIds = filterByCategory(products, "electronics").map(
      (product) => product.id,
    );
    expect(filteredIds).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const filteredIds = filterByCategory(products, "books").map(
      (product) => product.id,
    );
    expect(filteredIds).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const filteredIds = filterByCategory(products, "home").map(
      (product) => product.id,
    );
    expect(filteredIds).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const filteredIds = filterByCategory(products, "clothes").map(
      (product) => product.id,
    );
    expect(filteredIds).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const filteredIds = filterByCategory(products, "toys").map(
      (product) => product.id,
    );
    expect(filteredIds).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const filteredIds = filterByCategory(products, "sports").map(
      (product) => product.id,
    );
    expect(filteredIds).toEqual([]);
  });
});
