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
                        <div class="ns-box">
                            <img src="../assets/images/home-ns-2.png" alt="home-ns-2.png">
                            <div class="ns-right-text">
                                <span>半月板损伤护膝</span>
                                <span>运动保护 APTONIAK</span>
                            </div>
                        </div>
                        <div class="ns-box">
                            <img src="../assets/images/home-ns-3.png" alt="home-ns-3.png">
                            <div class="ns-right-text">
                                <span>TMT护膝运动男跑</span>
                                <span>步半月板损伤</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-more">
                    <span>MORE</span>
                </div>
            </div>
            <div class="home-img">
                <img src="../assets/images/home-banner-two.png" alt="home-banner-two.png">
            </div>
            <div class="home-hots-shop">
                <h2>热卖商品</h2>
                <div class="home-hs-img">
                    <img src="../assets/images/home-hs.png" alt="home-hs.png">
                    <div class="home-hs-font">
                        <span>运动舞蹈护肘护膝小孩儿童女套装</span>
                        <span>足球跳舞跪地男童女童防摔护膝夏455</span>
                    </div>
                </div>
                <div class="hs">
                    <div class="hs-box">
                        <img src="../assets/images/home-hs-girl.png" alt="home-hs-girl.png">
                        <div class="hs-font">
                            <span>女款运动护</span>
                            <span>肘护膝小孩儿童</span>
                        </div>
                    </div>
                    <div class="hs-box">
                        <img src="../assets/images/home-hs-boy.png" alt="home-hs-boy.png">
                        <div class="hs-font">
                            <span>男款运动护肘</span>
                            <span>护膝小孩儿童</span>
                        </div>
                    </div>
                </div>
                <div class="home-more">
                    <span>MORE</span>
                </div>
            </div>
            <div class="home-best-shop">
                <h2>精品特卖</h2>
                <div class="bs-cate-top">
                    <div class="bs-cate">
                        <img src="../assets/images/home-bs-1.png" alt="home-bs-1.png">
                        <span>户外打猎...</span>
                    </div>
                    <div class="bs-cate">
                        <img src="../assets/images/home-bs-2.png" alt="home-bs-2.png">
                        <span>军绿色布...</span>
                    </div>
                    <div class="bs-cate">
                        <img src="../assets/images/home-bs-3.png" alt="home-bs-3.png">
                        <span>涤纶布枪...</span>
                    </div>
                </div>
                <div class="bs-cate-bottom">
                    <div class="bs-box">
                        <img src="../assets/images/home-bs-4.png" alt="home-bs-4.png">
                        <div class="bs-text">
                            春夏季仿生迷彩打猎...
                        </div>
                    </div>
                    <div class="bs-box">
                        <img src="../assets/images/home-bs-5.png" alt="home-bs-5.png">
                        <div class="bs-text">
                            酋长户外战术迷彩...
                        </div>
                    </div>
                </div>
                <div class="home-more">
                    <span>MORE</span>
                </div>
            </div>
            <div class="home-recommend">
                <h2>良心推荐</h2>
                <div class="rec">
                    <div class="rec-left">
                        <img src="../assets/images/home-rec-1.png" alt="home-rec-1.png">
                        <div class="rl-text">
                            野战背心...
                        </div>
                    </div>
                    <div class="rec-right">
                        <img src="../assets/images/home-rec-2.png" alt="home-rec-2.png">
                        <div class="rr-text">
                            户外装备...
                        </div>
                    </div>
                </div>
                <div class="rec">
                    <div class="rec-left">
                        <img src="../assets/images/home-rec-3.png" alt="home-rec-3.png">
                        <div class="rl-text">
                            环保塑料...
                        </div>
                    </div>
                    <div class="rec-right">
                        <img src="../assets/images/home-rec-4.png" alt="home-rec-4.png">
                        <div class="rr-text">
                            厂家生产...
                        </div>
                    </div>
                </div>

                <div class="home-more">
                    <span>MORE</span>
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
                    <router-link to="/user"></router-link>
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