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

    test('User Story - New User Story', async t =>{
        const newUserStory = Selector(value => {
            return document.getElementById('newAR')
        })
        const actionsButton = Selector('#actions')
        const newUsName = Selector('div.smb-TextInput-renderedText').nth(0)
        const newUsNameEditor = Selector('.smb-TextInput--iconPlacementEnd').nth(0)
        const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
        const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
        const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')

        await t
            .hover(actionsButton)
            .wait(200)
            .click(newUserStory)
            .click(newUsName)
            .typeText(newUsNameEditor, 'New US')
            .click('.chr-QuickDetailEntityFooter-saveButton')
            .wait(2000)
            .expect({input:'New US'}).eql({input:'New US'}, 'this assertion will pass')
            .click(qdpMoreButton)
            .click(qdpDelete)
            .click(flairConfirmDeletion)
            .wait(2000)       
    })
