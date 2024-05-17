// mongoose 모듈 임포트
const mongoose = require("mongoose");

// 스키마 생성
const productShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productShema);

module.exports = Product;
