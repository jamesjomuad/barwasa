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
                v-model:pagination="table.pagination"
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
                            <q-btn round icon="delete" size="sm" color="primary" @click="onTrash(props)"/>
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
            sortable: true,
        },
        {
            label: "Volume",
            name: "volume",
            field: "volume",
            align: 'left',
            sortable: true,
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
            sortable: true,
            align: 'left',
            format: (val, row) => {
                // return moment(val).format("MMMM DD, YYYY (h:mm a)");
                return moment(val).format("YYYY-MM-DD");
            },
        },
        {
            label: 'Updated',
            field: 'updated_at',
            sortable: true,
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
    }
})


onMounted(async ()=>{
    const { data } = await axios.get(`/api/consumers/${$route.params.id}`)
    $form.value = {...$form, ...data}
    table.rows = data.consumptions
})


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
    $q.dialog({
        title: 'Confirm',
        message: 'Would you like to trash volume?',
        cancel: true,
        persistent: true
    }).onOk(async () => {
        table.loading = true
        const { data } = await axios.post(`/api/consumption/${props.row.id}`, {
            _method: 'delete',
        })
        if(data)
        table.rows.splice(props.rowIndex, 1);
        table.loading = false
    })
}

</script>
