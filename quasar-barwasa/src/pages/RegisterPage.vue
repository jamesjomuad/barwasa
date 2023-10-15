<template>
  <q-page class="flex flex-center bg-secondary">
    <q-card bordered class="q-pa-lg shadow-1" style="max-width: 750px">
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
        <q-form class="row q-col-gutter-md" @submit.prevent="onRegister">
          <div class="col-6">
            <q-input
              square
              filled
              v-model="$user.firstName"
              label="First Name"
              :rules="validation.required"
            />
          </div>
          <div class="col-6">
            <q-input
              square
              filled
              v-model="$user.lastName"
              label="Last Name"
              :rules="validation.required"
            />
          </div>
          <div class="col-12">
            <q-input
              square
              filled
              v-model="$user.address"
              label="Address"
              :rules="validation.required"
            />
          </div>
          <div class="col-6">
            <q-input
              square
              filled
              v-model="$user.username"
              label="Username"
              :rules="validation.required"
            />
          </div>
          <div class="col-6">
            <q-input
              square
              filled
              v-model="$user.email"
              label="Email"
              type="email"
              :rules="validation.required"
            />
          </div>
          <div class="col-6">
            <q-input
              square
              filled
              v-model="$user.password"
              label="Password"
              :rules="validation.required"
              :type="isPwd ? 'password' : 'text'"
              ><template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                /> </template
            ></q-input>
          </div>
          <div class="col-6">
            <q-input
              square
              filled
              v-model="$user.passwordConfirm"
              label="Confirm Password"
              :rules="validation.confirmPassword"
              :type="isPwd ? 'password' : 'text'"
              ><template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                /> </template
            ></q-input>
          </div>
          <div class="col-12">
            <q-btn
              unelevated
              color="light-green-7"
              size="lg"
              class="full-width"
              label="Register"
              type="submit"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const $user = reactive({
  firstName: null,
  lastName: null,
  address: null,
  username: null,
  password: null,
  passwordConfirm: null,
});
const isPwd = ref(true);
const validation = reactive({
  confirmPassword: computed(() => [
    (val) => val == $user.password || "Password not matched!",
  ]),
  required: computed(() => [(val) => !!val || "Field is required"]),
});

function onRegister() {
  console.log($user);
}
</script>
