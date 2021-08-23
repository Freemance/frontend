import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
// Styles
import { NavBarStyle } from "./style";

export default function NavBar() {
  const classes = NavBarStyle();

  return (
    <div className={classes.root}>
      <AppBar
        style={{ background: "transparent", boxShadow: "none" }}
        position="static"
      >
        <Toolbar>
          {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton> */}
          <Typography className={classes.title} variant="h4" noWrap>
            Freemance
          </Typography>
          <Button color="inherit" style={{ marginRight: "8px", color: "gray" }}>
            Login
          </Button>
          <Button color="inherit" style={{ background: "#6886c5" }}>
            Get Early Access
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
