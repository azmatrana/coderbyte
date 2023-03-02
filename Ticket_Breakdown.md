# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1
Title:
	Add custom_id field in agents table
Setup:
	Notice we have agents table in the database
Implementation Details:
	- Add a new database migration to create a custom_id:string field in the agents’ table
	- Add validation for custom_id to be unique throughout the table in the agents model file.
Acceptance Criteria:
	- Agents table must have custom_id field with uniqueness validation
Test Cases:
	- Write proper test cases to Add/Update and unique validation check for the custom_id field
Guesses:
	- I am assuming we are using some backend framework like Rails or Laravel
	- I am also assuming we have some test case criteria in place
Blocking:
	- Ticket 3
	- Ticket 4
	- Ticket 5
Time Estimation:
	- 2 hours
Ticket 2
Title:
	Add Custom ID field in agents form
Setup:
	Notice we can add/update agents via facilities
Implementation Details:
	- Add a new input field in agents form with the title Custom ID
	- Show validation error for this field in case of a uniqueness issue
Acceptance Criteria:
	- User should be able to set/update Custom ID
Test Cases:
	- In agents form test cases add a test case to fill the custom ID field and also check the uniqueness
Guesses:
	- Assuming we have front-end test cases in place.
Time Estimation:
	- 2 hours
Ticket 3
Title:
	Update getShiftByFacility function response
Setup:
	Notice we have getShiftByFacility
Implementation Details:
	- update getShiftByFacility serializer so that it can also return custom_id for agents in response
Acceptance Criteria:
	- getShiftByFacility must have custom_id in agents metadata
Test Cases:
	- API test case should also check for custom_id in metadata response of agents
Guesses:
	- Assuming we have API test cases in place.
	- Assuming we are using the serializer
Blocking:
	- Ticket 4
Blocked by:
	- Ticket 1
Time Estimation:
	- 2 hours
Ticket 4
Title:
	Update generateReport function to show Custom ID in PDF
Setup:
	Notice we have generateReport function
Implementation Details:
	- update generateReport method so that it can show custom_id for agents in PDF
Acceptance Criteria:
	- PDF must have custom_id in the agents section of the PDF
Guesses:
	- Assuming we are using HTML to format PDFs
Blocked by:
	- Ticket 1
Time Estimation:
	- 3 hours
Ticket 5
Title:
	Assign unique Custom IDs to agents
Setup:
	Notice we have a custom_id field in the agents’ table
Implementation Details:
	- Add a new task to assign a unique custom_id of length 8 having letters and numbers to all agents having nil custom_id
	- While assigning a custom id it should check generated custom_id id does not exist for any other agent already
Acceptance Criteria:
	- All existing agents must have custom_id now.
Blocked by:
	- Ticket 1
Time Estimation:
	- 1 Hour