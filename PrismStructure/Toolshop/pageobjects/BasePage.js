class BasePage {

    constructor(page){
        this.page = page;
    }

    async click(locator){
        await locator.waitFor({state:'visible'});
        await locator.click();
    }

    async fill(locator,text){
        await locator.waitFor({state:'visible'});
        await locator.fill(text);
    }

    async type(locator,text){
        await locator.waitFor({state:'visible'});
        await locator.pressSequentially(text);
    }

    async select(locator,value){
        await locator.selectOption(value);
    }

    async wait(){
        await this.page.waitForLoadState("networkidle");
    }

}

module.exports={BasePage};