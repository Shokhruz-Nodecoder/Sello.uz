const CustomError = require("../../libs/customError");
const Products = require("../../models/product.model");
const Users = require("../../models/user.model");
const UserProduct = require("../../models/userProduct.model");
const likeValidation = require("../validations/like.validation");

const likes = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const product_id = req.params?.product_id;
    const validationError = likeValidation({
       user_id,
       product_id
      });
      if (validationError) throw new CustomError(400, validationError.message);
  
    const findUser = await Users.findByPk(user_id);
    if (!findUser) {
      throw new CustomError(400, "User not found");
    }

    
    const findProduct = await Products.findByPk(product_id);
    if (!findProduct) throw new CustomError(400, "Product not found");


    const createLike = await UserProduct.create({user_id, product_id})
    res.status(201).json({message : "Likes crated"})
  } catch (error) {
    next(error);
  }
};

module.exports = { likes };
