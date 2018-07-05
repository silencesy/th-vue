<template>  
  <div class="Categories">  
    <div class="left wrapper" ref="leftWrapper" :style="{width:'100%',height:height+'px'}">
      <div class="content">
        <mt-cell title="标题文字"  is-link v-for="(item,index) in 20" :key="index"></mt-cell>
      </div>
    </div>
    <div class="right wrapper" ref="rightWrapper" :style="{width:'100%',height:height+'px'}">
      <div class="content">
        <GoodsRow  :goodsData="goodsData" :Columns="2" backgroundColor="#eee"/>
        <div class="more-icon" v-show="showMoreIcon">
          <mt-spinner type="fading-circle" :size='18' color="#f24827"></mt-spinner>
        </div>
      </div>
    </div>
  </div>  
</template>  
  
<script>  
import BScroll from 'better-scroll'
import GoodsRow from "../BaseComponents/GoodsRow";

let goodsData = [
      {
        "id": "149",
        "set_id": "149",
        "goods_name": "UMBRA SLING SINK CADDY",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/SLING/SLING1.jpg",
        "goods_price": "40",
        "sale_count": "1",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/SLING/SLING1.jpg"
      },
      {
        "id": "123",
        "set_id": "123",
        "goods_name": "NERF N-STRIKE ELITE RAPIDSTRIKE CS-18 BLASTER",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/toys/NERF/A4492/A44929511 3.jpg",
        "goods_price": "399",
        "goods_sale_price": "299",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/toys/NERF/A4492/A44929511 3.jpg"
      },
      {
        "id": "151",
        "set_id": "151",
        "goods_name": "UMBRA PANE PD MULTI 40P",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/ PANE/PANE1.jpg",
        "goods_price": "130",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/ PANE/PANE1.jpg"
      },
      {
        "id": "150",
        "set_id": "150",
        "goods_name": "UMBRA DESERT MULTI HOOK",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/DESERT/DESERT1.jpg",
        "goods_price": "160",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/DESERT/DESERT1.jpg"
      },
      {
        "id": "152",
        "set_id": "152",
        "goods_name": "UMBRA BUDDY DOUBLE OTD HOOK",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/BUDDY/BUDDY1.jpg",
        "goods_price": "100",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/BUDDY/BUDDY1.jpg"
      },
      {
        "id": "153",
        "set_id": "153",
        "goods_name": "UMBRA HANGIT PD",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/HANGITPD/HANGITPD1.jpg",
        "goods_price": "170",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/HANGITPD/HANGITPD1.jpg"
      },
      {
        "id": "134",
        "set_id": "134",
        "goods_name": "GARBINO CAN 9L",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/GARBINO CAN/028295294201.jpg",
        "goods_price": "60",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/GARBINO CAN/028295294201.jpg"
      },
      {
        "id": "154",
        "set_id": "154",
        "goods_name": "UMBRA FOTOFALLS DESKTOP PD",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/FOTOFALLS/FOTOFALLS1.jpg",
        "goods_price": "180",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/home/UMBRA/FOTOFALLS/FOTOFALLS1.jpg"
      },
      {
        "id": "120",
        "set_id": "120",
        "goods_name": "Mother-K Sanitizer for fruits and vegetables",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/sanitizer/cp1.jpg",
        "goods_price": "22",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/sanitizer/cp1.jpg"
      },
      {
        "id": "117",
        "set_id": "117",
        "goods_name": "K-MOM Special Cotton Nuds for Newborns 50pcs",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/cotton swab/cotton swab1.jpg",
        "goods_price": "99",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/cotton swab/cotton swab1.jpg"
      },
      {
        "id": "119",
        "set_id": "119",
        "goods_name": "Mother-K 100% cotton safe buds for babies 100/300p",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/bud/1004.jpg",
        "goods_price": "59",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/bud/1004.jpg"
      },
      {
        "id": "110",
        "set_id": "110",
        "goods_name": "K-MOM Nail Care Set",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/nsc/NCS1.jpg",
        "goods_price": "45",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/nsc/NCS1.jpg"
      },
      {
        "id": "116",
        "set_id": "116",
        "goods_name": "K-MOM Nail Clippers Set&amp;Tweezer",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/NSCT/NCST1.jpg",
        "goods_price": "74",
        "sale_count": "1",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/motherk/NSCT/NCST1.jpg"
      },
      {
        "id": "105",
        "set_id": "105",
        "goods_name": "Emsa Children's drinking bottles 400ML",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/518707Monster400ML.jpg",
        "goods_price": "158",
        "goods_sale_price": "95",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/518707Monster400ML.jpg"
      },
      {
        "id": "103",
        "set_id": "103",
        "goods_name": "Midea Air Fryer, Oil Free Design,  Model: TN20A, Color: Black",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/tn20a/tn20a3.jpg",
        "goods_price": "699",
        "goods_sale_price": "550",
        "sale_count": "3",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/tn20a/tn20a3.jpg"
      },
      {
        "id": "106",
        "set_id": "106",
        "goods_name": "Midea Electric Kettle Model: MK-HP1501, Color: Fashion Brown, White",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/hp1501.jpg",
        "goods_price": "180",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/hp1501.jpg"
      },
      {
        "id": "107",
        "set_id": "107",
        "goods_name": "Midea Double Layers Anti-scald Kettle, Electric Pot, Model: QJ1503A, Color: Red",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/QJ1503A/4.jpg",
        "goods_price": "190",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/QJ1503A/4.jpg"
      },
      {
        "id": "102",
        "set_id": "102",
        "goods_name": "Media High Speed Blender Model: MJ-WBL1008Q, Juice/Milk/Coffee/Ice Cream",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/wbl1008q/5.jpg",
        "goods_price": "799",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/wbl1008q/5.jpg"
      },
      {
        "id": "100",
        "set_id": "100",
        "goods_name": "Midea Cooking Machine, Model: MJ-BK1002A",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/mj-bk1002a/bk10021.jpg",
        "goods_price": "1699",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/mj-bk1002a/bk10021.jpg"
      },
      {
        "id": "99",
        "set_id": "99",
        "goods_name": "Midea Inverter Fans, Model: KYS30–17AR",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/kys30-17ar/kys30-17ar.jpg",
        "goods_price": "450",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/kys30-17ar/kys30-17ar.jpg"
      },
      {
        "id": "77",
        "set_id": "77",
        "goods_name": "Midea Box Fan KYT30-15A",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/KYT30-15A.jpg",
        "goods_price": "148",
        "sale_count": "1",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Midea/KYT30-15A.jpg"
      },
      {
        "id": "86",
        "set_id": "86",
        "goods_name": "MOMENTO Coffee Vacuum jug Quick Tip closure",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/MOMENTO/回想绿色.jpg",
        "goods_price": "129",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/MOMENTO/回想绿色.jpg"
      },
      {
        "id": "87",
        "set_id": "87",
        "goods_name": "EMSA BASIC Vacuum jug 1.5L",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/basic/6.jpg",
        "goods_price": "158",
        "sale_count": "3",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/basic/6.jpg"
      },
      {
        "id": "82",
        "set_id": "82",
        "goods_name": "EMSA SOFT GRIP Vacuum Jug 1.5L",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/soft.jpg",
        "goods_price": "298",
        "goods_sale_price": "148",
        "sale_count": "1",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/EMSA/soft.jpg"
      },
      {
        "id": "64",
        "set_id": "64",
        "goods_name": "TVS Goddess Wok + Glass Lid (32cm) Made in Italy",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/TVS/pan2.jpg",
        "goods_price": "899",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/TVS/pan2.jpg"
      },
      {
        "id": "63",
        "set_id": "63",
        "goods_name": "TVS Dèco Wok+Glass Lid (32cm) Made in Italy",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/TVS/pan1.jpg",
        "goods_price": "1199",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/TVS/pan1.jpg"
      },
      {
        "id": "43",
        "set_id": "43",
        "goods_name": "BRITA Filter&amp;Boil Station 1.8L",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/BRITA/Station/yinba4.jpg",
        "goods_price": "899",
        "goods_sale_price": "799",
        "sale_count": "1",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/BRITA/Station/yinba4.jpg"
      },
      {
        "id": "49",
        "set_id": "49",
        "goods_name": "BWT Penguin 2.7L model EEI",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3.jpg",
        "goods_price": "259",
        "goods_sale_price": "229",
        "sale_count": "4",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3.jpg"
      },
      {
        "id": "50",
        "set_id": "50",
        "goods_name": "BWT  Filter Cartridge (Mg+)",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3+1.jpg",
        "goods_price": "139",
        "sale_count": "1",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3+1.jpg"
      },
      {
        "id": "38",
        "set_id": "38",
        "goods_name": "Velociraptor Puzzle Dig Kit",
        "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Dr.Cool/dino fossil 3d/6.png",
        "goods_price": "168",
        "sale_count": "0",
        "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Dr.Cool/dino fossil 3d/6.png"
      }
    ]

