<template>
  <div class="Intro">
    <div class="Container">

      <div class="IntroGroup">

          <div class="Title">
            Premium Solution<br/>for a Modern Website
          </div>
          <div class="WebLink">
            Psdfreebies.com
          </div>
          <div class="Discription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/>magna aliqua. Ut enim ad minim veniam, commodo consequat.
          </div>

      </div>

    </div>
  </div>
</template>


<style>
.Intro {
  background-image: url(~/static/Assets/Intro.jpg);
  background-size: cover;
  display: flex;
  padding: 300px 0;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  font-size: 3.8rem;
  text-align: center;
}

.Intro .WebLink {
  margin-top: 15px;
}

.Intro .Discription {
  font-size: 1.3rem;
  margin-top: 40px;
}

@media only screen and (max-width: 768px) {
  .Intro {
    padding: 200px 0;
    font-size: 2rem;
  }

  .Intro .Discription {
    font-size: 0.8rem;
  }
}
</style>


<script>
  export default {}
</script>
