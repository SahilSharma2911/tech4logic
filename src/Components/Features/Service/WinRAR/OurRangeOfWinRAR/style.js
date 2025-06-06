const styles = {
  ConatinerCSS: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "#fff",
    textAlign: "left",
    mb: "90px",
    gap: { xs: "15px", md: "20px" },
  },
  CardContainerCSS: {
    width: "100%",
    padding: { xs: "5px", md: "10px" },
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    // maxWidth: "550px",
    height: "520px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px",
    border: "1px solid #fff",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(180deg, rgba(215, 25, 32, 0.4) 20%, #D71920 80%)",
      opacity: 0.8,
      zIndex: 1,
    },
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: " 0px 5.97px 53.89px 0px #DA291C",
      "&::before": {
        background: "linear-gradient(180deg, rgba(215, 25, 32, 0.4) -40.33%, #D71920 54.26%)",
      },
    },
  },
  titleConatiner: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& h4": {
      fontSize: { xs: "26px", md: "50px" },
      fontWeight: 600,
    },
    "& body1": {
      maxWidth: "40%",
      textAlign: "right",
    },
  },
  BottomContainerCSS: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "20px",
    flexDirection: { xs: "column", md: "row" },
    color: "#fff",
    textAlign: "left",
    mt: "90px",
    gap: "40px",
    "& h4": {
      fontSize: { xs: "30px", md: "50px" },
      fontWeight: 600,
    },
    "& body1": {
      fontWeight: 400,
      textAlign: "right",
      fontSize: { xs: "12px", md: "22px" },
    },
  },
  logoContainer: {
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 2,
  },
  cardContent: {
    width: "100%",
    padding: "10px",
    position: "absolute",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 2,
  },
  titleDescriptionContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "20px",
    alignItems: "flex-end",
    paddingBottom: "2px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "white",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginBottom: "0",
    lineHeight: "1.2",
  },
  cardDescription: {
    fontSize: "16px",
    fontWeight: "300",
    color: "white",
    transition: "opacity 0.3s, transform 0.3s",
  },
  arrowIcon: {
    color: "white",
    cursor: "pointer",
    height: "20px",
    width: "20px",
    alignSelf: "flex-end",
    flexShrink: 0,
    flexGrow: 0,
    transition: "none",
  },
  divider: {
    border: "1px solid #0089D6",
    margin: { xs: "10px 0", md: "0 20px" },
    height: { xs: "auto", md: "auto" },
  },
  leftInfo: {
    flex: 1,
    textAlign: "justify",
    fontSize: { xs: "14px", md: "20px" },
    lineHeight: { xs: "1.5", md: "1.8" },
    padding: { xs: "10px", md: "0" },
  },
  rightInfo: {
    display: "flex",
    flexDirection: "column",
    textAlign: { xs: "left", md: "left" },
    flex: 1,
    gap: "80px",
    fontSize: { xs: "14px", md: "20px" },
    lineHeight: { xs: "1.5", md: "1.8" },
    padding: { xs: "10px", md: "0" },
    "& body1": {
      fontSize: { xs: "14px", md: "20px" },
      fontWeight: "400",
    },
  },
};

export default styles;
