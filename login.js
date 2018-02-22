import { Selector } from 'testcafe';

fixture `Logging in`
    .page `https://karla0.testn.f4tech.com/slm`;

test('Log in', async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button');
});

