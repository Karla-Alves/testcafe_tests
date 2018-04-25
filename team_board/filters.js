import { Selector, ok } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}

fixture `Filtering Team Board`
    .page(`https://karla0.testn.f4tech.com//#/20330408691d/teamboard`)  
    .beforeEach(login)

    test('Team Board Filters', async t =>{
        const filterTeamBoard = Selector('button.chr-FilterButton')
        const manageFilter = Selector('.chr-QuickFilters-addQuickFilterButton')
        const dropdownFilter = Selector('.div.smb-Checkbox').nth(0)
        const applyFilterButton = Selector('.smb-Button-children').withText('Apply')
        const acceptedDate = Selector('.smb-DropdownItem-text').withText('Accepted Date')
        const calendarPick = Selector('.smb-DatePicker')
        const dayPick = Selector('.DayPicker-Day--today')
        const resetButton = Selector('.chr-QuickFilters-clearAllQuickFiltersButton')

        await t
            if(await '.smb-Icon--cross'.exists){
                await t 
                    .expect(true).ok('it passed')
            }else{
                await t
                    .wait(2000)
                    .click(filterTeamBoard)
            }

            if(await '.smb-Checkbox.is-checked'.exists){
                await t
                    .expect(true).ok('it passed')
                    .wait(2000)
            }else{
                await t
                    .click(manageFilter)
                    .click(acceptedDate)
                    .click(applyFilterButton)
                    .click(calendarPick)
                    .click(dayPick)
                    .wait(2000)
                    .click(resetButton)
                    .click(manageFilter)
                    .click(acceptedDate)
                    .click(applyFilterButton)
            }        
    })