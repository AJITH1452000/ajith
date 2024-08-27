import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import videoFile  from "../video/lv_0_20240826203437.mp4";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        backgroundImage:" linear-gradient(135deg, #a8edea 10%, #fed6e3 100%);"}}
      >
        <Typography variant="h4" sx={{backgroundImage:"linear-gradient( 109.6deg,  rgba(112,246,255,0.33) 11.2%, rgba(221,108,241,0.26) 42%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% );"}}>WELCOME To ELAYA HARVESTING</Typography>
        <p>
        1. Harvesting Methods
        Manual Harvesting: Involves handpicking or cutting crops using tools like sickles or machetes. This method is labor-intensive but allows for selective harvesting.
        Mechanical Harvesting: Uses machinery like combine harvesters, which can cut, thresh, and clean the crop in one operation. This method is more efficient and suitable for large-scale farming.
        </p><br></br><br></br>
        <p> 2. Post-Harvest Handling
        Transport: Once harvested, crops are transported to storage facilities or processing plants. Timely transport is crucial to prevent spoilage.
        Processing: Crops are often cleaned, dried, and processed into various products. For example, grains might be milled into flour, and fruits might be canned or juiced.
        Challenges and Considerations
        Weather: Adverse weather conditions, such as rain or extreme heat, can affect the quality and timing of the harvest.
        Labor: Manual harvesting requires a significant workforce, which can be challenging to manage during peak seasons</p>
        
        <video width={'100%'} height={300}  autoPlay loop muted style={{marginTop:40}}> <source src={videoFile} type="video/mp4" ></source></video>
      </Box>
    </Layout>
  );
};

export default About;
