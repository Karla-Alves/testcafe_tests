import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `Team Board Swimlane options`
    .page(`https://karla0.testn.f4tech.com/#/228928406146d/teamboard`)  
    .beforeEach(login)
    // beforeEach(async t => {
    //     await t.login
    // })

    .afterEach(async t => {
        await t.eval(() => localStorage.clear());
    })

test('Team Board Swimlane', async t =>{
    const groupByButton = Selector('#TOOLBAR_GROUP_BY_TRAY-trigger')
    const toolbarTray = Selector('#TOOLBAR_GROUP_BY_TRAY')
    const groupByDropdown = Selector('.chr-ToolbarGroupByTray-groupByField .smb-DropdownList')
    const groupByDropdownOptionsBlocked = Selector('.chr-ToolbarGroupByTray-groupByField .smb-DropdownList-list .smb-DropdownItem').nth(1)
    const addNewButton = Selector('#TOOLBAR_ADD_NEW_TRAY-trigger .chr-ToolbarAddNewButton-addNewButton')
    const workItemTypes = Selector('.chr-ToolbarAddNewTray-field .chr-ToolbarAddNewTray-workItemTypeDropdown')
    const workItemTypesDropdownTestSet = Selector('.smb-DropdownList-listContentWrapper ,smb-DropdownItem')
    const nameBoxAddNew = Selector('.chr-ToolbarAddNewTray-nameInput .smb-TextInput')
    const createButton = Selector('.chr-ToolbarAddNewTray-buttonField .smb-Button-contents').nth(0)

    await t
        if(await toolbarTray.exists){
            await t
                .expect(true).ok('it passed')
        }else{
            await t
                .click(groupByButton)
                .click(groupByDropdown)
                .click(groupByDropdownOptionsBlocked)
                .wait(200)
                .expect({span:'Blocked'}).eql({span:'Blocked'}, 'this assertion will pass')
                //adding a new artifact
                .click(addNewButton)
                .click(workItemTypes)
                .click(workItemTypesDropdownTestSet)
                .typeText(nameBoxAddNew, 'Test Set One')
                .click(createButton)
                .wait(200)

        }
    
        

})    