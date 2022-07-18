const { I } = inject();

module.exports = {

  // insert your locators and methods here
  shopCategoryPanel: "//div[contains(@class, 'ShopAllType__Container')]//*[contains(@class, 'ShopAllType__LeftPartition')]",
  shopSubCategoryPanel: "//div[contains(@class, 'ShopAllType__Container')]//*[contains(@class, 'ShopAllType__RightPartition')]",

  hoverHeaderMenu(menuName) {
    I.moveCursorTo(`//*[contains(@class, 'GnbLink__MenuText')][text() = '${menuName}']`);
  },

  hoverShopCategory(category) {
    this.hoverHeaderMenu('SHOP');
    I.waitForElement(this.shopCategoryPanel, 2);
    I.moveCursorTo(`//a[contains(@class, 'GnbLink__RouterLink')][text() = '${category}']`);
    I.waitForElement(this.shopSubCategoryPanel, 2);
  },

  selectShopSubCategory(category, subCategory) {
    this.hoverShopCategory(category);
    I.click(`//a[contains(@class, 'GnbLink__RouterLink')][text() = '${subCategory}']`);
    I.waitForElement(`//*[contains(@class, 'DeptSelect__Title')][text() = '${subCategory}']`, 10);
  }
}
