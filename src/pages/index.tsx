// ** React Imports
import { ReactNode } from "react";

// ** MUI Components
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Demo Components Imports
import CreateDeal from "src/views/online-application";

// ** Demo Imports
import { Container, Divider, Grid } from "@mui/material";

const FirstLogo = styled("img")(({ theme }) => ({
  marginTop: "50px !important",
  widht: "800px !important",
  marginBottom: "20px",
  [theme.breakpoints.up("md")]: {
    maxWidth: 450,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    float: "center",
    margin: "0 auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: 450,
    height: "100%",
    float: "left",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: 450,
    height: "100%",
  },
  [theme.breakpoints.up("xs")]: {
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    float: "center",
    margin: "0 auto",
  },
}));

const SecondLogo = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "185px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    float: "center",
    margin: "0 auto",
    marginTop: "10px",
  },
  [theme.breakpoints.up("md")]: {
    width: "185px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    float: "center",
    margin: "0 auto",
    marginTop: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "185px",
    height: "80px",
    float: "right !important",
  },
  [theme.breakpoints.up("xl")]: {
    width: "185px",
    maxHight: 50,
    visibility: "visible !important",
    float: "right !important",
  },
}));

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  border: "none",
}));

const Index = () => {
  const API = process.env.NEXT_PUBLIC_API_URL;
  console.log(API);

  return (
    <>
      <Container fixed maxWidth={"xl"}>
        <Box pt={5}>
          <Grid container spacing={1}>
            <Grid item lg={6} xs={12} md={12} mt={20}>
              <Item>
                <FirstLogo
                  alt="register-illustration"
                  src="/images/application-logo/image 28.png"
                />
              </Item>
            </Grid>
            <Grid item lg={6} xs={12} md={12} mt={20}>
              <Item>
                <SecondLogo
                  alt="register-illustration"
                  src="/images/application-logo/image 15.png"
                />
              </Item>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Divider sx={{ marginTop: "50px", marginBottom: "20px" }} />
            <Typography variant="h4" mb={3} color={"text.secondary"}>
              Application For New Admission 
            </Typography>
            <CreateDeal />
          </Grid>
        </Box>
      </Container>
    </>
  );
};

Index.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  console.log("[Node.js only] ENV_VARIABLE:", process.env.API_URL);
  // console.log(
  //   "[Node.js only] ENV_LOCAL_VARIABLE:",
  //   process.env.ENV_LOCAL_VARIABLE
  // );

  return { props: {} };
}
export default Index;
