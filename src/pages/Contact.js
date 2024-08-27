import React from "react";
import Layout from "./../components/Layout/Layout";

import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5,  "& h4": { fontWeight: "bold", mb: 2 } ,textAlign:"center"}}>
        <Typography variant="h4">Contact My Harvesting</Typography>
        <p>
        
        </p>
      </Box>
   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >  <Box
        sx={{
          m: 3,
          width: "600px",
        
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>

        
          <Table aria-label="contact table">

            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "green", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

            


            <TableBody>
              <TableRow>
                <TableCell>
                  <WhatsAppIcon sx={{ color: "green", pt: 1 }} /> +91 9878456324
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> elayaharvest@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> +91 6358954621
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box></Box> 
    </Layout>
  );
};

export default Contact;
