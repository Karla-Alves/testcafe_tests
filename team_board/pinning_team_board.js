import { Selector } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `Pinning Team Board`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/teamboard`)  
    .beforeEach(login)
    // .afterEach(async t => {
    //     await t.eval(() => localStorage.clear());
    // })

    test('Pinning Team Board', async t =>{
        const sideIcon = Selector('.smb-TopBarIconButton')
        const sidePagesIcon = Selector('.chr-NavigationSidebarPagesHeader-ellipsisButton')
        const searchAllPages = Selector('.smb-Validated.smb-SearchInput').nth(0)
        const pinIcon = Selector('.chr-NavigationSubmenuPageSection-pinIcon')

        await t
            .click(sideIcon)
            .wait(2000)
            .click(sidePagesIcon)
            .expect(sidePagesIcon).ok('it passed')
            .typeText(searchAllPages, 'Team Board')
            if(await '.smb-Icon--unpinned'.exists){
                await t
                    .hover(pinIcon).click(pinIcon)
                    .wait(20000)
            }else {
                await t.expect(true).ok('it passed')
            }    
    })



    
     