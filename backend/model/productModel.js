const mongoose = require('mongoose');

// Schéma du produit
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },  // Lien vers l'image
  createdAt: { type: Date, default: Date.now }
});

// Création du modèle Product
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
