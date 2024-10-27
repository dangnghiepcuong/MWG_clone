<template>
    <div class="layout-slider">
        <div class="slider advertise">
            <div class="nav">
                <div class="prev" @click="navigateSlider('#frame-slider-top-long-banner', 'left', 0, 1)">
                    <div class="arrow arrow-left"></div>
                </div>
                <div class="next" @click="navigateSlider('#frame-slider-top-long-banner', 'right', 0, 1)">
                    <div class="arrow arrow-right"></div>
                </div>
            </div>
            <div class="box-slider-relative">
                <div class="frame-slider" id="frame-slider-top-long-banner">
                    <ul class="slider" id="slider-top-long-banner">
                        <li class="slide">
                            <a href="">
                                <img width="1200" height="44" loading="lazy" class="owl-lazy lazyloaded"
                                    data-src="//cdn.tgdd.vn/2024/06/banner/1200x44-1200x44-1.jpg" alt="honor"
                                    src="//cdn.tgdd.vn/2024/06/banner/1200x44-1200x44-1.jpg">
                            </a>
                        </li>
                        <li class="slide">
                            <a href="">
                                <img width="1200" height="44" loading="lazy" class="owl-lazy lazyloaded"
                                    data-src="//cdn.tgdd.vn/2024/04/banner/dandau-1200-44-1200x44.png" alt="TZ GTQ"
                                    src="//cdn.tgdd.vn/2024/04/banner/dandau-1200-44-1200x44.png">
                            </a>
                        </li>
                        <li class="slide">
                            <a href="">
                                <img width="1200" height="44" loading="lazy" class="owl-lazy lazyloaded"
                                    data-src="//cdn.tgdd.vn/2024/06/banner/1200x44-1200x44-1.jpg" alt="honor"
                                    src="//cdn.tgdd.vn/2024/06/banner/1200x44-1200x44-1.jpg">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="layout-header">
        <div class="layout-header-top">
            <div>
                <NuxtLink class="header-logo" :to="{ name: 'index' }"><i class="iconnewglobal-logo" /></NuxtLink>
                <a class="btn-link check-inventory" @click="showPopupLocationSelect">
                    <span>Xem giá, tồn kho tại:</span>
                    <span class="arrow-drop-down material-symbols-outlined">arrow_drop_down</span>
                    <span class="address">t.t. Dầu Tiếng, h. Dầu Tiếng, t. Bình Dương</span>
                </a>
                <div class="bar-search">
                    <input class="input-search inputtext" placeholder="Bạn tìm gì" />
                    <div class="layout-icon-search">
                        <span class="icon material-symbols-outlined">
                            search
                        </span>
                    </div>
                </div>
                <NuxtLink class="btn-link order-history" :to="{ name: 'lich-su-mua-hang' }">
                    <span v-if="authStore.isAuthenticated">Đơn hàng <strong>{{ _get(authStore, 'authUserData.firstName')
                            }}</strong></span>
                    <span v-else>Tài khoản & Đơn hàng</span>
                </NuxtLink>
                <a class="btn-link cart">
                    <span class="icon material-symbols-outlined">garden_cart</span>
                    <span>Giỏ hàng</span>
                </a>

                <div class="list-text-link">
                    <a class="text-link news">
                        24h
                        <br>
                        <span>Công nghệ</span>
                    </a>
                    <div class="vertical-border-line"></div>
                    <a class="text-link qna">
                        Hỏi đáp
                    </a>
                    <div class="vertical-border-line"></div>
                    <a class="text-link game-app">
                        Game App
                    </a>
                </div>
            </div>
        </div>
        <div class="layout-header-bottom">
            <div>
                <SuperMenu :menu-items="menuItems" />
            </div>
        </div>
    </div>
    <PopupLocationSelect />
</template>
<style scoped>
@import 'header.css';
</style>
<script setup>
import _get from 'lodash/get'
import SuperMenu from './SuperMenu.vue';
import PopupLocationSelect from './Popup/LocationSelect.vue';
import { useAuthStore } from '~/stores/auth.ts';

const authStore = useAuthStore()

