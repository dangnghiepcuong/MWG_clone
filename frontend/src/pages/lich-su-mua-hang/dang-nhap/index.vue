<template>
    <div style="width: 100%; height: 600px;">
        <div v-if="authStore.isAuthenticated" class="layout-login-page">
            <div>
                <div class="banner">
                    <img class="site-icon " src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png">
                </div>
                <div class="layout-form-login">
                    <div class="form-login">
                        <div class="form-title">
                            Tra cứu thông tin đơn hàng
                        </div>
                        <div class="layout-input .phone-number">
                            <span class="icon material-symbols-outlined">email</span>
                            <input v-model="form.email" id="email" class="input-phone-number" type="tel"
                                placeholder="Nhập địa chỉ thư điện tử mua hàng">
                        </div>
                        <span v-if="_get(authStore.errors, 'email')" class="error email">{{ _get(authStore.errors,
                            'email')[0] }}</span>

                        <div class="layout-input .password">
                            <span class="icon material-symbols-outlined">password</span>
                            <input v-model="form.password" id="password" class="input-password" type="tel"
                                placeholder="Nhập mật khẩu">
                        </div>
                        <span v-if="_get(authStore.errors, 'password')" class="error password">{{ _get(authStore.errors,
                            'password')[0]
                            }}</span>

                        <div class="layout-input .submit">
                            <input type="submit" value="ĐĂNG NHẬP" class="btn-submit" @click="authStore.login(form)">
                        </div>
                        <span v-if="_get(authStore.errors, 'error')" class="error">{{ _get(authStore.errors, 'error')
                            }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import './dang-nhap.css';
</style>
<script setup>
definePageMeta({
    middleware: [
        // 'setup',
        'guest'
    ]
})

import _get from 'lodash/get'
import { useAuthStore } from '~/stores/auth.ts';

const authStore = useAuthStore()

const form = reactive({
    email: null,
    password: null,
})
</script>