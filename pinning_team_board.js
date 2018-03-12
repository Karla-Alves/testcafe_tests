import { Selector } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `Pinning Team Board`
    .page(`https://karla1.testn.f4tech.com/#/20330408691d/teamboard`)  
    .beforeEach(login)
    // .afterEach(async t => {
    //     await t.eval(() => localStorage.clear());
    // })

    test('Pinning Team Board', async t =>{
        const sideIcon = Selector("#viewport > div > div > div.chr-NavigationHeader > div > div:nth-child(1) > div.chr-NavigationHeader-menuButtonTitleDiv > nav > button > div > span > span");
        const sidePagesIcon = Selector('.chr-NavigationSidebarPagesHeader-ellipsisButton')
        const searchAllPages = Selector('#viewport > div > nav.chr-ComponentsSideBar.chr-NavigationSubmenuContainer > div.chr-NavigationSubmenuContainer-searchWrapper > div > div')
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



    
     