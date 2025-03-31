const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1400px",
    width: "100%",
    padding: { xs: "20px", sm: "30px", md: "50px" },
    position: "relative",
    margin: "0 auto",
  },
  subContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: { xs: "20px", md: "40px" },
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    "& h6": {
      mb: 2,
      color: "rgba(0, 57, 203, 1)",
      fontSize: { xs: "16px", md: "20px" },
      display: "flex",
      alignItems: "center",
      "&::before": {
        marginRight: "8px",
      },
    },
    "& h1": {
      fontSize: { xs: "24px", md: "45px" },
      fontWeight: 700,
      mb: 4,
      color: "#fff",
      lineHeight: 1.2,
    },
    "& body1": {
      fontSize: { xs: "14px", md: "18px" },
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  rightSectionImageCSS: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  ImageContainer: {
    width: "100%",
    height: { xs: "300px", md: "637px" },

    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  },
  dataCardCSS: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "absolute",
    left: { xs: "10px", md: "50px" },
    right: { xs: "10px", md: "320px" },
    bottom: { xs: "18px", md: "50px" },
    width: "auto",
  },
  DataContainer: {
    display: "flex",
    gap: "10px",
    height: { xs: "100px", md: "125px" },
    justifyContent: "space-between",
    background: "#fff",
    borderRadius: "2px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: "10px",
    overflow: "hidden",
  },
  DataCardList: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    height: "90px",
    borderRadius: "10px",
    color: "#000",
    textAlign: "center",
    "& h6": {
      fontSize: { xs: "18px", md: "48px" },
      color: "rgba(0, 57, 203, 1)",
    },
  },
};

export default styles;
