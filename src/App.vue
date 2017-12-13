<template>
    <div id="app">
        {{this.$store.state.cards}}
        <div class="col-md-12">
            <PokerCard
              v-for="(item, index) in pokerCards"
              :item="item"
              :index="index"
              key="index"
            />
        </div>
    </div>
</template>

<script>
import PokerCard from './components/PokerCard.vue'

export default {
  name: 'app',
  computed: {
    pokerCards () {
      return this.$store.getters.pokerCards
    }
  },
  beforeCreate () {
    this.$store.dispatch('fetchCards')
  },
  components: {
    'PokerCard': PokerCard
  }
}
</script>
