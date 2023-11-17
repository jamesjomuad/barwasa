<template>
    <q-dialog persistent ref="dialog">
        <q-card style="width: 800px; max-width: 80vw;">
            <q-card-section>
                <div class="row">
                    <div class="col">
                        <h1 class="text-h4 text-weight-bold">Barwsa</h1>
                    </div>
                    <div class="col-5">
                        <b>Invoice #: {{ invoice.number }}</b><br />
                        <b>Date:</b> {{ invoice.date }}<br />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Balao Rural Welfare and Service Association<br />
                        Balao, Barili, Cebu
                    </div>
                    <div class="col-5">
                        <b>To:</b>
                        {{ consumer.name }}<br />
                        <b>Period:</b> <br>{{ consumer.period }}
                    </div>
                </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
                <q-table
                    flat
                    bordered
                    binary-state-sort
                    row-key="id"
                    v-model:pagination="table.pagination"
                    :rows="table.rows"
                    :columns="table.columns"
                >
                <template v-slot:bottom>
                    <div class="col-12 row justify-between">
                        <div class="col"></div>
                        <div class="col-4">
                            <table>
                                <tr>
                                    <td class="text-right"><b>Subtotal:</b></td>
                                    <td>₱{{ invoice.subtotal }}</td>
                                </tr>
                                <tr>
                                    <td class="text-right"><b>Tax:</b></td>
                                    <td>{{ invoice.tax }}</td>
                                </tr>
                                <tr>
                                    <td class="text-right"><b>Total:</b></td>
                                    <td>₱{{ invoice.total }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </template>
                </q-table>
            </q-card-section>
            <q-separator/>
            <q-card-actions align="right">
                <q-btn flat label="Close" color="negative" v-close-popup />
                <q-btn flat label="Transact" color="primary" @click="onTransact" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>


<script setup>
import { ref, reactive, onMounted, defineExpose, computed } from "vue";
import { date } from 'quasar'

const dialog = ref()
const invoice = reactive({
    number: '',
    date: null,
    price: 7.5,
    subtotal: computed(()=>{
        return _.sumBy(table.rows, function (o) { return o.volume * invoice.price; });
    }),
    tax: 0,
    total: computed(()=>{
        return invoice.subtotal
    })
})
const consumer = reactive({})
const table = reactive({
    loading: false,
    filter: '',
    rows: [],
    columns: [
        {
            label: "Previous",
            name: "previous",
            field: "previous",
            align: 'left',
        },
        {
            label: "Current",
            name: "current",
            field: "current",
            align: 'left',
        },
        {
            label: "CUM Used",
            name: "volume",
            field: "volume",
            align: 'left',
        },
        {
            label: "Payable",
            name: "payable",
            field: "payable",
            align: 'left',
            format: (v,r) => '₱'+r.volume*invoice.price
        },
    ],
    pagination: {
        sortBy: "id",
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10,
    }
})

onMounted(()=>{
    invoice.date = date.formatDate(Date.now(), 'MMMM DD, YYYY')
})


function show(data){
    dialog.value.show()
    consumer.name = `${data.first_name} ${data.last_name} `
    consumer.period = `${data.consumption_dates.from} - ${data.consumption_dates.to} `
    table.rows = data.consumptions
    console.log(data)
    invoice.number = date.formatDate(Date.now(), 'YYYYMMDD') + `${data.id}`
}

function onTransact(){

}

defineExpose({
    show
})
</script>
