import {Router} from "express"
import { getallproducts, getSingleproduct , updateProduct, deleteProduct, createProduct} from "../controllers/products.controllers.js";
import { validateinfo } from "../products.middleware.js";

const router = Router();

router.get("/", getallproducts).get("/:product_id", getSingleproduct).post("/", validateinfo, createProduct).patch("/:product_id", updateProduct).delete("/:product_id", deleteProduct)

export default router;
