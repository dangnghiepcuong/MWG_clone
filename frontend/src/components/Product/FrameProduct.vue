<template>
    <div class="layout-product" :style="backgroundColor">
        <div class="banner-product">
            <img width="1200" height="120" :data-src="bannerLink" class=" lazyloaded"
                alt="banner title flashsale 08:00 - 20:59 theme" :src="bannerLink">

            <div class="layout-clock-count-down">
            </div>
        </div>
        <component :is="productListComponent" />
        <div class="layout-btn-see-more">
            <a class="btn-link btn-see-more" href="">
                <span>{{ btnSeeMore }}</span>
                <span class="icon material-symbols-outlined">arrow_forward_ios</span>
            </a>
        </div>
    </div>
</template>
<style>
@import './frame-product.css';
</style>
<script>
import ListProductFlashSale from './List/FlashSale.vue';
import DealNgon from './List/DealNgon.vue';
import DongHo from './List/DongHo.vue';

export default {
    components: {
        ListProductFlashSale,
        DealNgon,
        DongHo,
    },
    props: {
        bannerLink: {
            type: String,
        },
        backgroundColor: {
            type: String,
        },
        btnSeeMore: {
            type: String,
        },
        productListComponent: {
            type: String,
            required: true,
        },
    },
}
</script>