<script>
import GroupeMark from "@/components/atoms/GroupeMark.vue";

export default {
  name: "UserComment",
  components: {
    GroupeMark
  },
  props: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    average: {
      type: Number,
      required: true
    }
  }
}
</script>

<template>
  <article class="comment">
    <header>
      <img src="" alt="photo de l'utilisateur">
      <div>
        <div>{{ firstname }} {{ lastname }}</div>
        <date>{{ createdAt }}</date>
        <GroupeMark lite :average="average" />
      </div>
    </header>
    <p>{{ message }}</p>
    <CtaButton value="Signaler le commentaire" fill/>
  </article>
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

.comment{
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: all 0.3s;

  > header{
    display: flex;
    gap: 20px;
    > img{
      width: 80px;
      height: 80px;
      border-radius: 100px;
    }

    > div{
      display: flex;
      flex-direction: column;
      gap: 5px;
      > div{
        font-weight: 500;
        font-size: rem(20);
        line-height: rem(20);
        color: $color-black
      }
      > date{
        font-weight: 400;
        font-size: rem(16);
        line-height: rem(16);
        color: $color-grey
      }
    }
  }
}
</style>