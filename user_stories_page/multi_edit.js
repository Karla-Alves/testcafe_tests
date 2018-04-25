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

    test('User Story - Multi Edit', async t =>{
        const multiEdit = Selector(value =>{
            return document.getElementById('multi')
        })
        const actionsButton = Selector('#actions')
        const usState = Selector('.hover').withText('In-Progress')
        const applyButton = Selector('button').withText('Apply')
        const saveChanges = Selector('button').withText('Save Changes')

        await t
            .hover(actionsButton)
            .click(multiEdit)
            .click('#nameTemplate')
            .typeText('#nameTemplate', 'New Name')
            .click(applyButton)
            .hover('.state-table')
            .click('.state-table')
            .wait(2000)
            .click(saveChanges)
    })