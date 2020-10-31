import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image1 from "assets/img/colegio/profesor.png";
import image2 from "assets/img/colegio/empatia.png";
import image3 from "assets/img/colegio/unido.png";
import image4 from "assets/img/colegio/valor.png";
import image5 from "assets/img/colegio/usuario.png";
import image6 from "assets/img/colegio/mision.png";
import image7 from "assets/img/colegio/analitico.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import stylesTeam from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);
const useStylesTeam = makeStyles(stylesTeam);

export default function ProductSection() {
  const classes = useStyles();
  const classesTeam = useStylesTeam();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Valores</h3>
          <h6>
            Valores que preseden a los integrantes de la familia San Juan Bosco:
          </h6>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={2} className={classesTeam.marginAuto}>
          <img
            src={image1}
            alt="..."
            className={
              classesTeam.imgRaised +
              " " +
              classesTeam.imgRoundedCircle +
              " " +
              classesTeam.imgFluid
            }
          />
          <h4>
            <strong>EDUCADO</strong>
          </h4>
        </GridItem>

        <GridItem xs={12} sm={6} md={2} className={classesTeam.marginAuto}>
          <img
            src={image2}
            alt="..."
            className={
              classesTeam.imgRaised +
              " " +
              classesTeam.imgRoundedCircle +
              " " +
              classesTeam.imgFluid
            }
          />
          <h4>
            <strong>RESPETUOSO</strong>
          </h4>
        </GridItem>

        <GridItem xs={12} sm={6} md={2} className={classesTeam.marginAuto}>
          <img
            src={image5}
            alt="..."
            className={
              classesTeam.imgRaised +
              " " +
              classesTeam.imgRoundedCircle +
              " " +
              classesTeam.imgFluid
            }
          />
          <h4>
            <strong>PROACTIVO</strong>
          </h4>
        </GridItem>

        <GridItem xs={12} sm={6} md={2} className={classesTeam.marginAuto}>
          <img
            src={image4}
            alt="..."
            className={
              classesTeam.imgRaised +
              " " +
              classesTeam.imgRoundedCircle +
              " " +
              classesTeam.imgFluid
            }
          />
          <h4>
            <strong>HONESTO</strong>
          </h4>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={2} className={classes.marginAuto}>
          <img
            src={image6}
            alt="..."
            className={
              classesTeam.imgRaised +
              " " +
              classesTeam.imgRoundedCircle +
              " " +
              classesTeam.imgFluid
            }
          />
          <h4>
            <strong>ORIENTADO HACIA LOS RESULTADOS.</strong>
          </h4>
        </GridItem>

        <GridItem xs={12} sm={6} md={2} className={classesTeam.marginAuto}>
          <img
            src={image3}
            alt="..."
            className={
              classesTeam.imgRaised +
              " " +
              classesTeam.imgRoundedCircle +
              " " +
              classesTeam.imgFluid
            }
          />
          <h4>
            <strong>TRABAJO EN EQUIPO</strong>
          </h4>
        </GridItem>

        <GridItem xs={12} sm={6} md={2} className={classesTeam.marginAuto}>
          <img
            src={image7}
            alt="..."
            className={
              classesTeam.imgRaised +
              " " +
              classesTeam.imgRoundedCircle +
              " " +
              classesTeam.imgFluid
            }
          />
          <h4>
            <strong>RECEPTIVO A CUMPLIR NORMAS Y CAMBIOS.</strong>
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
