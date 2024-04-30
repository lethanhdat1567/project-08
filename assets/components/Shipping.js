import html from '../redux/core.js';
import storage from '../redux/storage.js';
const shippingHTML = (function Shipping() {
    const products = storage.getProducts();

    let priceTotal = 0;
    priceTotal = products.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);

    return html` <div class="container">
        <!-- Search bar -->
        <div class="checkout-container">
            <div class="search-bar d-none d-md-flex">
                <input type="text" name="" placeholder="Search for item" id="" class="search-bar__input" />
                <button class="search-bar__submit">
                    <img src="./assets/icons/seach.svg" alt="" class="search-bar__icon icon" />
                </button>
            </div>
        </div>
        <!-- Breadcrumbs -->
        <div class="checkout-container">
            <ul class="breadcrumbs checkout-page__breadcrumbs">
                <li>
                    <a href="./" class="breadcrumbs__link"
                        >Home
                        <img src="./assets/icons/arrow-right.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="checkout.html" class="breadcrumbs__link"
                        >Checkout
                        <img src="./assets/icons/arrow-right.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#!" class="breadcrumbs__link breadcrumbs__link--current">Shipping </a>
                </li>
            </ul>
        </div>
        <!-- Checkout content -->
        <div class="checkout-container">
            <div class="row gy-xl-3">
                <div class="col-8 col-xl-12">
                    <div class="cart-info">
                        <h1 class="cart-info__heading">1. Shipping, arrives between Mon, May 16—Tue, May 24</h1>
                        <div class="cart-info__separate"></div>
                        <!-- Checkout address -->
                        <div class="user-address">
                            <div class="user-address__top">
                                <div>
                                    <h2 class="user-address__title">Shipping address</h2>
                                    <p class="user-address__desc">Where should we deliver your order?</p>
                                </div>
                                <button
                                    class="user-address__btn btn btn--primary btn--rounded btn--small js-toggle"
                                    toggle-target="#add-new-address"
                                >
                                    <img src="./assets/icons/plus.svg" alt="" />
                                    Add a new address
                                </button>
                            </div>
                            <div class="user-address__list">
                                <!-- Empty message -->
                                <!-- <div class="user-address__message">
                  Not address yet.
                  <a href="#!" class="user-address__link js-toggle" toggle-target="#add-new-address"
                    >Add a new address</a
                  >
                </div> -->
                                <!-- Address card 1 -->
                                <article class="address-card">
                                    <div class="address-card__left">
                                        <div class="address-card__choose">
                                            <label class="cart-info__checkbox">
                                                <input
                                                    checked
                                                    name="shipping-address"
                                                    type="radio"
                                                    class="cart-info__checkbox-input"
                                                />
                                            </label>
                                        </div>
                                        <div class="address-card__info">
                                            <h3 class="address-card__title">Imran Khan</h3>
                                            <p class="address-card__desc">
                                                Museum of Rajas, Sylhet Sadar, Sylhet 3100.
                                            </p>
                                            <ul class="address-card__list">
                                                <li class="address-card__item">Shipping</li>
                                                <li class="address-card__item">Delivery from store</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="address-card__right">
                                        <div class="address-card__ctrl">
                                            <button
                                                class="cart-info__edit-btn js-toggle"
                                                toggle-target="#add-new-address"
                                            >
                                                <img class="icon" src="./assets/icons/edit.svg" alt="" />
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </article>
                                <!-- Address card 2 -->
                                <article class="address-card">
                                    <div class="address-card__left">
                                        <div class="address-card__choose">
                                            <label class="cart-info__checkbox">
                                                <input
                                                    type="radio"
                                                    name="shipping-address"
                                                    class="cart-info__checkbox-input"
                                                />
                                            </label>
                                        </div>
                                        <div class="address-card__info">
                                            <h3 class="address-card__title">Imran Khan</h3>
                                            <p class="address-card__desc">
                                                Al Hamra City (10th Floor), Hazrat Shahjalal Road, Sylhet, Sylhet,
                                                Bangladesh
                                            </p>
                                            <ul class="address-card__list">
                                                <li class="address-card__item">Shipping</li>
                                                <li class="address-card__item">Delivery from store</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="address-card__right">
                                        <div class="address-card__ctrl">
                                            <button class="cart-info__edit-btn">
                                                <img src="./assets/icons/edit.svg" alt="" />
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="cart-info__separate"></div>
                        <h2 class="cart-info__sub-heading">Items details</h2>
                        <div class="cart-info__list">
                            ${products.map((product, index) => {
                                return `<article class="cart-item">
                                <a href="./product-detail.html">
                                    <img src="./assets/img/products/${product.image}" alt="" class="cart-item__thumb" />
                                </a>
                                <div class="cart-item__content">
                                    <div class="cart-item__content-left">
                                        <h3 class="cart-item__title">
                                           ${product.name}
                                        </h3>
                                        <p class="cart-item__price-wrap">
                                            $47.00 |
                                            <span class="cart-item__status">In Stock</span>
                                        </p>
                                        <div class="cart-item__ctrl cart-item__ctrl--md-block">
                                            <div class="cart-item__input">
                                                LavAzza
                                                <img class="icon" src="./assets/icons/arrow-down-2.svg" alt="" />
                                            </div>
                                            <div class="cart-item__input">
                                                <button class="cart-item__input-btn">
                                                    <img class="icon" src="./assets/icons/minus.svg" alt="" />
                                                </button>
                                                <span>1</span>
                                                <button class="cart-item__input-btn">
                                                    <img class="icon" src="./assets/icons/plus.svg" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart-item__content-right">
                                        <p class="cart-item__total-price">${product.price}$</p>
                                        <div class="cart-item__ctrl">
                                            <button class="cart-item__ctrl-btn">
                                                <img src="./assets/icons/heart-2.svg" alt="" />
                                                Save
                                            </button>
                                            <button
                                                class="cart-item__ctrl-btn js-toggle"
                                                toggle-target="#delete-confirm"
                                            >
                                                <img src="./assets/icons/trash.svg" alt="" />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>`;
                            })}
                        </div>
                        <div class="cart-info__bottom d-md-none">
                            <div class="row">
                                <div class="col-8 col-xxl-7">
                                    <div class="cart-info__continue">
                                        <a href="./" class="cart-info__continue-link">
                                            <img
                                                class="cart-info__continue-icon icon"
                                                src="./assets/icons/arrow-down-2.svg"
                                                alt=""
                                            />
                                            Continue Shopping
                                        </a>
                                    </div>
                                </div>
                                <div class="col-4 col-xxl-5">
                                    <div class="cart-info__row">
                                        <span>Subtotal:</span>
                                        <span>$${priceTotal}</span>
                                    </div>
                                    <div class="cart-info__row">
                                        <span>Shipping:</span>
                                        <span>$10.00</span>
                                    </div>
                                    <div class="cart-info__separate"></div>
                                    <div class="cart-info__row cart-info__row--bold">
                                        <span>Total:</span>
                                        <span>$${priceTotal + 10}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-xl-12">
                    <div class="cart-info">
                        <div class="cart-info__row">
                            <span>Subtotal <span class="cart-info__sub-label">(items)</span></span>
                            <span>3</span>
                        </div>
                        <div class="cart-info__row">
                            <span>Price <span class="cart-info__sub-label">(Total)</span></span>
                            <span>$191.65</span>
                        </div>
                        <div class="cart-info__row">
                            <span>Shipping</span>
                            <span>$10.00</span>
                        </div>
                        <div class="cart-info__separate"></div>
                        <div class="cart-info__row">
                            <span>Estimated Total</span>
                            <span>$201.65</span>
                        </div>
                        <a href="payment.html" class="cart-info__next-btn btn btn--primary btn--rounded">
                            Continue to checkout
                        </a>
                    </div>
                    <div class="cart-info">
                        <a href="#!">
                            <article class="gift-item">
                                <div class="gift-item__icon-wrap">
                                    <img src="./assets/icons/gift.svg" alt="" class="gift-item__icon" />
                                </div>
                                <div class="gift-item__content">
                                    <h3 class="gift-item__title">Send this order as a gift.</h3>
                                    <p class="gift-item__desc">
                                        Available items will be shipped to your gift recipient.
                                    </p>
                                </div>
                            </article>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
})();
const shippingRoot = document.querySelector('.checkout-page');
shippingRoot.innerHTML = shippingHTML;
