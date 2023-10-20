<template>
    <form class="mt-3 mb-3" @submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="select-fund" class="form-label">Select a Fund</label>
            <select
                class="form-select"
                @change="handleSelectChange"
                aria-label="Default select example"
                id="selectFund"
            >
                <option
                    v-for="fund in funds"
                    :key="fund.id"
                    :value="fund.id"
                >
                    {{fund.name}}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="number-unit" class="form-label">Number of Units</label>
            <input
                type="number"
                class="form-control"
                min=1
                @change="handleUnitChange"
                id="numberOfUnits"
                required
            >
        </div>
        <div class="mb-3" id="totalInvestmentValue">
        </div>
        <button type="submit" class="btn btn-secondary">Invest</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            funds: [],
            selectedFund: null,
            numberOfUnits: ""
        }
    },
    async mounted() {
        await fetch('http://localhost:5000/api/funds')
            .then(response => response.json())
            .then((data) => this.funds = data)
    },
    methods: {
        calculateInvestmentValue() {
            if (this.selectedFund && this.numberOfUnits) {
                return (this.selectedFund.navPrice * this.numberOfUnits).toFixed(2);
            }
        },
        handleSelectChange() {
            const input = document.getElementById('numberOfUnits')
            const totalValueText = document.getElementById('totalInvestmentValue')
            input.value = ""
            totalValueText.innerHTML = ""
        },
        handleUnitChange() {
            const selectedFundId = document.getElementById('selectFund').value
            this.numberOfUnits = document.getElementById('numberOfUnits').value
            this.selectedFund = this.funds.find((element) => element.id == selectedFundId)
            const investmentValue = this.calculateInvestmentValue()

            const text = "Total Investment Value = " + this.selectedFund.currency + " " + investmentValue
            document.getElementById('totalInvestmentValue').innerHTML = text
        },
        async onSubmit() {
            const data = {
                userId: 'user1234',
                fundId: this.selectedFund.id,
                fundName: this.selectedFund.name,
                nav: this.selectedFund.navPrice,
                numberOfUnits: this.numberOfUnits,
                currency: this.selectedFund.currency
            }

            await fetch('http://localhost:5000/api/investment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
                
            }).then(response => {
                if (response.status == 200) {
                    this.$emit('handle-invest')
                }
            })
        }
    }
}
</script>

<style scoped>
form {
    border: 1px solid;
    border-radius: 8px;
    padding: 20px;
}
.btn {
    background-color: #AA4A44;
    width: fit-content;
    cursor: pointer;
}
</style>