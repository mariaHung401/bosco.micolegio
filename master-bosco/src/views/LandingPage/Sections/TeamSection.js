import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Filosofía Institucional</h3>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <h4 className={classes.title}>
              Misión
              <br />
            </h4>
            <h5>
              Ofrecer a los niños (as) un ambiente de aprendizaje activo en donde las experiencias vivenciales son la base fundamental de su crecimiento con un personal debidamente capacitado, serán la clave del éxito en termino de desarrollo integral en los niños (as) guiándolos hacia el camino del éxito y la felicidad.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <h4 className={classes.title}>
              Visión
              <br />
            </h4>
            <h5>
              Que el centro de educación inicial San juan Bosco, sea un ente integrador de la familia en la primera etapa escolar de los niños (as), así como también promotor de valores que dan sentido a todo ser humano bajo un lema.
            </h5>
            <h6>“Educar con amor”</h6>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
