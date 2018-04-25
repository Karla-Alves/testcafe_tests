import { Selector, ClientFunction } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}

// var current_page = async t=> {
//     await t
//         .eval(() => window.location.reload(true))
// }
    
fixture `User Stories Page`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/userstories`)  
    .beforeEach(login)
    //.afterEach(current_page)

    // //A story with a child needs to exist for this test to pass
    test('User Stories expand/collapse functionality', async t => {

        const expandPageIcon = Selector('img.icon_plus').nth(0)
        const collapsePageIcon = Selector('img.icon_minus').nth(0)
        const expandChildIcon = Selector('.icon_plus').nth(1)
        const collapseChildIcon = Selector('.icon_minus').nth(1)

        await t
            .click(expandPageIcon)
            .expect(collapseChildIcon.exists).ok('it passed')
            .wait(2000)
            .click(collapsePageIcon)
            .expect(expandChildIcon.exists).ok('it passed')
            .wait(2000)
    })
