import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "../../style/Documents.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function DialogDocuments({ title }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="clickDialog">
      <Button onClick={handleClickOpen}></Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <h3 className="titleModal">{title}</h3>
        <TextField id="basic" label="Name" variant="outlined" />
        <TextField id="basicO" label="Date" variant="outlined" />
        <TextField id="outlined" label="Value" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Document"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CloudDownloadIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Button
          variant="contained"
          component="label"
          startIcon={<FileUploadIcon />}
        >
          Upload Document
          <input type="file" hidden />
        </Button>
        <DialogActions>
          <Button className="buttonCancel" autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
