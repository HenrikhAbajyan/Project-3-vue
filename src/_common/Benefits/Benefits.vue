<template>
  <div class="Benefits">
      <div class="Container">

      <div class="BenefitsGroup">

        <div class="Title">
          Why us?
        </div>
        <div class="SubTitle">
          Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis<br/>sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend.
        </div>

        <div class="BoxGroup">

          <div class="Box Box-1">
            <div class="SocialIcon">
              <i class="fa fa-share-alt fa-5x" aria-hidden="true"></i>
            </div>
            <div class="Discription">
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend.
            </div>
          </div>

          <div class="Separator">
          </div>

          <div class="Box Box-2">
            <div class="SocialIcon">
              <i class="fa fa-lightbulb-o fa-5x" aria-hidden="true"></i>
            </div>
            <div class="Discription">
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend.
            </div>
          </div>

          <div class="Separator">
          </div>

          <div class="Box Box-3">
            <div class="SocialIcon">
              <i class="fa fa-clock-o fa-5x" aria-hidden="true"></i>
            </div>
            <div class="Discription">
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend.
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>


<style>
.Benefits {
  display: flex;
  justify-content: center;
  text-align: center;
}

.BenefitsGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 170px;
}

.BenefitsGroup .Title {
  color: #6f6f6f;
  font-size: 3.7rem;
  font-weight: bold;
}

.BenefitsGroup .SubTitle {
  color: #858484;
  font-size: 1.8rem;
  padding: 10px;
}

.Benefits .BoxGroup {
  align-items: center;
  margin-top: 50px;
}

.Benefits .Discription {
  max-width: 400px;
  font-size: 14px;
  line-height: 30px;
}

.Benefits .Box {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  flex-basis: 30%;
  padding-top: 20px;
}

.Benefits .Box-3 {
  border: none;
}

.Benefits .SocialIcon {
  display: flex;
  height: 111px;
  width: 111px;
  background-color: #006cb7;
  border-radius: 100%;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

@media screen and (max-width: 1000px){
  .BenefitsGroup .SubTitle {
    display: none;
  }
  .Benefits .Separator {
    border-bottom: 2px solid #cfcfcf;
    margin: 40px 0 40px 0;
  }


}

@media (min-width: 900px) {
  .Benefits .BoxGroup {
    display: flex;
    justify-content: center;
    justify-content: space-between;
  }

  .Benefits .Separator {
    height: 270px;
    border-right: 2px solid #cfcfcf;
  }
}
</style>


<script>
  export default {}
</script>
