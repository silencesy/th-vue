exports.install = function (Vue, options) {
   Vue.prototype.urls = {
   		productDetails: 'Item/detail',
   		home: 'Ads/Home/list',
   		hotGoods: '/Ads/list',
   		articleDetail: 'Article/detail',
   		articleList: 'Article/list',
   		goodsList: 'Item/list',
   		categoryList: 'Category/list',
   		shopDetail: 'Brand/detail',
         getCode: 'User/mobileCode',
         mobileRegister: 'User/mobileRegister',
         mobileLogin: 'User/mobileLogin',
         checkMobileAndCode: 'User/checkMobileAndCode',
         resetPassword: 'User/resetPassword',
         wxBindMobile: 'User/Wx/wxBindMobile',
         address: '/User/Address/edit',
         addressList: '/User/Address/list',
         addressDelete: "/User/Address/delete",
         changeDefault: '/User/Address/changeDefault',
         oneAddress: '/User/Address/detail',
         // 微信登录地址
         formal: 'http://page.thatsmags.com/WebAccess/get-weixin-code.html?appid=wx06e97f4ed4ac07e3&scope=snsapi_userinfo&state=http%3A%2F%2Fv.thatsmags.com%2Fth%2F%23%2FBindMobile%3Ahttp%3A%2F%2Fv.thatsmags.com%2Fth&redirect_uri=http%3A%2F%2Fproj6.thatsmags.com%2FthmartApi%2FUser%2FWx%2Flogin',
         // http://v.thatsmags.com/th/#/Categories

          // proj6.thatsmags.com/User/Wx/login
         // test: '456' 
         // http://v.thatsmags.com/th/#/Login

   }
};