<template>
    <q-layout view="lHh Lpr lff" :class="{'bg-dark':$q.dark.isActive,'bg-light':!$q.dark.isActive}">
        <q-header elevated class="text-white" :class="{'bg-dark':$q.dark.isActive}">
            <q-toolbar>
                <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
                <q-toolbar-title v-if="!$q.screen.xs">{{ $route.meta?.title }} </q-toolbar-title>
                <!-- <q-toolbar-title>
                    <q-avatar>
                        <img src="/images/logo.png" />
                    </q-avatar>
                </q-toolbar-title> -->

                <q-space />

                <q-toggle
                    icon-color="dark"
                    color="white"
                    v-model="$q.dark.isActive"
                    unchecked-icon="light_mode"
                    checked-icon="nightlight_round"
                />

                <q-toolbar-title shrink>
                    <span class="text-subtitle2">{{ user?.fullname }}</span>
                </q-toolbar-title>

                <q-btn round flat icon="account_circle">
                    <q-menu auto-close :offset="[110, 0]">
                        <q-toolbar class="bg-secondary text-white">
                            <q-toolbar-title class="text-subtitle2">BARWSA</q-toolbar-title>
                        </q-toolbar>
                        <q-list style="min-width: 150px">
                            <q-item clickable @click.prevent="copyToClipboard(store.getters['auth/token'])">
                                <q-item-section>{{store.getters['auth/token']}}</q-item-section>
                            </q-item>
                            <q-item clickable @click.prevent="onLogout">
                                <q-item-section>Logout</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
            </q-toolbar>
        </q-header>

        <!-- @mouseover="miniState = false"
        @mouseout="miniState = true" -->
        <q-drawer
            bordered
            elevated
            v-model="drawer"
            :style="!miniState?'padding-top: 170px;':''"
            :dark="$q.dark.isActive"
            :mini="miniState"
            :width="200"
            :breakpoint="500"
            :class="[{'bg-white': !$q.dark.isActive}]"
        >
            <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
                <q-list>
                    <menu-item label="Dashboard" icon="dashboard" to="/" exact/>
                    <q-separator />

                    <q-item-label header>Customers</q-item-label>
                    <menu-item label="Billing" icon="receipt" to="/billing"/>
                    <menu-item label="Transactions" icon="checklist" to="/transactions"/>
                    <menu-item label="Consumptions" icon="water_drop" to="/consumptions"/>
                    <menu-item label="Consumers" icon="people" to="/consumers"/>
                    <q-separator />

                    <q-item-label header>System</q-item-label>
                    <menu-item label="Users" icon="people" to="/system/users"/>
                    <menu-item label="Roles" icon="admin_panel_settings" to="/system/roles"/>
                    <!-- <menu-item label="Manual" icon="description" to="/system/manual"/> -->
                    <q-separator />
                </q-list>
            </q-scroll-area>
            <div v-show="!miniState" class="absolute-top bg-accent" style="height: 170px">
                <div class="absolute-bottom bg-transparent q-pa-md">
                    <q-avatar size="90px" class="q-mb-sm">
                        <img src="/images/logo.png">
                    </q-avatar>
                    <div class="text-weight-bold">{{ user?.fullname }}</div>
                    <!-- <div>@{{ $store.getters['auth/user']?.email }}</div> -->
                </div>
            </div>
        </q-drawer>

        <q-page-container :class="{'bg-grey-9':$q.dark.isActive,'bg-grey-2':!$q.dark.isActive}">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from "vuex"
import { useRoute, useRouter } from 'vue-router'
import { copyToClipboard, debounce } from 'quasar'
import  store  from '../store/index'
import menuItem from "../components/MenuItem";



const $route = useRoute();
const $router = useRouter();
const $store = useStore();
const drawer = ref(true)
const miniState = ref(false)
const user = computed(()=>$store.getters['auth/user'])



function onLogout(){
    console.log('logout')
    $store.commit('auth/logout')
    $router.push(`/login`)
}
</script>
