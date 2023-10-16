<template>
    <q-layout view="lHh Lpr lff">
        <q-header elevated class="text-white" :class="{'bg-dark':$q.dark.isActive}">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="/images/logo.png" />
                    </q-avatar>
                </q-toolbar-title>

                <q-toggle
                    icon-color="dark"
                    color="white"
                    v-model="$q.dark.isActive"
                    unchecked-icon="light_mode"
                    checked-icon="nightlight_round"
                />

                <q-toolbar-title shrink>
                    <span class="text-subtitle2">James Jomuad</span>
                </q-toolbar-title>

                <q-btn round flat icon="account_circle">
                    <q-menu auto-close :offset="[110, 0]">
                        <q-toolbar class="bg-secondary text-white">
                            <q-toolbar-title class="text-subtitle2">Barwasa</q-toolbar-title>
                        </q-toolbar>
                        <q-list style="min-width: 150px">
                            <q-item clickable @click.prevent="onLogout">
                                <q-item-section>Logout</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-drawer
            :dark="$q.dark.isActive"
            v-model="drawer"
            show-if-above
            :mini="miniState"
            @mouseover="miniState = false"
            @mouseout="miniState = true"
            :width="200"
            :breakpoint="500"
            bordered
            :class="[{'bg-white': !$q.dark.isActive}]"
        >
            <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
                <q-list>
                    <menu-item label="Dashboard" icon="dashboard" to="/" exact/>
                    <q-separator />

                    <q-item-label header>Customers</q-item-label>
                    <menu-item label="Users" icon="people" to="/customers"/>
                    <!-- <menu-item label="Roles" icon="security" to="/system/roles"/> -->
                    <!-- <menu-item label="Logs" icon="list_alt" to="/system/logs"/> -->
                    <q-separator />

                    <q-item-label header>System</q-item-label>
                    <menu-item label="Users" icon="people" to="/system/users"/>
                    <!-- <menu-item label="Roles" icon="security" to="/system/roles"/> -->
                    <!-- <menu-item label="Logs" icon="list_alt" to="/system/logs"/> -->
                    <q-separator />
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container class="bg-grey-3">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from "vuex"
import { useRouter } from 'vue-router'
import menuItem from "../components/MenuItem";


const $router = useRouter();
const $store = useStore();
const leftDrawerOpen = ref(false)
const isDark = ref(true)
const drawer = ref(false)
const miniState = ref(true)

function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

function onLogout(){
    console.log('logout')
    $store.commit('auth/logout')
    $router.push(`/`)
}
</script>
