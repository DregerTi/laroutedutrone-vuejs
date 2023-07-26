<script>
  import IconAdd from "@/components/icons/IconAdd.vue";
  import IconBurgerMenu from "@/components/icons/IconBurgerMenu.vue";
  import IconClose from "@/components/icons/IconClose.vue";
  import IconFilter from "@/components/icons/IconFilter.vue";
  import IconPin from "@/components/icons/IconPin.vue";
  import IconSearch from "@/components/icons/IconSearch.vue";
  import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
  import IconArrowRight from "@/components/icons/IconArrowRight.vue";

  export default {
    name: "CtaButton",
    components: {
      IconArrowRight,
      IconArrowLeft,
      IconSearch,
      IconPin,
      IconFilter,
      IconClose,
      IconBurgerMenu,
      IconAdd,
    },
    props: {
      value: {
        type: String,
        required: false
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
      fill: {
        type: Boolean,
        required: false
      },
      variant: {
        type: String,
        required: false
      }
    }

  }

</script>

<template >
  <RouterLink to="/toilet">
    <div
        class="button button-filled"
        :class="[
            fill ? 'button-filled ' : '',
            icon ? 'button-icon ' : '',
            variant ? 'button-' + variant : ''
            ]">
      <IconAdd v-if="icon == 'Add'"/>
      <IconBurgerMenu v-if="icon == 'BurgerMenu'"/>
      <IconClose v-if="icon == 'Close'"/>
      <IconPin v-if="icon == 'Pin'"/>
      <IconPin v-if="icon == 'Pin'"/>
      <IconSearch v-if="icon == 'Search'"/>
      <IconFilter v-if="icon == 'Filter'"/>
      <IconArrowLeft v-if="icon == 'ArrowLeft'"/>
      <IconArrowRight v-if="icon == 'ArrowRight'"/>
      <p v-if="value">{{ value }}</p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">

  @function rem($pxVal){
    $base: 16;
    @return calc($pxVal / $base) * 1rem;
  }

  $color-black: #222222;
  $color-white: #FAFCFE;
  $color-lightgrey: #EBEBEB;
  $color-blue-grey: #C4CCD4;
  $color-grey: #7E7E7E;
  $color-dark-grey: #7A7A7A;
  $color-primary: #1C5D99;
  $color-secondary: #8EC9D1;
  $color-success: #3ABA6B;
  $color-error: #982130;
  $color-warning: #FFA630;

  .button {
    display: flex;
    align-items: center;
    padding: rem(6) rem(15);
    border: 3px solid $color-grey;
    color: $color-grey;
    border-radius: 1em;
    gap: rem(10);
    width: fit-content;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 700;
    font-size: rem(16);

    &:hover {
      background-color: $color-grey;
      color: $color-white;
    }

    &-icon {
      & p {
        font-size: rem(14);
        font-weight: 500;
      }
        & svg{
          min-width: 1.1em;
          min-height: 1.1em;
          width: 1.1em;
          height: 1.1em;
      }
    }

    &-filled {
      border-radius: 1em;
      background-color: $color-primary!important;
      color: $color-white;
      border: none;

      &:hover {
        background-color: $color-secondary!important;
        color: $color-white;
      }
    }

    &-red {
      border-radius: 1em;
      background-color: $color-error!important;
      color: $color-white;
      border: none;

      &:hover {
        background-color: #81000e!important;
        color: $color-white;
      }
    }

    &-green {
      border-radius: 1em;
      background-color: $color-success!important;
      color: $color-white;
      border: none;

      &:hover {
        background-color: #20683b!important;
        color: $color-white;
      }
    }

  }

  //normalize
  [type=button],
  [type=reset],
  [type=submit],
  button {
    -webkit-appearance:unset;
    background-color:unset;
    background-image:unset;
  }


</style>