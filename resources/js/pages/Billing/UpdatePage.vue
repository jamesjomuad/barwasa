<!-- eslint-disable brace-style -->
<template>
    <q-page padding class="bg-grey-2">
        <div class="col-md-12">
            <q-card>
                <!-- Title -->
                <q-card-section class="q-py-sm">
                    <div class="text-h6">Consumer</div>
                </q-card-section>
                <q-card-section>
                    <div class="row q-col-gutter-md">
                    <q-input
                        v-model="$form.meter_id"
                        dense
                        outlined
                        label="Meter ID"
                        lazy-rules
                        class="col-12"
                        readonly
                    >
                    </q-input>
                    </div>
                </q-card-section>
                <q-separator />
                <!-- Fields -->
                <q-card-section>
                    <div class="row q-col-gutter-md">
                        <q-input
                            v-model="$form.first_name"
                            dense
                            outlined
                            label="First Name"
                            class="col-6"
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        >
                            <template v-slot:prepend>
                            <q-icon name="account_circle" />
                            </template>
                        </q-input>

                        <q-input
                            v-model="$form.last_name"
                            dense
                            outlined
                            label="Last name *"
                            lazy-rules
                            class="col-6"
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        >
                            <template v-slot:prepend>
                            <q-icon name="account_circle" />
                            </template>
                        </q-input>
                    </div>
                </q-card-section>
            </q-card>
        </div>

        <q-form class="q-mt-md col-auto" @submit="onUpdate">
            <q-table
                :dark="$q.dark.isActive"
                flat
                bordered
                binary-state-sort
                title="Consumptions"
                row-key="id"
                selection="multiple"
                v-model:pagination="table.pagination"
                v-model:selected="table.selected"
                :rows="table.rows"
                :columns="table.columns"
                :loading="table.loading"
                :filter="table.filter"
                :rows-per-page-options="[20, 40, 60, 80, 100, 150, 200, 250, 300]"
            >
                <template v-slot:top-right="props">
                    <q-btn
                        round
                        size="md"
                        color="info"
                        class="q-ml-sm"
                        icon="add"
                        @click="onAddVolume">
                    </q-btn>
                    <q-btn
                        round
                        size="md"
                        color="warning"
                        class="q-ml-sm"
                        icon="delete"
                        :disabled="_.isEmpty(table.selected)"
                        @click="onTrash(table.selected)">
                    </q-btn>
                </template>
                <template #body-cell-previous="props">
                    <q-td :props="props">
                        <q-input
                            dense
                            outlined
                            type="number"
                            v-if="props.row.previousEdit"
                            v-model="props.row.previous"
                            @blur="props.row.previousEdit = false"
                            @keyup.enter="props.row.previousEdit = false"
                        />
                        <span
                            v-else
                            @click="props.row.previousEdit = true;">
                            {{ props.row.previous }}
                        </span>
                    </q-td>
                </template>
                <template #body-cell-current="props">
                    <q-td :props="props">
                        <q-input
                            dense
                            outlined
                            type="number"
                            v-if="props.row.currentEdit"
                            v-model="props.row.current"
                            @blur="props.row.currentEdit = false"
                            @keyup.enter="props.row.currentEdit = false"
                        />
                        <span v-else  @click="props.row.currentEdit = true">{{ props.row.current }}</span>
                    </q-td>
                </template>
                <template #body-cell-volume="props">
                    <q-td :props="props">
                        <span v-if="!props.row.id">{{ props.row.current - props.row.previous }}</span>
                        <span v-else>{{ props.row.volume }}</span>
                    </q-td>
                </template>
                <template #body-cell-is_paid="props">
                    <q-td :props="props">
                        <div class="q-gutter-md" style="font-size: 2em">
                            <q-icon v-if="props.row.is_paid" name="check_circle" color="positive"/>
                            <q-icon v-else name="warning" color="negative"/>
                        </div>
                    </q-td>
                </template>
                <template #body-cell-action="props">
                    <q-td :props="props">
                        <div class="row justify-end q-gutter-sm">
                            <q-btn
                                v-if="!props.row.id"
                                round
                                icon="save"
                                size="sm"
                                color="primary"
                                @click="onSaveCell(this, props)"
                            />
                        </div>
                    </q-td>
                </template>
            </q-table>
        </q-form>
    </q-page>
