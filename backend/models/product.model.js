const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      trim: true,
      maxLength: [100, "Product name cannot exceed 100 characters"],
      //   type String, so we can use maxLength and minLength validators in mongoose schema [default is String] [maxLength and minLength are not available for Number]
    },
    price: {
      type: Number,
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "Please provide a product description"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        image: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please provide a product category"],
      enum: {
        values: [
          "Electronics",
          "Mobile Phones",
          "Laptops",
          "Accessories",
          "Headphones",
          "Foods",
          "Books",
          "Clothes/Shoes",
          "Beauty/Health",
          "Sports",
          "Outdoor",
          "Home",
        ],
        message: "Please select correct category",
      },
    },
    seller: {
      type: String,
      required: [true, "Please provide product seller"],
    },
    stock: {
      type: Number,
      required: [true, "Please provide product stock"],
      max: [20, "Product stock cannot exceed 20"],
      // type Number, so we can use max and min validators in mongoose schema [default is String] [max and min are not available for String]
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    numOfReviews: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
