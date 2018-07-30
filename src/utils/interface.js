exports.install = function (Vue, options) {
   Vue.prototype.urls = {
   		productDetails: 'Item/detail',
   		home: 'Ads/Home/list',
   		hotGoods: '/Ads/list',
   		articleDetail: 'Article/detail',
   		articleList: 'Article/list',
   		goodsList: 'Item/list',
   		categoryList: 'Category/list'
   }
};