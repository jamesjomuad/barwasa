<!-- eslint-disable brace-style -->
<template>
    <q-page padding class="bg-grey-2">
        <div class="col-md-12">
            <q-card>
                <!-- Title -->
                <q-card-section class="q-py-sm">
                    <div class="text-h6">Account</div>
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

        <q-form class="q-mt-md row q-col-gutter-md" @submit="onUpdate">
            <div class="col-md-12">
                <q-card>
                    <!-- Title -->
                    <q-card-section class="q-py-sm">
                        <div class="text-h6">Consumptions</div>
                    </q-card-section>
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
                    <q-separator />
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
                    <q-card-actions align="right">
                        <q-btn
                        color="primary"
                        type="submit"
                        :disable="ui.loading"
                        :loading="ui.loading"
                        >
                        Update
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
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


onMounted(async ()=>{
    const { data } = await axios.get(`/api/consumers/${$route.params.id}`)
    $form.value = {...$form, ...data}
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


</script>
