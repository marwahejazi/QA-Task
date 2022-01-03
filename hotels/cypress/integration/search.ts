/// <reference types="cypress" />
import HomePageActions from "../pageObject/homePage/actions"
import HotelPageAssertions from "../pageObject/hotelPage/assertions"

const hotelPageAssertion = new HotelPageAssertions
const homePageActions = new HomePageActions
const location = "Jerusalem"
const location2 = "Nables"
const location3 = "Nablus"

it.only('Hotels test Jerusalem', function () {    //Positive testing
    homePageActions.openHomePage()
        .typeInSearchInputField(location)
        .clickOnSearchButton()
        .openSpecificResult()
    hotelPageAssertion.checkHotelLocation(location)

})
it.only('Hotels test Nables', function () {    //Negative testing
    homePageActions.openHomePage()
        .typeInSearchInputField(location2)
        .clickOnSearchButton()
        .openSpecificResult()
    hotelPageAssertion.checkHotelLocation(location2)

})
it.only('Hotels test Nablus', function () {      //Positive testing
    homePageActions.openHomePage()
        .typeInSearchInputField(location3)
        .clickOnSearchButton()
        .openSpecificResult()
    hotelPageAssertion.checkHotelLocation(location3)

})
