import React, { useState } from 'react';
import '../../styles/scss/_adminProducs.scss';

const EditableImageField = ({ currentImage, onSave, onCancel }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleSaveClick = () => {
        onSave(selectedImage);
    };

    return (
        <div className="editable-image-field">
            <input type="file" onChange={handleFileChange} className='editables-input' />
            <div className="editable__block-btn">
                <button onClick={handleSaveClick} className='editable__btn-ok'>OK</button>
                <button onClick={onCancel} className='editable__btn-cancellation'>Скасувати</button>    
            </div>
            
        </div>
    );
};

export default EditableImageField;
