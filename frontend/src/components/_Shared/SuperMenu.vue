<template>
    <ul class="menu mega-menu">
        <li v-for="(item, index) in menuItems" :key="index">
            <a class="text-link">
                <span class="material-symbols-outlined">{{ get(item, 'icon') }}</span>
                <span class="title">
                    {{ get(item, 'title') }}
                    <span v-if="get(item, 'subMenu')"
                    class="keyboard-arrow-down material-symbols-outlined">keyboard_arrow_down</span>
                </span>
                
            </a>
            <div class="layout-pointer-arrow">
                <span class="material-symbols-outlined pointer-arrow" v-if="get(item, 'subMenu')">
                    change_history
                </span>
            </div>
            <div class="menu-panel" v-if="get(item, 'subMenu')">
                <ul class="menu grid-submenu">
                    <li v-for="(subItem, index) in get(item, 'subMenu')" :key="index">
                        <div class="title">{{ get(subItem, 'title') }}</div>
                        <ul class="menu vertical-submenu">
                            <li v-for="(sub2Item, index) in get(subItem, 'subMenu')" :key="index">
                                <a class="">
                                    <span class="sub-title">{{ get(sub2Item, 'title') }}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>
<style scoped>
.mega-menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.mega-menu>li {
    position: relative;
    padding: 12px 8px;
    cursor: pointer;
}

.text-link span {
    vertical-align: middle;
}

.text-link span.title {
    display: inline-block;
}

.text-link span.material-symbols-outlined {
    font-size: 24px;
}

.layout-pointer-arrow {
    height: 0px;
}

.pointer-arrow {
    display: none;
    position: absolute;
    margin: 0;
    color: #fff;
    font-variation-settings: 'FILL' 1;
    transform: translate(100%, -8px);
    z-index: 11;
}

.menu-panel {
    display: none;
    width: max-content;
    position: absolute;
    z-index: 10;
    padding: 12px 10px;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    background-color: white;
    transform: translate(0, 8px);
}

.mega-menu li:nth-last-child(-n + 3) {
    .menu-panel {
        transform: translate(-75%, 8px);

    }
}

.grid-submenu {
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-columns: repeat(4, auto);
    row-gap: 12px;
}

.grid-submenu>li {
    padding-right: 20px;
}

.grid-submenu>li:first-child {
    grid-row: 1 / 4;
}

.menu-panel .title {
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
}

.mega-menu li:hover {
    .menu-panel {
        display: block;
    }

    .pointer-arrow {
        display: block;
    }
}

.vertical-submenu>li {
    padding-top: 15px;
}

.sub-title:hover {
    font-weight: bold;
}
</style>
<script>
import _get from 'lodash/get';
export default {
    props: {
        menuItems: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        get(item, property) {
            return _get(item, property);
        },
    }
}
</script>