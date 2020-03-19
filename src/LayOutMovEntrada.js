import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FilaUno from "./LayOutMovEntrada/FilaUno";
import FilaDos from "./LayOutMovEntrada/FilaDos";
import FilaTres from "./LayOutMovEntrada/FilaTres";
import FilaCuatro from "./LayOutMovEntrada/FilaCuatro";
import FilaCinco from "./LayOutMovEntrada/FilaCinco";
import useStyles from "./LayOutMovEntrada/styles";

export default function LayOutMovEntrada() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {/* Fecha */}
        <FilaUno />

        {/* Grupo, Rubro, Items, Cant. Disp., Cant, Min. Stock, Max. Stock */}
        <FilaDos />

        {/* Fila Cantidd, Pres. Desc., Pres., UM,Ancho */}
        <FilaTres />

        {/* Fila Partida, Ub. Geo., Ub. Fisc., Observaciones */}
        <FilaCuatro />

        {/* Fila Confirma, Cancela, Borra */}
        <FilaCinco />
      </Grid>
    </div>
  );
}
