class HotelPageAssertions {
    checkHotelLocation(location: string) {
        cy.get("._2lmU8j").should("contain", location)
    }
}
export default HotelPageAssertions