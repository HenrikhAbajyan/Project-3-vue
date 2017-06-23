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
import Intro from '../Home/Intro/Intro';
import Subscription from '../Home/Subscription/Subscription';
import Benefits from '../Home/Benefits/Benefits';
import Services from '../Home/Services/Services';
import Testemonials from '../Home/Testemonials/Testemonials';
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
