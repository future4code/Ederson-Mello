import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import CreatTripPage from "../pages/CreatTripPage/CreatTripPage"
import HomePage from "../pages/HomePage/HomePage"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/adminHome">
                    <AdminHomePage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/formPage">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/tripPage">
                    <CreatTripPage />
                </Route>
                <Route exact path="/listPage">
                    <ListTripsPage />
                </Route>
                <Route exact path="/detailPage/:id">
                    <TripDetailsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        
        </BrowserRouter>
    )
}

export default Router