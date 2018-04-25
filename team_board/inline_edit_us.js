import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `Team Board`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/teamboard`)  
    .beforeEach(login)
    // beforeEach(async t => {
    //     await t.login
    // })

    // .afterEach(async t => {
    //     await t.eval(() => localStorage.clear());
    // })

test('Card inline edit', async t =>{
    const storyName = Selector('.chr-BoardField--editable').withText('User Story 1')
    const addNewButton = Selector('span.smb-Button-children').withText('Add New')
    const workItemTypes = Selector('div.smb-Select-placeholderText').withText('Select Work Item Types...')
    const createUserStory = Selector('span.smb-DropdownItem-text').withText('User Story')
    const enterName = Selector('.smb-TextInput--iconPlacementEnd')
    const createButton = Selector('.chr-ToolbarAddNewTray-addButton')
    const inlineEditor = Selector('.chr-EditorsStringEditor')
    const formattedId = Selector('.chr-FormattedId')
    const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
    const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
    const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
    
    
    await t 
        //create an User Story        
        .click(addNewButton)
        .click(workItemTypes)
        .click(createUserStory)
        .typeText(enterName, 'User Story 1')
        .click(createButton)
        .wait(2000)
        .hover(storyName).click(storyName)
        .typeText(inlineEditor, ' Test')
        .pressKey('enter')
        .click(formattedId)
        .click(qdpMoreButton)
        .click(qdpDelete)
        .click(flairConfirmDeletion)
});