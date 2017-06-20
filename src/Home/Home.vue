<template>
  <div class="Home">

    <Header></Header>
    <HeaderSecondary></HeaderSecondary>
    <Intro></Intro>
    <Subscription></Subscription>
    <Benefits></Benefits>
    <Services></Services>
    <Testemonials></Testemonials>
    <FooterSecondary></FooterSecondary>
    <Footer></Footer>

  </div>
</template>


<style>

</style>


<script>
import Header from '../_common/Header/Header';
import HeaderSecondary from '../_common/HeaderSecondary/HeaderSecondary';
import Intro from '../_common/Intro/Intro';
import Subscription from '../_common/Subscription/Subscription';
import Benefits from '../_common/Benefits/Benefits';
import Services from '../_common/Services/Services';
import Testemonials from '../_common/Testemonials/Testemonials';
import FooterSecondary from '../_common/FooterSecondary/FooterSecondary';
import Footer from '../_common/Footer/Footer';

export default {
  components: {
    Header,
    HeaderSecondary,
    Intro,
    Subscription,
    Benefits,
    Services,
    Testemonials,
    FooterSecondary,
    Footer,
  }
}
</script>
