<template>
  <RouterLink
      :to="{name: path, params: pathParams}"
      class="flex items-center gap-3 p-3 text-base cursor-pointer max-md:w-full "
      :class="[ active == true ? 'text-white bg-primary rounded-lg font-medium' : 'text-grey hover:text-primary' ]"
  >
    <IconAdd :size="[ iconSize ]" v-if="icon == 'Add'"/>
    <IconBurgerMenu :size="[ iconSize ]" v-if="icon == 'BurgerMenu'"/>
    <IconClose :size="[ iconSize ]" v-if="icon == 'Close'"/>
    <IconPin :size="[ iconSize ]" v-if="icon == 'Pin'"/>
    <IconPin :size="[ iconSize ]" v-if="icon == 'Pin'"/>
    <IconSearch :size="[ iconSize ]" v-if="icon == 'Search'"/>
    <IconFilter :size="[ iconSize ]" v-if="icon == 'Filter'"/>
    <IconArrowLeft :size="[ iconSize ]" v-if="icon == 'ArrowLeft'"/>
    <IconArrowRight :size="[ iconSize ]" v-if="icon == 'ArrowRight'"/>
    <IconAccount :size="[ iconSize ]" v-if="icon == 'Account'"/>
    <IconContribution :size="[ iconSize ]" v-if="icon == 'Contribution'"/>
    <IconMyRates :size="[ iconSize ]" v-if="icon == 'MyRates'"/>
    <IconReport :size="[ iconSize ]" v-if="icon == 'Report'"/>
    <IconFavorite :size="[ iconSize ]" v-if="icon == 'Favorite'"/>
    <IconWc :size="[ iconSize ]" v-if="icon == 'Wc'"/>
    <IconFlag :size="[ iconSize ]" v-if="icon == 'Flag'"/>
    <IconPlace :size="[ iconSize ]" v-if="icon == 'Place'"/>
    <IconRateType :size="[ iconSize ]" v-if="icon == 'RateType'"/>
    <IconCategory :size="[ iconSize ]" v-if="icon == 'Category'"/>
    <IconUsers :size="[ iconSize ]" v-if="icon == 'Users'"/>
    <IconFlagCircle :size="[ iconSize ]" v-if="icon == 'FlagCircle'"/>

    {{ value }}
  </RouterLink>
</template>

<script>
import IconAdd from "@/components/icons/IconAdd.vue";
import IconBurgerMenu from "@/components/icons/IconBurgerMenu.vue";
import IconClose from "@/components/icons/IconClose.vue";
import IconFilter from "@/components/icons/IconFilter.vue";
import IconPin from "@/components/icons/IconPin.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import IconAccount from "@/components/icons/IconAccount.vue";
import IconContribution from "@/components/icons/IconContribution.vue";
import IconMyRates from "@/components/icons/IconMyRates.vue";
import IconReport from "@/components/icons/IconReport.vue";
import IconFavorite from "@/components/icons/IconFavorite.vue";
import IconWc from "@/components/icons/IconWc.vue";
import IconFlag from "@/components/icons/IconFlag.vue";
import IconPlace from "@/components/icons/IconPlace.vue";
import IconRateType from "@/components/icons/IconRateType.vue";
import IconCategory from "@/components/icons/IconCategory.vue";
import IconUsers from "@/components/icons/IconUsers.vue";
import IconFlagCircle from "@/components/icons/IconMyRates.vue";
export default {
  name: "MenuButton",
  components: {
    IconFlagCircle,
    IconUsers,
    IconCategory,
    IconRateType,
    IconPlace,
    IconFlag,
    IconWc,
    IconFavorite,
    IconReport,
    IconMyRates,
    IconContribution,
    IconAccount,
    IconAdd,
    IconBurgerMenu,
    IconClose,
    IconPin,
    IconSearch,
    IconFilter,
    IconArrowLeft,
    IconArrowRight,
  },
  props : {
    value: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: false
    },
    pathParams: {
      type: Object,
      required: false,
      default: () => {}
    },
    icon: {
      type: String,
      required: false
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    iconSize: {
      type: Number,
      required: false,
    }
  }
}
</script>

<style scoped>

</style>