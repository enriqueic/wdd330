import { setLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");
const urlParams = new URLSearchParams(window.location.search);

const product = new ProductDetails(productId, dataSource);
product.init();

//console.log(product);
//console.log(dataSource.findProductById(productId));
//console.log(window.location.search);
