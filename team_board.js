import { Selector, ok } from 'testcafe';
import { reset } from 'chalk';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `Team Board`
    .page(`https://karla1.testn.f4tech.com/#/20330408691d/teamboard`)  
    .beforeEach(login)
    // .afterEach(async t => {
    //     await t.eval(() => localStorage.clear());
    // })


    // test('Team Board Exit Agreements', async t =>{
    //     const moreButton = Selector('div.chr-TeamBoardBoardToolbar-moreButton')
    //     const showExitAgreements = Selector('li.smb-DropdownItem')
    //     const hideExitAgreements = Selector('li.smb-DropdownItem')
    //     const exitAgreementFieldText = Selector('.smb-FieldLabel-text')
        

    //     await t
    //         .click(moreButton)
    //         .click(showExitAgreements)
    //         .expect(showExitAgreements).ok('it passed')
    //         .wait(2000)
    //         if(await exitAgreementFieldText.exists){
    //             await t
    //                 .click(moreButton)
    //                 .click(hideExitAgreements)
    //                 .wait(2000)
    //         }else{
    //             await t.expect(true).ok('it passed')
    //         }

    // }) 

    // test('Team Board settings, adding New Flow State', async t =>{
    //     const settingsButton = Selector('.chr-TeamBoardPage-settingsViewButton')
    //     const addFlowState = Selector('.chr-TeamBoardSettings-addColumn')
    //     const nameContainer = Selector('.chr-TeamBoardSettingsColumn-nameContainer')
    //     const saveButton = Selector('button.smb-Button.smb-Button--primary.smb-Button--sm')
    //     const dropdownItemFlowState = Selector('.chr-TeamBoardSettingsColumn-moreDropdown')
    //     const deleteFlowState = Selector('span.smb-DropdownItem-text').withText('Delete');

    //     await t
    //         .click(settingsButton)
    //         .wait(2000)
    //         .click(addFlowState)
    //         .expect(addFlowState).ok('it passed')
    //         .typeText(nameContainer, 'New Flow 1')
    //         .click(saveButton)
    //         .wait(2000)
    //         //.expect(nameContainer.value).to.eql('New Flow 1')
    //         .click(dropdownItemFlowState)
    //         .click(deleteFlowState)
    //         .expect(deleteFlowState).ok('it passed')

    // })

    // test('Team Board add US, setReady, setBlocked with a reason,drag and delete new artifact', async t =>{
    //     const addNewButton = Selector('span.smb-Button-children').withText('Add New')
    //     const workItemTypes = Selector('div.smb-Select-placeholderText').withText('Select Work Item Types...')
    //     const createUserStory = Selector('span.smb-DropdownItem-text').withText('User Story')
    //     const enterName = Selector('.smb-TextInput--iconPlacementEnd')
    //     const createButton = Selector('.chr-AddNewTray-addButton')
    //     //const createdUs = Selector('.chr-BoardField--name').withText('User Story 1')
    //     const dragUs = Selector('.chr-BoardField').withText('User Story 1')
    //     const formattedId = Selector('.chr-FormattedId')
    //     const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
    //     const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
    //     const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
    //     const setReady = Selector('.smb-Icon--ready')
    //     const setBlocked = Selector('.smb-Icon--blocked')
    //     const setBlockedReason = Selector('.chr-EditorsStringEditor')
    //     const fieldPicker = Selector('.chr-FieldPickerButton')
    //     const checkboxField = Selector('div.smb-Checkbox').nth(5)
    //     const applyField = Selector('.smb-Button-children').withText('Apply')


    //     await t
    //         //create an User Story        
    //         .click(addNewButton)
    //         .click(workItemTypes)
    //         .click(createUserStory)
    //         .typeText(enterName, 'User Story 1')
    //         .click(createButton)
    //         .expect({a:'User Story 1'}).eql({a:'User Story 1'}, 'this assertion will pass')

    //         //Drag User Story
    //         .drag(dragUs, 360,0,{offsetX: 10, offsetY:10})
    //         .wait(2000)

    //         //Set User Story as Ready
    //         .click(setReady)
    //         //.expect(setReady.checked).ok()

    //         //Set User Story as Blocked with Blocked Reason
    //         .click(setBlocked)
    //         .typeText(setBlockedReason, 'Test')

    //         //Open Field Picker and add a field
    //         .click(fieldPicker)
    //         .wait(2000)
    //         .click(checkboxField)
    //         .wait(2000)
    //         .click(applyField)

    
    //         //Open qdp and Delete User story
    //         .click(formattedId)
    //         .click(qdpMoreButton)
    //         .click(qdpDelete)
    //         .click(flairConfirmDeletion)
            
    // })

    // test('Card inline edit', async t =>{
    //     const storyName = Selector('.chr-BoardField--editable').withText('User Story 1')
    //     const addNewButton = Selector('span.smb-Button-children').withText('Add New')
    //     const workItemTypes = Selector('div.smb-Select-placeholderText').withText('Select Work Item Types...')
    //     const createUserStory = Selector('span.smb-DropdownItem-text').withText('User Story')
    //     const enterName = Selector('.smb-TextInput--iconPlacementEnd')
    //     const createButton = Selector('.chr-AddNewTray-addButton')
    //     const inlineEditor = Selector('.chr-EditorsStringEditor')
    //     const formattedId = Selector('.chr-FormattedId')
    //     const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
    //     const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
    //     const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
        
        
    //     await t 
    //         //create an User Story        
    //         .click(addNewButton)
    //         .click(workItemTypes)
    //         .click(createUserStory)
    //         .typeText(enterName, 'User Story 1')
    //         .click(createButton)
    //         .wait(2000)
    //         .hover(storyName).click(storyName)
    //         .typeText(inlineEditor, ' Test')
    //         .pressKey('enter')
    //         .click(formattedId)
    //         .click(qdpMoreButton)
    //         .click(qdpDelete)
    //         .click(flairConfirmDeletion)

    // })
            
    test('Team Board Filters', async t =>{
        const filterTeamBoard = Selector('button.smb-Button.smb-Button--secondary.smb-Button--xs.chr-FilterButton')
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

            // if(await '.smb-Icon--cross'.exists){
            //     await t 
            //         .expect(true).ok('it passed')
            // }else if(await 'button.smb-Button.smb-Button--secondary.smb-Button--xs.chr-FilterButton'.exists){
            //     await t
            //         .wait(2000)
            //         .click(filterTeamBoard)
            // }else if(await '.smb-Checkbox.is-checked'.exists){
            //     await t
            //         .expect(true).ok('it passed')
            //         .wait(2000)
            // }else{
            //     await t
            //         .click(manageFilter)
            //         .click(acceptedDate)
            //         .click(applyFilterButton)
            //         .click(calendarPick)
            //         .click(dayPick)
            //         .wait(2000)
            //         .click(resetButton)
            //         .click(manageFilter)
            //         .click(acceptedDate)
            //         .click(applyFilterButton)
            // }
           
    })

