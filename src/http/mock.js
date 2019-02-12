const Random = Mock.Random
const basePath='http://localhost:3000'; 

const advertising = Mock.mock(basePath+'/advertising', {
   'code':200,
    'msg':'',
    'data|2':[{
      'imgPath':Random.image('702x249', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'url':Random.url('http')
    }]
});

const swiper = Mock.mock(basePath+'/swiper', {
   'code':200,
    'msg':'',
    'data|5':[{
      'imgPath':Random.image('750x380', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'url':Random.url('http')
    }]
});

const detail = Mock.mock(basePath+'/detail', {
  "view|1": [{
    'title|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
    'intro':  Random.cparagraph(2),
    'id':'@id',
    'price|99-1000':100,
    'chose|3':[{
      'col|+1':['土豪金','东北银','喜庆红'],
      'size|+1':['128g','64g','32g']
    }],
  'imgPath':Random.image('702x253', '#cdf0fb', '#555', 'png', ''),
    
  }],
  'swiper|2':[{
    'imgSrc':Random.image('750x752', '#ffcc33','#FFF', 'png', ''),
    'id':'@id'
  }],

  'contentImgSrc|8':[{
    'imgSrc':Random.image('600x600', '#5a9e6e','#FFF', 'png', '')
  }]
});
 

const recommend = Mock.mock(basePath+'/recommend', {
   'recommend|8':[{
    'imgSrc':Random.image('210x272', '#5a9e6e','#FFF', 'png', ''),
    'title|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
    'price':Random.float(60, 100, 2,2)

  }],
    'hot|6':[{
    'imgSrc':Random.image('210x272', '#5a9e6e','#FFF', 'png', ''),
    'title|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
    'price':Random.float(60, 100, 2,2)
  }]
});

const section1 = Mock.mock(basePath+'/section1', {
   'code':200,
    'msg':'',
    'data':{
    'title':'优惠专区',
    'list':[{
      'imgPath':Random.image('348x400', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'url':Random.url('http')
    },{
      'imgPath':Random.image('354x200', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'url':Random.url('http')
    },{
      'imgPath':Random.image('354x200', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'url':Random.url('http')
    }]}
});

const section2 = Mock.mock(basePath+'/section2', {
   'code':200,
    'msg':'',
    'data':{
      'title':'品牌聚集地',
      'list|5':[{
      'imgPath':Random.image('702x253', '#cdf0fb', '#555', 'png', ''),
      'id':'@id'
    }]
  }
});

const section3 = Mock.mock(basePath+'/index/section3', {
   'code':200,
    'msg':'',
    'data':{
      'title':'热卖尖货',
      'list|5':[{
      'imgPath':Random.image('228x228', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
      'price':Random.float(60, 100, 2, 2)
    }]
  }
});
const section8 = Mock.mock(basePath+'/index/section8', {
   'code':200,
    'msg':'',
    'data':{
      'title':'精选套装',
      'list|5':[{
      'imgPath':Random.image('346x180', '#cdf0fb', '#555', 'png', ''),
      'id':'@id'
    }]
  }
});

const section4 = Mock.mock(basePath+'/index/section4', {
   'code':200,
    'msg':'',
    'data':{
      'banner':[{
        'imgPath':Random.image('750x380', '#cdf0fb', '#555', 'png', ''),
        'id':'@id'
      }],
      'list|5':[{
      'imgPath':Random.image('228x228', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
      'price':Random.float(60, 100, 2, 2)
    }]
  }
});
const section5 = Mock.mock(basePath+'/index/section5', {
   'code':200,
    'msg':'',
    'data':{
      'banner':[{
        'imgPath':Random.image('750x380', '#cdf0fb', '#555', 'png', ''),
        'id':'@id'
      }],
      'list|5':[{
      'imgPath':Random.image('228x228', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
      'price':Random.float(60, 100, 2, 2)
    }]
  }
});
const section6 = Mock.mock(basePath+'/index/section6', {
   'code':200,
    'msg':'',
    'data':{
      'banner':[{
        'imgPath':Random.image('750x380', '#cdf0fb', '#555', 'png', ''),
        'id':'@id'
      }],
      'list|5':[{
      'imgPath':Random.image('228x228', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
      'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
      'price':Random.float(60, 100, 2, 2)
    }]
  }
});

// 秒杀
const section7 = Mock.mock(basePath+'/index/section7', {
   'code':200,
    'msg':'',
    'timestart':'1510313129',
    'endstart':'1511004329',
    'data':{
      'title':'今日秒杀',
      'list':[{
      'imgPath':Random.image('224x224', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
       'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
      'price':Random.float(60, 100, 2, 2),
      'price2':Random.float(60, 100, 2, 2),
      'tags':['2段','香港美赞臣']
    },{
      'imgPath':Random.image('224x224', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
       'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
      'price':Random.float(60, 100, 2, 2),
      'price2':Random.float(60, 100, 2, 2),
      'tags':['2段','香港美赞臣']
    },{
      'imgPath':Random.image('224x224', '#cdf0fb', '#555', 'png', ''),
      'id':'@id',
       'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
      'price':Random.float(60, 100, 2, 2),
      'price2':Random.float(60, 100, 2, 2),
      'tags':['2段','香港美赞臣']
    }]
  }
});

//订单导航栏
// const orderNav = Mock.mock(basePath+'/order/nav', {
//    'code':200,
//     'msg':'',
//     'data':{
//       'list':[{
//       'label|1':['待发货','全部','已发货','待付款','售后中','完成订单'],
//       'type':Random.int(60, 100)
//     },{
//       'label|1':['待发货','全部','已发货','待付款','售后中','完成订单'],
//       'type':Random.int(60, 100)
//     },{
//       'label|1':['待发货','全部','已发货','待付款','售后中','完成订单'],
//       'type':Random.int(60, 100)
//     },{
//       'label|1':['待发货','全部','已发货','待付款','售后中','完成订单'],
//       'type':Random.int(60, 100)
//     },{
//       'label|1':['待发货','全部','已发货','待付款','售后中','完成订单'],
//       'type':Random.int(60, 100)
//     },{
//       'label|1':['待发货','全部','已发货','待付款','售后中','完成订单'],
//       'type':Random.int(60, 100)
//     }]
//   }
// });

//订单列表
// const orderList = Mock.mock(basePath+'/order/list', {
//    'code':200,
//     'msg':'',
//     'data':[{
//       'num':Random.natural(10000),
//       'name':Random.cname(),
//       'phone':'134752'+Random.integer(60,100,7,7),
//       'address':Random.county( Random.city( Random.province() ) )+Random.county(true),
//       'imgPath':[Random.image('120x120', '#cdf0fb', '#555', 'png', ''),Random.image('120x120', '#cdf0fb', '#555', 'png', '')],
//       'productNum':Random.integer(1,8),
//       'price':Random.float(60, 100,2,2),
//       'type':Random.integer(1,4),
//       'logistics':Random.csentence(),
//       'id':'@id',
//     },{
//       'num':Random.natural(10000),
//       'name':Random.cname(),
//       'phone':'134752'+Random.integer(60,100,7,7),
//       'address':Random.county( Random.city( Random.province() ) )+Random.county(true),
//       'imgPath':[Random.image('120x120', '#cdf0fb', '#555', 'png', ''),Random.image('120x120', '#cdf0fb', '#555', 'png', '')],
//       'productNum':Random.integer(1,8),
//       'price':Random.float(60, 100,2,2),
//       'type':Random.integer(1,4),
//        'logistics':Random.csentence(),
//        'id':'@id',
//     },{
//       'num':Random.natural(10000),
//       'name':Random.cname(),
//       'phone':'134752'+Random.integer(60,100,7,7),
//       'address':Random.county( Random.city( Random.province() ) )+Random.county(true),
//       'imgPath':[Random.image('120x120', '#cdf0fb', '#555', 'png', ''),Random.image('120x120', '#cdf0fb', '#555', 'png', '')],
//       'productNum':Random.integer(1,8),
//       'price':Random.float(60, 100,2,2),
//       'type':Random.integer(1,4),
//        'logistics':Random.csentence(),
//        'id':'@id',
//     },{
//       'num':Random.natural(10000),
//       'name':Random.cname(),
//       'phone':'134752'+Random.integer(60,100,7,7),
//       'imgPath':[Random.image('120x120', '#cdf0fb', '#555', 'png', ''),Random.image('120x120', '#cdf0fb', '#555', 'png', '')],
//       'address':Random.county( Random.city( Random.province() ) )+Random.county(true),
//       'productNum':Random.integer(1,8),
//       'price':Random.float(60, 100,2,2),
//       'type':Random.integer(1,4),
//        'logistics':Random.csentence(),
//        'id':'@id',
//     },{
//       'num':Random.natural(10000),
//       'name':Random.cname(),
//       'phone':'134752'+Random.integer(60,100,7,7),
//       'imgPath':[Random.image('120x120', '#cdf0fb', '#555', 'png', ''),Random.image('120x120', '#cdf0fb', '#555', 'png', '')],
//       'address':Random.county( Random.city( Random.province() ) )+Random.county(true),
//       'productNum':Random.integer(1,8),
//       'price':Random.float(60, 100,2,2),
//       'type':Random.integer(1,4),
//        'logistics':Random.csentence(),
//        'id':'@id',
//   }]
// });


//首页导航栏
const indexNav = Mock.mock(basePath+'/index/nav', {
   'code':200,
    'msg':'',
    'data':{
      'list|6':[{
      'label|1':['奶粉','女鞋','电脑办公','营养','纸尿布','女装','内衣配饰'],
      'id':Random.int(60, 100)
    }]
  }
});


//订单列表
// const orderList = Mock.mock(basePath+'/order/list', {
//    'code':200,
//     'msg':'',
//     'data':{
//       'num':Random.natural(10000),
//       'type':Random.integer(1,4),
//       'list|5':[{
//       'imgPath':Random.image('702x253', '#cdf0fb', '#555', 'png', ''),
//       'id':'@id',
//       'url':Random.url('http')
//     }]
//   }
// });

// const category = Mock.mock(basePath+'/category', {
//     'aside|14':[{
//       'title':'@cname',
//       'list|60':[{
//         'title':'@last',
//         'imgPath':Random.image('2000x2000','#5169b4','#FFF','png',''),

//       }]
//     }]
// });
 



// 树型分类列表
// const categoryTrees = Mock.mock(basePath+'/goods/category/trees', {
//     'data|14':[{
//       'id':'@id',
//       'pid':'@id',
//       'title':Mock.mock('@ctitle'),
//       'childlist':[{
//         'id':'@id',
//         'pid':'@id',
//         'title':Mock.mock('@ctitle'),
//         'childlist':[{}]
//       }]

//     }]
// });

// 一般分类列表
const categoryLists = Mock.mock(basePath+'/goods/category/lists', {
    'code':200,
    'msg':'',
    'data|14':[{
      'id':'@id',
      'pid':'@id',
      'title|1':['美赞臣','婴儿奶粉','家居个护','环球美食','亨氏']
    }]
});

// 分类筛选配置
const categoryScreen = Mock.mock(basePath+'/goods/category/config', {
    'code':200,
    'msg':'',
    'data':{
      'sub':[{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      },{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      },{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      },{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      }],
      'spec|2':[{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      }],
      'logistics|4':[{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      }],
      'brand|4':[{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      }],
      'brand1|4':[{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      }],
      'brand2|4':[{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段'],
      }],
      'brand3|4':[{
        'id':'@id',
        'title|1':['发货方式','品牌','奶粉','2段']
      }]
    }
});

// 获取商品列表信息
const listsTobuy = Mock.mock(basePath+'/goods/lists/tobuy', {
    'code':200,
    'msg':'',
    'data|19':[{
        'id':'@id',
        'sn':'@id',
        'img':Random.image('224x224', '#cdf0fb', '#555', 'png', ''),
        'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
        'BrandName':'香港美赞臣',
        'UnitPrice':Random.float(60, 100, 2,2),
        'OriginalPrice':Random.float(60, 100, 2,2),
        'delivery':Mock.mock('@ctitle'),
        'label':['2段','特价','赠品','包邮'],
        'subtitle':Mock.mock('@ctitle')

    }]
});


// 获取优惠专区
const activityNav = Mock.mock(basePath+'/activity/nav', {
   'code':200,
    'msg':'',
    'data':{
      'list':[{
      'label|1':['特价专区','秒杀专区','满减专区'],
      'type':Random.int(60, 100)
    },{
      'label|1':['特价专区','秒杀专区','满减专区'],
      'type':Random.int(60, 100)
    },{
      'label|1':['特价专区','秒杀专区','满减专区'],
      'type':Random.int(60, 100)
    }]
  }
});


// const activitySection1 = Mock.mock(basePath+'/activity/section1', {
//  'code':200,
//     'msg':'',
//     'data|19':[{
//         'id':'@id',
//         'sn':'@id',
//         'img':Random.image('224x224', '#cdf0fb', '#555', 'png', ''),
//         'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
//     ],
//         'BrandName':'香港美赞臣',
//         'UnitPrice':Random.float(60, 100, 2,2),
//         'OriginalPrice':Random.float(60, 100, 2,2),
//         'delivery':Mock.mock('@ctitle'),
//         'label':['2段','特价','赠品','包邮'],
//         'subtitle':Mock.mock('@ctitle')

//     }]
// });

const activitySection2 = Mock.mock(basePath+'/activity/section2', {
 'code':200,
    'msg':'',
    'data|19':[{
        'id':'@id',
        'sn':'@id',
        'img':Random.image('224x224', '#cdf0fb', '#555', 'png', ''),
        'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
        'BrandName':'香港美赞臣',
        'UnitPrice':Random.float(60, 100, 2,2),
        'OriginalPrice':Random.float(60, 100, 2,2),
        'delivery':Mock.mock('@ctitle'),
        'label':['2段','特价'],
        'subtitle':Random.csentence(2)

    }]
});
const activitySection3 = Mock.mock(basePath+'/activity/section3', {
 'code':200,
    'msg':'',
    'data|19':[{
        'id':'@id',
        'sn':'@id',
        'img':Random.image('224x224', '#cdf0fb', '#555', 'png', ''),
        'name|1': ['香港美赞臣安婴妈妈Enfamama A+ 孕妇及授乳妇女配方奶粉2罐装 港版0段 900g*2罐 （效期2019年4月）','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
    ],
        'BrandName':'香港美赞臣',
        'UnitPrice':Random.float(60, 100, 2,2),
        'OriginalPrice':Random.float(60, 100, 2,2),
        'delivery':Mock.mock('@ctitle'),
        'label':['2段','特价'],
        'subtitle':Random.csentence(2)

    }]
});

export {detail,categoryTrees,categoryLists,categoryScreen,listsTobuy,recommend,section2,section1,swiper,advertising}
