import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Valores</h3>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={2} className={classes.marginAuto}>
            <img
              src=""
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
            <h4>
              <strong>ÉTICA</strong>
            </h4>
            <h5>
              Garantía de que las acciones que emprendamos, siempre estarán regidas por los principios morales y éticos.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
