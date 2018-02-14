// general info goes here

============================ DOWNLOAD & SET UP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

1. After downloading and unpacking the file, navigate to the folder in your command line of choice and run “npm i” to install all the required packages. If you do not have NPM already installed, installation options are available at https://www.npmjs.com/.

2. Start up your mongoDB server (installation options are available at https://docs.mongodb.com/manual/administration/install-community/)m

3. Start up your Postgres server (installation options are available at http://postgresapp.com/).

4. Seed the database by running ‘npm run sql:s && npm run mg:seed’ in your command line from the application's root directory. This will seed the database with randomly generated studies and users.
   // should we hardcode at least one user so that put their log in credentials in the readme?

5. Start the application by typing ‘npm start’ in your command line from the application's root directory.

6. You can then visit the application by navigating to ‘http://localhost:3000/' in your browser.

============================ USER FLOWS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

1. LOG IN & REGISTRATION

* The user can log in from the dropdown menu in the navigation bar or by trying to access any protected route, such as "My Analyses".
* An account can also be created from the Log in screen after entering the user's desired log in credentials, followed by their profile information

- if you would like to explore the application without creating an account, you can use the following seeded credentials to log in:
  // email:
  // password: password

2. CREATING A NEW COLLECTION

* Users can create a new collection from from the "My Analyses" page, where they are redirected upon a successful log in. Once they click the "Create Collection" button, a modal appears where they can input the title & description for a new collection

* On the Study Search page, users can search for studies to include in their collection. Selected studies from the search results are persisted on the top of the search results window for their convenience, even as they navigate through additional pages of results.

![Alt Text](./public/create_collection.gif)

* Once a user saves the collection, they are redirected to that collection's page, where they can see title, description, and the included studies.
  // studies not automatically appearing right away (needs refresh)??

3. EDITING AN EXISTING COLLECTION

* From the "My Analyses" page, click the title of the collection you would like to edit. If you are logged in, a blue edit icon will appear next collection's title, which will redirect you to add/remote studies from the collection.

![Alt Text](./public/create_collection.gif)

4. CREATING A NEW ANALYSIS

* Users can create a new collection from from the "My Analyses" page. Once they click the "Create Analysis" button, a modal appears where they can input the title & description for a new analysis.

- They are redirected to create a new analysis from existing collections, or given the option to create a collection for the analysis.

- On the Analysis page, users can drag & drop one of 3 modules to for their analysis. Description text can also be added to provide additional information/context.

- Upon saving the document, users can then navigate to the Analysis' page, where they can see the title, description, and modules of the analysis.

![Alt Text](./public/create_analysis.gif)

5. EDITING AN EXISTING ANALYSIS

* From the "My Analyses" page, click the title of the collection you would like to edit. If you are logged in, a blue edit icon will appear next collection's title, which will redirect you to add/remote studies & text from the analysis.

![Alt Text](./public/edit_analysis.gif)
