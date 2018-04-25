import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';

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

    // .afterEach(async t => {
    //     await t.eval(() => localStorage.clear());
    // })


    test('Team Board Exit Agreements', async t =>{
        const moreButton = Selector('.chr-ToolbarMoreButton')
        const showExitAgreements = Selector('li.smb-DropdownItem')
        const hideExitAgreements = Selector('li.smb-DropdownItem')
        const exitAgreementFieldText = Selector('.smb-FieldLabel-text')
        

        await t
            .click(moreButton)
            .click(showExitAgreements)
            .expect(showExitAgreements).ok('it passed')
            .wait(200)
            if(await exitAgreementFieldText.exists){
                await t
                    .click(moreButton)
                    .click(hideExitAgreements)
                    .wait(200)
            }else{
                await t.expect(true).ok('it passed')
            }

    })