</template>


<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import _ from 'lodash'
import axios from "axios";


const $route = useRoute()
const $router = useRouter()
const $q = useQuasar()
const ui = reactive({
    loading: false
})
const $form = ref({
    first_name: "",
    last_name: "",
    email: "",
    billing_address: "",
    phone: "",
    phone_2: "",
    meter_id: ""
});
const table = reactive({
    loading: false,
    filter: '',
    rows: [],
    columns: [
        {
            label: "#",
            name: "id",
            field: "id",
            align: 'left',
            sortable: false,
        },
        {
            label: "Previous",
            name: "previous",
            field: "previous",
            align: 'left',
            sortable: false,
        },
        {
            label: "Current",
            name: "current",
            field: "current",
            align: 'left',
            sortable: false,
        },
        {
            label: "Volume",
            name: "volume",
            field: "volume",
            align: 'left',
            sortable: false,
        },
        {
            label: "Is Paid",
            name: "is_paid",
            field: "is_paid",
            align: 'left',
        },
        {
            label: 'Created',
            field: 'created_at',
            sortable: false,
            align: 'left',
            format: (val, row) => {
                // return moment(val).format("MMMM DD, YYYY (h:mm a)");
                return moment(val).format("YYYY-MM-DD");
            },
        },
        {
            label: 'Updated',
            field: 'updated_at',
            sortable: false,
            align: 'left',
            format: (val, row) => {
                return moment(val).format("YYYY-MM-DD");
            }
        },
        {
            label: "Action",
            name: "action",
            align: 'right'
        },
    ],
    pagination: {
        sortBy: "id",
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10,
    },
    selected: []
})



onMounted(async ()=>{
    let data = await fetch();
    $form.value = {...$form, ...data}
    table.rows = data.consumptions
    console.log( data )
})

async function fetch(){
    const { data } = await axios.get(`/api/billing/${$route.params.id}`)
    return data

}

async function onUpdate(){
    ui.loading = true
    try{
        const { data } = await axios.put(`/api/consumers/${$route.params.id}`, $form.value)
        if(data.status){
            $q.notify({
                type: 'positive',
                message: `${data.data.first_name} ${data.data.last_name} updated successfully!`
            })
        }
    }
catch(error){
        console.log(error)
        $q.notify({
            type: 'negative',
            message: "Error!"
        })
    }
    ui.loading = false
}

function onAddVolume(){
    table.rows.push({
        previousEdit:true,
        previousRef: ref(),
        currentEdit: true,
        currentRef: ref(),
        previous: '',
        current: '',
    })
}

function onAddVolumeOld(){
    $q.dialog({
        title: 'Add Volume',
        prompt: {
            model: '',
            type: 'number'
        },
        cancel: true,
        persistent: true
    }).onOk(async (volume) => {
        table.loading = true
        const { data } = await axios.post(`/api/consumption`, {
            id: $form.value.meter_id,
            volume: volume
        })
        table.rows.push(data)
        table.loading = false
    })
}

function onTrash(props){
    console.log(props)
    $q.dialog({
        title: 'Confirm',
        message: 'Would you like to trash items?',
        cancel: true,
        persistent: true
    }).onOk(async () => {
        table.loading = true
        const { data } = await axios.post(`/api/billing/${_.map(props, o => o.id).join(',')}`, {
            _method: 'delete',
        })
        if(data)
        fetch()
        table.loading = false
    })
}

function onDeleteRow(props){
    console.log(props)
    // table.rows.splice(props.rowIndex, 1);
}

async function onSaveCell(event, props){
    const { data } = await axios.post(`/api/consumption`, {
        id: $form.value.meter_id,
        previous: props.row.previous,
        current: props.row.current,
        volume: props.row.current - props.row.previous,
    })

    table.rows[props.rowIndex] = data
}
</script>
