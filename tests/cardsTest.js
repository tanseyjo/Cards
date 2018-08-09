mainPage = {}

module.exports = {
    beforeEach: browser => {
        mainPage = browser.page.cardsPageObject()
        mainPage.navigate()
    },

    after: browser => {
        browser.end()
    },
   
    //Create login, cancel terms of acceptance, log back in and accept
    'Create Login Profile': browser => {
        mainPage
            .click('@signup')    
            .setValue('@emailSignup', 'tansey52@tansey.com')
            .setValue('@passwordSignup', 'password')
            .setValue('@passwordConfirm', 'password')
            .click('@signUpButton')
            .waitForElementVisible('@termsAcceptButton', 10000)
            .verify.containsText('@termsHeading', 'Terms of Use')
            .click('@termsDeclineButton')
            .waitForElementVisible('@login', 10000)
            .verify.containsText('@loginHeading', 'LOGIN')
            .setValue('@email', 'tansey52@tansey.com')
            .setValue('@password', 'password')
            .click('@login')
            .waitForElementVisible('@termsDeclineButton', 5000)
            .click('@termsAcceptButton')
            .waitForElementVisible('@thankYouHeading', 7000)
            .click('@getStartedButton')
            .waitForElementVisible('@cardsHeading', 10000)
            .click('@logoutIcon')
        },
   
     //Login to app
    'Login and logout of App': browser => {
        mainPage
            .setValue('@email', 'tansey16@tansey.com')
            .setValue('@password', 'password')
            .click('@login')
            .waitForElementVisible('@decksIcon', 5000)
            .verify.containsText('@cardsHeading', 'Cards')
            .click('@logoutIcon')
            .waitForElementVisible('@login', 5000)
            .verify.containsText('@loginHeading', 'LOGIN')
    },

   //Create a deck of cards
    'Create a deck of cards': browser => {
        mainPage
            .setValue('@email', 'tansey21@tansey.com')
            .setValue('@password', 'password')
            .click('@login')
            .waitForElementVisible('@subscriptionIcon', 5000)
            .verify.containsText('@cardsHeading', 'Cards')
            .click('@decksIcon')
            .waitForElementVisible('@studyButton', 5000)
            .click('@decksAddButton')
            .waitForElementVisible('@decksSaveButton', 5000)
            .setValue('@deckNameField', 'Deck 1')
            .click('@decksSaveButton')
            .waitForElementVisible('@studyButton', 7000)
            .waitForElementVisible('@decksBackButton', 5000)
            .click('@decksBackButton')
            .waitForElementVisible('@subscriptionIcon', 5000)
            .click('@logoutIcon')
            .waitForElementVisible('@login', 5000)
            .verify.containsText('@loginHeading', 'LOGIN')
    },

    //Create cards within a deck
    'Create cards': browser => {
        mainPage
            .setValue('@email', 'tansey16@tansey.com')
            .setValue('@password', 'password')
            .click('@login')
            .waitForElementVisible('@subscriptionIcon', 5000)
            .verify.containsText('@cardsHeading', 'Cards')
            .click('@decksIcon')
            .waitForElementVisible('@studyButton', 5000)
            .click('@deck1')
            .waitForElementVisible('@cardsHeading', 5000)
            .click('@addCards')
            .setValue('@cardsFrontField', 'Card 1')
            .setValue('@cardsBackField', 'One')
            .click('@cardsSaveButton')
            .click('@addCards')
            .setValue('@cardsFrontField', 'Card 2')
            .setValue('@cardsBackField', 'Two')
            .click('@cardsSaveButton')
            .click('@addCards')
            .setValue('@cardsFrontField', 'Card 3')
            .setValue('@cardsBackField', 'Three')
            .click('@cardsSaveButton')
            .click('@backButton')
            .waitForElementVisible('@studyButton', 5000)
            .waitForElementVisible('@decksBackButton', 5000)
            .click('@decksBackButton')
            .waitForElementVisible('@subscriptionIcon', 5000)
            .click('@logoutIcon')
            .waitForElementVisible('@login', 5000)
            .verify.containsText('@loginHeading', 'LOGIN')
    },

            
           
    




}