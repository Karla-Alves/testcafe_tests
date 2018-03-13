import { Selector } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `User Stories Page`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/userstories`)  
    .beforeEach(login)

    // test('User Story - New User Story', async t =>{
    //     const newUserStory = Selector(value => {
    //         return document.getElementById('newAR')
    //     })
    //     const newUsName = Selector('div.smb-TextInput-renderedText').nth(0)
    //     const newUsNameEditor = Selector('.smb-TextInput--iconPlacementEnd').nth(0)
    //     const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
    //     const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
    //     const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
    //     await t
    //         .hover('.actionsMenu')
    //         .wait(2000)
    //         .click(newUserStory)
    //         .click(newUsName)
    //         .typeText(newUsNameEditor, 'New US')
    //         .click('.chr-QuickDetailEntityFooter-saveButton')
    //         .wait(2000)
    //         .expect({input:'New US'}).eql({input:'New US'}, 'this assertion will pass')
    //         .click(qdpMoreButton)
    //         .click(qdpDelete)
    //         .click(flairConfirmDeletion)
    //         .wait(2000)       
    // })

    test('User Story - Inline Add', async t =>{
        const inlineAddStory = Selector(value =>{
            return document.getElementById('inline')
        })
        const inlineAddName = Selector('.editrow').nth(4)

        await t
            .hover('.actionsMenu')
            .click(inlineAddStory)
            .wait(2000)
            .typeText(inlineAddName, 'US A')
            .wait(2000)
            .click('.save')
    })

    
    