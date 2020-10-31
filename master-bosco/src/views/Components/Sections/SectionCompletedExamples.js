import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-slick";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

import image1 from "assets/img/colegio/heart.png";
import image2 from "assets/img/colegio/unir.png";
import image3 from "assets/img/colegio/corazon.png";
import image4 from "assets/img/colegio/relacion.png";
import image5 from "assets/img/colegio/tomados-de-la-mano.png";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
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
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Educamos con valores como:</h3>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={5} md={2} className={classes.marginAuto}>
            <Carousel {...settings}>
              <div>
                <img src={image1} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={2} className={classes.marginAuto}>
            <div>
              <h5>
                <strong>AMOR</strong>
              </h5>
            </div>
          </GridItem>

          <GridItem xs={12} sm={5} md={2} className={classes.marginAuto}>
            <Carousel {...settings}>
              <div>
                <img src={image2} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={2} className={classes.marginAuto}>
            <div>
              <h5>
                <strong>RESPETO</strong>
              </h5>
            </div>
          </GridItem>

          <GridItem xs={12} sm={5} md={2} className={classes.marginAuto}>
            <Carousel {...settings}>
              <div>
                <img src={image3} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={2} className={classes.marginAuto}>
            <div>
              <h5>
                <strong>SOLIDARIDAD</strong>
              </h5>
            </div>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
        <GridItem xs={12} sm={5} md={2} className={classes.marginAuto}>
            <Carousel {...settings}>
              <div>
                <img src={image5} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={2} className={classes.marginAuto}>
            <div>
              <h5>
                <strong>HONESTIDAD</strong>
              </h5>
            </div>
          </GridItem>

          <GridItem xs={12} sm={5} md={2} className={classes.marginAuto}>
            <Carousel {...settings}>
              <div>
                <img src={image4} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
          <GridItem xs={12} sm={7} md={2} className={classes.marginAuto}>
            <div>
              <h5>
                <strong>AMISTAD</strong>
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
