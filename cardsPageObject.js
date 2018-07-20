module.exports = {
    url: 'https://cards-beta.devclock.com/',
    elements: {
        'loginHeading' : 'div[class="col-6-12 tab selected"]',
        'signup' : 'div[class="col-6-12 tab"]',
        'email' : 'input[type="email"]',
        'password' : 'input[type="password"]',
        'login' : { selector: '//button[text()="Login"]', locateStrategy: 'xpath' },
        'loginGoogle' : 'button[data-bind="click: clickLoginWithGoogle, text: strings.loginWithGoogle, visible: loginWithGoogleVisible"]',
        'emailSignup' : 'input[data-bind="attr: { placeholder: strings.emailPlaceholder }, value: email"]',
        'passwordSignup' : 'input[data-bind="attr: { placeholder: strings.passwordPlaceholder }, value: password"]',
        'passwordConfirm' : 'input[data-bind="attr: { placeholder: strings.confirmPasswordPlaceholder }, value: confirmPassword"]',
        'signUpButton' : 'button[data-bind="click: clickSignUpWithEmail, text: strings.signUp, visible: signUpWithEmailVisible"]',
        'cardsHeading' : 'label[data-bind="text: strings.title"]',
        'subscriptionLink' : 'label[data-bind="text: strings.subscription"]',
        'contactLink' : 'label[data-bind="text: strings.contact"]',
        'settingsLink' : 'label[data-bind="text: strings.settings"]',
        'logoutLink' : 'label[data-bind="text: strings.logout"]',
        'logoutIcon' : 'i[data-bind="css: strings.logoutIcon"]',
        'settingsHeading' : 'label[data-bind="text: strings.title"]',
        'settingsEditButton' : 'div[data-bind="click: clickEditProfile"]',
        'termsHeading' : 'label[data-bind="text: strings.title"]',
        'termsDeclineButton' : 'button[data-bind="text: strings.decline, click: clickDecline, disable: declineDisabled, visible: declineVisible"]',
        'termsAcceptButton' : 'button[data-bind="text: strings.accept, click: clickAccept, disable: acceptDisabled, visible: acceptVisible"]',
        'welcomeHeading' : 'label[data-bind="text: strings.title"]',
        'getStartedButton' : { selector: '//button[text()="Get Started"]', locateStrategy: 'xpath' },
        'decksIcon' : 'i[data-bind="css: strings.decksIcon"]',
        'studyButton' : '.primary',//'//button[text()="Study"]',
        'decksAddButton' : 'button[data-bind="click: clickAdd, visible: addVisible"]', 
        'decksSaveButton' : { selector: '//button[text()="Save"]', locateStrategy: 'xpath' },
        'deckNameField' : '[placeholder="Enter deck name"]',
        'subscriptionIcon' : 'i[data-bind="css: strings.subscriptionIcon"]',
        'deck2' : { selector: '//label[text()="Deck 2"]', locateStrategy: 'xpath' },
        'deck1' : { selector: '//label[text()="Deck 1"]', locateStrategy: 'xpath' },
        'addCards' : 'i[data-bind="css: strings.addIcon"]',
        'cardsFrontField' : '[placeholder="Enter card front"]',
        'cardsBackField' : '[placeholder="Enter card back"]',
        'cardsSaveButton' : { selector: '//button[text()="Save"]', locateStrategy: 'xpath' },
        'backButton' : 'button[data-bind="click: clickBack, disable: backDisabled"]',
        'thankYouHeading' : 'label[data-bind="text: strings.thankYouHeader"]',
        'decksBackButton' : '.left' //'button[data-bind="click: clickBack, disable: backDisabled, visible: backVisible"]'


        // EXAMPLES
        //emailField : '[placeholder="Email"]'
        //loginButton : '//button[text()="Login"]' 
        //passwordField : '[placeholder="Password"]'
        //deckName: '//label[text()="Test 2"]'


       





















    }
}