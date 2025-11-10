import { Box, Button, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { addData, getAll, updateData } from "../../../utils/dbUtils";
import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [indexToUpdate, setIndexToUpdate] = useState(-1);
  const [updateCategoryName, setUpdateCategoryName] = useState("");

  const initialValues = {
    name: "",
  };

  const {
    values,
    errors,
    touched,
    submitAttempted,
    handleBlur,
    resetForm,
    setSubmitAttempted,
    handleChange,
  } = useForm(initialValues, "categoriesSchema");

  const getAllCategories = async () => {
    const categories = await getAll("api/categories");
    setCategories(categories.data);
  };

  useEffect(() => {
    getAllCategories();
  }, [categories.length]);

  const handleUpdateCategory = (index) => {
    if (indexToUpdate === -1) {
      setIndexToUpdate(index);
      setUpdateCategoryName(categories[index].name);
    } else if (updateCategoryName !== "") {
      updateData("api/categories", categories[indexToUpdate]._id, {
        name: updateCategoryName,
      }).then(() => {
        categories[indexToUpdate].name = updateCategoryName;
        setCategories([...categories]);
        setIndexToUpdate(-1);
      });
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (errors && Object.keys(errors).length > 0) return;
    let newCategory = await addData("api/categories", { name: values.name });
    if (newCategory && newCategory.data) {
      setCategories([...categories, newCategory.data.name]);
      resetForm();
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3">Categories </Typography>
      <Box sx={{ p: 2, backgroundColor: grey[200], borderRadius: 2, mt: 2 }}>
        {categories.map((category, index) => (
          <Box
            sx={{
              p: 2,
              my: 2,
              backgroundColor: grey[300],
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
            }}
            key={category._id} // Use a unique key
          >
            {indexToUpdate === index ? (
              <TextField
                sx={{ flexGrow: 1, backgroundColor: "white" }}
                hiddenLabel
                value={updateCategoryName}
                onChange={(e) => setUpdateCategoryName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUpdateCategory(index);
                  } else if (e.key === "Escape") {
                    setIndexToUpdate(-1);
                    setUpdateCategoryName(categories[index].name || "");
                  }
                }}
                error={updateCategoryName === ""}
                helperText={
                  updateCategoryName === "" ? "Name cannot be empty" : ""
                }
                size="small"
              />
            ) : (
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {category.name}
              </Typography>
            )}
            <Button
              variant="contained"
              sx={{ ml: 1, backgroundColor: grey[400], color: "black" }}
              onClick={() => handleUpdateCategory(index)}
            >
              Update
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 1, backgroundColor: grey[400], color: "black" }}
            >
              Delete
            </Button>
          </Box>
        ))}
        <Box sx={{ display: "flex", alignItems: "baseline", mt: 2 }}>
          <TextField
            sx={{ mt: 2, width: "70%", backgroundColor: "white" }}
            name="name"
            size="small"
            placeholder="Add new category"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && (touched.name || submitAttempted)}
            helperText={
              errors.name && (touched.name || submitAttempted)
                ? errors.name
                : ""
            }
          />
          <Button
            variant="contained"
            size="medium"
            disabled={values.name === ""}
            sx={{
              ml: 1,
              backgroundColor: (theme) => theme.palette.secondary.main,
              width: "30%",
            }}
            onClick={handleAddCategory}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
