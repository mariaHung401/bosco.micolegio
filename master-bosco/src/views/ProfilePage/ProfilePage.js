import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import BookIcon from '@material-ui/icons/Book';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import stylesNav from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import logo from "assets/img/colegio/logo.png";

const useStyles = makeStyles(styles);
const useStylesNav = makeStyles(stylesNav);

export default function Page1(props) {
  const classes = useStyles();
  const classesNav = useStylesNav();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      {/* image={require("assets/img/colegio/fondo-verde.png")} */}
      <Parallax>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem justify="center" xs={12} sm={12} md={12}>
              <div className={classes.brand}>
                <h6>U. E. P. San Vicente de Paúl</h6>
                <h2>
                  <strong>Educación Media General</strong>
                </h2>
              </div>
              <div className={classes.brand}>
                <img src={logo} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}