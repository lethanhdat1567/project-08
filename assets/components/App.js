import html from '../redux/core.js';
import Product from './Product.js';
import { connect } from '../redux/store.js';

function App({ products }) {
    return html` <div class="row row-cols-5 row-cols-lg-2 row-cols-sm-1 g-3 products-wrapper">${Product()}</div>`;
}
export default connect()(App);
