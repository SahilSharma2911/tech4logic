import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const GoogleWorkspaceServiceInfoCard = ({ IBMInfoData }) => {
  return (
    <Box
      sx={{
        ...styles.containerCSS,
        background: "linear-gradient(180deg, #0089D6 -18%, #0B081E 150px)",
        overflow: "visible",
      }}
    >
      <Box sx={{ paddingX: { xs: "20px", md: "120px" }, mt: "50px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Side Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "530px" },
              height: { xs: "auto", md: "490px" },
              marginBottom: { xs: "20px", md: "0" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={
                "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/GoogleWorkSpace_Banner.svg"
              }
              alt="GoogleWork Space Info Card"
              width={530}
              height={490}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Right Side Content */}
          <Box
            sx={{
              flex: 1,
              paddingLeft: { md: "40px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: { xs: "24px", md: "36px" },
                lineHeight: { xs: "30px", md: "45px" },
                marginBottom: "20px",
              }}
            >
              TECH4Logic: Your Trusted Partner for Google Workspace: Create, connect and collaborate
              with the power of AI
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: { xs: "24px", md: "28px" },
                textAlign: { xs: "center", md: "left" },
                marginBottom: { xs: "10px", md: "20px" },
              }}
            >
              Home to the apps that more than 3 billion users know and love – Gmail, Calendar,
              Drive, Meet and more. Now with Gemini for Workspace to boost productivity with AI.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GoogleWorkspaceServiceInfoCard;
