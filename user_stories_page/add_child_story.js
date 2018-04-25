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

    test('Add Child Story', async t =>{
            const inlineAddStory = Selector(value =>{
                return document.getElementById('inline')
            })
            const actionsButton = Selector('#actions')     
            const inlineAddName = Selector('.editrow').nth(4)
            const newUsName = Selector('div.smb-TextInput-renderedText').nth(0)
            const newUsNameEditor = Selector('.smb-TextInput--iconPlacementEnd').nth(0)
            const closeIconQDP = Selector('.smb-Icon--cancel')
            const formattedId = Selector('.cn_formattedid0').nth(0)
            const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
            const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
            const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
            const listView = Selector('#flatmode')
            const treeView = Selector('#hiermode')
            const expandChildIcon = Selector('.icon_plus').nth(1)
    
            await t
                .hover(actionsButton)
                .click(inlineAddStory)
                .wait(2000)
                .typeText(inlineAddName, 'US A') 
                .wait(2000)
                .click('.save')
                .click('.sprite-new-story-child')
                .click(newUsName)
                .typeText(newUsNameEditor, 'New US 1')
                .click('.chr-QuickDetailEntityFooter-saveButton')
                .click(closeIconQDP)
                .wait(2000)
                .click(listView)
                .click(treeView)
                .expect(expandChildIcon.exists).ok('it passed')
                .wait(2000)
                .click(formattedId)
                .click(qdpMoreButton)
                .click(qdpDelete)
                .click(flairConfirmDeletion)
                //.navigateTo(current_page)
                      
    })