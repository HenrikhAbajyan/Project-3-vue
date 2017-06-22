<template>
  <div class="Header">
    <div class="Container">

      <div class="HeaderGroup">

        <div class="Contact">
          <a href="#">
            <i class="fa fa-envelope-open-o icon1" aria-hidden="true"></i>
            <a class="Secondary">Pinar@gmail.com</a>
          </a>
          <a href="#">
            <i class="fa fa-phone icon1" aria-hidden="true"></i>
            <a class="Secondary">85 26 37 48 59</a>
          </a>
          <a class="NoAction">
            <i class="fa fa-clock-o icon" aria-hidden="true"></i>
            Mon - Sat : 9AM - 6PM
          </a>
        </div>

        <div class="Nav">
          <a href="#">LOGIN</a>
          |
          <a href="#">SUPPORT</a>
          |
          <a href="#">LANGUAGES</a>
        </div>

      </div>

    </div>
  </div>
</template>


<style>
.Header {
  display: flex;
  height: 56px;
  background-color: #006cb7;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.Header .HeaderGroup  {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;

}

.Header .Contact a {
  text-decoration: none;
  color: #fff;
  padding-right: 20px;
}

.Header .Contact .Secondary:hover {
  color: #000;
  cursor: pointer;
}

.Header .fa {
  padding: 0 2px 0 0;
}

.Header .Nav a {
  text-decoration: none;
  color: #fff;
  margin: 0 5px;
}

.Header .Nav a:hover {
  color: #000;
}

@media only screen and (max-width: 768px){
  .Header .Contact .Secondary {
    display: none;
  }

  .Header .Contact .NoAction {
    display: none;
  }



  .Header .Contact .icon1:hover {
    cursor: pointer;
    color: #000;
  }
}
</style>


<script>
  export default {}
</script>
