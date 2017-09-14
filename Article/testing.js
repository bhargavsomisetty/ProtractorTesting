ArticlePage = require('./article.po.js');


describe('Article Page Tests: ', function() {

    
    browser.ignoreSynchronization = true;
    browser.get(browser.params.url);
    
    var articlePage = new ArticlePage();

    it('should have a featured image, credit & caption', function(done) {
    expect(articlePage.verifyNavbar.isDisplayed());
    expect(articlePage.verifyFeaturedImageCredit.isDisplayed());
    expect(articlePage.verifyFeaturedImageCaption.isDisplayed());
    done();
    });

});
