<template>
  <header class="sub-header flex flex-col gap-10">
    <div class="w-full flex flex-col justify-between gap-6 md:flex-row">
      <div>
        <h1 class="text-3xl text-black font-medium max-md:text-xl">{{ title }}</h1>
        <p class="text-lg font-medium text-grey">{{ text }}</p>
      </div>

      <div class="flex gap-2">
        <CtaButton v-if="{ deleteForm }" value="Supprimer" />

        <CtaButton :value="{ btnText }" fill="true" />

      </div>
    </div>

    <div class="w-full flex justify-between">
      <div></div>
      <div v-if="{ trieLabel }" class="flex flex-row gap-1 items-center">
        {% if trieLabel is defined %}
        <label for="countries" class="block mb-0 text-md font-medium text-grey ">{{ trieLabel }}:</label>
        <select id="countries" class="bg-gray-50 border-0 text-grey hover:text-primary text-md font-medium rounded-lg focus:ring-none focus:border-0 block w-32 p-0.5 href-select" onchange="location = this.value;">

          <option selected hidden>{{ trieDefaultValue }}</option>

          <option >plus récent</option>
          <option >plus ancien</option>
          <option >nom A - Z</option>
          <option >nom Z - A</option>
        </select>

      </div>
    </div>

  </header>
</template>

<script>
import CtaButton from "@/components/atoms/CtaButton.vue";

export default {
  name: "SubHeader",
  components: {CtaButton},
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    deleteForm: {
      type: Boolean,
      required: false,
    },
    trieLabel: {
      type: String,
      required: false,
    },
    trieDefaultValue: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped lang="scss">
.sub-header {
  margin-bottom: 80px;

  :first-child{

    .button{
      height: fit-content!important;
    }

  }
}

@media (max-width: 768px) {
  .sub-header {
    flex-direction: column;
    gap: 20px;
  }
}
</style>