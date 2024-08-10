
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  
import '../styles/scss/_productCard.scss';

const ProductCard = ({ products, activeCategory }) => {

    const extractProducts = (obj) => {
        let allProducts = [];
        Object.values(obj).forEach((category) => {
            if (Array.isArray(category)) {
                allProducts = [...allProducts, ...category];
            } else if (typeof category === 'object') {
                allProducts = [...allProducts, ...extractProducts(category)];
            }
        });
        return allProducts;
    };

    const allProducts = extractProducts(products);

    const filteredProducts = activeCategory === 'all'
        ? allProducts
        : allProducts.filter(product => {
            const productCategory = product.category ? product.category.toLowerCase() : '';
            const filterCategory = activeCategory ? activeCategory.toLowerCase() : '';
            console.log(`Filtering: Product Category - ${productCategory}, Filter Category - ${filterCategory}`);
            return productCategory === filterCategory;
        });


    return (
        <div className="products__card">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="card"> 
                        <img src={product.imgSrc} alt={product.name} className="card-img" />
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}</p>
                    </Link>
                ))
            ) : (
                <p>На даний момент немає товарів у цій категорії</p>
            )}
        </div>
    );
};

ProductCard.propTypes = {
    products: PropTypes.object.isRequired,
    activeCategory: PropTypes.string.isRequired,
};

export default ProductCard;











