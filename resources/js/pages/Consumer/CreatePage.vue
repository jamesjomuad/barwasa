<template>
  <q-page
    padding
    class="bg-grey-2"
  >
    <q-form
      class="q-pa-md row q-col-gutter-md"
      @submit="onCreate"
    >
      <div class="col-md-12">
        <q-card>
          <!-- Title -->
          <q-card-section class="q-py-sm">
            <div class="text-h6">
              Account
            </div>
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
          <q-card-actions align="right">
            <q-btn
              color="primary"
              type="submit"
            >
              Create
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </q-form>
  </q-page>
</template>


<script setup>
import { ref, reactive, } from "vue";

const $form = reactive({
    first_name: "",
    last_name: "",
    billing_address: "",
    phone: "",
    phone_2: "",
    age: "",
},);


async function onCreate(){

}

</script>
