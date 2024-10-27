<template>
    <div class="large-banner">
        <img width="1920" height="920"
            src="https://cdnv2.tgdd.vn/mwg-static/common/Banner/8e/9d/8e9db41f5835a8b1a0d93308dc1952f1.png" alt="OPPO">
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
<script setup>
definePageMeta({
    middleware: [
        // 'setup',
    ],
    layout: 'home-page',
})

import BannerArea from '~/components/_Shared/BannerArea/index.vue'
import FrameProduct from '~/components/Product/FrameProduct.vue'
</script>