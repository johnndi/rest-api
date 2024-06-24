import pool from "../db.config.js";
export const getallproducts = async (req, res) =>{
    try {
        const result = await pool.query("select * from products");
        res.status(200).json({ success: true, data: result.rows });
      } catch (err) {
        res.status(500).json({ success: false, message: err.message });
      }
    };

   export  const getSingleproduct =async (req, res) =>{
        const product_id = req.params.product_id;
        try{
            const result = await pool.query("select * from products where product_id=$1", [product_id]);
        
            if (result.rowCount === 0) {
              res.status(404).json({ success: false, message:"product not found" });
              console.log("an error occured");
            } else {
              res.status(200).json({ success: true, data: result.rows[0] });
              console.log("success");
            }

        }catch(err){
          res.status(500).json({success:false , message: err.message});
        }
    };

    export const createProduct = async(req, res) =>{
      try{
        const product_id = req.body.product_id;
        const productthumbnail =req.body.productthumbnail;
        const producttitle = req.body.producttitle;
        const productdescription = req.body.productdescription;
        const productcost = req.body.productcost;
        const onoffer = req.body.onoffer;

        const insert = await pool.query(
          "insert into products (productthumbnail, producttitle, productdescription, productcost,onoffer,product_id)Values($1 $2 $3 $4 $5 $6)",

          [ productthumbnail, producttitle, productdescription, productcost, onoffer,product_id],
        ); 
        if (insert.rowCount === 1) {
          res.status(201).json({ success: true, message: "product created successfully" });
        }
      }catch(err){
        res.status(500).json({success:false, message:err.message});
      }
    };
    export const updateProduct = async (req, res) => {
      const product_id = req.params.product_id;
       const { productthumbnail, 
          producttitle ,
          productdescription ,
          productcost ,
           onoffer, } = req.body;
      try{
        let updateproducts;
        if (productthumbnail) {
          updateproducts = await pool.query(
            "update products SET productthumbnail=$1 where product_id=$2",
            [productthumbnail, product_id],
          );
        }
        if(producttitle){
          updateproducts = await pool.query("update products set producttitle=$1 where product_id=$2",
          
          [producttitle, product_id],
          );
        }
        if (productdescription){
          updateproducts = await pool.query("update products set productdescription=$1 where product_id =$2",
            [productdescription, product_id],
          );
        }
        if(productcost){
          updateproducts = await pool.query("update products set productcost=$1 where product_id =$2",
            [productcost, product_id],
          );
        }
        if(onoffer){
          updateproducts = await pool.query("update products set onoffer=$1 where product_id=$2",
            [onoffer,product_id],
          );
        }
        if (updateproducts.rowCount === 1){
          res.status(200).json({success:true, message:"product updated successfully"});
          console.log("successful update");

        }else{
          res.status(404).json({success:false, message:"invalid entry please try again"})
          console.log("errors");
        }
      }catch(err){
        res.status(500).json({success:false,message:err.message});
      }
    };
      export const deleteProduct = async(req, res) =>{
        const product_id = req.params.product_id;
        try{
          const deleteItem = await pool.query("delete from products where product_id=$1", [product_id,]);

          if (deleteItem.rowCount === 1) {
            res.status(200).json({ success: true, message: "product deleted successfully" });
          } else {
            res.status(400).json({ success: false, message: "no such product" });
          }
        }catch(err){
          res.status(500).json({success:false, message:err.message})
        }
       
        
      };

    
