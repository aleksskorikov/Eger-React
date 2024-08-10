import React, { useState } from 'react';
import EditableField from './editableField';
import EditableImageField from './editableImageField';
import '../../styles/scss/_adminProducs.scss';

const AddProductForm = ({ onSave, onCancel, style }) => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        list1: '',
        list2: '',
        list3: '',
        list4: '',
        list5: '',
        list6: '',
        list7: '',
        list8: '',
        list9: '',
        list10: '',
        price: '',
        imgSrc: '',
        img2: '',
        img3: '',
        img4: '',
        img5: ''
    });

    const handleFieldChange = (field, value) => {
        setNewProduct({ ...newProduct, [field]: value });
    };

    const handleSaveClick = () => {
        onSave(newProduct);
    };


// Сохранение товара в localStorage

// const handleSaveClick = () => {
//     let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
//     storedProducts.push(newProduct);
//     localStorage.setItem('products', JSON.stringify(storedProducts));
//     onSave(newProduct);
// };


    return (
        <div className="add-product-form">
            <p>основне фото</p>
            <EditableImageField currentImage={newProduct.imgSrc} onSave={(value) => handleFieldChange('imgSrc', value)} />
            <p>додаткове фото</p>
            <EditableImageField currentImage={newProduct.img2} onSave={(value) => handleFieldChange('img2', value)} />
            <p>додаткове фото</p>
            <EditableImageField currentImage={newProduct.img3} onSave={(value) => handleFieldChange('img3', value)} />
            <p>додаткове фото</p>
            <EditableImageField currentImage={newProduct.img4} onSave={(value) => handleFieldChange('img4', value)} />
            <p>додаткове фото</p>
            <EditableImageField currentImage={newProduct.img5} onSave={(value) => handleFieldChange('img5', value)} />
            <p>назва товару</p>
            <EditableField value={newProduct.name} onSave={(value) => handleFieldChange('name', value)} />
            <p>опис товару (не обов'язково)</p>
            <EditableField value={newProduct.description} onSave={(value) => handleFieldChange('description', value)} />
            <p>опис товару у вигляді списку пункт 1 (не обов'язково)</p>
            <EditableField value={newProduct.list1} onSave={(value) => handleFieldChange('list1', value)} />
            <p>опис товару у вигляді списку пункт 2 (не обов'язково)</p>
            <EditableField value={newProduct.list2} onSave={(value) => handleFieldChange('list2', value)} />
            <p>опис товару у вигляді списку пункт 3 (не обов'язково)</p>
            <EditableField value={newProduct.list3} onSave={(value) => handleFieldChange('list3', value)} />
            <p>опис товару у вигляді списку пункт 4 (не обов'язково)</p>
            <EditableField value={newProduct.list4} onSave={(value) => handleFieldChange('list4', value)} />
            <p>опис товару у вигляді списку пункт 5 (не обов'язково)</p>
            <EditableField value={newProduct.list5} onSave={(value) => handleFieldChange('list4', value)} />
            <p>опис товару у вигляді списку пункт 6 (не обов'язково)</p>
            <EditableField value={newProduct.list6} onSave={(value) => handleFieldChange('list4', value)} />
            <p>опис товару у вигляді списку пункт 7 (не обов'язково)</p>
            <EditableField value={newProduct.list7} onSave={(value) => handleFieldChange('list4', value)} />
            <p>опис товару у вигляді списку пункт 8 (не обов'язково)</p>
            <EditableField value={newProduct.list8} onSave={(value) => handleFieldChange('list4', value)} />
            <p>опис товару у вигляді списку пункт 9 (не обов'язково)</p>
            <EditableField value={newProduct.list9} onSave={(value) => handleFieldChange('list4', value)} />
            <p>опис товару у вигляді списку пункт 10 (не обов'язково)</p>
            <EditableField value={newProduct.list10} onSave={(value) => handleFieldChange('list4', value)} />
            <p>ціна товару</p>
            <EditableField value={newProduct.price} onSave={(value) => handleFieldChange('price', value)} />
            <div className="add__product-btns-block">
                <button onClick={handleSaveClick} className='add__product-btn-ok'>зберегти</button>
                <button onClick={onCancel} className='add__product-cancellation'>скасувати</button>
            </div>
            
        </div>
    );
};

export default AddProductForm;
