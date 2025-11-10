const CategoriesRep = require("../repositories/CategoriesRep");
const { createResponse } = require("../utils/createResponse");

const getAllCategories = async () => {
  try {
    const categories = await CategoriesRep.getAllCategories();
    return createResponse(true, categories, "Categories retrieved");
  } catch (error) {
    console.error("getAllCategories error:", error);
    return createResponse(
      false,
      null,
      `Failed to retrieve categories: ${error.message}`
    );
  }
};

const addCategory = async (categoryData) => {
  try {
    if (!categoryData || !categoryData.name || !categoryData.name.trim()) {
      return createResponse(false, null, "Category name is required");
    }

    const newCategory = await CategoriesRep.addCategory(categoryData);
    return createResponse(true, newCategory, "Category added successfully");
  } catch (error) {
    console.error("addCategory error:", error);
    return createResponse(
      false,
      null,
      `Failed to add category: ${error.message}`
    );
  }
};

const updateCategory = async (categoryId, categoryData) => {
  try {
    if (!categoryId) {
      return createResponse(false, null, "Category ID is required");
    }

    const updatedCategory = await CategoriesRep.updateCategory(
      categoryId,
      categoryData
    );
    if (!updatedCategory) {
      return createResponse(
        false,
        null,
        `Category with ID ${categoryId} not found`
      );
    }

    return createResponse(
      true,
      updatedCategory,
      "Category updated successfully"
    );
  } catch (error) {
    console.error("updateCategory error:", error);
    return createResponse(
      false,
      null,
      `Failed to update category: ${error.message}`
    );
  }
};

const deleteCategory = async (categoryId) => {
  try {
    if (!categoryId) {
      return createResponse(false, null, "Category ID is required");
    }

    const deletedCategory = await CategoriesRep.deleteCategory(categoryId);
    if (!deletedCategory) {
      return createResponse(
        false,
        null,
        `Category with ID ${categoryId} not found`
      );
    }

    return createResponse(
      true,
      deletedCategory,
      "Category deleted successfully"
    );
  } catch (error) {
    console.error("deleteCategory error:", error);
    return createResponse(
      false,
      null,
      `Failed to delete category: ${error.message}`
    );
  }
};

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
