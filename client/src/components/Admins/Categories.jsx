import { Box, Button, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Categories = () => {
  const categories = ["1 Exanple", "2 Exanple", "3 Exanple"]; // Dummy categories array
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
            key={index}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {category}
            </Typography>
            <Button
              variant="contained"
              sx={{ ml: 1, backgroundColor: grey[400], color: "black" }}
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
            size="small"
            placeholder="Add new category"
            variant="outlined"
          ></TextField>
          <Button
            variant="contained"
            size="medium"
            sx={{
              ml: 1,
              backgroundColor: (theme) => theme.palette.secondary.main,
              width: "30%",
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
