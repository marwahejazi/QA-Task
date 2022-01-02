class HomePageActions {
    openHomePage() {
        cy.visit('https://hotels.com', {
            headers: {
                "Accept-Encoding": "gzip, deflate, br"
            }
        }

        )
        cy.wait(1000)
        return this;
    }

    typeInSearchInputField(location: string) {
        cy.get('input[name=q-destination]').type(location + '{downarrow}{enter}')
        cy.wait(3000)
        return this;
    }

    clickOnSearchButton() {
        cy.contains('Search').click()
        cy.wait(5000)
        return this;
    }

    openSpecificResult() {
        cy.get("._3f26d2").find("li").first().find("a").last().invoke("removeAttr", "target").click()
        cy.wait(4000)
        return this;
    }


}

export default HomePageActions