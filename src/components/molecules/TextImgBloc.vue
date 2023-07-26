<template>
  <section class="text-img-bloc">
    <img v-if="order == 'normal'" :src="img" alt="illustration">
    <h4 class="text-right">
      {{ text }}
    </h4>
    <img v-if="order == 'reverse'" :src="img" alt="illustration">
  </section>
</template>

<script>
export default {
  name: "TextImgBloc",
  props: {
    text: {
      type: String,
      required: true
    },
    img: {
      type: Object,
      required: true
    },
    order: {
      type: String,
      required: false,
      default: "normal"
    }
  }
}
</script>

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

  .text-img-bloc{
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
      width: 250px;
      height: 250px;
      border-radius: 50px;
      margin: 80px;
    }

    h4{
      max-width: 470px;
      font-weight: 800;
      font-size: rem(30);
      line-height: rem(38);
      color: $color-secondary;
    }
  }

  @media (max-width: 768px) {

    .text-img-bloc{
      flex-direction: column;

      img{
        margin: 60px;
      }

      h4{
        margin: 0 40px;
        max-width: 100%;
        font-size: rem(24);
        line-height: rem(24);
      }
    }
  }

</style>