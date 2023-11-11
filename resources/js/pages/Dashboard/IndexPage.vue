<template>
    <q-page padding :class="{'bg-grey-9':$q.dark.isActive,'bg-grey-2':!$q.dark.isActive}">
        <div class="row q-mb-lg q-col-gutter-md">
            <!-- Monthly Consumptions -->
            <div class="col-xs-12 col-sm-6 col-md-6">
                <q-card flat bordered class="radius-8" style="min-height:400px;">
                    <q-card-section>
                        <apexcharts
                            height="350"
                            type="bar"
                            :options="chartMonthly.options"
                            :series="chartMonthly.series"
                        ></apexcharts>
                    </q-card-section>
                    <q-inner-loading :showing="loading"/>
                </q-card>
            </div>

            <!-- Weekly Consumptions -->
            <div class="col-xs-12 col-sm-6 col-md-6">
                <q-card flat bordered class="radius-8" style="min-height:400px;">
                    <q-card-section>
                        <apexcharts
                            height="350"
                            type="bar"
                            :options="chartWeekly.options"
                            :series="chartWeekly.series"
                        ></apexcharts>
                    </q-card-section>
                    <q-inner-loading :showing="loading"/>
                </q-card>
            </div>

            <!-- Top Consumers -->
            <div class="col-xs-12 col-sm-6 col-md-6">
                <q-card flat bordered class="radius-8">
                    <q-card-section>
                        <div class="flex justify-between">
                            <h2 class="text-h6 q-ma-none">Top Consumers</h2>
                            <div class="text-subtitle2">This Month</div>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <q-list bordered dense separator v-if="consumers.list">
                            <q-item v-for="(customer, k) in consumers.list" :key="k">
                                <q-item-section>{{ customer }}</q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                    <q-inner-loading :showing="consumers.loading"/>
                </q-card>
            </div>
        </div>
    </q-page>
</template>


<script setup>
import { ref, reactive } from "vue";
import apexcharts from "vue3-apexcharts";
import _ from 'lodash'



const loading = ref(false)
const chartMonthly = reactive({
    options: {
        chart: {
            id: "monthly-consumption",
        },
        title: {
            text: 'Monthly Consumptions', // Set your chart title here
            align: 'left', // You can also specify alignment (left, center, right)
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        // colors: ['#DA1F33']
    },
    series: [
        {
            name: "year",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 20, 30, 40, 50],
        },
        // {
        //     name: "last-year",
        //     data: [40, 40, 65, 70, 49, 80, 100, 91, 20, 30, 40, 50],
        // },
    ],
})
const chartWeekly = reactive({
    options: {
        chart: {
            id: "weekly-consumption",
        },
        title: {
            text: 'Weekly Consumptions', // Set your chart title here
            align: 'left', // You can also specify alignment (left, center, right)
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        // colors: ['#DA1F33']
    },
    series: [
        {
            name: "year",
            data: [12,32,56,15,24,48,62],
        },
        // {
        //     name: "last-year",
        //     data: [40, 40, 65, 70, 49, 80, 100, 91, 20, 30, 40, 50],
        // },
    ],
})
const consumers = reactive({
    loading: false,
    list: ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred"]
})

</script>
