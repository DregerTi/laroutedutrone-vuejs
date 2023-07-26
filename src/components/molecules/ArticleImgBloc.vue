<template>
  <section class="article-img-bloc">
    <img v-if="order == 'normal'" :src="img" alt="illustration">
    <article>
      <h5>
        {{ title }}
      </h5>
      <p>
        {{ text }}
      </p>
      <CtaButton v-if="btnText" :value="btnText" fill/>
    </article>
    <img v-if="order == 'reverse'" :src="img" alt="illustration">
  </section>
</template>

<script>

import CtaButton from "@/components/atoms/CtaButton.vue";

export default {
  name: "ArticleImgBloc",
  components: {CtaButton},
  props: {
    text: {
      type: String,
      required: true
    },
    btnText: {
      type: String,
      required: false
    },
    title: {
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

  .article-img-bloc{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    align-items: flex-start;

    img{
      flex-grow: 1;
      width: 50%;
      object-fit: cover;
      border-radius: 30px;
    }

    > article{
      flex-grow: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: space-between;

      > h5{
        font-weight: 800;
        font-size: rem(38);
        line-height: rem(40);
        color: $color-dark-grey;
      }

      > p{
        font-weight: 400;
        font-size: rem(20);
        line-height: rem(26);
        color: $color-dark-grey
      }
    }
  }

  @media (max-width: 768px) {

    .article-img-bloc{
      flex-direction: column;

      img{
        border-radius: 20px;
        width: 100%;
      }

      > article{
        flex-direction: column;

        > h5{
          font-size: rem(28);
          line-height: rem(28);
        }
      }
    }
  }

</style>