<script setup>
import FundList from './components/FundList.vue'
import InvestmentList from './components/InvestmentList.vue'
</script>

<template>
  <div>
    <nav class="navbar sticky-top navbar-light bg-light justify-content-center">
      <img src="./assets/logo-aham-color.svg" />
      <router-link to="/">List of Funds</router-link>
      <router-link to="/my-investments">My Investments</router-link>
    </nav>
    <div class="container mt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 360px;
  height: 48px;
}

a {
  text-decoration: none;
  color: #65737e;
  font-weight: bold;
  padding: 10px;
  margin: 10px;
}
a.router-link-active {
  text-decoration: underline;
  text-decoration-color: #AA4A44;
  text-underline-offset: 8px;
}
</style>
