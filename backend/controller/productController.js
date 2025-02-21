import Product from "../model/productModel.js"; 

export const create = async (req, res) => {
    try {

        const productExist = await Product.findOne(req.body);
        if (productExist) {
            return res.status(400).json({ message: "Product already exists." });
        }

        const newProduct = new Product(req.body);
        const savedData = await newProduct.save();
        res.status(201).json(savedData);  

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found." });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
