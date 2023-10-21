<template>
    <q-page padding class="bg-grey-2">
            <div class="row q-mb-lg q-col-gutter-md">
                <!-- Bookings Daily -->
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <q-card flat bordered class="radius-8" style="min-height:400px;">
                        <q-card-section>
                            <apexcharts
                                height="350"
                                type="bar"
                                :options="chart.options"
                                :series="chart.series"
                            ></apexcharts>
                        </q-card-section>
                        <q-inner-loading :showing="loading"/>
                    </q-card>
                </div>
            </div>
    </q-page>
</template>


<script setup>
import { ref, reactive } from "vue";
// import axios from "axios";
import apexcharts from "vue3-apexcharts";
import _ from 'lodash'



const loading = ref(false)
const chart = reactive({
    options: {
        chart: {
            id: "vuechart-example",
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
    ],
})

</script>
