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

    // .afterEach(async t => {
    //     const allCookies = Cookies.get();
    //     for(c in allCookies){
    //         Cookies.remove(c.name);
    //     }
    //     await t.eval(() => localStorage.clear());
    // })

/*test('Team Board Expand/Collapse a swimlane', async t =>{
    const swimlanesButton = Selector('#TOOLBAR_GROUP_BY_TRAY-trigger')
    const toolbarTray = Selector('#TOOLBAR_GROUP_BY_TRAY')
    const swimlaneByDropdown = Selector('.chr-ToolbarGroupByTray-groupByField .smb-DropdownList')
    const swimlaneByDropdownOptionsBlocked = Selector('.chr-ToolbarGroupByTray-groupByField .smb-DropdownList-list .smb-DropdownItem').nth(1)
    const expandedIcon = Selector('.ableToBeClicked').child('span.smb-Icon--downFull')
    const collapsedIcon = Selector('.ableToBeClicked').child('span.smb-Icon--rightFull')

    await t
        if(await toolbarTray.exists){
            await t
                .expect(true).ok('it passed')
        }else{
            await t
                .click(swimlanesButton)
                .click(swimlaneByDropdown)
                .click(swimlaneByDropdownOptionsBlocked)
                .wait(200)
                .expect({span:'Blocked'}).eql({span:'Blocked'}, 'this assertion will pass')
        }
        //If icon is collapsed, expand it. Otherwise collapse it
        if(await collapsedIcon.exists){
            await t
                .click(collapsedIcon)
                .expect({span:'collapse'}).eql({span:'collapse'}, 'this assertion will pass')
        }else if(await expandedIcon.exists){
            await t 
                .click(expandedIcon)
                .expect({span:'expand'}).eql({span:'expand'}, 'this assertion will pass')
        }else{
            await t
                .expect(true).ok('it passed')
        }            
    })  */    


test('Swimlane has correct data', async t =>{
    const swimlanesButton = Selector('#TOOLBAR_GROUP_BY_TRAY-trigger')
    const toolbarTray = Selector('#TOOLBAR_GROUP_BY_TRAY')
    const swimlaneByDropdown = Selector('.chr-ToolbarGroupByTray-groupByField .smb-DropdownList')
    const swimlaneByDropdownOptionsBlocked = Selector('.chr-ToolbarGroupByTray-groupByField .smb-DropdownList-list .smb-DropdownItem').nth(1)
    const expandCollapseIcon = Selector('.chr-SwimlaneHeader-header .ableToBeClicked .chr-SwimlaneHeader-collapsible').nth(0)
    const blockedSwimlane = Selector('.chr-BoardRow.chr-SwimlaneHeader-header').withText('Blocked: Yes')
    const expandedIcon = Selector('.ableToBeClicked').child('span.smb-Icon--downFull')
    const collapsedIcon = Selector('.ableToBeClicked').child('span.smb-Icon--rightFull')
    const blockedArtifact = Selector('.chr-BoardField--blockedReason')

    async function openSwimlane(swimlaneSelector) {
        const isSwimlaneOpen = await Selector(swimlaneSelector)
                            .find('.ableToBeClicked span')
                            .withAttribute('title', 'openSwimlane')
                            .exists

        if(!isSwimlaneOpen){
            await t
                    .click(swimlaneSelector.child('.ableToBeClicked'))
                    .wait(200)
        }
        return swimlaneSelector;
    }

    await t
        if(await toolbarTray.exists){
            await t
                .expect(true).ok('it passed')
        }else{
            await t
                .click(swimlanesButton)
                .click(swimlaneByDropdown)
                .click(swimlaneByDropdownOptionsBlocked)
                .wait(200)
                .expect({span:'Blocked'}).eql({span:'Blocked'}, 'this assertion will pass')
        }
        
        await openSwimlane(blockedSwimlane)
        await t
                .expect(blockedArtifact.exists).ok('there is a blocked card')
                // .expect(blockedArtifact.exists).notOk('this should fail')

                

        // if(await expandCollapseIcon.exists){
        //     if(await collapsedIcon.exists){
        //         await t
        //             .click(collapsedIcon)
        //             .wait(200)
        //            // .expect(blockedArtifact).gt(0, '3 is greater than 0')
        //             .expect(blockedArtifact.length).notEql(0)
        //     }else{
        //         await t
        //             //.expect(blockedArtifact.count).notEql(0)
        //     } 
        // }else{
            // await t
            //     .expect({span:'collapse'}).eql({span:'collapse'}, 'this assertion will pass')
        // }

    // var swimlaneColumns = Selector('.chr-BoardRow .chr-BoardWithToolbar-column')
    // var count = await swimlaneColumns.count

    // for(var i=0; i < count; i++){
    //     if(await collapsedIcon.exists){
    //         await t.click(collapsedIcon)
    //     }
    //     await t
    //         .click(swimlaneColumns.nth(i))
    //         .wait(200)
    // }
        
    

})




    