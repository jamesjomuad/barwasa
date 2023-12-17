<template>
    <q-page padding>
        <q-card>
            <q-splitter v-model="splitterModel" style="height: 250px">
                <template v-slot:before>
                    <q-tabs align="left" vertical v-model="tab" class="bg-grey-2 shadow-2">
                        <q-tab name="rate" icon="trending_up" label="Rate" />
                        <q-tab name="role" icon="admin_panel_settings" label="Role" />
                    </q-tabs>
                </template>
                <template v-slot:after>
                    <q-tab-panels
                        v-model="tab"
                        animated
                        swipeable
                        vertical
                        transition-prev="jump-up"
                        transition-next="jump-up"
                    >
                        <q-tab-panel name="rate" style=" min-height: 240px; ">
                            <div class="text-h6 q-mb-md">Amount Per Cubic</div>
                            <div class="row q-col-gutter-md">
                                <q-input
                                    v-model="$form.volume.rate"
                                    dense
                                    outlined
                                    label="Rate"
                                    name="rate"
                                    class="col-3"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="currency_ruble" />
                                    </template>
                                </q-input>
                                <q-select
                                    v-model="$form.volume.unit"
                                    :options="$form.volume.units"
                                    dense
                                    outlined
                                    label="Unit"
                                    name="unit"
                                    class="col-3"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="water_drop" />
                                    </template>
                                </q-select>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="role">
                            <div class="text-h6">Roles</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </q-tab-panel>
                    </q-tab-panels>
                </template>
            </q-splitter>
            <q-separator />
            <q-card-actions align="right">
                <q-btn color="primary" @click="onSave">Save</q-btn>
            </q-card-actions>
        </q-card>
    </q-page>
</template>


<script setup>
import { ref, reactive, onMounted } from "vue";
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'


const $router = useRouter();
const $q = useQuasar()
const tab = ref('rate')
const splitterModel = ref(8)
const $form = reactive({
    volume: {
        rate: null,
        unit: null,
        units: [
            { label: "Milliliter (mL or ml)", value:"ml"},
            { label: "Liter (L or l)", value:"l"},
            { label: "Cubic Meter (m³)", value:"m"},
            { label: "Cubic Inch (in³)", value:"in"},
            { label: "Cubic Foot (ft³)", value:"ft"},
            { label: "Gallon (gal)", value:"gal"},
        ]
    },
})


onMounted(()=>{
    $form.volume.unit = $form.volume.units[2]
})


function onSave(){

}

</script>
