# Notable

##What is it?

Notable is a prototype for annotation styling for publishers.

While bigger newsrooms like NYT and the Washington Post are working on using sophisticated ways towards building long form annotated content, smaller publications that don't have the developer/reporter hybrid residing in the newsroom, can't often build packages like that. 'Notable' is a project to fill that void. Inspired by the way Knight lab makes its open source tools accessible to journalists without core programming skills, it is powered by Google Spreadsheets - which though isn't a 'sustainable' solution (thanks to the Sheets API breaking so often!), it is still an 'accessible' solution. 

##How to use it?

###The easy way

* Step 1: Create a Google spreadsheet with your content based on [this template](https://docs.google.com/spreadsheets/d/1QdZCLbD_wPTe6szkDVM9MpKh-w0ubIUvVP44bhhDRdM/edit#gid=0).
* Step 2: Go to File -> Publish to the web and copy the link.
* Step 3: Head over to the [Notable website](//gurmanbh.github.io/notable) and paste the link. Notable generates embed codes for your story.
* Step 4: Insert the embed codes at appropriate portions of the story. And, Voila! You have an annotated story ready for you.

###The developer way.

Notable is opensource, feel free to fork and tweak. Eventually, the aim is to give users options to use more stable data sources such as a csv/json loaded on their private server.

Built using jQuery, Underscore and Tabletop.