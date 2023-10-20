<script setup>

defineProps({
  fundId: String,
  fundName: String,
  currency: String,
  totalUnits: Number,
  totalInvestment: Number,
  currentValue: Number
})

</script>

<template>
    <div class="col">
        <div class="card">
            <div class="card-body">
                <div class="row mb-2">
                    <div class="col">
                        <p class="fw-bold small">Fund Name</p>
                        <p>{{fundName}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="fw-bold small">Total Units</p>
                        <p>{{totalUnits}}</p>
                    </div>
                    <div class="col">
                        <p class="fw-bold small">Total Investment</p>
                        <p>{{currency}} {{totalInvestment.toFixed(2)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #f2f2f2;
}

p {
    margin-bottom: 0;
}
</style>
