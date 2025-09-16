<template>
  <div class="language-switcher">
    <button @click="switchLanguage"
      class=" hover:text-PrimaryPL3 flex items-center gap-2 transition-all duration-300  ease-in-out"
      :class="isWhite ? 'text-white ' : 'text-primary'">
      <span class="text-base font-medium">
        {{
          currentLocale === "en" ? "AR" : "EN"
        }}
      </span>
      <!-- <img src="~/assets/img/Utils/lang.svg" class="size-4 " alt="lang"> -->
    </button>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const props = defineProps({
  isWhite: {
    type: Boolean,
    default: false
  }
})

const currentLocale = ref(locale.value);


const switchLanguage = async () => {
  // const newLocale = currentLocale.value === "en" ? "ar" : "en";
  // document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  // currentLocale.value = newLocale;
  // await setLocale(newLocale);
};
</script>

<style scoped></style>
