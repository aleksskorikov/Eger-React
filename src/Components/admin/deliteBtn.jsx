
import React from 'react';

const DeliteBtn = ({ onDelete, style }) => {
    const handleDelete = () => {
        if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
            onDelete();
        }
    };

    return (
        <button onClick={handleDelete} className={`${style} delete-button`}>
        видалити товар
        </button>
    );
};

export default DeliteBtn;













