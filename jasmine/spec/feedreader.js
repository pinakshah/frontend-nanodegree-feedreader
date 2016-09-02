/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are not empty', function() {
            // loop through each feeds and check for URLs
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBeNull();
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
            };
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names are not empty', function() {
            // loop through each feeds and check for name
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBeNull();
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
            };
        });


        /* This is a test that will add new feed in the allFeeds. */
        it('should be able to add a feed', function() {
            var newFeed = {
                url: "http://test.com/rss",
                name: "Sample Test Feed"
            };
            addFeed(newFeed);
            expect(allFeeds[allFeeds.length - 1]).toBe(newFeed);
        });

        /* This is a test that will delete feed from the allFeeds. */
        it('should be able to delete a feed', function() {
            var noOfFeeds = allFeeds.length
            deleteFeed(Math.round(Math.random() * allFeeds.length));
            expect(allFeeds.length).toEqual(noOfFeeds - 1);
        });
    });


    /* This is a new test suite named "The menu" */
    describe('The menu', function() {
        var $body = $('body');
        /* This is a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            // Check default class for hiding menu by default
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('toggle menu on menu icon click again.', function() {
            var $menuIcon = $('.menu-icon-link');
            // Open menu when clicked
            $menuIcon.click();
            expect($body.hasClass('menu-hidden')).toBe(false);
            // Hide menu when clicked again
            $menuIcon.click();
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This is a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
        });
        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('has a single entry element within the feed container',
            function(done){
            // Check feed entry is defined and length greater than 0
            expect($('.feed .entry')).toBeDefined();
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* This is a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        // variables to hold old and new feed content
        var $oldFeedContent, $newFeedContent;
        beforeEach(function(done) {
            loadFeed(0, function(){
                // fetch old feed content
                $oldFeedContent = $('.feed').html();
            });
            loadFeed(1, function(){
                // fetch new feed content
                $newFeedContent = $('.feed').html();
                done();
            });
        });
        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('content actually changes', function(done){
            expect($newFeedContent).not.toEqual($oldFeedContent);
            done();
        });
    });
}());
