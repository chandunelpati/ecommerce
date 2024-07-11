import React, { useState } from 'react';

const Appproductpages = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [mrp, setMRP] = useState('');
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            product_name: productName,
            description: description,
            mrp: mrp,
            img: img,
            category: category
        };

        try {
            const response = await fetch('http://localhost:8085/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const responseData = await response.json();
            alert(responseData.text); // Alert success message
            // You can optionally clear the form fields after successful submission
            setProductName('');
            setDescription('');
            setMRP('');
            setImg('');
            setCategory('');

        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.'); // Alert error message
        }
    };

    return (
        <div>
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="productName">Product Name:</label><br />
                <input type="text" id="productName" name="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required /><br /><br />

                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea><br /><br />

                <label htmlFor="mrp">MRP:</label><br />
                <input type="number" id="mrp" name="mrp" value={mrp} onChange={(e) => setMRP(e.target.value)} required /><br /><br />

                <label htmlFor="img">Image URL:</label><br />
                <input type="text" id="img" name="img" value={img} onChange={(e) => setImg(e.target.value)} required /><br /><br />

                <label htmlFor="category">Category:</label><br />
                <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required /><br /><br />

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Appproductpages;
