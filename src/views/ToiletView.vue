<script setup>
import CategoryLabel from "@/components/atoms/CategoryLabel.vue";
import GroupeMark from "@/components/atoms/GroupeMark.vue";
import CtaButton from "@/components/atoms/CtaButton.vue";
import UserComment from "@/components/molecules/UserComment.vue";
</script>

<template>
  <main class="container-lite" v-track="'5f8lb0t87j'">
      <div class="toilet-bloc">
        <header>
          <div class="toilet-pictures-bloc">
            <div>
              <figure v-bind:key="i" v-for="i in 3">
                <img src="" alt="Image de la toilette">
              </figure>
            </div>
            <figure>
              <img src="" alt="Image de la toilette">
            </figure>
          </div>
          <div class="flex justify-between flex-col gap-10 lg:flex-row lg:5">
            <div class="flex flex-col gap-2">
              <h1>Name</h1>
              <section class="flex gap-2 m-1 mb-3">
                <CategoryLabel v-bind:key="c" v-for="c in 4" value="Category"/>
              </section>
              <GroupeMark average="4"/>
              <CtaButton value="Signaler les toilettes" />
            </div>
            <div class="flex flex-row gap-5 max-md:flex-col">
              <CtaButton value="Supprimer" fill variant="red"/>
              <CtaButton value="Éditer" fill/>
              <CtaButton icon="Favorite" variant="icon" size="65px" />
            </div>
          </div>
        </header>
        <section class="toilet-info">
          <p>
            Nulla quas et rerum consectetur ut omnis praesentium. Dolor cum iure temporibus facere quia. Et perspiciatis asperiores repudiandae numquam nisi quia. Facilis et sed eaque est omnis quasi. Est sit ut doloremque. Recusandae qui quasi sapiente dolore modi quo. Laudantium quod nihil harum mollitia est corporis ipsam. Neque nesciunt fugit quas ratione rerum. Rerum dignissimos hic et. Porro ut officia fuga deserunt assumenda aut nobis.           </p>
          <section>
            <div v-bind:key="rt" v-for="rt in 4" >
              <p>Rate type</p>
              <GroupeMark average="4"/>
            </div>
          </section>
        </section>

        <section class="comments-bloc">
          <p>120 Commentaires</p>
          <CtaButton value="Ajouter un commentaire" fill/>
          <section>
            <UserComment v-bind:key="rt" v-for="rt in 4" average="3" message="Oui modsjhk hhh pojlko" created-at="mars 2002" lastname="Nom" firstname="Prenom"/>
          </section>
          <CtaButton value="Voir plus de commentaires"/>
        </section>
      </div>
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

  .toilet-bloc {
    display: flex;
    flex-direction: column;
    gap: 100px;
    transition: all 0.3s;

    > header{
      display: flex;
      flex-direction: column;
      gap: 15px;

      h1{
        font-weight: 800;
        font-size: rem(48);
        line-height: rem(55);
        color: $color-black;
      }
    }

    .toilet-pictures-bloc{
      display: flex;
      gap: 15px;
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      height: 480px;

      > figure{
        width: 100%;
        height: 100%;
        flex-grow: 1;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      > div{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-height: 480px;
        figure {
          width: 100%;
          height: 100%;
          min-height: calc(30% - 78px);
          img {
            width: 100%;
            height: auto;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .toilet-info{
      display: flex;
      justify-content: space-between;
      gap: 40px;

      > p {
        flex-grow: 1;
        max-width: 50%;
        font-weight: 400;
        font-size: rem(20);
        line-height: rem(26);
        color: $color-grey
      }

      > section{
        max-width: 50%;
        gap: 30px;
        display:flex;
        flex-direction: column;
        > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;

          > p {
            color: $color-dark-grey;
            font-weight: 900;
            font-size: rem(24);
            line-height: rem(24);
          }
        }
      }
    }

    .comments-bloc{
      display: flex;
      flex-direction: column;
      gap: 60px;

      > p{
        font-weight: 600;
        font-size: rem(20);
        line-height: rem(20);
      }

      > section{
        display: grid;
        grid-template-columns: auto auto;
        gap: 30px;
        > article{
          flex-grow: 1;
          flex-basis: 50%;
          margin: 25px 0;
        }
      }
    }

  }

  @media (max-width: 768px) {

    .toilet-pictures-bloc{
      flex-direction: column;
      height: 400px!important;

      > figure{
        width: 100%;
        height:60% !important;
        flex-grow: 1;
        img{
          width: 100%;
          object-fit: cover;
        }
      }

      > div{
        order: 2;
        width: 100%!important;
        height: 40%;
        flex-direction: row!important;
        figure {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: auto;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .toilet-info{
      flex-direction: column;

      > p {
        max-width: 100%!important;
      }

      > section{
        max-width: 100%!important;
        > div {
          > p {
            font-size: rem(18);
            line-height: rem(21);
          }
        }
      }
    }

    .comments-bloc{
      gap: 20px;

      > section{
        grid-template-columns: auto!important;
        > article{
          flex-basis: 100%;
          margin: 20px 0;
        }
      }
    }
  }
</style>