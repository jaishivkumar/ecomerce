
import React, { useState } from "react";
import styles from './Postss.module.css'
import { useNavigate } from "react-router-dom";
const ProductsPosting = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [quantity, setQuantity] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [brand, setBrand] = useState("");
    const navigate = useNavigate();
    //after submit the page form should clear
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
        name,
        price,
        description,
        category,
        image,
        quantity,
        size,
        color,
        brand,
        };
        fetch('http://localhost:8080/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        setName("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
        setQuantity("");
        setSize("");
        setColor("");
        setBrand("");
    };
    const MovePage = () =>{
        navigate('/')
    }
    return (
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <input
            type="text"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input
            type="text"
            placeholder="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
            <input
            type="text"
            placeholder="Product Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <input
            type="text"
            placeholder="Product Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
            <input
            type="text"
            placeholder="Product Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            />
            <input
            type="text"
            placeholder="Product Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            />
            <input
            type="text"
            placeholder="Product Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            />
            <button type="submit" onClick={MovePage}>Submit</button>
        </form>
        </div>
    );
    };

export default ProductsPosting;