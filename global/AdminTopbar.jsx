import { Box, Typography } from "@mui/material";


const AdminTopbar = ({ pageTitle }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{
        bgcolor: "white",
        color: "black",
        borderBottom: "1px solid #ddd",
        boxShadow: "none",
      }}
    >
      {/* Dynamic Title */}
      <Typography variant="h4" fontWeight="bold">
        {pageTitle}
      </Typography>

      {/* Icons */}
      <Box display="flex">
     

    
      </Box>
    </Box>
  );
};

export default AdminTopbar;