<template>
  <div class="Services">
    <div class="Container">

      <div class="ServicesGroup">

        <div class="Box">

          <div class="Title">
            Lorem ipsum dolor siamet conse ctetur<br/>adipi sicing elit sed doni.
          </div>
          <div class="Points">
            <ul>
              <li>
                <img src="static/Assets/Check.png" align="center">
                Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum<br/>neque.
              </li>
              <li>
                <img src="static/Assets/Check.png" align="center">
                Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum<br/>neque.
              </li>
              <li>
                <img src="static/Assets/Check.png" align="center">
                Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum<br/>neque.
              </li>
            </ul>
          </div>
        </div>

        <div class="BoxImg">
        </div>

      </div>

    </div>
  </div>
</template>


<style>
.Services {
  display: flex;
  justify-content: center;
}

.ServicesGroup {
  margin-top: 100px;
}

.Services .Box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 10px;
  background-color: #f1f1f1;
  height: 377px;
  flex: 1;
}

.Services .Box .Title {
  color: #3b3b3b;
  font-size: 1.7rem;
  padding-bottom: 30px;
}

.Services .Points img {
  float: left;
  height: 50px;
  width: auto;
  padding-right: 20px;
}

.Services ul {
 list-style-type: none;
 font-size: 12px;
 padding-left: 0;
}

.Services ul li {
  line-height: 20px;
  padding-bottom: 10px;
}


.ServicesGroup .BoxImg {
  display: flex;
  background-image: url(~/static/Assets/Services.jpg);
  background-size: cover;
  padding: 0 10px 0 10px;
  height: 377px;
  flex: 1;
}

@media screen and (max-width: 1000px) {
  .Services .Box .Title {
    font-size: 1.3rem;
  }
}

@media (min-width: 900px) {
  .ServicesGroup {
    display: flex;
  }
}
</style>


<script>
  export default {}
</script>
