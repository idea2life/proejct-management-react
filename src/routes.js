/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import DateRangeIcon from '@material-ui/icons/DateRange';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DashboardPage from "views/Dashboard/Dashboard.js";
import Schedule from "views/Schedule/Schedule.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: EqualizerIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: DateRangeIcon,
    component: Schedule,
    layout: "/admin"
  },
  {
    path: "/lookahead",
    name: "3 Week Look Ahead",
    icon: ReceiptIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/planner",
    name: "My Planner",
    icon: AccessAlarmIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/team",
    name: "Team",
    icon: PeopleOutlineIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/haveQuestions",
    name: "Have questions?",
    icon: "textOnly",
    component: DashboardPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
