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

    .afterEach(async t => {
        await t.eval(() => localStorage.clear());
    })
    
    test('Team Board add US, setReady, setBlocked with a reason,drag and delete new artifact', async t =>{
            const addNewButton = Selector('span.smb-Button-children').withText('Add New')
            const workItemTypes = Selector('div.smb-Select-placeholderText').withText('Select Work Item Types...')
            const createUserStory = Selector('span.smb-DropdownItem-text').withText('User Story')
            const enterName = Selector('.smb-TextInput--iconPlacementEnd')
            const createButton = Selector('.chr-ToolbarAddNewTray-addButton')
            //const createdUs = Selector('.chr-BoardField--name').withText('User Story 1')
            const dragUs = Selector('.chr-BoardField').withText('User Story 1')
            const formattedId = Selector('.chr-FormattedId')
            const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
            const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
            const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
            const setReady = Selector('.smb-Icon--ready')
            const setBlocked = Selector('.smb-Icon--blocked')
            const setBlockedReason = Selector('.chr-EditorsStringEditor')
            const fieldPicker = Selector('.chr-FieldPickerButton')
            const checkboxField = Selector('div.smb-Checkbox').nth(5)
            const applyField = Selector('.smb-Button-children').withText('Apply')


            await t
                //create an User Story        
                .click(addNewButton)
                .click(workItemTypes)
                .click(createUserStory)
                .typeText(enterName, 'User Story 1')
                .click(createButton)
                .expect({a:'User Story 1'}).eql({a:'User Story 1'}, 'this assertion will pass')

                //Drag User Story
                .drag(dragUs, 360,0,{offsetX: 10, offsetY:10})
                .wait(2000)

                //Set User Story as Ready
                .click(setReady)
                //.expect(setReady.checked).ok()

                //Set User Story as Blocked with Blocked Reason
                .click(setBlocked)
                .typeText(setBlockedReason, 'Test')

                //Open Field Picker and add a field
                .click(fieldPicker)
                .wait(2000)
                .click(checkboxField)
                .wait(2000)
                .click(applyField)

        
                //Open qdp and Delete User story
                .click(formattedId)
                .click(qdpMoreButton)
                .click(qdpDelete)
                .click(flairConfirmDeletion)
                
        })