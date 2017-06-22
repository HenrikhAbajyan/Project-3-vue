<template>
  <div class="HeaderSecondary">
    <div class="Container">

      <div class="HeaderSecondaryGroup">

        <img src="static/Assets/Logo.png">
        <div class="Dropdown">
          <button class="Dropbtn"><i class="fa fa-bars" aria-hidden="true"></i></button>
          <div class="DropdownContent">
            <a href="#">Home</a>
            <a href="#">Sliders</a>
            <a href="#">Galleries</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div class="Nav">
          <a href="#">Home</a>
          <a href="#">Sliders</a>
          <a href="#">Galleries</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

      </div>

    </div>
  </div>
</template>


<style>
.HeaderSecondary {
  display: flex;
  height: 0px;
  align-items: flex-start;
  justify-content: center;
}

.HeaderSecondaryGroup {
  display: flex;
  height: 99px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0 80px 0 40px;
  border-bottom: 6px solid #d3d3d3;
  font-size: 1.3rem;
}

.HeaderSecondary img {
  width: auto;
  height: 39px;
  padding-left: 15px;
}

.HeaderSecondary .Nav a {
  text-decoration: none;
  color: #000;
  padding: 20px;
  font-size: 1.1rem;
}

.HeaderSecondary .Nav a:hover {
  color: #006cb7;
}

.Dropdown {
    display: none;
    position: relative;
    margin-left: auto;
}

.Dropbtn {
  border: none;
  background-color: inherit;
  color: #006cb7;
  font-size: 1.8rem;
}

.DropdownContent {
    display: none;
    position: absolute;
    text-align: center;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.Dropdown:hover .DropdownContent {
    display: block;
}

.DropdownContent a:hover {
  background-color: #f1f1f1
}

.HeaderSecondary .DropdownContent a {
  display: block;
  text-decoration: none;
  color: #000;
  padding: 20px;
  font-size: 1.1rem;
}

@media only screen and (max-width: 1000px) {
  .HeaderSecondaryGroup {
    padding: 0 40px 0 20px;
  }

  .HeaderSecondary .Nav a {
    display: none;
  }

  .Dropdown {
    display: flex;
    justify-content: flex-end;
    padding-left: 150px;
  }
}
</style>


<script>
  export default {}
</script>
