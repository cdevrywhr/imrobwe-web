// components/Modal.js
import React from 'react';
import { Modal, Backdrop, Fade, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

const CustomModal = ({ open, handleClose, img, name }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black">
          <div className="w-full h-full relative" onClick={handleClose}>
            {/* <IconButton
              onClick={handleClose}
              className="absolute top-4 left-4 "
              color="inherit"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton> */}
            <img src={img} alt={name} className="w-full h-full object-contain" />
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
