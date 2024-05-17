// 모델 임포트
const ProductModel = require("../models/products.model");

// create 함수
async function createProduct(req, res, next) {
  try {
    // create 메서드를 사용해 DB에 데이터 저장
    const createdProduct = await ProductModel.create(req.body);
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
}

// read 함수
// 모든 데이터 조회
async function getProducts(req, res, next) {
  try {
    const allProducts = await ProductModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
}
// 특정 데이터 조회
async function getProductById(req, res, next) {
  try {
    const product = await ProductModel.findById(req.params.productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}

// put (일부 수정)
async function updateProduct(req, res, next) {
  try {
    // 옵션 new: true를 사용하면 업데이트된 데이터를 반환
    let updatedProduct = await ProductModel.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}

// delete
async function deleteProduct(req, res, next) {
  try {
    let deletedProduct = await ProductModel.findByIdAndDelete(req.params.productId);
    if (deletedProduct) {
      res.status(204).json(deletedProduct);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}

// 함수 내보내기
module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
