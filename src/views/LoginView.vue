<template>
  <main class="px-6 py-8 text-white bg-gray-800">
    <div class="justify-center xl:px-40 xl:flex login-wrapper">
      <div class="mb-8 xl:w-3/4 login-splash xl:mb-0">
        <h2 class="mb-6 text-2xl font-semibold text-center xl:text-left login-splash-title xl:text-3xl xl:font-bold">Selamat datang di halaman login!</h2>
        <img src="../assets/login.svg" alt="Login Splash Images" class="xl:w-2/4 login-splash-img" />
      </div>
      <div class="xl:w-1/4 login-form">
        <h2 class="text-2xl font-semibold text-center xl:text-left xl:text-3xl xl:login-title xl:font-bold">Login</h2>
        <h4 class="text-center login-sub xl:text-left">Please login first!</h4>
        <form action="" method="post" class="my-8 form-login">
          <div class="relative z-0 mb-6">
            <input
              type="text"
              id="floating-username"
              class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-[#0099ff] peer"
              placeholder=" "
              name="username"
            />
            <label
              for="floating-username"
              class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Username</label
            >
          </div>
          <div class="relative z-0 mb-6">
            <input
              :type="type"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-[#0099ff] peer"
              placeholder=" "
              name="password"
            />
            <label
              for="floating_password"
              class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Password</label
            >
          </div>
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-[#0099ff] bg-gray-100 border-gray-300 rounded focus:ring-[#0099ff] dark:focus:ring-[#0099ff] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              @change="showPassword"
            />
            <label for="default-checkbox" class="ml-2 font-medium text-white text-md dark:text-gray-300">Show password</label>
          </div>
          <div class="login-button">
            <button
              type="submit"
              class="text-white bg-[#0099ff] hover:bg-[#0088ff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#0099ff] dark:hover:bg-[#0099ff] focus:outline-none dark:focus:ring-[#0088ff] w-full xl:w-auto"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    document.title = "Login | Bank Kisi-kisi Ujian SMAN 1 Rawamerta";
  },
  data() {
    return {
      type: "password",
    };
  },
  methods: {
    showPassword() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>
