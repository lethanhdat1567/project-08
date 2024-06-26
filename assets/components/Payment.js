import html from '../redux/core.js';
import storage from '../redux/storage.js';
const products = storage.getProducts();

let priceTotal = 0;
priceTotal = products.reduce((acc, cur) => {
    return acc + cur.price;
}, 0);
const paymentHTML = (function Payment() {
    return html`<div class="container">
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
                    <a href="./shipping.html" class="breadcrumbs__link breadcrumbs__link--current"
                        >Shipping
                        <img src="./assets/icons/arrow-right.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#!" class="breadcrumbs__link breadcrumbs__link--current">Payment method </a>
                </li>
            </ul>
        </div>
        <!-- Checkout content -->
        <div class="checkout-container">
            <div class="row gy-xl-3">
                <div class="col-8 col-xl-8 col-lg-12">
                    <div class="cart-info">
                        <div class="cart-info__top">
                            <h2 class="cart-info__heading cart-info__heading--lv2">
                                1. Shipping, arrives between Mon, May 16—Tue, May 24
                            </h2>
                            <a class="cart-info__edit-btn" href="./shipping.html">
                                <img class="icon" src="./assets/icons/edit.svg" alt="" />
                                Edit
                            </a>
                        </div>
                        <!-- Payment item 1 -->
                        <article class="payment-item">
                            <div class="payment-item__info">
                                <h3 class="payment-item__title">Imran Khan</h3>
                                <p class="payment-item__desc">Museum of Rajas, Sylhet Sadar, Sylhet 3100.</p>
                            </div>
                        </article>
                        <!-- Payment item 2 -->
                        <article class="payment-item">
                            <div class="payment-item__info">
                                <h3 class="payment-item__title">Items details</h3>
                                <p class="payment-item__desc">2 items</p>
                            </div>
                            <a href="./shipping.html" class="payment-item__detail">View details</a>
                        </article>
                    </div>
                    <div class="cart-info">
                        <h2 class="cart-info__heading cart-info__heading--lv2">2. Shipping method</h2>
                        <div class="cart-info__separate"></div>
                        <h3 class="cart-info__sub-heading">Availeble Shipping method</h3>
                        <!-- Payment item 3 -->
                        <label>
                            <article class="payment-item payment-item--pointer">
                                <img src="./assets/img/payment/delivery-1.png" alt="" class="payment-item__thumb" />
                                <div class="payment-item__content">
                                    <div class="payment-item__info">
                                        <h3 class="payment-item__title">Fedex Delivery</h3>
                                        <p class="payment-item__desc payment-item__desc--low">
                                            Delivery: 2-3 days work
                                        </p>
                                    </div>
                                    <span class="cart-info__checkbox payment-item__checkbox">
                                        <input
                                            checked
                                            type="radio"
                                            name="delivery-method"
                                            class="cart-info__checkbox-input payment-item__checkbox-input"
                                        />
                                        <span class="payment-item__cost">Free</span>
                                    </span>
                                </div>
                            </article>
                        </label>
                        <!-- Payment item 4 -->
                        <label>
                            <article class="payment-item payment-item--pointer">
                                <img src="./assets/img/payment/delivery-2.png" alt="" class="payment-item__thumb" />
                                <div class="payment-item__content">
                                    <div class="payment-item__info">
                                        <h3 class="payment-item__title">DHL Delivery</h3>
                                        <p class="payment-item__desc payment-item__desc--low">
                                            Delivery: 2-3 days work
                                        </p>
                                    </div>
                                    <span class="cart-info__checkbox payment-item__checkbox">
                                        <input
                                            type="radio"
                                            class="cart-info__checkbox-input payment-item__checkbox-input"
                                            name="delivery-method"
                                        />
                                        <span class="payment-item__cost">$12.00</span>
                                    </span>
                                </div>
                            </article>
                        </label>
                    </div>
                </div>
                <div class="col-4 col-xl-4 col-lg-12">
                    <div class="cart-info">
                        <h2 class="cart-info__heading cart-info__heading--lv2">Payment Details</h2>
                        <p class="cart-info__desc">
                            Complete your purchase item by providing your payment details order.
                        </p>
                        <form action="" class="form cart-info__form">
                            <div class="form__group">
                                <label for="email" class="form__label form__label--medium">Email Address</label>
                                <div class="form__text-input">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        id="email"
                                        class="form__input"
                                        required
                                    />
                                    <img src="./assets/icons/form__error.svg" alt="" class="form__input-icon-error" />
                                </div>
                                <p class="form__error">Email is not in correct format</p>
                            </div>
                            <div class="form__group">
                                <label for="Cart-holder" class="form__label form__label--medium">Card Holder</label>
                                <div class="form__text-input">
                                    <input
                                        type="text"
                                        placeholder="Card Holder"
                                        name="Cart-holder"
                                        id="Cart-holder"
                                        class="form__input"
                                        required
                                    />
                                    <img src="./assets/icons/form__error.svg" alt="" class="form__input-icon-error" />
                                </div>
                                <p class="form__error">Email is not in correct format</p>
                            </div>
                            <div class="form__group">
                                <label for="Card-details" class="form__label form__label--medium">Card Details </label>
                                <div class="form__text-input">
                                    <input
                                        type="text"
                                        placeholder="Card Details"
                                        name="Card-details"
                                        id="Card-details"
                                        class="form__input"
                                        required
                                    />
                                    <img src="./assets/icons/form__error.svg" alt="" class="form__input-icon-error" />
                                </div>
                                <p class="form__error">Email is not in correct format</p>
                            </div>
                            <div class="form__row cart-info__form-row">
                                <div class="form__group">
                                    <div class="form__text-input">
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            name="card-expire"
                                            id="card-expire"
                                            class="form__input"
                                            required
                                        />
                                        <img
                                            src="./assets/icons/form__error.svg"
                                            alt=""
                                            class="form__input-icon-error"
                                        />
                                    </div>
                                    <p class="form__error">Email is not in correct format</p>
                                </div>
                                <div class="form__group">
                                    <div class="form__text-input">
                                        <input
                                            type="text"
                                            placeholder="CVC"
                                            name="card-cvc"
                                            id="card-cvc"
                                            class="form__input"
                                            required
                                        />
                                        <img
                                            src="./assets/icons/form__error.svg"
                                            alt=""
                                            class="form__input-icon-error"
                                        />
                                    </div>
                                    <p class="form__error">Email is not in correct format</p>
                                </div>
                            </div>
                        </form>
                        <div class="cart-info__row">
                            <span>Subtotal <span class="cart-info__sub-label">(items)</span></span>
                            <span>${products.length}</span>
                        </div>
                        <div class="cart-info__row">
                            <span>Price <span class="cart-info__sub-label">(Total)</span></span>
                            <span>$${priceTotal}</span>
                        </div>
                        <div class="cart-info__row">
                            <span>Shipping</span>
                            <span>$10.00</span>
                        </div>
                        <div class="cart-info__separate"></div>
                        <div class="cart-info__row">
                            <span>Estimated Total</span>
                            <span>$${priceTotal + 10}</span>
                        </div>
                        <a href="#!" class="cart-info__next-btn btn btn--primary btn--rounded">
                            Pay $${priceTotal + 10}
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
const paymentRoot = document.querySelector('.checkout-page');
paymentRoot.innerHTML = paymentHTML;
