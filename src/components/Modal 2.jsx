
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input, Textarea, Button as NextUIButton } from "@nextui-org/react";
import { motion } from 'framer-motion';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500, // Width of the modal
  height: 300, // Adjusted for content
  bgcolor: 'background.paper',
  border: '2px solid #FFF',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px',
};

export default function NewProjectModal({ open, handleClose }) {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="new-project-modal-title"
    >
      <Box sx={style}>
        <Typography id="new-project-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Add New Project
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2, // Adjust gap between form elements
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            variant = 'bordered'

              placeholder="Project Name"
            fullWidth
          />
          <Textarea
            variant = 'bordered'
            label="Project Description"
            value={projectDescription}
            fullWidth
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
            <NextUIButton  color = "danger" variant = "flat "onClick={handleClose} disableRipple>
              Close
            </NextUIButton>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
            <NextUIButton auto color="primary" >
              Submit
            </NextUIButton>
            </motion.div>
          </div>
        </Box>
      </Box>
    </Modal>
  );
}
