class MenuScreen {
    constructor(){
        this.leftMenuButton = "~open menu"
        this.loginButton = "//*[@text='Log in']"
    }

    async accessLoginScreen(){
        await $(this.leftMenuButton).click()
        await $(this.loginButton).click()
    }
}

export default new MenuScreen()