<template>
    <div id="app">
        <div class="col-md-12">
            <div class="container">
                <div class="col-md-2" v-for="(item, index) in cards">
                    <div class="card">
                        <div class="card-block">
                            <h1>{{item.value}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Cards
            v-for="(item, index) in cards"
            :item="item"
            :index="index"
            key="index"
        />
    </div>
</template>

<script>
import Cards from './components/Cards.vue'

export default {
    data() {
        return {
            cards: {}
        }
    },
    methods: {
      fetchCards() {
        fetch('http://pokerplanning.dev/api/available-scrum-points', {
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => this.cards = json)
      }
    },
    created: function () {
        this.fetchCards()
    },
    components: {
      Cards
    }
}
</script>