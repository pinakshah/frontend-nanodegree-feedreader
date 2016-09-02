## Feed Reader Testing

This is a simple web application developed using jQuery, Google API reader and Jasmine framework. This application display list of the feed subject in the navigation and load the related feeds in the content based on the selection of menu item.

To get started, check out source from git repository https://github.com/pinakshah/frontend-nanodegree-feedreader.

After you are done with checkout, you just need to run index.html in order to run application. When you open the index.html, it will load the feed items and feed data for the first feed item by default. Once feed are loaded completetly, it will execute test cases return for the feed readers.


### Following are the list of test cases implemented in application

##### RSS Feeds - Test Suite
- **are defined** - This is our first test - it tests to make sure that the allFeeds variable has been defined and that it is not empty.
- **URLs are not empty** - This is a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
- **Names are not empty** - This is a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
- **should be able to add a feed** - This is a test that will add new feed in the allFeeds.
- **should be able to delete a feed** - This is a test that will delete feed from the allFeeds.

##### The menu - Test Suite
- **is hidden by default** - This is a test that ensures the menu element is hidden by default.
- **toggle menu on menu icon click** - This is a test that ensures the menu changes visibility when the menu icon is clicked.

##### Initial Entries - Test Suite
- **has a single entry element within the feed container** - This is a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

##### New Feed Selection - Test Suite
- **content actually changes** - This is a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
