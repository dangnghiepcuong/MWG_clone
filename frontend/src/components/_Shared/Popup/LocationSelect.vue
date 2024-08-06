<template>
    <div class="layer-shadow-overlay">
    </div>

    <div class="layout-location-select">
        <div class="layout-top">
            <div class="layout-control-panel">
                <div class="text">
                    <span class="title">Địa chỉ đã được chọn: </span>
                    <span class="address province">tỉnh Bình Dương, </span>
                    <span class="address district">huyện Dầu Tiếng, </span>
                    <span class="address ward">thị trấn Dầu Tiếng </span>
                </div>
                <a class="btn-close" @click="close">
                    <span class="icon material-symbols-outlined">close</span>
                    <span>Đóng</span>
                </a>
            </div>
            <div class="bar-search">
                <input class="inputtext input-search" placeholder="Tìm nhanh tỉnh thành, quận huyện, phường xã  " />
                <div class="layout-icon-search">
                    <span class="icon material-symbols-outlined">
                        search
                    </span>
                </div>
            </div>
        </div>
        <div class="layout-location-list">
            <div class="title">Hoặc chọn tỉnh, thành phố</div>
            <ul class="list-location list-province">
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
                <li class="item-location">Hồ Chí Minh</li>
            </ul>
        </div>
    </div>
</template>
<style>
.layer-shadow-overlay {
    display: none;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: var(--default-opacity);
}

.layout-location-select {
    display: none;
    position: fixed;
    z-index: 15;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    max-width: 473px;
    margin: auto;
    border-radius: var(--popup-border-radius);
    background-color: white;
}

.layout-top {
    padding: 10px;
    border-top-left-radius: var(--popup-border-radius);
    border-top-right-radius: var(--popup-border-radius);
    background-color: dodgerblue;
    color: white;
}

.layout-control-panel {
    margin-bottom: 20px;
}

.text {
    display: inline-block;
    width: 83%;
}

.btn-close {
    float: right;
    padding: 6px;
    border: 1px solid white;
    border-radius: var(--border-radius);
    cursor: pointer;
}

.btn-close span {
    vertical-align: middle;
    color: white;
}

.btn-close span.icon {
    font-size: 20px;
}

.bar-search {
    height: 35px;
}

.layout-location-list .title {
    margin: 5px 0px;
    text-align: center;
    font-weight: bold;
}

.list-location {
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-columns: repeat(2, auto);
    max-height: 40vh;
    overflow-y: scroll;
    margin: 10px 0px;
}

.item-location {
    width: 85%;
    margin: auto;
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}

.item-location:hover {
    background-color: rgb(30, 144, 255, 0.1);
    transition: 300ms;
}
</style>
<script>
export default {
    methods: {
        close() {
            document.querySelector('.layer-shadow-overlay').style.display = 'none';
            document.querySelector('.layout-location-select').style.display = 'none';
        }
    }
}
</script>