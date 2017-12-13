<template>
<div class="col-md-4">
    <div class="card">
        <div class="card-block">
            <h1>{{item.value}}</h1>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'PokerCard',
    props: ['item']
  }
</script>
