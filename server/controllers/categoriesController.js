const CategoriesServ = require("../services/CategoriesServ");
const express = require("express");
const router = express.Router();
const { createResponse } = require("../utils/createResponse");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const result = await CategoriesServ.getAllCategories();
    const status = result.success ? 200 : 400;
    return res.status(status).json(result);
  } catch (error) {
    console.error("GET categories error:", error);
    return res
      .status(500)
      .json(createResponse(false, null, "Internal server error"));
  }
});

// POST new category
router.post("/", async (req, res) => {
  try {
    const result = await CategoriesServ.addCategory(req.body);
    const status = result.success ? 201 : 400;
    return res.status(status).json(result);
  } catch (error) {
    console.error("POST category error:", error);
    return res
      .status(500)
      .json(createResponse(false, null, "Internal server error"));
  }
});

// PUT update category
router.put("/:id", async (req, res) => {
  try {
    const result = await CategoriesServ.updateCategory(req.params.id, req.body);

    const status = result.success
      ? 200
      : result.message.includes("not found")
      ? 404
      : 400;
    return res.status(status).json(result);
  } catch (error) {
    console.error("PUT category error:", error);
    return res
      .status(500)
      .json(createResponse(false, null, "Internal server error"));
  }
});

// DELETE category
router.delete("/:id", async (req, res) => {
  try {
    const result = await CategoriesServ.deleteCategory(req.params.id);

    const status = result.success
      ? 200
      : result.message.includes("not found")
      ? 404
      : 400;
    return res.status(status).json(result);
  } catch (error) {
    console.error("DELETE category error:", error);
    return res
      .status(500)
      .json(createResponse(false, null, "Internal server error"));
  }
});

module.exports = router;
