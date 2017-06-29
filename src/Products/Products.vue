<template>
  <div class="Products">
    <Header></Header>
    <HeaderSecondary></HeaderSecondary>

    <div class="ProductsSection">
      <div class="Container">
        <h1 class="SectionTitle"> Our Products </h1>


        <h1 class="Title">Business Suitcases</h1>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <Product
              name="1 Suitcase"
              rating="3"
              price="63"
              img="http://g03.a.alicdn.com/kf/HTB1SuMSKVXXXXcRaXXXq6xXFXXXz/2015-Business-font-b-Leather-b-font-font-b-Trolley-b-font-Luggage-Vintage-Suitcase-Board.jpg">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <Product
              name="2 Suitcase"
              rating="2"
              price="88"
              img="https://images-na.ssl-images-amazon.com/images/I/41Zdz+bjYRL._AC_US218_.jpg">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <Product
              name="3 Suitcase"
              rating="4"
              price="40"
              img="https://royalbag.com.ua/image/cache/data/Issa_Hara/B14C/B14C_1-300x300.jpg">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <Product
              name="4 Suitcase"
              rating="1"
              price="78"
              img="http://thumbs4.ebaystatic.com/d/l225/m/mGrn9a-WhUeXASK3lph4BxQ.jpg">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6">
            <Product
              class="Top"
              name="5 Suitcase"
              rating="5"
              price="99"
              img="http://images.saddlebackleather.com/image/upload/w_1280,h_1280,c_fill/Mont_Blanc/SLC/Products/01-60-0007-LG-CH-03.jpg">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6">
            <Product
              class="Top"
              name="6 Suitcase"
              rating="5"
              price="120"
              img="http://images.saddlebackleather.com/image/upload/w_1280,h_1280,c_fill/Mont_Blanc/SLC/Products/01-60-0007-TO-3.jpg">
            </Product>
          </div>
        </div>

        <h1 class="Title">Business Wallets</h1>
        <div class="row">

          <div class="col-xs-12 col-sm-6 col-md-3">
            <Product
              name="1 Wallet"
              rating="3"
              price="120"
              img="https://tumi.scene7.com/is/image/Tumi/79303GRY_alt2?hei=330&wid=330&layer=2&opac=0&layer=3&opac=0">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <Product
              name="2 Wallet"
              rating="3"
              price="88"
              img="https://www.smithandcanova.co.uk/502-3132-home/card-holder.jpg">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <Product
              name="3 Wallet"
              rating="4"
              price="40"
              img="http://www.luxuryartisan.com/2995-home_default/all-you-need-leather-card-holder-tan.jpg">
            </Product>
          </div>


          <div class="col-xs-12 col-sm-6 col-md-3">
            <Product
              name="4 Wallet"
              rating="5"
              price="56"
              img="http://cdn2.bigcommerce.com/server500/cc58c/products/3303/images/6715/PI423502RED_wallet_201__62715.1366282854.1280.1280_SQ__29762.1462988229.560.850.jpg?c=2">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6">
            <Product
              class="Top"
              name="5 Wallet"
              rating="5"
              price="94"
              img="https://ae01.alicdn.com/kf/HTB1y9MpKVXXXXbNXpXXq6xXFXXXM/New-Business-Men-s-Clutch-Bags-Split-Leather-Handbags-Double-Zipper-Men-Clutch-Wallet-Large-Capacity.jpg_640x640.jpg">
            </Product>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6">
            <Product
              class="Top"
              name="6 Wallet"
              rating="5"
              price="76"
              img="https://s-media-cache-ak0.pinimg.com/736x/b9/5a/06/b95a06ff4b269aefe1b15bac2eae0c21.jpg">
            </Product>
          </div>
        </div>


        <!-- Via Loops -->
         <!-- <div class="row">
          <div
            v-for="product in suitcases"
            class="col-xs-12"
            v-bind:class="{
              'col-sm-12 col-md-6': product.isTop,
              'col-sm-6 col-md-3': !product.isTop
            }"
            >
            <Product
              v-bind:class="{
                Top: product.isTop
              }"
              v-bind:name="product.name"
              price="63"
              img="http://g03.a.alicdn.com/kf/HTB1SuMSKVXXXXcRaXXXq6xXFXXXz/2015-Business-font-b-Leather-b-font-font-b-Trolley-b-font-Luggage-Vintage-Suitcase-Board.jpg">
            </Product>
          </div>
        </div>

        <h1 class="Title">Business Wallets</h1>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3" v-for="product in wallets">
            <Product
              v-bind:name="product.name"
              price="63"
              img="http://g03.a.alicdn.com/kf/HTB1SuMSKVXXXXcRaXXXq6xXFXXXz/2015-Business-font-b-Leather-b-font-font-b-Trolley-b-font-Luggage-Vintage-Suitcase-Board.jpg">
            </Product>
          </div>
        </div> -->


      </div>
    </div>

    <FooterSecondary></FooterSecondary>
    <Footer></Footer>
  </div>
</template>


<style>

  .ProductsSection {
    background-color: #efefef;
    padding: 100px 0  50px 0;
  }

  .ProductsSection .Title {
    text-align: center;
    color: #6f6f6f;
    padding-bottom: 30px;
    letter-spacing: 4px;
  }

  .ProductsSection .SectionTitle {
    color: #006cb7;
    font-weight: bold;
    letter-spacing: 7px;
  }



</style>


<script>
import Header from '../_common/Header/Header';
import HeaderSecondary from '../_common/HeaderSecondary/HeaderSecondary';
import Product from '../_common/Product/Product';
import FooterSecondary from '../_common/FooterSecondary/FooterSecondary';
import Footer from '../_common/Footer/Footer';

export default {
  components: {
    Header,
    HeaderSecondary,
    Product,
    FooterSecondary,
    Footer,
  },
  data: function() {
    return {
      suitcases: [
        {
          name: "hello",
          isTop: true
        },
        {
          name: "world"
        }
      ],
      suitcasesTop: [

      ],
      wallets: [

      ],
      walletsTop: [

      ]
    }
  }
}
</script>
