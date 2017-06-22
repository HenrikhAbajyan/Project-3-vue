<template>
  <div class="Subscription">
    <div class="Container">

      <div class="SubscriptionGroup">

        <div class="Discription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="BtnRegistration">

          <form class="Registration" action="#">
            <input type="text" name="email" placeholder="enter email address">
          </form>
          <a href="#" class="Btn">Join</a>

        </div>

      </div>

    </div>
  </div>
</template>


<style>
.Subscription {
  display: flex;
  height: 0px;
  align-items: center;
  justify-content: center;
}

.SubscriptionGroup {
  display: flex;
  height: 160px;
  background-color: #006cb7;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  color: #fff;
  border-radius: 10px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
}

.SubscriptionGroup::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  z-index: -1;
  bottom: 0;
  transform-origin: right top;
  transform: skewY(2deg);
  border-radius: 10px;
  left: 0;
}

.Subscription .Discription {
  padding-bottom: 30px;
  font-size: 1.3rem;
}

.Subscription .BtnRegistration {
  display: flex;
  height: 35px;
  font-size: 1.3rem;
  font-weight: bold;
}

.Subscription input {
  height: 35px;
  width: 260px;
  border: 3px solid #fff;
  border-radius: 10px;
  background-color: #006cb7;
  color: #fff;
  font-size: 1rem;
}

.Subscription input:focus {
  outline: none;
}

::-webkit-input-placeholder {
  color: #fff;
  text-align: center;
}

.Subscription .BtnRegistration a {
  display: flex;
  text-decoration: none;
  color: #000;
  background-color: #fff;
  height: 40px;
  width: 114px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 10px
}

.Subscription .BtnRegistration a:hover {
  color: #006cb7;
  border: 1px solid #006cb7;
}

@media only screen and (max-width: 1000px) {
  .Subscription .Discription {
    display: none;
  }

  .Subscription input {
    width: 160px;
  }

  .SubscriptionGroup {
    height: 120px;
  }
}

</style>


<script>
  export default {}
</script>
