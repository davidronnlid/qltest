import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { AiOutlineHome } from "react-icons/ai";
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
          <div
            style={{
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <a
              href="/"
              style={{
                marginRight: "2rem",
              }}
            >
              <AiOutlineHome />
            </a>
            <a
              href="https://codesandbox.io/s/qltest-algos-u6k6g1?file=/index.js:0-2057"
              style={{
                marginRight: "2rem",
              }}
            >
              <Button variant="outlined">Text and array algos</Button>
            </a>
            <a href="https://github.com/davidronnlid/qltest">
              <Button variant="outlined">GitHub page for this project</Button>
            </a>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
