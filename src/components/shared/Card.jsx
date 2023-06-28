import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

function Card({ width, height, mr, ml, color, children, title, isEditable }) {
  return (
    <MuiCard
      sx={{
        width,
        height,
        mr,
        ml,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          minHeight="35px"
          color="#FFFFFF"
          bgcolor={color}
          component="div"
        >
          {title}
          {isEditable && <EditIcon/>}
        </Typography>
        {children}
      </CardContent>
    </MuiCard>
  );
}

export default Card;
