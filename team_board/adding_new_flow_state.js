import { Selector, ok, Role } from 'testcafe';
import minimist from 'minimist';
//import { reset } from 'chalk';

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

    .afterEach(async t => {
        await t.eval(() => localStorage.clear());
    })

    test('Team Board settings, adding New Flow State', async t =>{
        const settingsButton = Selector('button.smb-Button.smb-Button--icon.smb-Button--sm.chr-TeamBoardPage-settingsViewButton')
        const addFlowState = Selector('.chr-TeamBoardSettings-addColumnText')
        const nameContainer = Selector('.chr-TeamBoardSettingsColumn-nameContainer input')
        const saveButton = Selector('button.smb-Button.smb-Button--primary.smb-Button--sm')
        const dropdownItemFlowState = Selector('.chr-TeamBoardSettingsColumn-moreDropdown')
        const deleteFlowState = Selector('span.smb-DropdownItem-text').withText('Delete');
        const uniqName = "new Flow " + new Date().getTime();
        await t
            .click(settingsButton)
            .click(addFlowState)
            .expect(addFlowState).ok('it passed')
            .typeText(nameContainer, uniqName)
            .click(saveButton)
            .expect(nameContainer.value).eql(uniqName)
            .wait(2000)
            .click(dropdownItemFlowState)
            .click(deleteFlowState)
            .expect(deleteFlowState).ok('it passed')
    });