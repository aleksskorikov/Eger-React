
import React from 'react';
import AdminProducs from './AdminProducs';

const ParentComponent = () => {
    const products = []; 
    const handleAddProduct = (newProduct) => {
        console.log('New product added:', newProduct);
    };

    return (
        <div>
            <h1>Admin Products</h1>
            <AdminProducs products={products} onAddProduct={handleAddProduct} />
        </div>
    );
};

export default ParentComponent;

