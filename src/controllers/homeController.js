const express = require("express");
import tourService from "../service/tourService";
let getHomePage = async (req, res) => {
  return res.render("shop/index", {
    // pageTitle: "Shop",
    path: "/",
  });
};

let getLogin = async (req, res) => {
  return res.render("login.ejs");
};
let getSignUp = async (req, res) => {
  return res.render("signUp.ejs");
};

let getDataTour = async (req, res, next) => {
  try {
    console.log(req.query);
    let tours = await tourService.filterTour(req.query);
    console.log(tours);
    res.render("shop/filter-list-tour.ejs", {
      tours,
      path: "/",
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getHomePage: getHomePage,
  getLogin: getLogin,
  getSignUp: getSignUp,
  getDataTour: getDataTour,
};
