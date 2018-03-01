import { Selector, ok } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `Team Board`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/teamboard`)  
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

    test('Team Board add, drag and delete new artifact', async t =>{
        const addNewButton = Selector('span.smb-Button-children').withText('Add New')
        const workItemTypes = Selector('div.smb-Select-placeholderText').withText('Select Work Item Types...')
        const createUserStory = Selector('span.smb-DropdownItem-text').withText('User Story')
        const enterName = Selector('.smb-TextInput--iconPlacementEnd')
        const createButton = Selector('.chr-AddNewTray-addButton')
        //const createdUs = Selector('.chr-BoardField--name').withText('User Story 1')
        const dragUs = Selector('.chr-BoardField').withText('User Story 1')
        const formattedId = Selector('.chr-FormattedId')
        const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
        const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
        const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
        const setReady = Selector('.smb-Icon--ready')
        const setBlocked = Selector('.smb-Icon--blocked')
        const setBlockedReason = Selector('.chr-EditorsStringEditor')


        await t
            .click(addNewButton)
            .click(workItemTypes)
            .click(createUserStory)
            .typeText(enterName, 'User Story 1')
            .click(createButton)
            .drag(dragUs, 360,0,{offsetX: 10, offsetY:10})
            .wait(2000)
            .click(setReady)
            .click(setBlocked)
            .typeText(setBlockedReason, 'Test')
            .click(formattedId)
            .click(qdpMoreButton)
            .click(qdpDelete)
            .click(flairConfirmDeletion)
            

    })
            

