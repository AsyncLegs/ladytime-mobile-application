import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import ProfileScreen from '../ProfileScreen';
import SideBar from '../../components/UI/SideBar';
import {DrawerNavigator} from 'react-navigation';


const HomeScreenRouter = DrawerNavigator(
    {
        Home: {screen: HomeScreen},
        Profile: {screen: ProfileScreen},
        // Community: {screen: Community}
    },
    {
        contentComponent: props => <SideBar {... props}/>
    }
);
export default HomeScreenRouter;