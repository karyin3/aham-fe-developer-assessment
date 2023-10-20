<template>
    <div>
        <h5 class="mt-4 mb-4">Number of Funds: {{numberOfFunds}}</h5>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <fund-card
                v-for="fund in funds"
                :key="fund.id"
                :name="fund.name"
                :description="fund.description"
                :category="fund.category"
                :currency="fund.currency"
                :navPrice="fund.navPrice"
                :navDate="fund.navDate"
                :historicalPerformance="fund.historicalPerformance"
            />
        </div>
    </div>
</template>

<script>
import FundCard from './FundCard.vue'

export default {
    data() {
        return {
            funds: [],
        }
    },
    async mounted() {
        fetch('http://localhost:5000/api/funds')
            .then(response => response.json())
            .then((data) => this.funds = data)
    },
    computed: {
        numberOfFunds() {
            return this.funds.length
        }
    },
    components: {
        FundCard
    }
}
</script>

<style scoped>
h5 {
    color: #404040; 
}
</style>