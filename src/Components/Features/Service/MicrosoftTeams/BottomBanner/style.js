const styles = {
  containerCSS: {
    width: { xs: "calc(100% - 40px)", md: "calc(100% - 240px)" },
    margin: "0 auto",
    border: "1px solid",
    mb: "50px",
    borderImageSource: "linear-gradient(90deg, #EA4335 0%, #00A4EF 100%)",
    borderImageSlice: 1,
    backdropFilter: "blur(20px)",
    backgroundImage:
      "url('https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/azureBottom_Banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
    padding: { xs: "10px 20px", md: "20px 30px" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    boxSizing: "border-box",
    height: { xs: "auto", md: "596px" },
    mb: { xs: "10px", md: 0 },
    "& h5": {
      marginBottom: "8px",
      padding: "10px",
      fontSize: { xs: "28px", md: "65px" },
      fontWeight: "100",
    },
    "& body1": {
      padding: "10px",
      fontSize: { xs: "18px", md: "40px" },
      lineHeight: { xs: "24px", md: "44px" },
    },
  },
  contentConatiner: {
    flex: 1,
    paddingLeft: { xs: "0", md: "20px" },
    textAlign: { xs: "center", md: "left" },
    display: "flex",
    flexDirection: "column",
    gap: "100px",
    alignItems: { xs: "center", md: "baseline" },
    justifyContent: { xs: "center", md: "left" },
    marginTop: { xs: "20px", md: "0" },
    maxWidth: "530px",
    textWrap: "pretty",
    "& body1": {
      marginBottom: "30px",
      fontSize: { xs: "16px", md: "30px" },
      lineHeight: { xs: "22px", md: "41px" },
      fontWeight: "500",
    },
    "& button": {
      background: "#4B53BC",
      color: "#fff",
      display: "flex",
      borderRadius: "20px",
      cursor: "pointer",
      alignItems: "center",
      padding: { xs: "8px 16px", md: "10px 20px" },
      justifyContent: "center",
      "&:hover": {
        background: "#4B53BC",
      },
    },
  },
};

export default styles;
