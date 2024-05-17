// express 모듈 임포트
const express = require("express");
// 컨트롤러 임포트
const productsController = require("../controllers/products.controller");
// 라우터 정의
const productsRouter = express.Router();

// api 정의
productsRouter.post("/", productsController.createProduct);
productsRouter.get("/", productsController.getProducts);
productsRouter.get("/:productId", productsController.getProductById);
productsRouter.put("/:productId", productsController.updateProduct);
productsRouter.delete("/:productId", productsController.deleteProduct);

// 라우터 내보내기
module.exports = productsRouter;
