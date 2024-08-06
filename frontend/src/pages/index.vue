<template>
    <div class="large-banner">
        <img width="1920" height="920" src="//cdn.tgdd.vn/2024/06/banner/banner-big--Desk--1920x450.png"
            alt="Banner Big Campaign">
    </div>
    <div class="container">
        <BannerArea />
        <FrameProduct product-list-component="ListProductFlashSale"
            banner-link="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/a4/e1/a4e1828e317cf677b31d11fd9feaf39b.gif"
            btn-see-more="Xem thêm sản phẩm" products-per-frame="12" />

        <FrameProduct product-list-component="DealNgon"
            banner-link="https://cdnv2.tgdd.vn/mwg-static/common/Banner/69/fe/69fee98f7bf4d108b3f3cbd58dd9f94a.png"
            btn-see-more="Xem tất cả" background-color="background-color: #F29202" products-per-frame="5" />

        <FrameProduct product-list-component="DongHo"
            banner-link="https://cdn.tgdd.vn/2024/07/campaign/Frame-1-1200x152.png"
            btn-see-more="Xem thêm ĐỒNG HỒ GIÁ SỐC" background-color="background-color: #910101" />
    </div>
</template>
<style scoped>
@import './index.css';
</style>
<script>
import BannerArea from '~/components/_Shared/BannerArea/BannerArea.vue'
import FrameProduct from '~/components/Product/FrameProduct.vue';

export default {
    components: {
        BannerArea,
        FrameProduct,
    },
}
</script>