const menuItems = ref({
    0: {
        title: 'Điện thoại',
        icon: 'phone_iphone'
    },
    1: {
        title: 'Laptop',
        icon: 'laptop_chromebook'
    },
    2: {
        title: 'Tablet',
        icon: 'aod_tablet'
    },
    3: {
        title: 'Phụ kiện',
        icon: 'headphones',
        subMenu: {
            0: {
                title: 'Phụ kiện di động',
                subMenu: {
                    0: {
                        title: 'Sạc dự phòng',
                    },
                    1: {
                        title: 'Cáp sạc, củ sạc',
                    },
                    2: {
                        title: 'Ốp lưng điện thoại',
                    },
                    3: {
                        title: 'Ốp lưng máy tính bảng',
                    },
                    4: {
                        title: 'Miếng dán camera',
                    },
                    5: {
                        title: 'Hub chuyển đổi cáp',
                    },
                    6: {
                        title: 'Giá đỡ điện thoại'
                    },
                    7: {
                        title: 'Bút cảm ứng tablet',
                    }
                },
            },
            1: {
                title: 'Thiết bị âm thanh',
                subMenu: {
                    0: {
                        title: 'Tai nghe bluetooth',
                    },
                    1: {
                        title: 'Tai nghe dây',
                    },
                    2: {
                        title: 'Loa',
                    },
                    3: {
                        title: 'Micro',
                    },
                },
            },
            2: {
                title: 'Thiết bị nhà thông minh',
                subMenu: {
                    0: {
                        title: 'Camera trong nhà',
                    },
                    1: {
                        title: 'Camera ngoài trời',
                    },
                },
            },
            3: {
                title: 'Thương hiệu hàng đầu',
                subMenu: {
                    0: {
                        title: 'Apple',
                    },
                    1: {
                        title: 'Samsung',
                    },
                    2: {
                        title: 'Imou',
                    },
                    3: {
                        title: 'Baseus',
                    },
                    4: {
                        title: 'JBL',
                    },
                    5: {
                        title: 'Anker',
                    },
                    6: {
                        title: 'Xmobile',
                    },
                }
            },
            4: {
                title: 'Phụ kiện Laptop',
                subMenu: {
                    0: {
                        title: 'Chuột máy tính',
                    },
                    1: {
                        title: 'Bàn phím',
                    },
                    2: {
                        title: 'Giá đỡ laptop',
                    },
                    3: {
                        title: 'Balo chống sốc',
                    },
                    4: {
                        title: 'Phần mềm',
                    },
                },
            },
            5: {
                title: 'Thiết bị lưu trữ',
                subMenu: {
                    0: {
                        title: 'Ổ cứng di động',
                    },
                    1: {
                        title: 'Thẻ nhớ',
                    },
                    2: {
                        title: 'USB',
                    },
                }
            },
            6: {
                title: 'Phụ kiện khác',
                subMenu: {
                    0: {
                        title: 'Pin tiểu',
                    },
                    1: {
                        title: 'Phụ kiện ô tô',
                    },
                },
            },
        },
    },
    4: {
        title: 'Smartwatch',
        icon: 'fitness_tracker',
    },
    5: {
        title: 'Đồng hồ',
        icon: 'watch',
    },
    6: {
        title: 'Máy cũ, Thu cũ',
        icon: 'screen_rotation_up',
        subMenu: {
            0: {
                title: 'Máy cũ, Thu cũ',
                subMenu: {
                    0: {
                        title: 'Máy cũ, giá rẻ',
                    },
                    1: {
                        title: 'Thu cũ đổi mới'
                    }
                }
            }
        }
    },
    7: {
        title: 'PC, Máy in',
        icon: 'important_devices',
        subMenu: {
            0: {
                title: 'PC, Màn hình',
                subMenu: {
                    0: {
                        title: 'Máy tính để bàn',
                    },
                    1: {
                        title: 'Màn hình máy tính',
                    },
                    2: {
                        title: 'Máy chơi game cầm tay',
                    },
                },
            },
            1: {
                title: 'Máy in, mực in',
                subMenu: {
                    0: {
                        title: 'Mực in',
                    },
                    1: {
                        title: 'Máy in',
                    },
                },
            },
        },
    },
    8: {
        title: 'Sim, Thẻ cào',
        icon: 'sim_card'
    },
    9: {
        title: 'Dịch vụ tiện ích',
        icon: 'linked_services',
        subMenu: {
            0: {
                title: 'Thanh toán hóa đơn',
                subMenu: {
                    0: {
                        title: 'Đóng tiền trả góp',
                    },
                    1: {
                        title: 'Đóng tiền điện',
                    },
                    2: {
                        title: 'Đóng tiền nước',
                    },
                }
            },
            1: {
                title: 'Tài chính - Bảo hiểm',
            },
            2: {
                title: 'Tiện ích viễn thông',
            },
        }
    }
})

const showPopupLocationSelect = function () {
    document.querySelector('.layer-shadow-overlay').style.display = 'block';
    document.querySelector('.layout-location-select').style.display = 'block';
}
</script>