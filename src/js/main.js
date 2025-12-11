import ProductList from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
const list = new ProductList(
  "tents",
  dataSource,
  document.getElementById("product-list"),
);
list.init();
