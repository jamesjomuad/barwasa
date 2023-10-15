<template>
  <q-page class="flex flex-center bg-secondary">
    <form class="row" @submit.prevent="onLogin">
      <q-card bordered class="q-pa-lg shadow-1" style="min-width: 450px">
        <q-card-section>
          <img
            alt="Quasar logo"
            src="~assets/logo.png"
            style="
              width: 150px;
              margin: 0 auto;
              display: block;
              margin-top: -100px;
            "
          />
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              square
              filled
              clearable
              v-model="$form.username"
              label="Username"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input
              square
              filled
              v-model="$form.password"
              label="Password"
              :rules="[(val) => !!val || 'Field is required']"
              :type="isPwd ? 'password' : 'text'"
              ><template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                /> </template
            ></q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="Login"
            type="submit"
          />
        </q-card-actions>
        <!-- <q-card-section class="text-center q-pa-none">
          <p class="text-grey-6">Not reigistered? Created an Account</p>
        </q-card-section> -->
      </q-card>
    </form>
  </q-page>
</template>

<script setup>
import { ref, reactive } from "vue";
const $form = reactive({ username: null, password: null });
const isPwd = ref(true);

function onLogin(params) {
  console.log($form);
}
</script>
