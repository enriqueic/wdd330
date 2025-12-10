import { setLocalStorage, getLocalStorage } from "./utils.mjs"

export default class ProductDetails{
	constructor(productId, dataSource){
		this.productId = productId;
		this.product = {};
		this.dataSource = dataSource;
	}
	
	async init(){
		this.product = await this.dataSource.findProductById(this.productId);
		//console.log(this.product);
		this.renderProductDetails();
		
		// add listener to Add to Cart button
		document
			.getElementById("addToCart")
			.addEventListener("click", this.addProductToCart.bind(this));
	}
	
	// add to cart button event handler
	addProductToCart() {
  		const cartItems = getLocalStorage("so-cart") || [];	cartItems.push(this.product); 
		setLocalStorage("so-cart", cartItems);
		console.log(cartItems)
	}
	
	renderProductDetails(){
		renderProductDetailsTemplate(this.product);
	}
}

function renderProductDetailsTemplate(product) {
  document.querySelector('h2').textContent = product.Brand.Name;
  document.querySelector('h3').textContent = product.NameWithoutBrand;
  const productImage = document.getElementById('productImage');
  productImage.src = product.Image;
  productImage.alt = product.NameWithoutBrand;

  document.getElementById('productPrice').textContent = product.FinalPrice;
  document.getElementById('productColor').textContent = product.Colors[0].ColorName;
  document.getElementById('productDesc').innerHTML = product.DescriptionHtmlSimple;

  document.getElementById('addToCart').dataset.id = product.Id;
}
