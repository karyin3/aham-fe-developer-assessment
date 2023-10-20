<script setup>

defineProps({
  name: String,
  description: String,
  category: String,
  currency: String,
  navPrice: Number,
  navDate: String,
  historicalPerformance: Array
})

</script>

<template>
    <div class="col">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title fw-bold">{{ name }}</h4>
                <p class="card-text fst-italic">{{ description }}</p>
                <div class="fund-details row">
                    <div class="col-lg-4 mt-2">
                        <p class="fw-bold text-muted">CATEGORY</p>
                        <p>{{ category }}</p>
                    </div>
                    <div class="col-lg-4 mt-2">
                        <p class="fw-bold text-muted">CURRENCY</p>
                        <p>{{ currency }}</p>
                    </div>
                    <div class="col-lg-4 mt-2">
                        <p class="col fw-bold text-muted">NAV <span class="fw-lighter">(as at {{ navDate }})</span></p>
                        <p>{{ navPrice }}</p>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="fw-bold text-muted">PERFORMANCE</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Period</th>
                                <th
                                    scope="col"
                                    v-for="item in historicalPerformance"
                                    :key="item.period"
                                >
                                    {{ item.period}}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Total Return (%)</th>
                                <td
                                    v-for="(item, index) in historicalPerformance"
                                    :key="index"
                                >
                                    {{ item.returnPercentage.toFixed(1) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #f2f2f2;
}

h4 {
    color: #404040;
}
.fund-details p {
    margin-bottom: 0;
}
</style>