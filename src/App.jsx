import "./App.css";
import { CssModules } from "./components/CssModules";

import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export default function App() {
  return (
    <>
    <InlineStyle />
    <CssModules />
    <StyledJsx />
    <StyledComponents />
    </>
  );
}
