const products = require("../../src/data/products");
const { getProductById } = require("../../src/catalog");

describe("getProductById", () => {
  test("ID 1 возвращает products[0]", () => {
    const product = {
      id: 1,
      name: "Наушники",
      category: "electronics",
      price: 49900,
      stock: 8,
    };
    expect(getProductById(products, 1)).toEqual(product);
  });

  test("ID 4 возвращает products[3]", () => {
    const product = {
      id: 4,
      name: "Настольная лампа",
      category: "home",
      price: 27900,
      stock: 3,
    };
    expect(getProductById(products, 4)).toEqual(product);
  });

  test("ID 6 возвращает products[5]", () => {
    const product = {
      id: 6,
      name: "Чистый код",
      category: "books",
      price: 21900,
      stock: 0,
    };
    expect(getProductById(products, 6)).toEqual(product);
  });

  test("ID 0 возвращает null", () => {
    expect(getProductById(products, 0)).toEqual(null);
  });

  test("ID 999 возвращает null", () => {
    expect(getProductById(products, 999)).toEqual(null);
  });

  test("ID -1 возвращает null", () => {
    expect(getProductById(products, -1)).toEqual(null);
  });

  test("строковый ID '1' возвращает null", () => {
    expect(getProductById(products, "1")).toEqual(null);
  });
  test("ID undefined возвращает null", () => {
    expect(getProductById(products, undefined)).toEqual(null);
  });

  test("ID NaN возвращает null", () => {
    expect(getProductById(products, NaN)).toEqual(null);
  });
});
