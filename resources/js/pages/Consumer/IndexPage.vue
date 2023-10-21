<template>
  <q-page padding class="bg-grey-2">
        <!-- Table -->
        <div class="col-auto">
            <q-table
                :dark="$q.dark.isActive"
                flat
                bordered
                binary-state-sort
                title="Consumers"
                row-key="id"
                v-model:pagination="pagination"
                :rows="rows"
                :columns="columns"
                :loading="loading"
                :filter="filter"
                @request="onRequest"
                :rows-per-page-options="[20, 40, 60, 80, 100, 150, 200, 250, 300]"
            >
                <template v-slot:top-right="props">
                    <q-input
                        outlined
                        dense
                        ref="search"
                        debounce="300"
                        v-model="filter"
                        placeholder="Search"
                        class="q-ma-xs"
                    >
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                    </q-input>
                    <!-- <q-btn
                        round
                        size="md"
                        icon="event"
                        class="q-ml-sm"
                        color="primary">
                        <q-menu ref="qDateMenu" anchor="bottom start" self="top left">
                            <q-date
                                range
                                v-model="dateRange.ref"
                                @range-end="onDateSelect">
                            </q-date>
                        </q-menu>
                    </q-btn> -->
                    <q-btn
                        round
                        size="md"
                        color="primary"
                        class="q-ml-sm"
                        icon="add"
                        to="/consumers/create">
                    </q-btn>
                    <q-btn
                        flat
                        round
                        size="md"
                        class="q-ml-sm"
                        color="grey-5"
                        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                        @click="props.toggleFullscreen"
                    >
                        <q-tooltip>Toggle Fullscreen</q-tooltip>
                    </q-btn>
                </template>
                <template #body-cell-invoice="props">
                    <q-td :props="props">
                        <div class="q-gutter-md" style="font-size: 2em">
                            <q-icon v-if="props.row.xero_invoice_id" name="check_circle" color="positive"/>
                            <q-icon v-else name="warning" color="negative"/>
                        </div>
                    </q-td>
                </template>
                <template #body-cell-payment="props">
                    <q-td :props="props">
                        <div class="q-gutter-md" style="font-size: 2em">
                            <q-icon v-if="props.row.payment" name="check_circle" color="positive"/>
                            <q-icon v-else name="warning" color="negative"/>
                        </div>
                    </q-td>
                </template>
                <template #body-cell-action="props">
                    <q-td :props="props">
                        <div class="row justify-end q-gutter-sm">
                            <q-btn-dropdown
                                flat
                                rounded
                                color="primary"
                                dropdown-icon="more_vert"
                                class="card-action"
                            >
                                <q-list>
                                    <q-item clickable @click="onView(props)">
                                        <q-item-section>
                                            <q-item-label>View</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-item v-if="!props.row.xero_invoice_id" clickable>
                                        <q-item-section>
                                            <q-item-label>Generate Invoice</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-item clickable>
                                        <q-item-section>
                                            <q-item-label>Resend Email</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-item clickable @click="mailTo(props.row)">
                                        <q-item-section>
                                            <q-item-label>Email</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                    </q-td>
                </template>

                <template v-slot:loading>
                    <q-inner-loading showing color="primary" />
                </template>
            </q-table>
        </div>
  </q-page>
</template>


<script setup>
import { ref, onMounted } from "vue";


const columns = ref([
    {
        label: "#",
        name: "id",
        field: "id",
        sortable: true,
    },
    {
        label: "First name",
        name: "first_name",
        field: "first_name",
        sortable: true,
    },
    {
        label: "Last Name",
        name: "last_name",
        field: "last_name",
        sortable: true,
    },
    {
        label: 'Created',
        field: 'created_at',
        sortable: true,
        align: 'left',
        format: (val, row) => {
            return moment(val).format("MMMM DD, YYYY (h:mm a)");
        },
    },
    {
        label: 'Updated',
        field: 'updated_at',
        sortable: true,
        align: 'left',
        format: (val, row) => {
            return moment(val).format("MMMM DD, YYYY (h:mm a)");
        }
    }
]);
const rows = ref([]);
const filter = ref('')
const loading = ref(false);
const pagination = ref({
    sortBy: "id",
    descending: true,
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 10,
});


onMounted(() => {
    onRequest({
        pagination: pagination.value,
        filter: null,
    });
});


//  Server Request
async function onRequest(props) {
    const { page, rowsPerPage, sortBy, descending } = props.pagination;
    const filter = props.filter; //  Search bar value

    loading.value = true;

    // get all rows if "All" (0) is selected
    const fetchCount = (rowsPerPage === 0) ? pagination.value.rowsNumber : rowsPerPage;

    const params = {
        filter: filter,
        limit: fetchCount == 1 ? -1 : fetchCount,
        sortBy: sortBy,
        orderBy: descending ? "desc" : "asc",
        page: page,
        per_page: rowsPerPage
    };


    try {
        const { data } = await axios.get(`/api/consumers`)

        console.log(data)

        pagination.value.rowsNumber = data.total;

        // clear out existing data and add new
        rows.value.splice(0, rows.value.length, ...data.data);

        // don't forget to update local pagination object
        pagination.value.page = page;
        pagination.value.rowsPerPage = rowsPerPage;
        pagination.value.sortBy = sortBy;
        pagination.value.descending = descending;
    } catch (error) {
        $q.notify({
            color: 'negative',
            message: error.response.statusText,
            icon: 'report_problem',
            position: 'bottom-right'
        })
        loading.value = false;
    }

    // ...and turn of loading indicator
    loading.value = false;
}

</script>
