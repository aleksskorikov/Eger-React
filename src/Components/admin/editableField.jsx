import React, { useState } from 'react';
import '../../styles/scss/_adminProducs.scss';

const EditableField = ({ value, onSave, onCancel }) => {
    const [newValue, setNewValue] = useState(value);

    const handleSaveClick = () => {
        onSave(newValue);
    };

    return (
        <div className="editable-field">
            <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className='editable-input'
            />
            <button onClick={handleSaveClick} className='editable__btn-ok'>OK</button>
            <button onClick={onCancel} className='editable__btn-cancellation'>Скасувння</button>
        </div>
    );
};

export default EditableField;

