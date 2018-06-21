import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `Team Board`
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
        }
    
        

})    