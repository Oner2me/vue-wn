<template>
    <div class="home-box">
        <header>
            <div class="home-scan-code">
                <img src="../assets/images/scan-code.png" alt="scan-code.png">
            </div>
            <div class="home-search">
                <i><img src="../assets/images/search.png" alt="search.png"></i>
                <input type="text" placeholder="运动护腰">
            </div>
            <div class="home-more">
                <img src="../assets/images/more.png" alt="more.png">
            </div>
        </header>
        <div class="home-banner">
            <Banner :pics="imgs"></Banner>
        </div>
        <section>
            <div class="home-category">
                <div class="hc">
                    <img src="../assets/images/home-cate-1.png" alt="home-cate-1.png">
                    <div class="text">
                        <span>运动护膝</span>
                    </div>
                </div>
                <div class="hc">
                    <img src="../assets/images/home-cate-2.png" alt="home-cate-2.png">
                    <div class="text">
                        <span>劳保用品</span>
                    </div>
                </div>
                <div class="hc">
                    <img src="../assets/images/home-cate-3.png" alt="home-cate-3.png">
                    <div class="text">
                        <span>军警用品</span>
                    </div>
                </div>
            </div>
            <div class="home-news-shop">
                <h2>最新商品</h2>
                <div class="ns">
                    <div class="ns-left">
                        <img src="../assets/images/home-ns-1.png" alt="home-ns-1.png">
                        <div class="ns-left-text">
                            <span>TMT户外运动护膝</span>
                            <span>防摔伤</span>
                        </div>
                    </div>
                    <div class="ns-right">
                        <div class="ns-top">
                            <img src="../assets/images/home-ns-2.png" alt="home-ns-2.png">
                            <div class="ns-right-text">
                                <span>半月板损伤护膝</span>
                                <span>运动保护 APTONIAK</span>
                            </div>
                        </div>
                        <div class="ns-bottom">
                            <img src="../assets/images/home-ns-3.png" alt="home-ns-3.png">
                            <div class="ns-right-text">
                                <span>TMT护膝运动男跑</span>
                                <span>步半月板损伤</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-more">
                    MORE
                </div>
            </div>
            <div class="home-img">
                <img src="" alt="">
            </div>
            <div class="home-hots-shop">
                <h2>热卖商品</h2>
                <img src="" alt="">
                <div class="hs">
                    <div class="hs-left"></div>
                    <div class="hs-right"></div>
                </div>
                <div class="home-more">
                    <span>MORE</span>
                </div>
            </div>
            <div class="home-best-shop">
                <h2>精品特卖</h2>
                <div class="bs-cate-top"></div>
                <div class="bs-cate-bottom">
                    <div class="hs-left"></div>
                    <div class="hs-right"></div>
                </div>
                <div class="home-more">
                    MORE
                </div>
            </div>
            <div class="home-recommend">
                <h2>良心推荐</h2>
                <div class="rec">
                    <div class="rec-left"></div>
                    <div class="rec-right"></div>
                    <span></span>
                </div>
                <div class="rec">
                    <div class="rec-left"></div>
                    <div class="rec-right"></div>
                    <span></span>
                </div>
                <div class="home-more">
                    MORE
                </div>
            </div>
        </section>
        <footer>
            <nav>
                <div class="home-zhuye zy-current">
                    <router-link to=""></router-link>
                    <span>主页</span>
                </div>
                <div class="home-fenlei">
                    <router-link to=""></router-link>
                    <span>分类</span>
                </div>
                <div class="home-find">
                    <router-link to=""></router-link>
                    <span>发现</span>
                </div>
                <div class="home-gouwuche">
                    <router-link to=""></router-link>
                    <span>购物车</span>
                </div>
                <div class="home-wode">
                    <router-link to=""></router-link>
                    <span>我的</span>
                </div>
            </nav>
        </footer>
    </div>
</template>

<script>
import Banner from "../components/MySwiper";
export default {
  name: "homePage",
  components: {
    Banner
  },
  data() {
    return {
      imgs: [
        require("../assets/images/home-banner-1.png"),
        require("../assets/images/home-banner-2.png"),
        require("../assets/images/home-banner-3.png")
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import url("../assets/less/homepage.less");
</style>