import { Container, Typography } from "@material-ui/core";
import NavBar from "components/NavBar";
export default function AppLayout() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adip
        </Typography>
      </Container>
    </>
  );
}
