<template>
  <main class="container flex flex-col gap-24 max-md:gap-16">
    <header class="flex gap-5">
      <figure>
        <img class="w-24 h-24 rounded-full max-md:w-14 max-md:h-14" src="{{ 'build/images' + profilePicture }}" alt="photo de l'utilisateur">
      </figure>
      <div>
        <h2 class="text-black text-4xl font-medium max-md:text-xl">Salut, {{ firstname }}!</h2>
        <date class="text-base text-grey">{{ userCreatedAt }}</date>
      </div>
    </header>
    <div class="flex gap-40">
      <div class="flex flex-col gap-10 min-w-[200px]"
        :class="[ currentRouteName == 'front_user_account' ? 'max-md:w-full' : 'max-md:hidden' ]">
        <div class="flex flex-col gap-5">
          <label class="text-base font-medium text-black">Mon espace</label>
          <div class="flex flex-col gap-5">
            <MenuButton
              path=""
              icon="Account"
              iconSize=24
              value="Mon compte"
              active="[ active == 'account' ? true : false ]"
            />
            <MenuButton
              path=""
              icon="Contribution"
              iconSize=24
              value="Mes contributions"
              active="[ active == 'contribution' ? true : false ]"
            />
            <MenuButton
              path=""
              icon="MyRates"
              iconSize=20
              value="Mes avis"
              active="[ active == 'my-comments' ? true : false ]"
            />
            <MenuButton
              path=""
              icon="Report"
              iconSize=20
              value="Mes signalements"
              active="[ active == 'my-reports' ? true : false ]"
            />
            <MenuButton
              path=""
              icon="Favorite"
              iconSize=20
              value="Mes favoris"
              active="[ active == 'my-favorites' ? true : false ]"
            />
          </div>
        </div>

        <div class="flex flex-col gap-5">
          <label class="text-base font-medium text-black">Contenu</label>
          <div class="flex flex-col gap-5">
            <MenuButton
                path=""
                icon="Wc"
                iconSize=24
                value="Toilettes"
                active="[ active == 'toilets' ? true : false ]"
            />
            <MenuButton
                path=""
                icon="Flag"
                iconSize=22
                value="Signalements"
                active="[ active == 'reports' ? true : false ]"
            />
            <MenuButton
                path=""
                icon="Users"
                iconSize=22
                value="Utilisateurs"
                active="[ active == 'users' ? true : false ]"
            />
          </div>
        </div>

        <div class="flex flex-col gap-5">
          <label class="text-base font-medium text-black">Types</label>
          <div class="flex flex-col gap-5">
            <MenuButton
              path=""
              icon="Place"
              iconSize=20
              value="Endroits"
              active="[ active == 'places' ? true : false ]"
            />
            <MenuButton
              path=""
              icon="Category"
              iconSize=20
              value="Caractéristiques"
              active="[ active == 'characteristics' ? true : false ]"
            />
            <MenuButton
              path=""
              icon="FlagCircle"
              iconSize=20
              value="Problèmes"
              active="[ active == 'issues' ? true : false ]"
            />
            <MenuButton
              path=""
              icon="RateType"
              iconSize=24
              value="Avis"
              active="[ active == 'rates' ? true : false ]"
            />
          </div>
        </div>

      </div>

      <slot></slot>
    </div>
  </main>
</template>

<script>
import MenuButton from "@/components/atoms/button_menu.vue";

export default {
  name: "BackOfficeHeaderAndMenu",
  components: {MenuButton},
  props: {
    firstname: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      required: true
    },
    userCreatedAt: {
      type: String,
      required: true
    },
    active: {
      type: String,
      required: true
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>

<style scoped>

</style>