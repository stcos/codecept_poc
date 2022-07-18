Feature('homePage');



Scenario('Test makeup eyeliner navigation', ({ I }) => {
    I.amOnPage('/');
    I.moveCursorTo("//*[contains(@class, 'GnbLink__MenuText')][text() = 'SHOP']");
    I.waitForElement("//div[contains(@class, 'ShopAllType__Container')]//*[contains(@class, 'ShopAllType__LeftPartition')]", 2);
    I.moveCursorTo("//a[contains(@class, 'GnbLink__RouterLink')][text() = 'MAKEUP']");
    I.waitForElement("//div[contains(@class, 'ShopAllType__Container')]//*[contains(@class, 'ShopAllType__RightPartition')]", );
    I.click("//a[contains(@class, 'GnbLink__RouterLink')][text() = 'Eyeliner']");
    I.seeInCurrentUrl('/category/makeup/eyes/eyeliner');
});
