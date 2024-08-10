import React from 'react';
import '../../styles/scss/_admin.scss';
import '../../styles/scss/_adminProducs.scss';

const DeleteImgBtn = ({ onClick }) => {

    return (
        <button className="delete-button" onClick={onClick}>
            видалити
        </button>
    );
};

export default DeleteImgBtn;
