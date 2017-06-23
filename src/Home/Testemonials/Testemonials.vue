<template>
  <div class="Testimonials">
    <div class="Container">

      <div class="TestimonialsGroup">

        <div class="Title">
          Testimonials
        </div>
        <div class="SubTitle">
          What Our Clients Say
        </div>

        <div class="OpinionGroup">

          <div class="Box">
            <div class="Opinion">
             Credibly innovate granular internal or "organic" sources whereas high standards in web readiness.
            </div>
            <div class="Authors">
              <div class="Img">
              </div>
              <ul>
                <li class="Name">JIMMY FERRARA</li>
                <li class="Position">Ceo, Psdfreebies.com</li>
              </ul>
            </div>
          </div>
          <div class="Box">
            <div class="Opinion">
             Credibly innovate granular internal or "organic" sources whereas high standards in web readiness.
            </div>
            <div class="Authors">
              <div class="Img">
              </div>
              <ul>
                <li class="Name">JIMMY FERRARA</li>
                <li class="Position">Ceo, Psdfreebies.com</li>
              </ul>
            </div>
          </div>
          <div class="Box">
            <div class="Opinion">
             Credibly innovate granular internal or "organic" sources whereas high standards in web readiness.
            </div>
            <div class="Authors">
              <div class="Img">
              </div>
              <ul>
                <li class="Name">JIMMY FERRARA</li>
                <li class="Position">Ceo, Psdfreebies.com</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>


<style>
.Testimonials {
  display: flex;
  background-color: #006cb7;
  justify-content: center;
  margin-top: 100px;
}

.TestimonialsGroup {
  display: flex;
  color: #fff;
  align-items: center;
  flex-direction: column;
  padding: 80px 0;
}

.TestimonialsGroup .Title {
  font-size: 1.5rem;
  padding-bottom: 20px;
}

.TestimonialsGroup .SubTitle {
  text-align: center;
  padding-bottom: 55px;
  font-size: 3rem;
}

.OpinionGroup .Box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  flex-basis: 30%;
}
.OpinionGroup .Opinion {
  background-color: #0056a6;
  padding: 50px 50px 120px 50px;
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
}

.OpinionGroup .Authors {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -40px;
}

.OpinionGroup .Authors ul {
  list-style: none;
  padding-left: 15px;
}

.OpinionGroup .Authors .Position {
  color: rgba(255,255,255,0.7);
}

.OpinionGroup .Img {
  height: 120px;
  width: 120px;
  background-color: #fff;
  background-image: url(~/static/Assets/Opinion-Group%20img.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top ;
  border: 10px solid #e3e3e3;
  border-radius: 100%;
}

@media (min-width: 800px) {
  .Testimonials .OpinionGroup {
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (max-width: 1000px) {
  .TestimonialsGroup .SubTitle {
    font-size: 2rem;
  }
}
</style>


<script>
  export default {}
</script>
