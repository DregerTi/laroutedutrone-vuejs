<template>
  <label class="category-label" :class="[active ? 'active' : '']">
    {{ value }}
  </label>
</template>

<script>
export default {
  name: "CategoryLabel",
  props : {
    value: {
      type: String,
      required: true
    },
    active: {
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

.category-label {
  background-color: $color-lightgrey;
  border-radius: 1.875rem;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 500;
  color: $color-black;
  padding: 0.5rem 1rem;
  display: inline-flex;
  transition: all 0.3s;
  height: fit-content;
  display: block ruby;
  width: fit-content;

:hover {
  background-color: $color-primary;
  color: $color-white;
}

&.active {
   border: 2px solid $color-black;
 }
}
</style>