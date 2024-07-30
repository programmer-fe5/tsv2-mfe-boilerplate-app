<script setup lang="ts">
import { onMounted, computed, ref, shallowRef } from 'vue';
import {
  TSInputEmail,
  TSInputText,
  TSInputPassword,
  TSCheckbox,
  TSButton,
  TSCalendar,
  TSDropdown,
} from 'tsv2-library';
import { createUser, switchActive } from '@/utils';
import { User } from '@/types/example.type';
// Import { Product } from '@/types/product.type';
import RestfulService from '@/services/restful.service';
// Import { createUser, switchActive } from '@/utils';

const numbers: number[] = [4, 2, 7, 1, 9];
const sortedAscending = [...numbers].sort((a, b) => a - b);
let printString = '';
for (const index in sortedAscending) {
  printString += sortedAscending[index];
}

const currentUser = ref<User>();
const username = computed(() => {
  return currentUser.value?.firstName;
});
const useractive = computed(() => {
  return !!currentUser.value?.isActive;
});
const showUser = (firstName: string, email: string): User => {
  const user = createUser(firstName, email);
  return user;
};

const props = defineProps<{
  foo: string;
  bar?: number;
}>();
const emit = defineEmits<{
  'update:modelValue': [payload?: string];
}>();
emit('update:modelValue', props.foo);

const postData = (usernamePost: string | void): void => {
  if (!usernamePost) usernamePost = '';
  const postedData = {
    name: usernamePost,
    data: {
      'year': 2019,
      'price': 1849.99,
      'CPU model': 'Intel Core i9',
      'Hard disk size': '1 TB',
    },
  };
  const postDataObject = RestfulService.postData(postedData);
  // eslint-disable-next-line no-console
  console.log(postDataObject);
};

const showGetObjects = ref<string>('');
const nameValue = shallowRef<string>('');
const emailValue = shallowRef<string>('');
const rememberMeValue = shallowRef<boolean>(true);
const idTypeValue = shallowRef<string>('');
const dropdownItems = ref(['KTP', 'SIM']);

onMounted(async () => {
  const { data } = await RestfulService.getData();
  showGetObjects.value = data[0];
  // eslint-disable-next-line no-console
  console.log(data);
});
</script>

<template>
  <div
    class="p-8 m-8 shadow-xl shadow-black rounded-2xl container mx-auto w-full sm:w-1/2 bg-slate-200"
    data-ts-section="login-box"
  >
    <div class="text-center mb-5">
      <img
        alt="Vue"
        class="mb-3 container mx-auto h-16 w-16"
        height="50"
        src="../../assets/img/logo.png"
      />
      <div class="text-900 font-medium text-3xl mb-3">Welcome</div>
      <div class="text-600 font-medium line-height-3">
        There are {{ printString }} users currently active
      </div>
    </div>

    <div>
      <label class="block text-900 font-medium mb-2" for="email1">
        Name ({{ nameValue }})
      </label>
      <TSInputText
        id="name1"
        v-model="nameValue"
        class="mb-3 text-xl"
        placeholder="Enter name"
      />

      <label class="block text-900 font-medium mb-2" for="email1">
        Email ({{ emailValue }})
      </label>
      <TSInputEmail
        id="email1"
        v-model="emailValue"
        :use-validator="true"
        class="mb-3 text-xl"
        placeholder="Enter email"
      />

      <label class="block text-900 font-medium mb-2" for="password1">
        Password
      </label>
      <TSInputPassword
        id="password1"
        :disabled="true"
        class="mb-2"
        placeholder="Enter password"
      />

      <label class="block text-900 font-medium mb-2" for="dob1">
        Date of Birth
      </label>
      <TSCalendar id="dob1" class="w-full mb-2" />

      <label class="block text-900 font-medium mb-2" for="id-type1">
        ID Type ({{ idTypeValue }})
      </label>
      <TSDropdown
        id="id-type1"
        v-model="idTypeValue"
        :options="dropdownItems"
        class="w-full mb-2"
      />

      <div class="flex justify-between mb-6">
        <div class="flex align-items-center">
          <TSCheckbox
            id="rememberme1"
            v-model="rememberMeValue"
            :binary="true"
            :value="true"
            @update:model-value="console.log"
            class="mr-2"
          />
          <label for="rememberme1">Remember me ({{ rememberMeValue }})</label>
        </div>
        <div
          class="font-medium no-underline text-blue-500 text-right cursor-pointer"
        >
          Forgot password?
        </div>
      </div>

      <div class="flex justify-center">
        <TSButton
          @click="currentUser = showUser(nameValue, emailValue)"
          class="!w-full !text-base !p-4"
          icon="user-settings"
          label="Sign In"
        />
      </div>
      <div class="flex justify-center mt-2">
        {{ username }}
      </div>

      <div class="flex justify-center">
        <TSButton
          @click="
            {
              switchActive(currentUser);
            }
          "
          class="!w-full !text-base !p-4"
          icon="user-settings"
          label="Switch Active"
        />
      </div>
      <div class="flex justify-center mt-2">
        {{ useractive }}
      </div>

      <div class="flex justify-center">
        <TSButton
          @click="
            {
              postData(username);
            }
          "
          class="!w-full !text-base !mt-4 !p-4"
          icon="user-settings"
          label="Post Data"
        />
      </div>
      <div class="flex justify-center mt-2">
        {{ showGetObjects[0] }}
      </div>
      <ul v-if="useractive">
        <li :key="index" v-for="(showGetObject, index) in showGetObjects">
          {{ index }} - {{ showGetObject }}
        </li>
      </ul>
    </div>
  </div>
</template>
