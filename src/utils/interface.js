exports.install = function (Vue, options) {
   Vue.prototype.urls = {
         // 团购列表页
         groupBuying: 'Item/groupBuying',
         // 商品详情
   		productDetails: 'Item/detail',
         // 收藏
         collect: 'Collect/collect',
         // 收藏列表
         collectList: 'Collect/list',
         // 首页配置
   		home: 'Ads/Home/list',
         // 配置列表
   		hotGoods: '/Ads/list',
         // 文章详情
   		articleDetail: 'Article/detail',
         // 文章列表
   		articleList: 'Article/list',
         // 分类商品列表
   		goodsList: 'Item/list',
         // 分类列表
   		categoryList: 'Category/list',
         // 商户详情
   		shopDetail: 'Brand/detail',
         // 获取验证码
         getCode: 'User/mobileCode',
         // 手机注册
         mobileRegister: 'User/mobileRegister',
         // 电话号码加密码登录
         mobileLogin: 'User/mobileLogin',
         // 验证码登录
         checkMobileAndCode: 'User/checkMobileAndCode',
         // 重置密码
         resetPassword: 'User/resetPassword',
         // 微信授权之后绑定电话号码
         wxBindMobile: 'User/Wx/wxBindMobile',
         address: '/User/Address/edit',
         // 添加和编辑地址
         addressList: '/User/Address/list',
         // 删除地址
         addressDelete: "/User/Address/delete",
         // 修改默认地址
         changeDefault: '/User/Address/changeDefault',
         // 获取一条地址数据
         oneAddress: '/User/Address/detail',
         // 获取购物车数据
         getCartList: 'Cart/list',
         // 微信登录地址
         formal: 'http://page.thatsmags.com/WebAccess/get-weixin-code.html?appid=wx06e97f4ed4ac07e3&scope=snsapi_userinfo&state=http%3A%2F%2Fv.thatsmags.com%2Fth%2F%23%2FBindMobile%3Ahttp%3A%2F%2Fv.thatsmags.com%2Fth&redirect_uri=http%3A%2F%2Fproj6.thatsmags.com%2FthmartApi%2FUser%2FWx%2Flogin',
         // 删除购物车
         Cartdelete: 'Cart/delete',
         // 修改购物车数量
         CartEditNumber: 'Cart/editNumber',
         // 修改选中状态和数量
         CartChangeSelectAndTotalPrice: 'Cart/changeSelectAndTotalPrice',
         // 获取单个sku
         Skudetail: 'Sku/detail',
         // 添加购物车
         addCart: 'Cart/edit',
         // 订单确认页
         OrderPrepareOrder: 'Order/prepareOrder',
         // 下单进入支付页面
         placeOrder :'Order/placeOrder',
         // 支付详情页
         payOrderDetail: 'Order/payOrderDetail',
         // 监听微信支付成功接口
         WxOrderQuery: 'Wx/orderQuery',
         // 监听支付宝支付成功
         AlipayOrderQuery: 'Alipay/orderQuery',
         // 订单列表页
         OrderList: 'Order/list',
         // 删除订单
         OrderDelete: 'Order/delete',
         // 订单详情页
         OrderDetail: 'Order/detail',
         // 优惠券列表页
         couponList: 'Coupon/list',
         // 优惠券商品列表页
         couponItemList: 'Coupon/itemList',
         // 个人信息
         userDetail: 'User/detail',
         // 修改头像
         changeHead: 'User/changeHead',
         // 修改名字
         changeNickName: 'User/changeNickName',
         // 修改密码
         changePassword: 'User/changePassword'

   }
};