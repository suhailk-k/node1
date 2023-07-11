var express = require("express");
var router = express.Router();

/* GET home page. */
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
        "www.amazon.in/OnePlus-Nord-Marble-128GB-Storage/dp/B08695ZSP6/ref=sr_1_1?dchild=1&keywords=mobile&qid=1623160443&sr=8-1",
    },
    {
      name: "Shirt",
      catogory: "Clothes",
      description: "This is a shirt",
      image:
        "https://www.amazon.in/Amazon-Brand-Regular-Casual-Shirt/dp/B07NQ3QZ1H/ref=sr_1_1?dchild=1&keywords=shirt&qid=1623160481&sr=8-1",
    },
    {
      name: "Trousers",
      catogory: "Clothes",
      description: "This is a trouser",
      image:
        "https://www.amazon.in/Amazon-Brand-Regular-Casual-Trousers/dp/B07NQ3QZ1H/ref=sr_1_1?dchild=1&keywords=trousers&qid=1623160510&sr=8-1",
    },
  ];
  res.render("index", { products });
});

module.exports = router;
