
import React, { useState } from 'react';
import AddProductForm from './addProductForm';

const AddProductBtn = ({ onAddProduct }) => {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddProduct = (newProduct) => {
        onAddProduct(newProduct);
        setShowAddForm(false);
    };

    return (
        <div className="add-product-section">
            <button onClick={() => setShowAddForm(true)} className='add__products-btn'>
                додати новий товар
            </button>
            {showAddForm && (
                <AddProductForm
                    onSave={handleAddProduct}
                    onCancel={() => setShowAddForm(false)}
                />
            )}
        </div>
    );
};

export default AddProductBtn;
