import html from '../redux/core.js';
import { connect } from '../redux/store.js';
import storage from '../redux/storage.js';

const [store] = storage.get();
const result = (function ProductDetail() {
    return html`<div class="container">
        <!-- Search bar -->
        <div class="product-container">
            <div class="search-bar d-none d-md-flex">
                <input type="text" name="" placeholder="Search for item" id="" class="search-bar__input" />
                <button class="search-bar__submit">
                    <img src="./assets/icons/seach.svg" alt="" class="search-bar__icon icon" />
                </button>
            </div>
        </div>
        <!-- Breadcrumbs -->
        <div class="product-container">
            <ul class="breadcrumbs">
                <li>
                    <a href="#!" class="breadcrumbs__link"
                        >Departments
                        <img src="./assets/icons/arrow-right.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#!" class="breadcrumbs__link"
                        >Coffee
                        <img src="./assets/icons/arrow-right.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#!" class="breadcrumbs__link"
                        >Coffee Beans
                        <img src="./assets/icons/arrow-right.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#!" class="breadcrumbs__link breadcrumbs__link--current">LavAzza </a>
                </li>
            </ul>
        </div>
        <!-- Product info -->
        <div class="product-container prod-info-content">
            <div class="row">
                <div class="col-5 col-xl-6 col-lg-12">
                    <div class="prod-review">
                        <div class="prod-review__list">
                            <div class="prod-review__item">
                                <img src="./assets/img/products/${store.image}" alt="" class="prod-review__img" />
                            </div>
                            <div class="prod-review__item">
                                <img src="./assets/img/products/item1.png" alt="" class="prod-review__img" />
                            </div>
                            <div class="prod-review__item">
                                <img src="./assets/img/products/item1.png" alt="" class="prod-review__img" />
                            </div>
                            <div class="prod-review__item">
                                <img src="./assets/img/products/item1.png" alt="" class="prod-review__img" />
                            </div>
                        </div>
                        <div class="prod-review__thumb">
                            <img
                                src="./assets/img/products/item1.png"
                                alt=""
                                class="prod-review__thumb-img prod-review__thumb-img--current"
                            />
                            <img src="./assets/img/products/item2.png" alt="" class="prod-review__thumb-img" />
                            <img src="./assets/img/products/item3.png" alt="" class="prod-review__thumb-img" />
                            <img src="./assets/img/products/item4.png" alt="" class="prod-review__thumb-img" />
                        </div>
                    </div>
                </div>
                <div class="col-7 col-xl-6 col-lg-12">
                    <form action="" class="form">
                        <section class="prod-info">
                            <h1 class="prod-info__heading">${store.name}</h1>
                            <div class="row">
                                <div class="col-5 col-xxl-6 col-xl-12">
                                    <div class="prod-prop">
                                        <img src="./assets/icons/star.svg" alt="" class="prod-prop__icon" />
                                        <h4 class="prod-prop__title">(3.5) 1100 reviews</h4>
                                    </div>
                                    <label class="form__label prod-info__label">Size/Weight</label>
                                    <div class="filter__form-group">
                                        <div class="form__select-wrap">
                                            <div class="form__select" style="--width: 146px">
                                                500g
                                                <img
                                                    src="./assets/icons/select-arrow.svg"
                                                    alt=""
                                                    class="form__select-arrow icon"
                                                />
                                            </div>
                                            <div class="form__select">
                                                Gram
                                                <img
                                                    src="./assets/icons/select-arrow.svg"
                                                    alt=""
                                                    class="form__select-arrow icon"
                                                />
                                            </div>
                                        </div>
                                        <div class="filter__form-group">
                                            <div class="form__tags">
                                                <button class="form__tag prod-info__tag">Small</button>
                                                <button class="form__tag prod-info__tag">Medium</button>
                                                <button class="form__tag prod-info__tag">Large</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-7 col-xxl-6 col-xl-12">
                                    <div class="prod-props">
                                        <div class="prod-prop">
                                            <img
                                                src="./assets/icons/document.svg"
                                                alt=""
                                                class="prod-prop__icon icon"
                                            />
                                            <h4 class="prod-prop__title">Compare</h4>
                                        </div>
                                        <div class="prod-prop">
                                            <img src="./assets/icons/buy.svg" alt="" class="prod-prop__icon icon" />
                                            <div>
                                                <h4 class="prod-prop__title">Delivery</h4>
                                                <p class="prod-prop__desc">From $6 for 1-3 days</p>
                                            </div>
                                        </div>
                                        <div class="prod-prop">
                                            <img src="./assets/icons/bag.svg" alt="" class="prod-prop__icon icon" />
                                            <div>
                                                <h4 class="prod-prop__title">Pickup</h4>
                                                <p class="prod-prop__desc">Out of 2 store, today</p>
                                            </div>
                                        </div>
                                        <div class="prod-info__card">
                                            <div class="prop-info__row">
                                                <span class="prod-info__price">$${store.price}</span>
                                                <span class="prod-info__tax">10%</span>
                                            </div>
                                            <p class="prod-info__total-price">$${store.price}</p>
                                            <div class="prod-info__row">
                                                <button class="btn btn--primary prod-info__add-to-cart">
                                                    Add to card
                                                </button>
                                                <button class="like-btn prod-info__like-btn" fdprocessedid="1nyck">
                                                    <img
                                                        src="./assets/icons/heart.svg"
                                                        alt=""
                                                        class="like-btn__icon icon"
                                                    />
                                                    <img
                                                        src="./assets/icons/heart-red.svg"
                                                        alt=""
                                                        class="like-btn__icon--liked"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
        <!-- Product content -->
        <div class="product-container">
            <div class="prod-tad js-tabs">
                <ul class="prod-tad__list">
                    <li class="prod-tad__item prod-tad__item--current">Description</li>
                    <li class="prod-tad__item">Review (1100)</li>
                    <li class="prod-tad__item">Similar</li>
                </ul>
                <div class="prod-tad__contents">
                    <div class="prod-tad__content prod-tad__content--current">
                        <div class="row">
                            <div class="col-8 col-xl-10 col-lg-12">
                                <div class="text-content prod-tab__text-content">
                                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, eum vitae.
                                        Debitis magni cum quaerat ex quibusdam, nemo saepe ad delectus, odit
                                        reprehenderit doloribus veniam incidunt impedit voluptatum veritatis quidem.
                                    </p>
                                    <h3>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, laudantium.
                                    </h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, eum vitae.
                                        Debitis magni cum quaerat ex quibusdam, nemo saepe ad delectus, odit
                                        reprehenderit doloribus veniam incidunt impedit voluptatum veritatis quidem.
                                    </p>
                                    <p>
                                        <img src="./assets/img/products/item1.png" alt="" />
                                        <em>Lorem ipsum dolor sit amet.0</em>
                                    </p>
                                    <blockquote>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            <a href="#!">consectetur</a> adipisicing elit. Amet, eum vitae. Debitis
                                            magni cum quaerat ex quibusdam, nemo saepe ad delectus, odit reprehenderit
                                            doloribus veniam incidunt impedit <a href="#!">voluptatum</a> veritatis
                                            quidem.
                                        </p>
                                    </blockquote>
                                    <h2>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, laudantium.
                                    </h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, eum vitae.
                                        Debitis magni cum quaerat ex quibusdam, nemo saepe ad delectus, odit
                                        reprehenderit doloribus veniam incidunt impedit voluptatum veritatis quidem.
                                    </p>
                                    <hr />
                                    <p>
                                        <img src="./assets/img/products/item1.png" alt="" />
                                        <em>Lorem ipsum dolor sit amet.0</em>
                                    </p>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, eum vitae.
                                        Debitis magni cum quaerat ex quibusdam, nemo saepe ad delectus, odit
                                        reprehenderit doloribus veniam incidunt impedit voluptatum veritatis quidem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prod-tad__content">
                        <div class="prod-content">
                            <h2 class="prod-content__heading">What our customer are saying</h2>
                            <div class="row row-cols-3 gx-lg-2 row-cols-md-1 gy-md-3">
                                <!-- Review card 1 -->
                                <div class="col">
                                    <div class="review-card">
                                        <div class="review-card__content">
                                            <img
                                                src="./assets/img/avatar/avar-1.png"
                                                alt=""
                                                class="review-card__avatar"
                                            />
                                            <div class="review-card__info">
                                                <h4 class="review-card__title">Jakir Hussen</h4>
                                                <p class="review-card__desc">Great product, I love this Coffee Beans</p>
                                            </div>
                                        </div>
                                        <div class="review-card__rating">
                                            <div class="review-card__star-list">
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img
                                                    src="./assets/icons/star-half.svg"
                                                    alt=""
                                                    class="review-card__star"
                                                />
                                                <img
                                                    src="./assets/icons/star-blank.svg"
                                                    alt=""
                                                    class="review-card__star"
                                                />
                                            </div>
                                            <span class="review-card__rating-title"> (3.5) Review </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review card 2 -->
                                <div class="col">
                                    <div class="review-card">
                                        <div class="review-card__content">
                                            <img
                                                src="./assets/img/avatar/avar-2.png"
                                                alt=""
                                                class="review-card__avatar"
                                            />
                                            <div class="review-card-info">
                                                <h4 class="review-card__title">Jubed Ahmed</h4>
                                                <p class="review-card__desc">
                                                    Awesome Coffee, I love this Coffee Beans
                                                </p>
                                            </div>
                                        </div>
                                        <div class="review-card__rating">
                                            <div class="review-card__star-list">
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img
                                                    src="./assets/icons/star-half.svg"
                                                    alt=""
                                                    class="review-card__star"
                                                />
                                                <img
                                                    src="./assets/icons/star-blank.svg"
                                                    alt=""
                                                    class="review-card__star"
                                                />
                                            </div>
                                            <span class="review-card__rating-title"> (3.5) Review </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Review card 3 -->
                                <div class="col">
                                    <div class="review-card">
                                        <div class="review-card__content">
                                            <img
                                                src="./assets/img/avatar/avar-3.png"
                                                alt=""
                                                class="review-card__avatar"
                                            />
                                            <div class="review-card__info">
                                                <h4 class="review-card__title">Delwar Hussain</h4>
                                                <p class="review-card__desc">Great product, I like this Coffee Beans</p>
                                            </div>
                                        </div>
                                        <div class="review-card__rating">
                                            <div class="review-card__star-list">
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img src="./assets/icons/star.svg" alt="" class="review-card__star" />
                                                <img
                                                    src="./assets/icons/star-half.svg"
                                                    alt=""
                                                    class="review-card__star"
                                                />
                                                <img
                                                    src="./assets/icons/star-blank.svg"
                                                    alt=""
                                                    class="review-card__star"
                                                />
                                            </div>
                                            <span class="review-card__rating-title"> (3.5) Review </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prod-tad__content">
                    <div class="prod-content">
                        <h2 class="prod-content__heading">Similar items you might like</h2>
                        <div class="row row-cols-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3">
                            <!-- Product item 1 -->
                            <div class="col">
                                <article class="product-card">
                                    <div class="product-card__img-wrap">
                                        <a href="./product-detail.html">
                                            <img
                                                src="./assets/img/products/item1.png"
                                                alt=""
                                                class="product-card__thumb"
                                            />
                                        </a>
                                        <button class="like-btn like-btn--liked product-card__like-btn">
                                            <img src="./assets/icons/heart.svg" alt="" class="like-btn__icon icon" />
                                            <img
                                                src="./assets/icons/heart-red.svg"
                                                alt=""
                                                class="like-btn__icon--liked"
                                            />
                                        </button>
                                    </div>
                                    <h3 class="product-card__title">
                                        <a href="./product-detail.html">
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </a>
                                    </h3>
                                    <p class="product-card__brand">Lavazza</p>
                                    <div class="product-card__row">
                                        <span class="product-card__price">$47.00</span>
                                        <img src="./assets/icons/star.svg" alt="" class="product-card__star" />
                                        <span class="product-card__score">4.3</span>
                                    </div>
                                </article>
                            </div>
                            <!-- Product item 2 -->
                            <div class="col">
                                <article class="product-card">
                                    <div class="product-card__img-wrap">
                                        <a href="./product-detail.html">
                                            <img
                                                src="./assets/img/products/item2.png"
                                                alt=""
                                                class="product-card__thumb"
                                            />
                                        </a>
                                        <button class="like-btn product-card__like-btn">
                                            <img src="./assets/icons/heart.svg" alt="" class="like-btn__icon icon" />
                                            <img
                                                src="./assets/icons/heart-red.svg"
                                                alt=""
                                                class="like-btn__icon--liked"
                                            />
                                        </button>
                                    </div>
                                    <h3 class="product-card__title">
                                        <a href="./product-detail.html">
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </a>
                                    </h3>
                                    <p class="product-card__brand">Lavazza</p>
                                    <div class="product-card__row">
                                        <span class="product-card__price">$47.00</span>
                                        <img src="./assets/icons/star.svg" alt="" class="product-card__star" />
                                        <span class="product-card__score">4.3</span>
                                    </div>
                                </article>
                            </div>
                            <!-- Product item 3 -->
                            <div class="col">
                                <article class="product-card">
                                    <div class="product-card__img-wrap">
                                        <a href="./product-detail.html">
                                            <img
                                                src="./assets/img/products/item3.png"
                                                alt=""
                                                class="product-card__thumb"
                                            />
                                        </a>
                                        <button class="like-btn like-btn--liked product-card__like-btn">
                                            <img src="./assets/icons/heart.svg" alt="" class="like-btn__icon icon" />
                                            <img
                                                src="./assets/icons/heart-red.svg"
                                                alt=""
                                                class="like-btn__icon--liked"
                                            />
                                        </button>
                                    </div>
                                    <h3 class="product-card__title">
                                        <a href="./product-detail.html">
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </a>
                                    </h3>
                                    <p class="product-card__brand">Lavazza</p>
                                    <div class="product-card__row">
                                        <span class="product-card__price">$47.00</span>
                                        <img src="./assets/icons/star.svg" alt="" class="product-card__star" />
                                        <span class="product-card__score">4.3</span>
                                    </div>
                                </article>
                            </div>
                            <!-- Product item 4 -->
                            <div class="col">
                                <article class="product-card">
                                    <div class="product-card__img-wrap">
                                        <a href="./product-detail.html">
                                            <img
                                                src="./assets/img/products/item4.png"
                                                alt=""
                                                class="product-card__thumb"
                                            />
                                        </a>
                                        <button class="like-btn product-card__like-btn">
                                            <img src="./assets/icons/heart.svg" alt="" class="like-btn__icon icon" />
                                            <img
                                                src="./assets/icons/heart-red.svg"
                                                alt=""
                                                class="like-btn__icon--liked"
                                            />
                                        </button>
                                    </div>
                                    <h3 class="product-card__title">
                                        <a href="./product-detail.html">
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </a>
                                    </h3>
                                    <p class="product-card__brand">Lavazza</p>
                                    <div class="product-card__row">
                                        <span class="product-card__price">$47.00</span>
                                        <img src="./assets/icons/star.svg" alt="" class="product-card__star" />
                                        <span class="product-card__score">4.3</span>
                                    </div>
                                </article>
                            </div>
                            <!-- Product item 5 -->
                            <div class="col">
                                <article class="product-card">
                                    <div class="product-card__img-wrap">
                                        <a href="./product-detail.html">
                                            <img
                                                src="./assets/img/products/item4.png"
                                                alt=""
                                                class="product-card__thumb"
                                            />
                                        </a>
                                        <button class="like-btn product-card__like-btn">
                                            <img src="./assets/icons/heart.svg" alt="" class="like-btn__icon icon" />
                                            <img
                                                src="./assets/icons/heart-red.svg"
                                                alt=""
                                                class="like-btn__icon--liked"
                                            />
                                        </button>
                                    </div>
                                    <h3 class="product-card__title">
                                        <a href="./product-detail.html">
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </a>
                                    </h3>
                                    <p class="product-card__brand">Lavazza</p>
                                    <div class="product-card__row">
                                        <span class="product-card__price">$47.00</span>
                                        <img src="./assets/icons/star.svg" alt="" class="product-card__star" />
                                        <span class="product-card__score">4.3</span>
                                    </div>
                                </article>
                            </div>
                            <!-- Product item 6 -->
                            <div class="col">
                                <article class="product-card">
                                    <div class="product-card__img-wrap">
                                        <a href="./product-detail.html">
                                            <img
                                                src="./assets/img/products/item4.png"
                                                alt=""
                                                class="product-card__thumb"
                                            />
                                        </a>
                                        <button class="like-btn product-card__like-btn">
                                            <img src="./assets/icons/heart.svg" alt="" class="like-btn__icon icon" />
                                            <img
                                                src="./assets/icons/heart-red.svg"
                                                alt=""
                                                class="like-btn__icon--liked"
                                            />
                                        </button>
                                    </div>
                                    <h3 class="product-card__title">
                                        <a href="./product-detail.html">
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </a>
                                    </h3>
                                    <p class="product-card__brand">Lavazza</p>
                                    <div class="product-card__row">
                                        <span class="product-card__price">$47.00</span>
                                        <img src="./assets/icons/star.svg" alt="" class="product-card__star" />
                                        <span class="product-card__score">4.3</span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
})();
// Add To Cart
document.addEventListener('DOMContentLoaded', function () {
    const addInput = document.querySelector('.prod-info__add-to-cart');
    // ONCLICK
    addInput.onclick = (e) => {
        e.preventDefault();
        dispatch('add', store);
        window.location.href = '/index-logined.html';
    };
});
// Render
const productDetailRoot = document.querySelector('.product-page');
productDetailRoot.innerHTML = result;
// Reload trang
window.addEventListener('beforeunload', function (event) {
    localStorage.removeItem('CART');
});
