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

test('Team Board Group By button name change to Swimlanes and Group by name change to SWIMLANE BY', async t =>{
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
    const projectCheckbox = Selector('.smb-TableBody .smb-TableRow .smb-TableCell--checkbox') 
    const projectDoneButton = Selector('.smb-PanelFooter .chr-ProjectPickerModal-doneButton .smb-Button-children')
    const workItemTypesPicker = Selector('.smb-DropdownList--bottom .smb-Select-trigger .smb-Select-placeholderText').nth(1)
    const workItemTypesDropdown = Selector('.smb-DropdownList-listContentWrapper .smb-DropdownList-list .smb-Checkbox').nth(2)
    const groupByButton = Selector('#TOOLBAR_GROUP_BY_TRAY-trigger .chr-ToolbarGroupByButton-groupByButton .smb-Button-contents .smb-Button-children')
    const groupByButtonLabel = Selector('.chr-Tray-contents .chr-ToolbarGroupByTray-groupByField .smb-FieldLabel-text')

    await t
        .navigateTo(`https://karla0.testn.f4tech.com/#/228928406146d/workviews`)
        .wait(2000)
        //choosing a Project
        .click(projectPicker)
        .click(projectBrowser)
        .click(projectCheckbox)
        .click(projectDoneButton)

        //chosing a Work Item Type
        .click(workItemTypesPicker)
        .click(workItemTypesDropdown)

        //checking Group By button
        .expect(groupByButton.textContent).eql('Group By')

        if(await toolbarTray.exists){
            await t
                .expect(groupByButton.textContent).eql('Group By')         
        }else{
            await t
                .click(groupByButton)
                .expect(groupByButtonLabel.textContent).eql('Group By')
        }      
})
