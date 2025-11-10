const Category = require("../models/categories");

const getAllCategories = async () => {
  return await Category.find({});
};

const addCategory = async (categoryData) => {
  const category = new Category(categoryData);
  return await category.save(); // returns the created category document
};

const updateCategory = async (categoryId, categoryData) => {
  const updated = await Category.findByIdAndUpdate(
    categoryId,
    categoryData,
    { new: true } // returns the updated document instead of the old one
  );
  return updated;
};

const deleteCategory = async (categoryId) => {
  const deleted = await Category.findByIdAndDelete(categoryId);
  return deleted; // returns the deleted document
};

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
