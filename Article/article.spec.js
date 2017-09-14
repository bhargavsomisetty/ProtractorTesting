ArticlePage = require('./article.po.js');

describe('Article Page Tests: ', function() {

    
    browser.ignoreSynchronization = true;
    browser.get(browser.params.url);
    
    var articlePage = new ArticlePage();

    it('should have a title', function(done) {
        expect(browser.getTitle()).toEqual(articlePage.pageTitle);
        done();
    });

    it('should have a logo at the top', function(done) {
        expect(articlePage.verifyLogo.isDisplayed());
        done();
    });
    
    it('should open hamburger menu and close it ', function(done) {
        articlePage.openHamburgerMenu.click();
        browser.sleep(1000);
        articlePage.closeHamburgerMenu.click();
        done();
    });
    
    it('should have a logo at the top', function(done) {
        expect(articlePage.verifyNavBar.isDisplayed());
        done();
    });

    it('should have a recirc module below navigation bar', function(done) {
        expect(articlePage.verifyTopRecirc.isDisplayed());
        done();
    });
  

    it('should have a breadcrumb', function(done) {
        expect(articlePage.verifyBreadcrumb.isDisplayed());
        done();
    });
 
    it('should have a headline', function(done) {
        articlePage.headline.getText().then(function (headline) {
        expect(headline).toBe(articlePage.pageHeadline);
        done();
        });
    });

    it('should have a byline ', function(done) {
        expect(articlePage.verifyByline.isDisplayed());
        done();
    });

    it('should have a timestamp ', function(done) {
        expect(articlePage.verifyTimestamp.isDisplayed());
        done();
    });

    it('should have a featured image, credit & caption', function(done) {
        expect(articlePage.verifyFeaturedImage.isDisplayed());
        expect(articlePage.verifyFeaturedImageCredit.isDisplayed());
        expect(articlePage.verifyFeaturedImageCaption.isDisplayed());
        done();
    });

    it('should have an outbrain widget after the article body', function(done) {
        expect(articlePage.verifyBreadcrumb.isDisplayed());
        done();
    });


    it('should have a recirc at the bottom after the outbrain module', function(done) {
        expect(articlePage.verifyBottomRecirc.isDisplayed());
        done();
    });

    it('should have an outbrain widget in the right rail below the 300x250 Ad', function(done) {
        expect(articlePage.verifyRightRailOutbrain.isDisplayed());
        done();
    });

    it('should have a recirc in the right rail below the outbrain module', function(done) {
        expect(articlePage.verifyRightRailRecirc.isDisplayed());
        done();
    });
   

    it('should have a subscriber callout at the bottom ', function(done) {
        expect(articlePage.verifySubscribeCallout.isDisplayed());
        done();
    });

    it('should have a newsletter callout at the bottom ', function(done) {
        expect(articlePage.verifyBottomNewsletterCallout.isDisplayed());
        done();
    });

    it('should have a logo at the bottom ', function(done) {
        expect(articlePage.verifyFooterLogo.isDisplayed());
        done();
    });

    it('should have a social icons at the bottom ', function(done) {
        expect(articlePage.verifyFooterSocialicons.isDisplayed());
        done();
    });

    


});
  