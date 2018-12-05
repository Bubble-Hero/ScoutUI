<template>
  <div class="all" style="background: #fff;max-height: 92vh;">
    <!----------------main---------------->
    <main v-for="(is,ts) in nearlist">
      <near-nav :nav1="is.nav"></near-nav>
      <!------------------nearlist------------>
      <near-list v-for="(i,s) in nearlist[0].box" :items="i"></near-list>
    </main>
  </div>
</template>

<script>
  import NearNav from "./NearNav";
  import NearList from "./NearList";
  export default {
    name: "second",
    components: {NearList, NearNav},
    data(){
      return{
        nearlist:[
          {
            "nav":[
              {"title":"享美食"},
              {"title":"惠生活"},
              {"title":"爱玩乐"},
              {"title":"住酒店"},
              {"title":"全部"}
            ],
            "box":
              [
                [
                  [
                    {
                      "title": "热门"
                    },
                    {
                      "title": "外卖"
                    },
                    {
                      "title": "小吃快餐"
                    },
                    {
                      "title": "甜点饮品"
                    },
                    {
                      "title": "火锅烧烤"
                    },
                    {
                      "title": "川湘菜"
                    },
                    {
                      "title": "日韩料理"
                    },
                    {
                      "title": "自助餐"
                    },
                    {
                      "title": "全部"
                    }
                  ]
                  ,
                  [
                    {
                      "pic1": "../../../static/img/n-f-1.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "立减2",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    },
                    {
                      "pic1": "../../../static/img/n-f-2.jpg",
                      "p1": "马来壹号",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "5.0分",
                      "span3": "人均￥13",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/i-like-12.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "立减2",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    },
                    {
                      "pic1": "../../../static/img/i-like-11.jpg",
                      "p1": "马来壹号",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "5.0分",
                      "span3": "人均￥13",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-f-3.jpg",
                      "p1": "享soul轻食",
                      "span1": "1.6km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-f-4.jpg",
                      "p1": "乾县驴蹄子面",
                      "span1": "1.5km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥29",
                      "sale": "立减1",
                      "p2": "特色乾县驴蹄子面，23.8元 人气单人套餐"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/i-like-10.jpg",
                      "p1": "享soul轻食",
                      "span1": "1.6km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"]
                    },
                    {
                      "pic1": "../../../static/img/i-like-9.jpg",
                      "p1": "乾县驴蹄子面",
                      "span1": "1.5km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥29",
                      "sale": "立减1",
                      "p2": "特色乾县驴蹄子面，23.8元 人气单人套餐"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-f-5.jpg",
                      "p1": "菲琳家（科技三路店）",
                      "span1": "1.8km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "5.0分",
                      "span3": "人均￥29",
                      "sale": "立减3",
                      "p2": "56元蛋糕二选一，6英寸蛋糕111元起，118元蛋糕二选一，118元蛋糕三选一"
                    },
                    {
                      "pic1": "../../../static/img/n-f-6.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "立减2",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/i-like-8.jpg",
                      "p1": "菲琳家（科技三路店）",
                      "span1": "1.8km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "5.0分",
                      "span3": "人均￥29",
                      "sale": "立减3",
                      "p2": "56元蛋糕二选一，6英寸蛋糕111元起，118元蛋糕二选一，118元蛋糕三选一"
                    },
                    {
                      "pic1": "../../../static/img/i-like-7.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "立减2",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-f-7.jpg",
                      "p1": "纯真纪念",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "5.0分",
                      "span3": "人均￥13",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一"
                    },
                    {
                      "pic1": "../../../static/img/n-f-8.jpg",
                      "p1": "恋无忌鲜花（龙城铭园2店）",
                      "span1": "3.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/i-like-6.jpg",
                      "p1": "纯真纪念",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "5.0分",
                      "span3": "人均￥13",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一"
                    },
                    {
                      "pic1": "../../../static/img/i-like-5.jpg",
                      "p1": "恋无忌鲜花（龙城铭园2店）",
                      "span1": "3.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-f-9.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "立减2",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    },
                    {
                      "pic1": "../../../static/img/n-f-10.jpg",
                      "p1": "马来壹号",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "5.0分",
                      "span3": "人均￥13",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一"
                    },
                  ]
                ],
                [
                  [
                    {
                      "title": "全部"
                    },
                    {
                      "title": "鲜花"
                    },
                    {
                      "title": "家政服务"
                    },
                    {
                      "title": "超市生鲜 "
                    },
                    {
                      "title": "眼镜店"
                    },
                    {
                      "title": "口腔服务"
                    },
                    {
                      "title": "居家维修"
                    },
                    {
                      "title": "宠物服务"
                    }
                  ]
                  ,
                  [
                    {
                      "pic1": "../../../static/img/n-l-1.jpg",
                      "p1": "恋无忌鲜花（龙城铭园2店）",
                      "span1": "3.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    },
                    {
                      "pic1": "../../../static/img/n-l-2.jpg",
                      "p1": "恋无忌鲜花（科技二路店）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-l-11.jpg",
                      "p1": "恋无忌鲜花（龙城铭园2店）",
                      "span1": "3.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    },
                    {
                      "pic1": "../../../static/img/n-l-12.jpg",
                      "p1": "恋无忌鲜花（科技二路店）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    },
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-l-3.jpg",
                      "p1": "里波尔Libre鲜花店（南窑头）",
                      "span1": "789km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.6分",
                      "sale": "减50",
                      "p2": "5元1选1,26元2选1，158元1选1,169元1选1,220元1选1，599元1选1"
                    },
                    {
                      "pic1": "../../../static/img/n-l-4.jpg",
                      "p1": "young爱鲜花店",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-l-8.jpg",
                      "p1": "里波尔Libre鲜花店（南窑头）",
                      "span1": "789km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.6分",
                      "sale": "减50",
                      "p2": "5元1选1,26元2选1，158元1选1,169元1选1,220元1选1，599元1选1"
                    },
                    {
                      "pic1": "../../../static/img/n-l-5.jpg",
                      "p1": "young爱鲜花店",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    },
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-l-6.jpg",
                      "p1": "恋无忌鲜花（龙城铭园2店）",
                      "span1": "3.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    },
                    {
                      "pic1": "../../../static/img/n-l-7.jpg",
                      "p1": "恋无忌鲜花（科技二路店）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-l-9.jpg",
                      "p1": "兰亭华轩",
                      "span1": "369m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "49元送鲜花插花束家庭酒店商场办公室，四束起送花瓶，周日周一统一配送"
                    },
                    {
                      "pic1": "../../../static/img/n-l-10.jpg",
                      "p1": "兰亭华轩",
                      "span1": "369m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "p2": "49元送鲜花插花束家庭酒店商场办公室，四束起送花瓶，周日周一统一配送"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-l-7.jpg",
                      "p1": "恋无忌鲜花（科技二路店）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "减49元",
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    },
                    {
                      "pic1": "../../../static/img/n-l-11.jpg",
                      "p1": "young爱鲜花店",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "p2": "158元1选1,169元1选1,220元1选1，599元1选1"
                    }
                  ]
                ],
                [
                  [
                    {
                      "title": "热门"
                    },
                    {
                      "title": "聚会玩乐"
                    },
                    {
                      "title": "休闲放松"
                    },
                    {
                      "title": "健身运动"
                    },
                    {
                      "title": "电影院"
                    },
                    {
                      "title": "美发美甲"
                    },
                    {
                      "title": "亲子游乐"
                    },
                    {
                      "title": "DIY手工"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-1.jpg",
                      "p1": "易静尚美容造型",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-2.jpg",
                      "p1": "一木造型",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]

                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-6.jpg",
                      "p1": "易静尚美容造型",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-3.jpg",
                      "p1": "一木造型",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]

                    },
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-12.jpg",
                      "p1": "一沁园美甲",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-4.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-5.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-7.jpg",
                      "p1": "司颂魅力发型（丈八店）",
                      "span1": "567km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-8.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-9.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-5.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-12.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-1.jpg",
                      "p1": "易静尚美容造型",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-2.jpg",
                      "p1": "一木造型",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]

                    },
                    {
                      "pic1": "../../../static/img/n-p-12.jpg",
                      "p1": "一沁园美甲",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-3.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-4.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-5.jpg",
                      "p1": "司颂魅力发型（丈八店）",
                      "span1": "567km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-6.jpg",
                      "p1": "易静尚美容造型",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-7.jpg",
                      "p1": "一木造型",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-8.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-9.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-10.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-11.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-6.jpg",
                      "p1": "易静尚美容造型",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-3.jpg",
                      "p1": "一木造型",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]

                    },
                    {
                      "pic1": "../../../static/img/n-p-2.jpg",
                      "p1": "一沁园美甲",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-1.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-5.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-7.jpg",
                      "p1": "司颂魅力发型（丈八店）",
                      "span1": "567km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-4.jpg",
                      "p1": "易静尚美容造型",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-9.jpg",
                      "p1": "一木造型",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-10.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-8.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-12.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-11.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-p-1.jpg",
                      "p1": "易静尚美容造型",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-2.jpg",
                      "p1": "一木造型",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]

                    },
                    {
                      "pic1": "../../../static/img/n-p-12.jpg",
                      "p1": "一沁园美甲",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-3.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-4.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-5.jpg",
                      "p1": "司颂魅力发型（丈八店）",
                      "span1": "567km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-6.jpg",
                      "p1": "易静尚美容造型",
                      "span1": "2.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-7.jpg",
                      "p1": "一木造型",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-8.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-p-9.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-10.jpg",
                      "p1": "泰漫时光泰式古法SPA",
                      "span1": "345km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+"
                    },
                    {
                      "pic1": "../../../static/img/n-p-11.jpg",
                      "p1": "梅思琪私人定制（思公馆）",
                      "span1": "178km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥208",
                      "sale": "多优惠+"
                    }
                  ]
                ],
                [
                  [
                    {
                      "title":"热门"
                    },
                    {
                      "title": "经济"
                    },
                    {
                      "title": "舒适"
                    },
                    {
                      "title": "高档"
                    },
                    {
                      "title": "名宿"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-1.jpg",
                      "p1": "雅居连锁酒店",
                      "span1": "219m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥189",
                      "sale": "多优惠+",
                      "p2": "13元休闲礼包，天天特价"
                    },
                    {
                      "pic1": "../../../static/img/n-h-2.jpg",
                      "p1": "汉庭（西安软件园玫瑰公馆）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥199",
                      "sale": "多优惠+",
                      "p2": "立减15元，18元门票礼包，商务出行"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-9.jpg",
                      "p1": "雅居连锁酒店",
                      "span1": "219m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥189",
                      "sale": "多优惠+",
                      "p2": "13元休闲礼包，天天特价"
                    },
                    {
                      "pic1": "../../../static/img/n-h-4.jpg",
                      "p1": "汉庭（西安软件园玫瑰公馆）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥199",
                      "sale": "多优惠+",
                      "p2": "立减15元，18元门票礼包，商务出行"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-3.jpg",
                      "p1": "西安携程精品酒店",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "￥169",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "立减15元，18元门票礼包，共享充电宝"
                    },
                    {
                      "pic1": "../../../static/img/n-h-5.jpg",
                      "p1": "博君公寓是酒店",
                      "span1": "589km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "￥169",
                      "sale": "多优惠+",
                      "p2": "立减20元，5元钟点房券，亲子酒店，情侣约会"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-7.jpg",
                      "p1": "博君公寓是酒店",
                      "span1": "589km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "￥169",
                      "sale": "多优惠+",
                      "p2": "立减20元，5元钟点房券，亲子酒店，情侣约会"
                    },
                    {
                      "pic1": "../../../static/img/n-h-8.jpg",
                      "p1": "汉庭（西安软件园玫瑰公馆）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥199",
                      "sale": "多优惠+",
                      "p2": "立减15元，18元门票礼包，商务出行"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-10.jpg",
                      "p1": "博君公寓是酒店",
                      "span1": "589km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "￥169",
                      "sale": "多优惠+",
                      "p2": "立减20元，5元钟点房券，亲子酒店，情侣约会"
                    },
                    {
                      "pic1": "../../../static/img/n-h-11.jpg",
                      "p1": "雅居连锁酒店",
                      "span1": "219m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥189",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "13元休闲礼包，天天特价"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-7.jpg",
                      "p1": "博君公寓是酒店",
                      "span1": "589km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "￥169",
                      "sale": "多优惠+",
                      "p2": "立减20元，5元钟点房券，亲子酒店，情侣约会"
                    },
                    {
                      "pic1": "../../../static/img/n-h-13.jpg",
                      "p1": "H公寓",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.5分",
                      "span3": "￥132",
                      "sale": "多优惠+",
                      "p2": "天天特价，13元休闲礼包，学校周边"
                    }

                  ],
                  [

                    {
                      "pic1": "../../../static/img/n-h-7.jpg",
                      "p1": "汉庭（西安软件园玫瑰公馆）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥199",
                      "sale": "多优惠+",
                      "p2": "立减15元，18元门票礼包，商务出行"
                    },
                    {
                      "pic1": "../../../static/img/n-h-11.jpg",
                      "p1": "雅居连锁酒店",
                      "span1": "219m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥189",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "13元休闲礼包，天天特价"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-3.jpg",
                      "p1": "雅居连锁酒店",
                      "span1": "219m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥189",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "13元休闲礼包，天天特价"
                    },
                    {
                      "pic1": "../../../static/img/n-h-8.jpg",
                      "p1": "雅居连锁酒店",
                      "span1": "219m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥189",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "13元休闲礼包，天天特价"
                    }
                  ],
                  [

                    {
                      "pic1": "../../../static/img/n-h-7.jpg",
                      "p1": "汉庭（西安软件园玫瑰公馆）",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥199",
                      "sale": "多优惠+",
                      "p2": "立减15元，18元门票礼包，商务出行"
                    },
                    {
                      "pic1": "../../../static/img/n-h-11.jpg",
                      "p1": "雅居连锁酒店",
                      "span1": "219m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥189",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png"],
                      "p2": "13元休闲礼包，天天特价"
                    }
                  ]

                ],
                [
                  [
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-f-4.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    },
                    {
                      "pic1": "../../../static/img/n-f-5.jpg",
                      "p1": "享soul轻食",
                      "span1": "1.6km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/i-like-10.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    },
                    {
                      "pic1": "../../../static/img/i-like-9.jpg",
                      "p1": "享soul轻食",
                      "span1": "1.6km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-4.jpg",
                      "p1": "H公寓",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.5分",
                      "span3": "￥132",
                      "sale": "多优惠+",
                      "pic3":[ "../../../static/img/n-tuan.png"],
                      "p2": "天天特价，13元休闲礼包，学校周边"
                    },
                    {
                      "pic1": "../../../static/img/n-l-6.jpg",
                      "p1": "菲琳家（科技三路店）",
                      "span1": "467km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "pic3": ["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"],
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-f-5.jpg",
                      "p1": "享soul轻食",
                      "span1": "1.6km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    },
                    {
                      "pic1": "../../../static/img/n-h-3.jpg",
                      "p1": "西安携程精品酒店",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "￥169",
                      "sale": "多优惠+",
                      "p2": "立减15元，18元门票礼包，共享充电宝"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/i-like-10.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    },
                    {
                      "pic1": "../../../static/img/i-like-9.jpg",
                      "p1": "享soul轻食",
                      "span1": "1.6km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "sale": "多优惠+",
                      "pic3":["../../../static/img/n-tuan.png","../../../static/img/i-hongbao.png"]
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-h-3.jpg",
                      "p1": "西安携程精品酒店",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "￥169",
                      "sale": "多优惠+",
                      "p2": "立减15元，18元门票礼包，共享充电宝"
                    },
                    {
                      "pic1": "../../../static/img/n-h-6.jpg",
                      "p1": "雅居连锁酒店",
                      "span1": "219m",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥189",
                      "sale": "多优惠+",
                      "p2": "13元休闲礼包，天天特价"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/i-like-10.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    },
                    {
                      "pic1": "../../../static/img/n-h-3.jpg",
                      "p1": "西安携程精品酒店",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "￥169",
                      "sale": "多优惠+",
                      "p2": "立减15元，18元门票礼包，共享充电宝"
                    }
                  ],
                  [
                    {
                      "pic1": "../../../static/img/n-f-4.jpg",
                      "p1": "麦莎蒂斯蛋糕西点面包麦莎蒂斯蛋糕西点面包",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.0分",
                      "span3": "人均￥19",
                      "sale": "多优惠+",
                      "p2": "16.8元 招牌单人套餐，20.8元，特色鸡扒三选一，23.8元 人气单人套餐"
                    },
                    {
                      "pic1": "../../../static/img/n-h-4.jpg",
                      "p1": "H公寓",
                      "span1": "1.0km",
                      "pic2": "../../../static/img/n-star.png",
                      "span2": "4.5分",
                      "span3": "￥132",
                      "sale": "多优惠+",
                      "pic3":[ "../../../static/img/n-tuan.png"],
                      "p2": "天天特价，13元休闲礼包，学校周边"
                    }
                  ]
                ]
              ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  main{
    flex: 1;
    overflow: auto;
  }
</style>
