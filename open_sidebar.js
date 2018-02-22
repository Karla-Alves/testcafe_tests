import { Selector, ok } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}

fixture `Opening Sidebar`
    .page(`https://karla0.testn.f4tech.com/slm`)  
    .beforeEach(login)
       
//click to open sidebar
    test('Open sidebar', async t =>{   
        const sideIcon = Selector("#viewport > div > div > div.chr-NavigationHeader > div > div:nth-child(1) > div.chr-NavigationHeader-menuButtonTitleDiv > nav > button > div > span > span");
        const sideBardTitle = Selector("h1.chr-ComponentsSideBar-headerTitle")

        if(await sideIcon.exists){
            await t.click(sideIcon);
            await t.wait(20000);
            await t.expect(sideBardTitle.exists).ok();
        } else {
            await t.expect(false).ok('it failed');    
        }
        
    })    

    
   



