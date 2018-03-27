import { Selector, ClientFunction } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}

// var current_page = async t=> {
//     await t
//         .eval(() => window.location.reload(true))
// }
    
fixture `User Stories Page`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/userstories`)  
    .beforeEach(login)
    //.afterEach(current_page)

    test('User Story - New User Story', async t =>{
        const newUserStory = Selector(value => {
            return document.getElementById('newAR')
        })
        const newUsName = Selector('div.smb-TextInput-renderedText').nth(0)
        const newUsNameEditor = Selector('.smb-TextInput--iconPlacementEnd').nth(0)
        const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
        const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
        const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
        await t
            .hover('.actionsMenu')
            .wait(2000)
            .click(newUserStory)
            .click(newUsName)
            .typeText(newUsNameEditor, 'New US')
            .click('.chr-QuickDetailEntityFooter-saveButton')
            .wait(2000)
            .expect({input:'New US'}).eql({input:'New US'}, 'this assertion will pass')
            .click(qdpMoreButton)
            .click(qdpDelete)
            .click(flairConfirmDeletion)
            .wait(2000)       
    })

    test('User Story - Inline Add', async t =>{
        const inlineAddStory = Selector(value =>{
            return document.getElementById('inline')
        })
        const inlineAddName = Selector('.editrow').nth(4)
        const formattedId = Selector('.cn_formattedid0').nth(0)
        const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
        const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
        const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')

        await t
            .hover('.actionsMenu')
            .click(inlineAddStory)
            .wait(2000)
            .typeText(inlineAddName, 'US A')
            .wait(2000)
            .click('.save')
            //expect story was created goes here????
            .click(formattedId)
            .click(qdpMoreButton)
            .click(qdpDelete)
            .click(flairConfirmDeletion)

    })

    test('User Story - Multi Edit', async t =>{
        const multiEdit = Selector(value =>{
            return document.getElementById('multi')
        })
        const usState = Selector('.hover').withText('In-Progress')
        const applyButton = Selector('button').withText('Apply')
        const saveChanges = Selector('button').withText('Save Changes')

        await t
            .hover('.actionsMenu')
            .click(multiEdit)
            .click('#nameTemplate')
            .typeText('#nameTemplate', 'New Name')
            .click(applyButton)
            .hover('.state-table')
            .click('.state-table')
            .wait(2000)
            .click(saveChanges)
    })


    test('User Story - Inline Add, Multi - Edit', async t =>{
        const inlineAddStory = Selector(value =>{
            return document.getElementById('inline')
        })
        const inlineAddName = Selector('.editrow').nth(4)
        const formattedId = Selector('.cn_formattedid0').nth(0)
        const multiEdit = Selector(value =>{
            return document.getElementById('multi')
        })
        const usState = Selector('.hover').withText('In-Progress')
        const applyButton = Selector('button').withText('Apply')
        const saveChanges = Selector('button').withText('Save Changes')

        const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
        const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
        const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')

        const scheduleState = Selector('.state-table div').withText('P')

        await t
            .hover('.actionsMenu')
            .click(inlineAddStory)
            .wait(2000)
            .typeText(inlineAddName, 'US A')
            .wait(2000)
            .click('.save')
            //expect story was created goes here????
            .hover('.actionsMenu')
            .click(multiEdit)
            .click('#nameTemplate')
            .typeText('#nameTemplate', 'New Name')
            .click(applyButton)
            .click(scheduleState)
            .wait(2000)
            .click(saveChanges)
            .click(formattedId)
            .click(qdpMoreButton)
            .click(qdpDelete)
            .click(flairConfirmDeletion)

    })

    test('Add Child Story', async t =>{
        const inlineAddStory = Selector(value =>{
            return document.getElementById('inline')
        })
                    
        const inlineAddName = Selector('.editrow').nth(4)
        const newUsName = Selector('div.smb-TextInput-renderedText').nth(0)
        const newUsNameEditor = Selector('.smb-TextInput--iconPlacementEnd').nth(0)
        const closeIconQDP = Selector('.smb-Icon--cancel')
        const formattedId = Selector('.cn_formattedid0').nth(0)
        const qdpMoreButton = Selector('.chr-QuickDetailActionsMenu')
        const qdpDelete = Selector('.smb-DropdownItem-text').withText('Delete')
        const flairConfirmDeletion = Selector('.smb-Button-children').withText('Delete')
        const listView = Selector('#flatmode')
        const treeView = Selector('#hiermode')
        const expandChildIcon = Selector('.icon_plus').nth(1)

        await t
            .hover('.actionsMenu')
            .click(inlineAddStory)
            .wait(2000)
            .typeText(inlineAddName, 'US A') 
            .wait(2000)
            .click('.save')
            .click('.sprite-new-story-child')
            .click(newUsName)
            .typeText(newUsNameEditor, 'New US 1')
            .click('.chr-QuickDetailEntityFooter-saveButton')
            .click(closeIconQDP)
            .wait(2000)
            .click(listView)
            .click(treeView)
            .expect(expandChildIcon.exists).ok('it passed')
            .wait(2000)
            .click(formattedId)
            .click(qdpMoreButton)
            .click(qdpDelete)
            .click(flairConfirmDeletion)
            //.navigateTo(current_page)
                  
    })

    //A story with a child needs to exist for this test to pass
    test('User Stories expand/collapse functionality', async t => {

        const expandPageIcon = Selector('img.icon_plus').nth(0)
        const collapsePageIcon = Selector('img.icon_minus').nth(0)
        const expandChildIcon = Selector('.icon_plus').nth(1)
        const collapseChildIcon = Selector('.icon_minus').nth(1)

        await t
            .click(expandPageIcon)
            .expect(collapseChildIcon.exists).ok('it passed')
            .wait(2000)
            .click(collapsePageIcon)
            .expect(expandChildIcon.exists).ok('it passed')
            .wait(2000)
    })

