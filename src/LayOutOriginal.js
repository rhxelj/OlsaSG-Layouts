import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function LayOutOne() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {/* Fecha */}

        <Grid container item justify="center">
          <Paper className={classes.paper}>FECHA</Paper>
        </Grid>
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
        {/* Fila Cantidd, Pres. Desc., Pres., UM,Ancho */}
        <Grid container item spacing={2}>
          <Grid item xs>
            <Paper className={classes.paper}>Cantidad</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Presentacion Descripcion</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Presentacion</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Unidad de Medida</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>ancho</Paper>
          </Grid>
        </Grid>

        {/* Fila Partida, Ub. Geo., Ub. Fisc., Observaciones */}

        <Grid container item spacing={2}>
          <Grid item xs>
            <Paper className={classes.paper}>Partida</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Ubicacion Geografica</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Ubicacion Fisica</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Observaciones</Paper>
          </Grid>
        </Grid>

        {/* Fila Confirma, Cancela, Borra */}

        <Grid container item spacing={2} justify="flex-end">
          <Grid container direction="row" justify="flex-end" spacing={4} item>
            <Paper className={classes.paper}>confirma</Paper>
            <Paper className={classes.paper}>confirma</Paper>
            <Paper className={classes.paper}>confirma</Paper>
          </Grid>
          {/* <Grid item xs={3}>
            <Paper className={classes.paper}>Cancela</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Borrar</Paper>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
