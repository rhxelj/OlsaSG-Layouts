import React from "react";
import LayOutMovEntrada from "./LayOutMovEntrada";
import LayOutTwo from "./LayOutTwo";
import Container from "@material-ui/core/Container";
export default function CenteredGrid() {
  return (
    <div>
      <Container>
        <LayOutMovEntrada />
        {/* <LayOutTwo /> */}
      </Container>
    </div>
  );
}
