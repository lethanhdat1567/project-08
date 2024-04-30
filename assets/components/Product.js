import html from '../redux/core.js';
Product((products) => {
    const productRoot = document.querySelector('.products-wrapper');
    const result = products.map((product) => {
        return html`<div class="col">
            <article class="product-card">
                <div class="product-card__img-wrap">
                    <a
                        onclick="dispatch('cart',{
                        id: '${product.id}',
                        name: '${product.name}',
                        description: '${product.description}',
                        price: ${product.price},
                        image: '${product.image}',
                    })"
                        href="./product-detail.html"
                    >
                        <img src="./assets/img/products/${product.image}" alt="" class="product-card__thumb" />
                    </a>
                    <button class="like-btn like-btn--liked product-card__like-btn">
                        <img src="./assets/icons/heart.svg" alt="" class="like-btn__icon icon" />
                        <img src="./assets/icons/heart-red.svg" alt="" class="like-btn__icon--liked" />
                    </button>
                </div>
                <h3 class="product-card__title">
                    <a href="./product-detail.html">${product.name}</a>
                </h3>
                <p class="product-card__brand">${product.description}</p>
                <div class="product-card__row">
                    <span class="product-card__price">$${product.price}</span>
                    <img src="./assets/icons/star.svg" alt="" class="product-card__star" />
                    <span class="product-card__score">4.3</span>
                </div>
            </article>
        </div>`;
    });
    productRoot.innerHTML = result.join('');
});

function Product(callback) {
    fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then(callback);
}
export default Product;
