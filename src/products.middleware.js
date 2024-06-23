export const validateinfo= (req, res, next) => {
    const productthumbnail = req.body.productthumbnail;
    const producttitle = req.body.producttitle;
    const productdescription = req.body.productdescription;
    const productcost= req.body.productcost;
    const onoffer = req.body.onoffer;
    if (!productthumbnail)
      return res
        .status(400)
        .json({ success: false, message: "enter a thumbnail" });
    if (!producttitle)
      return res
        .status(400)
        .json({ success: false, message: "title  is required" });
    if (!productdescription)
      return res
        .status(400)
        .json({ success: false, message: "please describe the item" });
    if (!productcost)
      return res
        .status(400)
        .json({ success: false, message: "price is required" });
    if (!onoffer)
      return res
        .status(400)
        .json({ success: false, message: "input false if product is not on offer" });
    next();
  };
  