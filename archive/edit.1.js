


/*
Description:
1. When the page loads, a login screen should show, if the login cookie is not set.
	a. create the modal screen.
		i. include mocha as dependency
		i. when edit is true, it should autoshow the login.  
		   same class can be included always and wit will not show by default
		i. Create 'trigger' for non auto show
2. After login, the menu should be visible and the editable areas should be editable.
	a. create the menubar
	b. allow for editing
		i. include mooinline as a dependancy.
4. From the menu, he can select "create editable areas".
	a. create option, and appropo content
5. 

*/
/* ToDo:
	1. Create top menubar (perhaps should be its own class, perhaps should use mochaUI).
		a. Add the following buttons: Edit->Create editable regions.  
			i. Also: File -> "Save As", "Backup", "Restore Backup"
			i. insert -> ?
			i. Help -> Forums, About, License 
	2. Create the modal trigger.
		i. Add event to create modal popup.
		i. Addevent to download the mooinline class if not available
		i. Have it popup automatically when the person is edit-true
		i. Have it set the appropriate fields with cookies
		i. Make the php session variable for security
	3. Create the popup form
		i. Must do correct validation
		i. must enter data into database or flat file
		i. Must make ajax call to check if data is correct
	4. Add event to all classes to have a border if select ediatble is true. 
*/ 