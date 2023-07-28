<script setup>
import CtaButton from "@/components/atoms/CtaButton.vue";
import TextImgBloc from "@/components/molecules/TextImgBloc.vue";
import ArticleImgBloc from "@/components/molecules/ArticleImgBloc.vue";
</script>

<template>
  <main class="container-lite home-bloc overflow-hidden">
    <section class="main-section">
      <div class="img" style="background: url('src/assets/images/toilet.png') no-repeat;background-size: cover;background-position: center;"></div>
      <h1>
        Bienvenue sur La Route du Trône, afin de trouver le meilleur trône autour de toi.
      </h1>
      <CtaButton v-track="'kypqo0m928'" value="Touves ton trône maintenant !" fill/>
    </section>
    <TextImgBloc img="src/assets/images/caca.png" text="La meilleure plateforme quand tu as une envie pressante, et que tu ne sais pas où aller."/>
    <h2>
      Mais comment ça marche La Route du Trône ?
    </h2>
    <TextImgBloc order="reverse" img="src/assets/images/toilet-paper.png" text="C’est simple, tu te connectes, tu indiques ton emplacement, et tu peux voir les toilettes les plus proches de toi."/>
    <ArticleImgBloc title="C’est à côté" img="src/assets/images/map.png" btnText="Touves ton trône maintenant !" text="Tu peux voir les toilettes les plus proches de toi grâce à la carte interactive, et tu peux même voir les avis des autres utilisateurs afin de trouver le meilleur trône pour toi."/>
    <section class="recommendation-bloc">

    </section>
  </main>
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

  .home-bloc {
    display: flex;
    flex-direction: column;
    gap: 100px;
    transition: all 0.3s;

    .main-section {
      display: flex;
      flex-direction: column;
      height: calc(85vh - 60px);
      justify-content: space-between;
      margin: 60px 0;
      position: relative;

      > .img{
        position: absolute;
        box-shadow: inset 14px 26px 135px 100px $color-white;
        border-radius: 350px;
        width: rem(701);
        height: rem(821);
        z-index: -1;
        right: 0px;
        top: -130px;
      }

      h1{
        font-weight: 800;
        font-size: rem(80);
        line-height: rem(90);
        width: 60%;
        color: $color-black;
      }
    }

    h2{
      font-weight: 800;
      font-size: rem(70);
      line-height: rem(80);
      color: $color-black;
    }
  }

  @media (max-width: 768px) {
    .home-bloc {
      gap: 100px;

      .main-section {
        margin: 30px 0;
        height: calc(85vh - 30px);
        > .img{
          width: rem(534);
          height: rem(625);
          right: -100px;
          top: unset;
          bottom: 40px;
        }

        h1{
          font-size: rem(48);
          line-height: rem(55);
          width: 100%;
        }
      }

      h2{
        font-size: rem(48);
        line-height: rem(55);
      }
    }
  }
</style>