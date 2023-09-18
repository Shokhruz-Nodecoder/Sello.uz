const Admin = require("../../models/admin.model");
const CustomError = require("../../libs/customError");
const categoryValidation = require("../validations/category.validation");
const Category = require("../../models/category.model");

const categoryCreate = async (req, res, next) => {
  try {
    const { name } = req.body;

    const validationError = categoryValidation({
      name,
    });
    if (validationError) throw new CustomError(400, validationError.message);

    const findCategory = await Category.findAll({
      where: { name },
      logging: false,
    });
    if (findCategory.length > 0) {
      throw new CustomError(404, "Category not found");
    }

    const newCategory = await Category.create(
      { name, admin_id: req.user },
      { logging: false }
    );
    res.status(201).json({ message: "succes", newCategory });
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const category = await Category.findAll({ include: [Admin] });
    if (category.length < 1) throw new CustomError(404, "Category not found");

    res.status(200).json({ message: "SUCCES", category });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id, { include: [Admin] });

    res.status(201).json({ message: "SUCCES", category });
  } catch (error) {
    next();
  }
};

module.exports = { categoryCreate, getCategory, getOne };
