import React from "react";
import { TableContent } from "./components"
import styles from "./styles/StudentsDashboard.module.css";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ChefsDashboard(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Chefs</h2>
                    <Button variant="contained" onClick={handleOpen}>Add</Button>
                </div>
                <TableContent />
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style} className={styles.modal}>
                        <Typography className={styles.title} id="keep-mounted-modal-title" variant="h6" component="h2">
                            Add new Chef
                        </Typography>
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                            <div className={styles.textField}>
                                <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                                <div className={styles.separator}/>
                                <TextField id="outlined-basic" label="Campus" variant="outlined" />
                            </div>
                        </Typography>
                        <hr />
                        <div className={styles.buttons}>
                            <Button variant="contained" >Add</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
} 