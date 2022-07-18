const { I, headerMenu } = inject();

Feature('homePage');

Scenario('Test makeup eyeliner navigation', ({ I, headerMenu }) => {
    I.amOnPage('/');
    headerMenu.selectShopSubCategory('MAKEUP', 'Eyeliner');
    I.seeInCurrentUrl('/category/makeup/eyes/eyeliner');
});

Scenario('Test makeup eyeshadow navigation', ({ I, headerMenu }) => {
    I.amOnPage('/');
    headerMenu.selectShopSubCategory('MAKEUP', 'Eyeshadow');
    I.seeInCurrentUrl('/category/makeup/eyes/eyeshadow');
});

Scenario('Test makeup mascara navigation', ({ I, headerMenu }) => {
    I.amOnPage('/');
    headerMenu.selectShopSubCategory('MAKEUP', 'Mascara');
    I.seeInCurrentUrl('/category/makeup/eyes/mascara');
});

Scenario('Test makeup lipstick navigation', ({ I, headerMenu }) => {
    I.amOnPage('/');
    headerMenu.selectShopSubCategory('MAKEUP', 'Lipstick');
    I.seeInCurrentUrl('/category/makeup/lips/lipstick');
});