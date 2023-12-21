import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Marketting
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
             Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
             Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              API status
            </Button>
            </div>
       
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
             Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Terms
            </Button>
          </div>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Footer;
