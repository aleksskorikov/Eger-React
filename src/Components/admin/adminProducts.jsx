import React, { useState, useEffect } from 'react';
import '../../styles/scss/_adminProducs.scss';
import DeliteBtn from './deliteBtn';
import DeleteImgBtn from './deleteImgBtn';
import EditableField from './editableField';
import EditableImageField from './editableImageField';
import AddProductForm from './addProductForm';
import AddProductBtn from './addProductBtn';


const AdminProducs = ({ products, onDeleteProduct, onAddProduct }) => {
    const [editingField, setEditingField] = useState({ id: null, field: null });
    const [showAddForm, setShowAddForm] = useState(false);

    console.log('Products:', products); 

    const handleEditClick = (id, field) => {
        setEditingField({ id, field });
    };

    const handleCancelClick = () => {
        setEditingField({ id: null, field: null });
    };

    const handleSaveClick = (id, field, newValue) => {
        setEditingField({ id: null, field: null });
    };

    const handleSaveImageClick = (id, field, newImage) => {
        setEditingField({ id: null, field: null });
    };

    return (
        <div className="admin-block">
            <AddProductBtn onAddProduct={onAddProduct} />
            <div className="products__card">
                {products.length === 0 ? (
                    <div className="no-products">
                        <p>На даний момент немає товарів у цій категорії</p>
                    </div>
                ) : (
                    products.map(product => {
                        const images = [
                            { src: product.imgSrc, field: 'imgSrc' },
                            { src: product.img2, field: 'img2' },
                            { src: product.img3, field: 'img3' },
                            { src: product.img4, field: 'img4' },
                            { src: product.img5, field: 'img5' }
                        ].filter(img => img.src);

                        return (
                            <div key={product.id} className="admin-card">
                                <div className="admin-slider">
                                    {images.map((image, index) => (
                                        <div key={index} className="admin-images">
                                            {editingField.id === product.id && editingField.field === image.field ? (
                                                <EditableImageField
                                                    currentImage={image.src}
                                                    onSave={(newImage) => handleSaveImageClick(product.id, image.field, newImage)}
                                                    onCancel={handleCancelClick}
                                                />
                                            ) : (
                                                <>
                                                    <img src={image.src} alt={`Slide ${index}`} className="admin-img" />
                                                    <div className="btns-block">
                                                        <button onClick={() => handleEditClick(product.id, image.field)} className='change-btn'>змінити</button> 
                                                        <DeleteImgBtn />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                {['name', 'description', 'price'].map(field => (
                                    <div key={field} className={`admin-${field}`}>
                                        {editingField.id === product.id && editingField.field === field ? (
                                            <EditableField
                                                value={product[field]}
                                                onSave={(newValue) => handleSaveClick(product.id, field, newValue)}
                                                onCancel={handleCancelClick}
                                            />
                                        ) : (
                                            <>
                                                <div className="data-block">
                                                    <p className='data-data'>{product[field]}</p>
                                                    <button onClick={() => handleEditClick(product.id, field)} className='change-btn'>змінити</button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                                <ol className="product-lists">
                                    {Array.from({ length: 10 }, (_, i) => `list${i + 1}`).map(listField => (
                                        product[listField] && (
                                            <div key={listField} className="admin-list">
                                                {editingField.id === product.id && editingField.field === listField ? (
                                                    <EditableField
                                                        value={product[listField]}
                                                        onSave={(newValue) => handleSaveClick(product.id, listField, newValue)}
                                                        onCancel={handleCancelClick}
                                                    />
                                                ) : (
                                                    <>
                                                        <div className="data-blocks">
                                                            <li>{product[listField]}</li>
                                                            <button onClick={() => handleEditClick(product.id, listField)} className='change-btn'>змінити</button>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </ol>
                                <DeliteBtn style={'deleteBtn'} onClick={() => onDeleteProduct(product.id)} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
export default AdminProducs;


// добавление товара через localStorage




// import React, { useState, useEffect } from 'react';
// import '../styles/scss/_adminProducs.scss';
// import DeliteBtn from '../Components/deliteBtn';
// import DeleteImgBtn from './deleteImgBtn';
// import EditableField from '../Components/editableField';
// import EditableImageField from '../Components/editableImageField';
// import AddProductForm from '../Components/addProductForm';

// const AdminProducs = () => {
//     const [products, setProducts] = useState([]);
//     const [editingField, setEditingField] = useState({ id: null, field: null });
//     const [showAddForm, setShowAddForm] = useState(false);

//     // Load products from localStorage when the component mounts
//     useEffect(() => {
//         const loadedProducts = JSON.parse(localStorage.getItem('products')) || [];
//         setProducts(loadedProducts);
//     }, []);

//     const handleEditClick = (id, field) => {
//         setEditingField({ id, field });
//     };

//     const handleCancelClick = () => {
//         setEditingField({ id: null, field: null });
//     };

//     const handleSaveClick = (id, field, newValue) => {
//         const updatedProducts = products.map(product =>
//             product.id === id ? { ...product, [field]: newValue } : product
//         );
//         setProducts(updatedProducts);
//         localStorage.setItem('products', JSON.stringify(updatedProducts));
//         setEditingField({ id: null, field: null });
//     };

//     const handleSaveImageClick = (id, field, newImage) => {
//         const updatedProducts = products.map(product =>
//             product.id === id ? { ...product, [field]: newImage } : product
//         );
//         setProducts(updatedProducts);
//         localStorage.setItem('products', JSON.stringify(updatedProducts));
//         setEditingField({ id: null, field: null });
//     };

//     const handleAddProduct = (newProduct) => {
//         const updatedProducts = [...products, newProduct];
//         setProducts(updatedProducts);
//         localStorage.setItem('products', JSON.stringify(updatedProducts));
//         setShowAddForm(false);
//     };

//     const handleDeleteProduct = (id) => {
//         const updatedProducts = products.filter(product => product.id !== id);
//         setProducts(updatedProducts);
//         localStorage.setItem('products', JSON.stringify(updatedProducts));
//     };

//     return (
//         <div className="admin-block">
//             <button onClick={() => setShowAddForm(true)}>Добавить новый товар</button>
//             {showAddForm && <AddProductForm onSave={handleAddProduct} onCancel={() => setShowAddForm(false)} />}
//             <div className="products__card">
//                 {products.map(product => {
//                     const images = [
//                         { src: product.imgSrc, field: 'imgSrc' },
//                         { src: product.img2, field: 'img2' },
//                         { src: product.img3, field: 'img3' },
//                         { src: product.img4, field: 'img4' },
//                         { src: product.img5, field: 'img5' }
//                     ].filter(img => img.src);

//                     return (
//                         <div key={product.id} className="admin-card">
//                             <div className="product-slider">
//                                 {images.map((image, index) => (
//                                     <div key={index} className="admin-images">
//                                         {editingField.id === product.id && editingField.field === image.field ? (
//                                             <EditableImageField
//                                                 currentImage={image.src}
//                                                 onSave={(newImage) => handleSaveImageClick(product.id, image.field, newImage)}
//                                                 onCancel={handleCancelClick}
//                                             />
//                                         ) : (
//                                             <>
//                                                 <img src={image.src} alt={`Slide ${index}`} className="admin-img" />
//                                                 <button onClick={() => handleEditClick(product.id, image.field)}>Изменить</button>
//                                             </>
//                                         )}
//                                         <DeleteImgBtn />
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="admin-name">
//                                 {editingField.id === product.id && editingField.field === 'name' ? (
//                                     <EditableField
//                                         value={product.name}
//                                         onSave={(newValue) => handleSaveClick(product.id, 'name', newValue)}
//                                         onCancel={handleCancelClick}
//                                     />
//                                 ) : (
//                                     <>
//                                         <p>{product.name}</p>
//                                         <button onClick={() => handleEditClick(product.id, 'name')}>Изменить</button>
//                                     </>
//                                 )}
//                             </div>
//                             <div className="admin-description">
//                                 {editingField.id === product.id && editingField.field === 'description' ? (
//                                     <EditableField
//                                         value={product.description}
//                                         onSave={(newValue) => handleSaveClick(product.id, 'description', newValue)}
//                                         onCancel={handleCancelClick}
//                                     />
//                                 ) : (
//                                     <>
//                                         <p>{product.description}</p>
//                                         <button onClick={() => handleEditClick(product.id, 'description')}>Изменить</button>
//                                     </>
//                                 )}
//                             </div>
//                             <ol className="product-lists">
//                                 {product.list1 && (
//                                     <div className="admin-list">
//                                         {editingField.id === product.id && editingField.field === 'list1' ? (
//                                             <EditableField
//                                                 value={product.list1}
//                                                 onSave={(newValue) => handleSaveClick(product.id, 'list1', newValue)}
//                                                 onCancel={handleCancelClick}
//                                             />
//                                         ) : (
//                                             <>
//                                                 <li>{product.list1}</li>
//                                                 <button onClick={() => handleEditClick(product.id, 'list1')}>Изменить</button>
//                                             </>
//                                         )}
//                                     </div>
//                                 )}
//                                 {product.list2 && (
//                                     <div className="admin-list">
//                                         {editingField.id === product.id && editingField.field === 'list2' ? (
//                                             <EditableField
//                                                 value={product.list2}
//                                                 onSave={(newValue) => handleSaveClick(product.id, 'list2', newValue)}
//                                                 onCancel={handleCancelClick}
//                                             />
//                                         ) : (
//                                             <>
//                                                 <li>{product.list2}</li>
//                                                 <button onClick={() => handleEditClick(product.id, 'list2')}>Изменить</button>
//                                             </>
//                                         )}
//                                     </div>
//                                 )}
//                                 {product.list3 && (
//                                     <div className="admin-list">
//                                         {editingField.id === product.id && editingField.field === 'list3' ? (
//                                             <EditableField
//                                                 value={product.list3}
//                                                 onSave={(newValue) => handleSaveClick(product.id, 'list3', newValue)}
//                                                 onCancel={handleCancelClick}
//                                             />
//                                         ) : (
//                                             <>
//                                                 <li>{product.list3}</li>
//                                                 <button onClick={() => handleEditClick(product.id, 'list3')}>Изменить</button>
//                                             </>
//                                         )}
//                                     </div>
//                                 )}
//                                 {product.list4 && (
//                                     <div className="admin-list">
//                                         {editingField.id === product.id && editingField.field === 'list4' ? (
//                                             <EditableField
//                                                 value={product.list4}
//                                                 onSave={(newValue) => handleSaveClick(product.id, 'list4', newValue)}
//                                                 onCancel={handleCancelClick}
//                                             />
//                                         ) : (
//                                             <>
//                                                 <li>{product.list4}</li>
//                                                 <button onClick={() => handleEditClick(product.id, 'list4')}>Изменить</button>
//                                             </>
//                                         )}
//                                     </div>
//                                 )}
//                             </ol>
//                             <div className="admin-price">
//                                 {editingField.id === product.id && editingField.field === 'price' ? (
//                                     <EditableField
//                                         value={product.price}
//                                         onSave={(newValue) => handleSaveClick(product.id, 'price', newValue)}
//                                         onCancel={handleCancelClick}
//                                     />
//                                 ) : (
//                                     <>
//                                         <p>{product.price}</p>
//                                         <button onClick={() => handleEditClick(product.id, 'price')}>Изменить</button>
//                                     </>
//                                 )}
//                             </div>
//                             <div className="admin-category">
//                                 {editingField.id === product.id && editingField.field === 'category' ? (
//                                     <EditableField
//                                         value={product.category}
//                                         onSave={(newValue) => handleSaveClick(product.id, 'category', newValue)}
//                                         onCancel={handleCancelClick}
//                                     />
//                                 ) : (
//                                     <>
//                                         <p>{product.category}</p>
//                                         <button onClick={() => handleEditClick(product.id, 'category')}>Изменить</button>
//                                     </>
//                                 )}
//                             </div>
//                             <DeliteBtn onDelete={() => handleDeleteProduct(product.id)} />
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default AdminProducs;




