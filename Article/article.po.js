

var ArticlePage = function() {

    //title and texts of notifications/error messages
    this.pageTitle = '‘Devil Wears Prada:’ 12 fascinating details from its final script | EW.com';
    this.pageHeadline = 'Devil Wears Prada: 12 fascinating details from its final script';


    //locators for Article page
    this.openHamburgerMenu = browser.driver.findElement(by.css('.menu'));
    this.closeHamburgerMenu = browser.driver.findElement(by.css('.menu'));
    this.verifyLogo = browser.driver.findElement(by.css('.full-logo.desktop-only'));
    this.verifyNavBar = browser.driver.findElement(by.css('.primary-text-links'));
    this.verifyTopRecirc = browser.driver.findElement(by.css('.under-nav'));
    this.verifyBreadcrumb = browser.driver.findElement(by.css('.partial.breadcrumbs.clearfix'));
    this.headline = browser.driver.findElement(by.css('h1'));
    this.verifyByline = browser.driver.findElement(by.css('.byline')); 
    this.verifyTimestamp = browser.driver.findElement(by.css('.timestamp'));
    this.verifyFeaturedImage =  browser.driver.findElement(by.css('.image-overlay'));
    this.verifyFeaturedImageCredit = browser.driver.findElement(by.css('.credit'));
    this.verifyFeaturedImageCaption = browser.driver.findElement(by.css('.image-caption'));
    this.verifyBottomOutbrain = browser.driver.findElement(by.css('#outbrain_widget_0'));
    this.verifyBottomRecirc = browser.driver.findElement(by.css('.component.feed.clearfix.bottom-recirc'));
    this.verifyRightRailOutbrain = browser.driver.findElement(by.css('#outbrain_widget_1'));
    this.verifyRightRailRecirc = browser.driver.findElement(by.css('.component.feed.clearfix'));
    this.verifyRightRailNewslettercallout = browser.driver.findElement(by.css('.component.newsletter-callout'));
    this.verifySubscribeCallout = browser.driver.findElement(by.css('.component.subscribe-callout.media'));
    this.verifyBottomNewsletterCallout = browser.driver.findElement(by.css('.component.newsletter-callout'));
    this.verifyFooterLogo = browser.driver.findElement(by.css('.logo-container.margin-0-auto'));
    this.verifyFooterSocialicons = browser.driver.findElement(by.css('.social-container.margin-0-auto.padding-16-tb.display-flex.rule-bottom'));


    
    this.facebooksocialicon = browser.driver.findElement(by.xpath('/html/body/div[1]/div/main/div[1]/div[2]/div/div/div/span[1]'));
    this.pinteresticon = browser.driver.findElement(by.xpath('/html/body/div[1]/div/main/div[1]/div[2]/div/div/div/span[2]'));
}





module.exports = ArticlePage;