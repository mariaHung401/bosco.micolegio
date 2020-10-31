import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Carousel from "react-slick";
import Button from "components/CustomButtons/Button.js";

import image1 from "assets/img/colegio/logo2.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h4>NUESTRO LEMA:</h4>
            <h2>Educar con Amor</h2>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={5} md={2} className={classes.marginAuto}>
            <Carousel {...settings}>
              <div>
                <img src={image1} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>Comunicate con nosotros!</h3>
            <h6>Números:</h6>
            <h6>
              <strong>0291-8083901 / 0414-1853388</strong>
            </h6>
            <h6>Dirección</h6>
            <strong>Punto de referencia detras del club Arabe</strong>
            <h4>
              Urb.Juanico Este, calle padilla ron. Maturin_Monagas <br />
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>Siguenos!</h3>
            <Button
              color="google"
              href="https://www.instagram.com/ceisanjuanbosco/"
              target="_blank"
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
              Instagram
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
