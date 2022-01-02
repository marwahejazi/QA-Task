/// <reference types="cypress" />

import HomePageActions from "./pageObject/homePage/actions"
import HotelPageAssertions from "./pageObject/hotelPage/assertions"

const hotelPageAssertion = new HotelPageAssertions


const homePageActions = new HomePageActions
const location = "Jerusalem"
const location2 = "Nablus"
const location3 = "Nables"
it.only('Hotels test', function () {
    homePageActions.openHomePage()
        .typeInSearchInputField(location)
        .clickOnSearchButton()
        .openSpecificResult()

    hotelPageAssertion.checkHotelLocation(location)

    homePageActions.openHomePage()
        .typeInSearchInputField(location2)
        .clickOnSearchButton()
        .openSpecificResult()

    hotelPageAssertion.checkHotelLocation(location2)

    homePageActions.openHomePage()
        .typeInSearchInputField(location3)
        .clickOnSearchButton()
        .openSpecificResult()

    hotelPageAssertion.checkHotelLocation(location3)

})