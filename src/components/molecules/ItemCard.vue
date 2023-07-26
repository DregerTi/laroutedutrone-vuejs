<template>
  <RouterLink :to="{name:'toilet', params:{slug: slug}}" class="card">
    <article :id="[slug ? 'toilet-' + slug : '']">
      <figure>
        <img v-if="media" :src="media" alt="toilet picture">
      </figure>
      <section v-if="place">
        <CategoryLabel :value="place" />
      </section>
      <GroupeMark :average="average" />
      <label>{{ name }}</label>
    </article>
  </RouterLink>
</template>

<script>
import GroupeMark from "@/components/atoms/GroupeMark.vue";
import CategoryLabel from "@/components/atoms/CategoryLabel.vue";

export default {
  name: "ItemCard",
  components: {CategoryLabel, GroupeMark},
  props : {
    slug: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    media: {
      type: String,
      required: false
    },
    place: {
      type: String,
      required: false
    },
    average: {
      type: Number,
      required: true
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

.card {
  > article {
      display: flex;
      flex-direction: column;
      gap: 0.9375rem;
      transition: all 0.3s;
      flex-grow: 1;
      max-width: 450px;
      min-width: 200px;
      padding: 10px;

    > figure {
      > img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 0.9375rem;
      }
    }

    > section {
      display: flex;
      gap: 0.9375rem
    }

    > label {
      color: $color-black;
      font-size: 1.625rem;
      font-weight: 600;
      line-height: 1.625rem;
    }
  }
}

@media (max-width: 768px) {
  .card {
    > article {
      max-width: unset;

      > section {
        display: none;
      }
    }
  }
}
</style>