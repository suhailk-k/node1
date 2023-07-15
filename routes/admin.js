var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "Laptop",
      catogory: "Electronics",
      description: "This is a laptop",
      image:
        "https://m.media-amazon.com/images/I/41nk9CwuPOL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Mobile",
      catogory: "Electronics",
      description: "This is a mobile",
      image:
        "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1677578835691/0dd636fb0f6c2f482ab8c96d1b6050de.png",
    },
    {
      name: "Shirt",
      catogory: "Clothes",
      description: "This is a shirt",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Trousers",
      catogory: "Clothes",
      description: "This is a trouser",
      image:
        "data:image/jpeg;base64,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",
    },
  ];
  res.render("admin/view-products", { admin: true, products });
});
router.get("/add-product", function (req, res) {
  res.render("admin/add-product");
});
router.post("/add-product", function (req, res) {
  console.log(req.body);
  console.log(req.files);
});

module.exports = router;
