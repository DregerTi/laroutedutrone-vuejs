<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CtaButton from "@/components/atoms/CtaButton.vue";
</script>

<template>
  <header class="header {% if app.request.get('_route') == 'front_default_index' %} header-white {% endif %}">
    <div class="header-content container mx-auto">
      <form method="GET" action="" class="flex left-container items-center">
        <RouterLink to="/">
          <img class="logo" src="@/assets/logo.svg" alt="logo">
        </RouterLink>
        <input name="address" type="text" class="search-bar w-full" value="" placeholder="Tu veux la poser où ?">
      </form>

      <nav class="header-navigation space-x-5 max-lg:hidden">

        <RouterLink class="hover:text-primary" to="">Mon compte</RouterLink>
        <RouterLink class="hover:text-primary" to="">Se déconnecter</RouterLink>

        <RouterLink class="hover:text-primary" to="">S'inscrire</RouterLink>
        <RouterLink class="hover:text-primary" to="/search">Connexion</RouterLink>

        <CtaButton
            icon="Add"
            fill="true"
            path="/toilet"/>
      </nav>
      <nav class="header-navigation lg:hidden">
        <button class="lg:hidden" id="openMenu">
          <CtaButton
              icon="Menu"
              fill="false"
              path=""/>
        </button>
      </nav>
    </div>

    <div class="sidebar" id="mySidebar">
      <div class="blocker"></div>
      <div class="content">
        <button id="closeMenu">
          <CtaButton
              icon="Close"
              fill="false"
              path=""/>
        </button>
        <nav class="mobile-menu">

          <RouterLink class="hover:text-primary" to="">Mon compte</RouterLink>
          <RouterLink class="hover:text-primary" to="">Se déconnecter</RouterLink>

          <RouterLink class="hover:text-primary" to="">S'inscrire</RouterLink>
          <RouterLink class="hover:text-primary" to="">Connexion</RouterLink>

          <CtaButton
              icon="Add"
              fill="true"
              path=""/>
        </nav>
      </div>
    </div>
  </header>

  <div class="container mx-auto">
    <RouterView />
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

  a {
    vertical-align: middle;
  }

  .container-lite{
    max-width: 1200px;
    margin: 0 auto;
  }

  .container-large{
    max-width: 1680px;
    margin: 0 auto;
  }

  #notyf-message {
    display: none;
  }

  .status-box{
    border-radius: 5px;
    border: 1px solid $color-primary;
    padding: 1px 6px;
    color: $color-primary;
    font-size: 14px;
    width: fit-content;
    text-transform: lowercase;
    margin: 3px 0px;
  }

  body{
    main{
      padding-top: 120px!important;
      padding-bottom: 100px;
    }
  }

  .notyf__toast{
    border-radius: 8px!important;
  }

  @media (max-width: 768px) {
    .container-lite{
      max-width: 100%;
      padding: 0 10px;
    }
  }

  @media (max-width: 640px) {
    .container {
      max-width: 100%;
      padding: 0 15px;
    }

    .container-large{
      max-width: calc(100% + 30px);
      margin: 0 -15px;
    }
  }

  @function rem($pxVal){
    $base: 16;
    @return calc($pxVal / $base) * 1rem;
  }

  [type=button],
  [type=reset],
  [type=submit],
  button {
    -webkit-appearance:button;
    background-color:unset!important;
    background-image:unset!important;
  }


  .checkbox{
    position: relative;
    margin: 5px;
    float: left;
    border-radius: 1.875rem;
    box-sizing: border-box;
    background-color: $color-lightgrey;
    transition: all 0.3s;

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    label {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.875rem;
      line-height: 1rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      transition: .5s ease;
      transition: all 0.3s;
      border-radius: 1.875rem;

      :hover {
        background-color: $color-primary;

        border-radius: 1.875rem;
        color: $color-white;
      }
    }

    :hover {
      background-color: $color-primary;

      border-radius: 1.875rem;
      color: $color-white;
    }

    :checked ~ label {
      background-color: $color-primary;
      color: $color-white;
    }
  }


  #toilet_characteristics {
    width: 100%;
    display: flex;

    option{
      width: 100px;
    }
  }

  .rates {
    div {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      width: 100%;
      align-items: center;

      input {
        margin: 0 5px;
      }

      select {
        pointer-events: none;
      }
    }
  }

  .search-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .map-container {
    width: 50%;
    height: 50%;
  }

  #map {
    width: 100%;
    height: 100%;
  }

  .header {
    background-color: $color-lightgrey;
    padding: 1rem 0rem;
    z-index: 2;
    position: fixed;
    width: 100vw;
    top: 0;
    margin-bottom: 100%;

    &-content {
      display: flex;
      align-items: center;
    }

    &-white {
      background-color: $color-white !important;
    }

    .logo{
      width:90%;
    }
  }

  .left-container {
    gap: rem(50);
    width: 70%;
    margin-right: rem(50);
  }

  .header-navigation {
    white-space: nowrap;
    display: flex;
    gap: rem(10);
    align-items: center;
    margin-left: auto;
    margin-right: 0;
    background-color: $color-white;
    padding: rem(10) rem(20);
    border-radius: 0.8rem;

    a {
      white-space: nowrap;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    .header {
      z-index: 2;
      position: fixed;
      width: 100%;
    }

    .logo{
      width:80%;
    }

    .header-navigation{
      background-color: unset;
      padding: 0;
      gap: 0;
      margin: 0px;
    }


    .left-container {
      gap: 1rem;
      flex-grow: 1;
      margin-right: 1rem;
    }
  }

  .sidebar {
    /* it's a mobile sidebar, blocker and content */
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    background: $color-white;
    display: none;
    z-index: 99999;
  }

  .sidebar.visible {
    display: block;
  }

  .sidebar .blocker {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .sidebar .content {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    right: -100%;
    animation: slide 0.5s forwards;
  }

  #closeMenu {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
  }

  @keyframes slide {
    100% {
      right: 0;
    }
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    background-color: $color-white;
    margin-top: 5rem;
    padding: 0 1rem;
    gap: 1.5rem;

    a {
      font-size: 1.5rem;
      font-weight: 500;
      color: $color-black;
    }
  }


  .search-bar {
    background-color: inherit;
    border: 1px solid $color-grey;
    color: $color-grey;
    border-radius: rem(16);
    padding: rem(10);
    background: url(/assets/icons/icon-search.svg) no-repeat scroll 10px 10px;
    padding-left: rem(40);
  }


  @media (max-width: 768px) {
    .search-bar {
      background: url(/assets/icons/icon-search.svg) no-repeat scroll 6px 6px;
      padding: 0.3em;
      border-radius: 0.8em;
      padding-left: 2.5em;
      border: none;

    }
  }
</style>
