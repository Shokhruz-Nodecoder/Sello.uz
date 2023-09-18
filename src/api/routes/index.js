const Admin = require("./admin.route");
const User = require("./user.route");
const Seller = require("./seller.route")
const Category = require("./category.route")
const Product = require("./product.route")
module.exports = [Admin, User, Seller, Category,Product];
