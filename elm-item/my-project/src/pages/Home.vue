<template>
  <div>
    <Header />
    <Search />
    <gid />
    <Banner />
    <Dive />
    <DropdownMenu/>
    <Card />
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import gid from "../components/gid.vue";
import Dive from "../components/Dive.vue";
import Card from "../components/Card.vue";
import Header from "../components/Header";
import Banner from "../components/Banner";
import DropdownMenu from "../components/DropdownMenu";

export default {
  components: {
    Search,
    gid,
    Dive,
    Card,
    Header,
    Banner,
    DropdownMenu
  }
};
</script>

<style>
</style>