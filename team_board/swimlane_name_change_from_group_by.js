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

test('Team Board Group By button name change to Swimlanes and Group by name change to SWIMLANE BY("S161324")', async t =>{
    const groupByButton = Selector('#TOOLBAR_GROUP_BY_TRAY-trigger .chr-ToolbarGroupByButton-groupByButton .smb-Button-children')
    const toolbarTray = Selector('#TOOLBAR_GROUP_BY_TRAY')
    const swimlaneByButtonLabel = Selector('.chr-Tray-contents .chr-ToolbarGroupByTray-groupByField .smb-FieldLabel-text')

    await t
        .wait(200)
        .expect(groupByButton.textContent).eql('Swimlanes')
        
        if(await toolbarTray.exists){
            await t
                .expect(swimlaneByButtonLabel.textContent).eql('Swimlane By')         
        }else{
            await t
                .click(groupByButton) 
                .expect(swimlaneByButtonLabel.textContent).eql('Swimlane By')
        }       
})    

test('Work Views still has "Group By" button and "GROUP BY" label for dropdown', async t =>{
    const projectPicker = Selector('.chr-ProjectPickerSelect .chr-ProjectPickerSelect-select')
    const projectBrowser = Selector('.smb-DropdownList-footer .chr-ProjectPickerSelectContainer-footerButton')
    const projectCheckbox = Selector('.smb-DataTable-wrapper .smb-TableBody .smb-TableCell--checkbox .chr-ProjectPickerModal-checkbox') 
    const projectHasBeenSelected = Selector('.chr-ToolbarMultiProjectFilterTray-fieldContainer .chr-ProjectPickerSelect .smb-Select-selectedValue')
    const projectDoneButton = Selector('.smb-PanelFooter .chr-ProjectPickerModal-doneButton .smb-Button-children')
    const workItemTypesPicker = Selector('.chr-ToolbarMultiProjectFilterTray-fieldContainer .chr-MultiProjectFilterTrayTypeFilter .smb-Select-trigger')
    const workItemTypesDropdown = Selector('.smb-DropdownList-listContentWrapper .smb-DropdownList-list .smb-Checkbox').nth(2)
    const workItemTypesBeenSelected = Selector('.chr-ToolbarMultiProjectFilterTray-fieldContainer .chr-MultiProjectFilterTrayTypeFilter .smb-Select-selectedValue')
    const groupByButton = Selector('#TOOLBAR_GROUP_BY_TRAY-trigger .chr-ToolbarGroupByButton-groupByButton .smb-Button-contents .smb-Button-children')
    const groupByButtonLabel = Selector('.chr-Tray-contents .chr-ToolbarGroupByTray-groupByField .smb-FieldLabel-text')
    const toolbarTray = Selector('#TOOLBAR_GROUP_BY_TRAY')

    await t
        .navigateTo(`https://karla0.testn.f4tech.com/#/228928406146d/workviews`)
        .wait(200)

        //If a project and a work item is already chosen, do nothing, otherwise pick a work item
        if(await projectHasBeenSelected.exists && workItemTypesBeenSelected.exists){
            await t
             .expect(true).ok('it passed')
        }else{
            await t
            .click(projectPicker)
            .click(projectBrowser)
            .click(projectCheckbox)
            .click(projectDoneButton)
            .click(workItemTypesPicker)
            .click(workItemTypesDropdown)
        }

        //checking Group By button
        if(await toolbarTray.exists){
            await t
                .expect(groupByButton.textContent).eql('Group By')         
        }else{
            await t
                .click(groupByButton)
                .expect(groupByButtonLabel.textContent).eql('Group By')
        }      

})
