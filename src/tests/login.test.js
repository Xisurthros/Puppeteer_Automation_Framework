const helpers = require('../helpers/helpers');


describe('Login Functionality', () => {

    beforeEach(async () => {
        await helpers.init();
    });
    afterEach(async () => {
        await helpers.close();
    });

    describe('Successful Login', () => {

        test('Vaild Login', async () => {
            await helpers.login('standard_user', 'secret_sauce');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url + '/inventory.html');
            await helpers.page.screenshot({ path: helpers.images_path + '/login/valid_login.png' });
        });
    });

    describe('Invalid Login Scenarios', () => {

        test('User attempts to login with invalid password', async () => {
            await helpers.login('standard_user', 'invalid_password');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({ path: helpers.images_path + '/login/invalid_password.png' });
        });

        test('User attempts to login with invalid username', async () => {
            await helpers.login('invalid_user', 'secret_sauce');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({ path: helpers.images_path + '/login/invalid_username.png' });
        });

        test('User attempts to login with both invalid username and password', async () => {
            await helpers.login('invalid_user', 'invalid_password');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({ path: helpers.images_path + '/login/invalid_username_and_password.png' });
        });

        test('User attempts to login with a leading space in username', async () => {
            await helpers.login(' standard_user', 'secret_sauce');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({ path: helpers.images_path + '/login/leading_space_in_username.png' });
        });

        test('User attempts to login with a trailing space in username', async () => {
            await helpers.login('standard_user ', 'secret_sauce');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({ path: helpers.images_path + '/login/trailing_space_in_username.png' });
        });

        test('User attempts to login with a leading space in password', async () => {
            await helpers.login('standard_user', ' secret_sauce');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({path: helpers.images_path + '/login/leading_space_in_password.png'});
        });

        test('User attempts to login with a trailing space in password', async () => {
            await helpers.login('standard_user', 'secret_sauce ');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({path: helpers.images_path + '/login/trailing_space_in_password.png'});
        });

        test('User attempts to login with a leading space in username and password', async () => {
            await helpers.login(' standard_user', ' secret_sauce');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({path: helpers.images_path + '/login/leading_space_in_username_and_password.png'});
        });

        test('User attempts to login with a trailing space in username and password', async () => {
            await helpers.login('standard_user ', 'secret_sauce ');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({path: helpers.images_path + '/login/trailing_space_in_username_and_password.png'});
        });

        test('User attempts to login with a leading space in username and trailing space in password', async () => {
            await helpers.login(' standard_user ', ' secret_sauce ');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username and password do not match any user in this service');
            await helpers.page.screenshot({path: helpers.images_path + '/login/leading_space_in_username_and_trailing_space_in_password.png'});
        });

        test('User attmempts to login with no password', async () => {
            await helpers.login('standard_user', '');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Password is required');
            await helpers.page.screenshot({path: helpers.images_path + '/login/no_password.png'});
        });

        test('User attmempts to login with no username', async () => {
            await helpers.login('', 'secret_sauce');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username is required');
            await helpers.page.screenshot({path: helpers.images_path + '/login/no_username.png'});
        });

        test('User attmempts to login with no username and password', async () => {
            await helpers.login('', '');
            let url = await helpers.page.url();
            expect(url).toBe(helpers.base_url);
            expect(await helpers.page.$eval('h3', el => el.innerText)).toBe('Epic sadface: Username is required');
            await helpers.page.screenshot({path: helpers.images_path + '/login/no_username_and_password.png'});
        });
    });

    describe('Edge Cases', () => {
        // ... add edge cases here
    });
});

//  cmd: npx jest -t 'Consildated Login Functionality'
describe('Consildated Login Functionality', () => {
    beforeEach(async () => {
        await helpers.init();
    });
    afterEach(async () => {
        await helpers.close();
    });

    describe('Successful Login', () => {
        test('User logs in with a vaild username and password', async () => {
            await helpers.login('standard_user', 'secret_sauce');
            let url = await helpers.page.url();
            expect(url).toBe('https://www.saucedemo.com/inventory.html');
            await helpers.page.screenshot({ path: helpers.images_path + '/login/valid_login.png' });
        });
    });

    describe("Invalid Login Scenarios", () => {
        const invalidLoginData = [
            { testName: 'invalid_password', username: 'standard_user', password: 'invalid_password', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'invalid_username', username: 'invalid_user', password: 'secret_sauce', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'invalid_username_and_password', username: 'invalid_user', password: 'invalid_password', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'leading_space_username', username: ' standard_user', password: 'secret_sauce', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'trailing_space_username', username: 'standard_user ', password: 'secret_sauce', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'leading_space_password', username: 'standard_user', password: ' secret_sauce', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'trailing_space_password', username: 'standard_user', password: 'secret_sauce ', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'leading_space_in_username_and_password', username: ' standard_user', password: ' secret_sauce', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'trailing_space_in_username_and_password', username: 'standard_user ', password: 'secret_sauce ', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'leading_and_trailing_space_in_usernamd_and_password', username: ' standard_user ', password: ' secret_sauce ', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
            { testName: 'no_password', username: 'standard_user', password: '', expectedError: 'Epic sadface: Password is required' },
            { testName: 'no_username', username: '', password: 'secret_sauce', expectedError: 'Epic sadface: Username is required'},
            { testname: 'no_username_and_password', username: '', password: '', expectedError: 'Epic sadface: Username is required'}
        ];
    
        invalidLoginData.forEach((data) => {
            test(`User attempts to login with ${data.testName}`, async () => {
                await helpers.login(data.username, data.password);
                let url = await helpers.page.url();
                expect(url).toBe(helpers.base_url);
                expect(await helpers.page.$eval('h3', el => el.innerText)).toBe(data.expectedError);
                await helpers.page.screenshot({ path: helpers.images_path + `/login/${data.testName}.png` });
            });
        });
    });
});
