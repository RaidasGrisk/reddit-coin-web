<template>
  <div class="section container">

    <!-- <p class="title is-size-5 has-text-warning">
      In the past 24 hours <br>
    </p>
    <p class="title is-size-4 has-text-primary">
      Total reddit comments scanned: <label class="has-text-danger">10k</label> <br>
      UTC time of last hourly data: <label class="has-text-danger">2021-04-01 10:00:00</label>
    </p> <br> -->

    <!-- {{this.$store.state.raw_data}} -->
    <!-- {{this.$store.state.data}} -->
    <!-- {{this.$store.state.vol_order}} -->

    <div class="columns" v-if="this.$store.state.page_loaded">
      <div class="column">
        <card
          :data="this.$store.state.data.cryptocurrency[this.$store.state.vol_order[0]]"
          title="Top volume 1st"
          :coin="this.$store.state.vol_order[0]"
          :pct_change="this.$store.state.vol_pct_change[this.$store.state.vol_order[0]].slice(-1)[0]"
          :last_value="this.$store.state.data.cryptocurrency[this.$store.state.vol_order[0]].slice(-1)[0]"
          :color="this.$store.state.colors[this.$store.state.vol_order[0]]"
        />
      </div>
      <div class="column">
        <card
          :data="this.$store.state.data.cryptocurrency[this.$store.state.vol_order[1]]"
          title="Top volume 2nd"
          :coin="this.$store.state.vol_order[1]"
          :pct_change="this.$store.state.vol_pct_change[this.$store.state.vol_order[1]].slice(-1)[0]"
          :last_value="this.$store.state.data.cryptocurrency[this.$store.state.vol_order[1]].slice(-1)[0]"
          :color="this.$store.state.colors[this.$store.state.vol_order[1]]"
        />
      </div>
      <div class="column">
        <card
          :data="this.$store.state.data.cryptocurrency[this.$store.state.pct_order_[0]]"
          title="Top % growth"
          :coin="this.$store.state.pct_order_[0]"
          :pct_change="this.$store.state.vol_pct_change[this.$store.state.pct_order_[0]].slice(-1)[0]"
          :last_value="this.$store.state.data.cryptocurrency[this.$store.state.pct_order_[0]].slice(-1)[0]"
          :color="this.$store.state.colors[this.$store.state.pct_order_[0]]"
        />
      </div>
    </div>
  </div>
</template>

<script>

import card from '@/components/card'

export default {
  name: 'coinCards',
  components: {
    card
  },
  data() {
    return {
    }
  },
  methods: {
  },

  mounted () {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
