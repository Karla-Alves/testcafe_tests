import { Role } from 'testcafe';

export var userLogin = Role(async t => {
    await t
        .navigateTo('https://karla0.testn.f4tech.com/slm/login.op?')
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')
});