<template>
    <div>
        <investment-form
            @handle-invest="handleInvest"
            :key="componentKey"
        />
        <h5>My Investment Portfolio: {{numberOfInvestments}} Funds</h5>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <investment-card
                v-for="i in investments"
                :key="i.fundId"
                :fundId="i.fundId"
                :fundName="i.fundName"
                :currency="i.currency"
                :totalUnits="i.totalUnits"
                :totalInvestment="i.totalInvestment"
            />
        </div>
    </div>
</template>

<script>
import InvestmentCard from './InvestmentCard.vue';
import InvestmentForm from './InvestmentForm.vue';

export default {
    data() {
        return {
            investments: [],
            componentKey: 0
        }
    },
    mounted() {
        this.fetchInvestmentList()
    },
    computed: {
        numberOfInvestments() {
            return this.investments.length
        }
    },
    methods: {
        async fetchInvestmentList() {
            await fetch('http://localhost:5000/api/investments?userId=user1234')
                .then(response => response.json())
                .then((data) => this.investments = JSON.parse(JSON.stringify(data)))
        },
        handleInvest() {
            this.componentKey += 1
            this.fetchInvestmentList()
        }
    },
    components: {
        InvestmentCard,
        InvestmentForm
    }
}
</script>

<style scoped>
h5 {
    color: #404040; 
}
</style>