export default {  
  name: 'Categories',  
  data() {  
    return {  
      height: 0,
      goodsData: goodsData,
      p: 0,
      showMoreIcon: true,
    };
  },
  components: {
    GoodsRow
  },
  mounted() {
    var that = this;
    that.$nextTick(() => {
      setTimeout(function(){
        that.height = document.documentElement.clientHeight - 55;
        that._initScroll();
      },20);
      
    });
    
  	// var that = this;
   //  that.height = document.documentElement.clientHeight - 55;
   //  that.$nextTick(() => {
   //      that.scroll = new BScroll(that.$refs.leftWrapper, {
   //          scrollY: true,
   //          click: true,
   //          pullUpLoad: {
   //            threshold: 50
   //          }
   //      })
   //      that.scroll2 = new BScroll(that.$refs.rightWrapper, {
   //          scrollY: true,
   //          click: true
   //      })
   //    })
  },
  methods: {
    _initScroll () {
      var that = this;
      that.$nextTick(() => {
        that.scroll = new BScroll(that.$refs.leftWrapper, {
            scrollY: true,
            click: true,
            pullUpLoad: {
              threshold: 50
            }
        })
        that.scroll2 = new BScroll(that.$refs.rightWrapper, {
            scrollY: true,
            click: true,
            pullUpLoad:{
              threshold: 20, // 当上拉到超过底部 70px 时，                    
            }
        })
        that.scroll2.on("pullingUp",function(){    
          console.log(goodsData);
          that.p++;
          if(that.p>3) {
            that.showMoreIcon= false;
          } else {
            setTimeout(function(){
            that.goodsData.push({
            "id": "50",
            "set_id": "50",
            "goods_name": "BWT  Filter Cartridge (Mg+)",
            "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3+1.jpg",
            "goods_price": "139",
            "sale_count": "1",
            "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3+1.jpg"
          },
          {
            "id": "38",
            "set_id": "38",
            "goods_name": "Velociraptor Puzzle Dig Kit",
            "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Dr.Cool/dino fossil 3d/6.png",
            "goods_price": "168",
            "sale_count": "0",
            "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Dr.Cool/dino fossil 3d/6.png"
          },{
            "id": "50",
            "set_id": "50",
            "goods_name": "BWT  Filter Cartridge (Mg+)",
            "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3+1.jpg",
            "goods_price": "139",
            "sale_count": "1",
            "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3+1.jpg"
          },
          {
            "id": "38",
            "set_id": "38",
            "goods_name": "Velociraptor Puzzle Dig Kit",
            "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Dr.Cool/dino fossil 3d/6.png",
            "goods_price": "168",
            "sale_count": "0",
            "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Dr.Cool/dino fossil 3d/6.png"
          },{
            "id": "50",
            "set_id": "50",
            "goods_name": "BWT  Filter Cartridge (Mg+)",
            "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3+1.jpg",
            "goods_price": "139",
            "sale_count": "1",
            "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/BWT/3+1.jpg"
          },
          {
            "id": "38",
            "set_id": "38",
            "goods_name": "Velociraptor Puzzle Dig Kit",
            "coverpic": "http://api.mall.thatsmags.com/Public/ckfinder/images/Dr.Cool/dino fossil 3d/6.png",
            "goods_price": "168",
            "sale_count": "0",
            "set_img": "http://api.mall.thatsmags.com/Public/ckfinder/images/Dr.Cool/dino fossil 3d/6.png"
          })
          if(that.p + 1>3) {
            that.showMoreIcon= false;
          }
          that.scroll2.finishPullUp();
          },200);
            
          }
          
          
          that.scroll2.refresh();
        });

      })
    }
  }
};  
</script>  
  
<style scoped>
    .Categories {
    display: flex;
  }
  ul,li {
    list-style: none;
  }
  .left {
    flex: 1;
    box-sizing: border-box;
    padding-bottom: 55px;

  }
  .right {
    flex: 2;
    box-sizing: border-box;
    padding-bottom: 55px;
    background-color: #E8E8E8;
  }
  .content {
    background-color: #e8e8e8;
  }
</style>  