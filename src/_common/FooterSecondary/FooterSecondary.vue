<template>
  <div class="FooterSecondary">
    <div class="Container">

      <div class="FooterSecondaryGroup">

        <div class="Social">
          <img class="Logo" src="static/Assets/Logo.png">
          <p>
            Vero eos et accusamus et iusto odio<br/>dignissimos ducimus qui blanditiis<br/>praesentium voluptatum deleniti atque<br/>corrupti quos dolores et quasoa molestias<br/>excepturi sintal occaecati cupiditate non<br/>provident similique sunt.
          </p>
          <div class="SocialIcons">
            <a href="#">
             <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div class="Nav">
          <div class="Link Link-1">
            <div class="Title">
              Quick Links
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">Recent News</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div class="Link Link-2">
            <div class="Title">
              Quick Links
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">Recent News</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div class="Link Link-3">
            <div class="Title">
              Quick Links
            </div>
             <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">Recent News</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>

      </div>

  </div>

    </div>
  </div>
</template>


<style>
.FooterSecondary {
  display: flex;
  justify-content: center;
  margin: 80px 0;
}

.FooterSecondary .Social {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1.1rem;
  line-height: 35px;
  flex: 1;
}

.FooterSecondary .Logo {
  width: 210px;
  height: 45px;
  margin-bottom: 30px;
}

.FooterSecondary .SocialIcons {
  display: flex;
}

.FooterSecondary .SocialIcons a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 50px;
  width: 50px;
  background-color: #006cb7;
  border-radius: 100%;
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
}

.FooterSecondary .Nav {
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  flex: 1;
}


.FooterSecondary .Link .Title {
  font-size: 1.3rem;
  font-weight: bold;
  white-space: nowrap;
}

.FooterSecondary .Link a {
  text-decoration: none;
  color: #363636;
}

.FooterSecondary .Link a:hover {
  color: #0056a6;
}

.FooterSecondary .Link ul {
  list-style: none;
  padding-left: 0px;
  line-height: 35px;
  font-size: 1.2rem;
}

@media (min-width: 800px) {
  .FooterSecondary .FooterSecondaryGroup {
    display: flex;
  }
}

@media screen and (max-width: 1000px){
  .FooterSecondary .Social {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .FooterSecondary .Nav {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  .FooterSecondary .Link {
    padding: 30px 30px 0 30px;
  }
}

</style>


<script>
  export default {}
</script>
