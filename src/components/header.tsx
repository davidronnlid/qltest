import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <div style={{ marginBottom: "10rem" }}>
      <HideOnScroll {...props}>
        <AppBar sx={{ background: "white", display: "block" }}>
          <h1 style={{ color: "black", marginLeft: "2rem" }}>
            QL Frontend Test
          </h1>
          <div style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
            <Link to="/">
              <Button variant="outlined">Credit card</Button>
            </Link>
            <Link to="text">
              <Button variant="outlined">Text algo</Button>
            </Link>
            <Link to="array">
              <Button variant="outlined">Array algo</Button>
            </Link>
            <a href="https://github.com/davidronnlid/qltest">
              <Button variant="outlined">
                Go to this projects' GitHub page
              </Button>
            </a>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
