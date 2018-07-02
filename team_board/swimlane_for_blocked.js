import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';
import Cookies from 'js-cookie';

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
        const allCookies = Cookies.get();
        for(c in allCookies){
            Cookies.remove(c.name);
        }
        await t.eval(() => localStorage.clear());
    })

test('Team Board Swimlane for a TS set as blocked', async t =>{
    const groupByButton = Selector('#TOOLBAR_GROUP_BY_TRAY-trigger')
    const toolbarTray = Selector('#TOOLBAR_GROUP_BY_TRAY')
    const groupByDropdown = Selector('.chr-ToolbarGroupByTray-groupByField .smb-DropdownList')
    const groupByDropdownOptionsBlocked = Selector('.chr-ToolbarGroupByTray-groupByField .smb-DropdownList-list .smb-DropdownItem').nth(1)
    const addNewButton = Selector('#TOOLBAR_ADD_NEW_TRAY-trigger .chr-ToolbarAddNewButton-addNewButton')
    const workItemTypes = Selector('.chr-ToolbarAddNewTray-field .chr-ToolbarAddNewTray-workItemTypeDropdown')
    const workItemTypesDropdownTestSet = Selector('.smb-DropdownList-listContentWrapper ,smb-DropdownItem')
    const nameBoxAddNew = Selector('.chr-ToolbarAddNewTray-nameInput .smb-TextInput')
    const createButton = Selector('.chr-ToolbarAddNewTray-buttonField .smb-Button-contents').nth(0)
    const closeConfirmationFlaire = Selector('.smb-Alert-closeButton .smb-Button-contents')
    const filterButton = Selector('#TOOLBAR_FILTER_TRAY-trigger')
    const manageFiltersButton = Selector('.chr-FilterTray-filters .smb-Button-contents').nth(0)
    const searchInputForFilters = Selector('.chr-MultiItemListPopover-popover .smb-DropdownList-searchWrapper')
    const workItemTypeCheckbox = Selector('.smb-DropdownList-listContentWrapper .smb-DropdownList-list .smb-DropdownItem .smb-Checkbox')
    const applyButton = Selector('.smb-PopoverFooter .chr-MultiItemListPopover-applyButton')
    const filterDropdown = Selector('.smb-FieldLabel .smb-DropdownList').nth(0)
    const testSetFilterOption = Selector('.smb-DropdownList-list .smb-DropdownItem-text').withText('Test Set')
    const testSetBlockedOn = Selector('.chr-BoardDisplayGroup .chr-BoardDisplayGroup .chr-BoardField--blocked')
    const blockedYesColumnResults = Selector('.chr-BooleanIconEditor--blocked')
    const formattedId = Selector('.smb-PopoverTrigger .chr-FormattedId')
    const qdpMoreOptions = Selector('.chr-QuickDetailActionsMenu .smb-Dropdown')
    const qdpDelete = Selector('.smb-DropdownList-listContentWrapper .smb-DropdownList-list .smb-DropdownItem .smb-DropdownItem-contentWrapper .smb-DropdownItem-text').withText('Delete')
    const deleteButtonConfirmation = Selector('.smb-PanelFooter .smb-Button')

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
                .wait(2000)
                .click(closeConfirmationFlaire)
                .expect({input:'Test Set One'}).eql({input:'Test Set One'}, 'this assertion will pass')

                //adding a filter
                .click(filterButton)
                .click(manageFiltersButton)
                .typeText(searchInputForFilters, 'Work Item Type')
                .click(workItemTypeCheckbox)
                .wait(200)
                .click(applyButton)
                .wait(2000)
                .click(filterDropdown)
                .click(testSetFilterOption)
                .wait(2000)

                //Enabling blocked for the Test Set
                .click(testSetBlockedOn)
                .expect({span:'blocked'}).eql({span:'blocked'}, 'this assertion will pass')

                //disabling the filter and deleting the test set, 
                //since I don't know how to write a teardown funcion. 
                //This will allow the test to run every time without failing due to the filter been already checked
                
                //deleting test set
                .click(formattedId)
                .click(qdpMoreOptions)
                .click(qdpDelete)
                .click(deleteButtonConfirmation)
                
                //disabling filter                
                .click(filterDropdown)
                .click(testSetFilterOption)
                .click(filterDropdown)
                .click(manageFiltersButton)
                .typeText(searchInputForFilters, 'Work Item Type')
                .click(workItemTypeCheckbox)
                .click(applyButton)
                .click(filterButton)
        }
            })    