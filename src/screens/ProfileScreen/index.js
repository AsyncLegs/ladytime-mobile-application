import React, { Component } from "react";
import ProfileScreen from "./ProfileScreen.js";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    Profile: { screen: ProfileScreen },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: "Profile"
  }
));