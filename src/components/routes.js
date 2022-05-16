import React from "react";


const DashBoard = React.lazy(() => import("../views/DashBoard"));
const Login = React.lazy(() => import("../views/auth/Login"))

const MemberEarning = React.lazy(() => import("../views/finance/MemberEarning"));
const MemberLists = React.lazy(() => import("../views/finance/MembersLists"));

const Members = React.lazy(() => import("../views/report/Members"));
const MembersForms = React.lazy(() => import("../views/report/MembersForm"));
const MembersList = React.lazy(() => import("../views/report/MembersList"));
const Users = React.lazy(() => import("../views/report/Users"));
const UsersList = React.lazy(() => import("../views/report/UserList"));
const UserForm = React.lazy(() => import("../views/report/UserForm"));

const Flights = React.lazy(() => import("../views/services/Flights"));
const FlightsList = React.lazy(() => import("../views/services/FlightsList"));
const FlightForms = React.lazy(() => import("../views/services/FlightForms"));
const Hotel = React.lazy(() => import("../views/services/Hotel"));
const HotelLists = React.lazy(() => import("../views/services/HotelLists"));
const HotelFrom = React.lazy(() => import("../views/services/HotelForm"));
const Lounge = React.lazy(() => import("../views/services/Lounge"));
const LoungeList = React.lazy(() => import("../views/services/LoungeList"));
const LoungeForm = React.lazy(() => import("../views/services/LoungeForm"));

const StudyAbroad = React.lazy(() => import("../views/services/StudyAbroad"));
const StudyAbroadList = React.lazy(() => import("../views/services/StudyAbroadList"));
const StudyAbroadForm = React.lazy(() => import("../views/services/StudyAbroadForm"));
const Tours = React.lazy(() => import("../views/services/Tours"));
const TourLists = React.lazy(() => import("../views/services/ToursLists"));
const ToursForm = React.lazy(() =>import("../views/services/ToursForm"));

const Visa = React.lazy(() => import("../views/services/Visa"));
const VisaForm = React.lazy(() => import("../views/services/VisaForm"));
const VisaList = React.lazy(() => import("../views/services/VisaList"));

const TravelBuddy = React.lazy(() => import("../views/travelbuddy/TravelBuddy"));
const TravelBuddyForm = React.lazy(() => import("../views/travelbuddy/TravelBuddyForm"));
const TravelBuddyList = React.lazy(() => import("../views/travelbuddy/TravelBuddyList"));

const routes = [
    {path:"/dashboard", name:"DashBoard Page",component:DashBoard},
    {path:"/login", name:"Login Page", component:Login},

    {path:"/memberearning", name:"MemberEarning Page", component:MemberEarning},
    {path:"/memberlists", name:"MemberLists Page", component:MemberLists},

    {path:"/members", name:"Members Page", component:Members},
    {path:"/memberforms", name:"MemberForms Page", component:MembersForms},
    {path:"/memberslist", name:"MembersList Page", component:MembersList},
    {path:"/userform", name:"UserForm Page", component:UserForm},
    {path:"/userlist", name:"UserList Page", component:UsersList},
    {path:"/users", name:"Users Page", component:Users},

    {path:"/flights", name:"Flights Page", component:Flights},
    {path:"/flightsform", name:"FlightsForm Page", component:FlightForms},
    {path:"/flightlist", name:"FlightList Page", component:FlightsList},
    {path:"/hotel", name:"Hotel Page", component:Hotel},
    {path:"/hotelform", name:"HoteLForm Page", component:HotelFrom},
    {path:"/hotellists", name:"HotelLists Page", component:HotelLists},

    {path:"/lounge", name:"Lounge Page", component:Lounge},
    {path:"/loungelist", name:"LoungeList Page", component:LoungeList},
    {path:"/loungeform", name:"LoungeForm Page", component:LoungeForm},
    {path:"/studyabroad", name:"StudyAbroad Page", component:StudyAbroad},
    {path:"/studyabroadlist", name:"StudyAbroadList Page", component:StudyAbroadList},
    {path:"/studyabroadform", name:"StudyAbroadForm Page", component:StudyAbroadForm},

    {path:"/tours", name:"Tours Page", component:Tours},
    {path:"/toursform", name:"ToursForm Page", component:ToursForm},
    {path:"/tourslists", name:"ToursLists Page", component:TourLists},
    {path:"/visa", name:"Visa Page", component:Visa},
    {path:"/visalist", name:"VisaList Page", component:VisaList},
    {path:"/visaform", naem:"VisaForm Page", component:VisaForm},

    {path:"/travelbuddy", name:"TravelBuddy Page", component:TravelBuddy},
    {path:"/travelbuddyform", name:"TravelBuddyForm Page", component:TravelBuddyForm},
    {path:"/travelbuddylist", name:"TravelBuddyList Page", component:TravelBuddyList}
]


export default routes;