<template>
  <div  :class="[lite ? 'group-mark--lite' : '']" class="group-mark">
    <div v-bind:key="i" v-for="i in 5" :class="[i <= average ? 'active' : '']"></div>
  </div>
</template>

<script>
export default {
  name: "GroupeMark",
  props: {
    average: {
      type: Number,
      required: true
    },
    lite: {
      type: Boolean,
      required: false
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
.group-mark {
  display: flex;
  gap: 10px;
  transition: all 0.3s;

  div{
    background-color: $color-blue-grey;
    width: 15px;
    height: 15px;
    border-radius: 20px;

    &.active{
     background-color: $color-primary;
   }
  }

  &--lite{
     margin-top: 5px;
     gap : 6px;
    div{
      width: 12px;
      height: 12px;
    }
  }
}
</style>