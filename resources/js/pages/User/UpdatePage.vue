<!-- eslint-disable brace-style -->
<template>
    <q-page padding class="bg-grey-2">
        <q-form class="q-pa-md row q-col-gutter-md" @submit="onUpdate">
            <div class="col-md-12">
                <q-card>
                    <!-- Title -->
                    <q-card-section class="q-py-sm">
                        <div class="text-h6"> Account </div>
                    </q-card-section>

                    <!-- Fields -->
                    <q-card-section>
                        <div class="row q-col-gutter-md">
                        <q-input
                            v-model="$form.first_name"
                            dense
                            outlined
                            label="First Name"
                            name="first_name"
                            class="col-6"
                        >
                            <template v-slot:prepend>
                            <q-icon name="account_circle" />
                            </template>
                        </q-input>

                        <q-input
                            v-model="$form.last_name"
                            dense
                            outlined
                            lazy-rules
                            label="Last name *"
                            name="last_name"
                            class="col-6"
                        >
                            <template v-slot:prepend>
                            <q-icon name="account_circle" />
                            </template>
                        </q-input>

                        <q-input
                            v-model="$form.phone"
                            dense
                            outlined
                            label="Phone"
                            lazy-rules
                            class="col-6"
                        >
                            <template v-slot:prepend>
                            <q-icon name="phone" />
                            </template>
                        </q-input>

                        <q-input
                            v-model="$form.phone_2"
                            dense
                            outlined
                            label="Work Phone"
                            lazy-rules
                            class="col-6"
                        >
                            <template v-slot:prepend>
                            <q-icon name="phone" />
                            </template>
                        </q-input>

                        <q-input
                            v-model="$form.email"
                            dense
                            outlined
                            label="Email"
                            lazy-rules
                            class="col-6"
                        >
                            <template v-slot:prepend>
                            <q-icon name="email" />
                            </template>
                        </q-input>

                        <q-input
                            v-model="$form.dob"
                            dense
                            outlined
                            label="Date of Birth"
                            lazy-rules
                            class="col-6"
                            readonly
                        >
                            <template v-slot:prepend>
                            <q-icon name="calendar_month" />
                            </template>
                            <template v-slot:after>
                                <q-btn icon="event" round color="primary">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="$form.dob">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </template>
                        </q-input>

                        <q-input
                            v-model="$form.billing_address"
                            dense
                            outlined
                            label="Address"
                            lazy-rules
                            class="col-12"
                        >
                            <template v-slot:prepend>
                            <q-icon name="home" />
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
                        color="negative"
                        @click="onRemove"
                        :disable="ui.loading"
                        :loading="ui.loading"
                        >
                        Remove
                        </q-btn>
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
    const { data } = await axios.get(`/api/users/${$route.params.id}`)
    $form.value = {...$form, ...data}

    console.log($form.value)
})


async function onUpdate(){
    ui.loading = true
    try{
        const { data } = await axios.put(`/api/users/${$route.params.id}`, $form.value)
        if(data.status){
            $q.notify({
                type: 'positive',
                message: `Updated successfully!`
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

function onRemove(){
    $q.dialog({
        title: 'Confirm',
        message: 'Would you like to procceed?',
        cancel: true,
        persistent: true
    }).onOk(async () => {
        ui.loading = true
        try{
            const { data } = await axios.post(`/api/users/${$route.params.id}`, {
                _method: 'delete'
            })
            if(data){
                $router.push('/system/users')
                $q.notify({
                    type: 'positive',
                    message: `Remove successfully!`
                })
            }
        } catch(error){
            console.log(error)
            $q.notify({
                type: 'negative',
                message: "Error!"
            })
        }
        ui.loading = false
    })

}

</script>
