<template>

  <div class="Product">
    <div class="row">
      <div class="col-xs ProductCol">
        <h3 class="Name">{{name}}</h3>
      </div>
    </div>
    <div class="img" v-bind:style="{backgroundImage: 'url(' + img + ')'}"></div>
    <div class="row">
      <div class="RatingCol">
        <star-rating star-size=25 v-model="rating"></star-rating>
      </div>
      <div class="col-xs PriceCol">
        <div class="Price">{{price}}$</div>
      </div>
    </div>
  </div>


</template>



<style>


  .Product {
    margin-bottom: 15px;

  }

  .PriceCol {
    text-align: right;
  }

  .Product .Name {
    margin: 0;
    color: #6f6f6f;
  }

  .Product .star-rating{
    margin-left: 10px;
  }

  .rating-text {
      display: none;
    }

  .Product .img {
    width: 100%;
    height: 250px;
    background-color: #ccc;
    margin-bottom: 10px;
    background-size: cover;
    border: 1px solid #ccc;
  }

  .Product.Top .img {
    height: 500px;
  }



</style>


<script>
import StarRating from 'vue-star-rating'

export default {
  props: ['name', 'price', 'img', 'rating'],

  components: {
      StarRating
    }

}
</script>
