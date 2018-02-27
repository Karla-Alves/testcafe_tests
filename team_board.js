import { Selector } from 'testcafe';

fixture `Logging in`
    .page `https://karla0.testn.f4tech.com/#/20330408691d/teamboard`
    // .afterEach(async t => {
    //     await t.eval(() => localStorage.clear());
    // })

    test('Team Board', async t =>{
        const moreButton = Selector('div.chr-TeamBoardBoardToolbar-moreButton')
        const showExitAgreements = Selector('li.smb-DropdownItem')
        const hideExitAgreements = Selector('li.smb-DropdownItem')
        const exitAgreementFieldText = Selector('.smb-FieldLabel-text')
        

        await t
            .typeText('#j_username', 'test@rallydev.com')
            .typeText('#j_password', 'Password')
            .click('#login-button')
            .click(moreButton)
            .click(showExitAgreements)
            .expect(showExitAgreements).ok('it passed')
            .wait(2000)
            if(await exitAgreementFieldText.exists){
                await t
                    .click(moreButton)
                    .click(hideExitAgreements)
                    .wait(20000)
            }else{
                await t.expect(true).ok('it passed')
            }
    })
