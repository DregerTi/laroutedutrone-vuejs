<script setup>
import CategoryLabel from "@/components/atoms/CategoryLabel.vue";
import ItemCard from "@/components/molecules/ItemCard.vue";
import CtaButton from "@/App.vue";
import OpenStreetMap from "@/components/atoms/OpenStreetMap.vue";
</script>

<template>
  <div class="container-large pt-[81.6px]">
    <div class="filter-toilet-map-bloc">
      <section class="filter-bloc">
        <nav class="selected-fliters">
          <CategoryLabel value="favoris"/>
          <CategoryLabel value="places"/>
        </nav>
        <nav class="filter-btns">
          <div class="wrapper">
            <div class="modal-toggle">
              <CtaButton icon="Filter" text="Filtrer" fill="false"/>
            </div>
          </div>

        </nav>
      </section>
      <section class="toilet-list-pagination-nav-bloc">
        <labe>
          <span>27</span>
          Résultats
        </labe>
        <div class="toilet-list-bloc">
          <ItemCard v-bind:key="tc" v-for="tc in 27" average="4" name="Card toilette" categories="['handicapé', 'famille']"/>
          <tr>
            <div class="text-4xl text-grey p-8 font-medium" colspan="6">On a rien pour toi, bonne chance! 😢</div>
          </tr>
        </div>
      </section>
      <div class="map-bloc relative">
        <div id='map'>
          <OpenStreetMap/>
        </div>
        <div class="absolute bottom-6 right-6 max-md:bottom-64 max-md:right-5">
          <a class="" href="">
            <div class="button button-filled p-3">
              <svg viewBox="0 0 50 50" height="15" width="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-current" d="M24 28.0499C24.5334 28.0499 24.9667 27.8916 25.3 27.5749C25.6334 27.2582 25.8 26.8332 25.8 26.2999V22.0499H30C30.5334 22.0499 30.9667 21.8916 31.3 21.5749C31.6334 21.2582 31.8 20.8332 31.8 20.2999C31.8 19.7666 31.6334 19.3332 31.3 18.9999C30.9667 18.6666 30.5334 18.4999 30 18.4999H25.8V14.2999C25.8 13.7666 25.6334 13.3332 25.3 12.9999C24.9667 12.6666 24.5334 12.4999 24 12.4999C23.4667 12.4999 23.0334 12.6666 22.7 12.9999C22.3667 13.3332 22.2 13.7666 22.2 14.2999V18.4999H18C17.4667 18.4999 17.0334 18.6666 16.7 18.9999C16.3667 19.3332 16.2 19.7666 16.2 20.2999C16.2 20.8332 16.3667 21.2582 16.7 21.5749C17.0334 21.8916 17.4667 22.0499 18 22.0499H22.2V26.2999C22.2 26.8332 22.3667 27.2582 22.7 27.5749C23.0334 27.8916 23.4667 28.0499 24 28.0499ZM24 38.8999C28.1334 35.0999 31.1917 31.6499 33.175 28.5499C35.1584 25.4499 36.15 22.7332 36.15 20.3999C36.15 16.7332 34.975 13.7249 32.625 11.3749C30.275 9.0249 27.4 7.8499 24 7.8499C20.6 7.8499 17.725 9.0249 15.375 11.3749C13.025 13.7249 11.85 16.7332 11.85 20.3999C11.85 22.7332 12.8667 25.4416 14.9 28.5249C16.9334 31.6082 19.9667 35.0666 24 38.8999ZM24 44.0499C23.6334 44.0499 23.275 43.9916 22.925 43.8749C22.575 43.7582 22.2667 43.5832 22 43.3499C17 38.8832 13.275 34.7582 10.825 30.9749C8.37502 27.1916 7.15002 23.6666 7.15002 20.3999C7.15002 15.1332 8.84169 10.9416 12.225 7.8249C15.6084 4.70824 19.5334 3.1499 24 3.1499C28.4667 3.1499 32.3917 4.70824 35.775 7.8249C39.1584 10.9416 40.85 15.1332 40.85 20.3999C40.85 23.6666 39.625 27.1916 37.175 30.9749C34.725 34.7582 31 38.8832 26 43.3499C25.7334 43.5832 25.4334 43.7582 25.1 43.8749C24.7667 43.9916 24.4 44.0499 24 44.0499Z" fill="white"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
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

  .filter-toilet-map-bloc {
    //display: flex;
    //flex-direction: column;
    //gap: 40px;
    transition: all 0.3s;
    margin: 40px 0;
    height: calc(100vh - 180px);
    min-height: 500px;
    display: grid;
    grid-template-rows: auto minmax(500px, 1fr);
    grid-template-columns: calc(50% - 25px) calc(50% - 25px);
    grid-template-areas:
    "header header"
    "toiletList map";
    column-gap: 50px;
    row-gap: 40px;

    .filter-bloc{
      width: 100%;
      grid-area: header;
      display: flex;
      justify-content: space-between;
      gap: 40px;
      align-items: center;

      .selected-fliters{
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        overflow-x: scroll;

        .category-label{
          margin: 0;
          cursor: pointer;
        }
      }

      .filter-btns{
        display: flex;
        gap: 10px;
        flex-wrap: nowrap;

        .parmas-btn-mb{
          display: none;
        }

        .button-icon {
          padding: 0.344rem 1rem;
          border: 2px solid $color-grey;
        }
      }
    }



    .toilet-list-pagination-nav-bloc{
      grid-area: toiletList;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      > labe:nth-child(1) {
        display: none;
      }

      .toilet-list-bloc{
        min-height: 100%;
        border: 3px solid $color-lightgrey;
        border-radius: 15px;
        display: grid;
        overflow-y: scroll;
        grid-template-columns: auto auto;
        height: max-content;
        padding: 10px;
        gap: 10px;
      }
    }

    .map-bloc{
      border-radius: 15px;
      grid-area: map;
      height: 100%;
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {

    .filter-toilet-map-bloc {
      margin: 0;
      position: relative;
      height: calc(100vh - 180px);

      .filter-bloc{
        gap: 20px;
        position: fixed;
        z-index: 1;
        background-color: $color-white;
        padding: 20px;
        right: 0;
        top: 68px;

        .selected-fliters{
          order:2;
        }

        .filter-btns{
          .parmas-btn-mb{
            display: block;
            > .button-icon {
              padding: 0.344rem 1rem;
            }
          }

          > .button-icon {
            display: none;
          }
        }
      }



      .toilet-list-pagination-nav-bloc{
        grid-area: unset;
        background-color: $color-white;
        width: 100%;
        height: unset;
        top: 100%;
        position: absolute;
        z-index: 1;
        padding: 20px 20px;
        border-radius: 10px 10px 0 0;

        > labe:nth-child(1) {
          display: block;
          margin: 10px auto;
          color: $color-black;
          font-size: rem(16);
          font-weight: 700;
        }

        .toilet-list-bloc{
          border: 0 solid $color-lightgrey;
          border-top: 4px solid $color-lightgrey;
          border-radius: 0px;
          display: grid;
          grid-template-columns: 100%;
          height: max-content;
          padding: 20px 0;
        }
      }

      .map-bloc{
        border-radius: 0px;
        right: 0;
        position: fixed;
        margin-top: 56px;
        height: 100%;
        width: 100%;
      }
    }

  }
</style>