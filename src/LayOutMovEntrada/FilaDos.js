import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

export default function Fila2() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid container item direction="column" spacing={3} xs={6}>
          <Grid item xs>
            <Paper className={classes.paper}>Grupo</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Rubro</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Items</Paper>
          </Grid>
        </Grid>
        <Grid container item spacing={6} xs={6}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Cantidad Disponible</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Cantidad</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Minimo Stock</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Maximo Stock</Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
