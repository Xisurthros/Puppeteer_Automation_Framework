const puppeteer = require('puppeteer');

class Helpers {
    constructor() {
        this.browser = null;
        this.page = null;
        this.base_url = 'https://www.saucedemo.com/';
        this.images_path = 'src/tests/screenshots/';
    }

    async init() {
        this.browser = await puppeteer.launch({
            headless: false,
            slowMo: 20,
            devtools: false,
            defaultViewport: null
        });
        this.page = await this.browser.newPage();
        await this.page.goto(this.base_url);
        await this.page.waitForSelector('#user-name');
    }

    async login(username, password) {
        if (!username && !password) {
            await this.page.click('#login-button');
        } else if (!username) {
            await this.page.waitForSelector('#user-name');
            await this.page.type('#password', password);
            await this.page.click('#login-button');
        } else if (!password) {
            await this.page.waitForSelector('#user-name');
            await this.page.type('#user-name', username);
            await this.page.click('#login-button');
        } else {
            await this.page.waitForSelector('#user-name');
            await this.page.waitForSelector('#password');
            await this.page.type('#user-name', username);
            await this.page.type('#password', password);
            await this.page.click('#login-button');
        }
        // await this.page.waitForSelector('#inventory_container');
    }

    async logout() {
        await this.page.click('#react-burger-menu-btn');
        await this.page.waitForSelector('#logout_sidebar_link');
        await this.page.click('#logout_sidebar_link');
        await this.page.waitForSelector('#user-name');
    }

    async close() {
        await this.browser.close();
    }

    async getItems() {
        const items = await this.page.$$('.inventory_item');
        return items;
    }

    async getItemName(item) {
        const itemName = await item.$eval('.inventory_item_name', el => el.innerText);
        return itemName;
    }

    
}

module.exports = new Helpers();