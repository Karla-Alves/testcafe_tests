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

    test('User Story - Inline Add, Multi - Edit', async t =>{
        const inlineAddStory = Selector(value =>{
            return document.getElementById('inline')
        })
        const actionsButton = Selector('#actions')
        const inlineAddName = Selector('.editrow').nth(4)
        const formattedId = Selector('.cn_formattedid0').nth(0)
        const multiEdit = Selector(value =>{
            return document.getElementById('multi')
        })
        const usState = Selector('.hover').withText('In-Progress')
        const applyButton = Selector('button').withText('Apply')
        const saveChanges = Selector('button').withText('Save Changes')

        const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
        const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
        const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')

        const scheduleState = Selector('.state-table div').withText('P')

        await t
            .hover(actionsButton)
            .click(inlineAddStory)
            .wait(2000)
            .typeText(inlineAddName, 'US A')
            .wait(2000)
            .click('.save')
            //expect story was created goes here????
            .hover('.actionsMenu')
            .click(multiEdit)
            .click('#nameTemplate')
            .typeText('#nameTemplate', 'New Name')
            .click(applyButton)
            .click(scheduleState)
            .wait(2000)
            .click(saveChanges)
            .click(formattedId)
            .click(qdpMoreButton)
            .click(qdpDelete)
            .click(flairConfirmDeletion)

    })
