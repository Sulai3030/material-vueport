<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Sulai Sivadel</div>
          <div class="md-subhead">Web Developer</div>
        </md-card-header>
        <md-card-content>
          Project 1.
          <p>Party Dash| https://partydash.com/</p>
          <p>
            Front-End Design
          </p>
          We built Party Dash with a simple goal in mind: to help party hosts plan parties          more easily. easily.
          Responsibilities: Follow design specs handed down from site owner. Used CSS and           HTML to create inviting website
          <p>Technologies used: HTML, CSS, Bootstrap</p>
          More Info
        </md-card-content>
        <md-card-actions>
          <md-button>Read More</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead"></div>
        </md-card-header>
        <md-card-content>
          A flexible and quick learner committed to constantly learning learning and evolving his skills to stay abreast of ever-evolving technologies and trends in the industry. Communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, VueJS, and ReactJS.
        </md-card-content>
        <md-card-actions>
          <md-button>Read More</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  <div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'PaperContent'
}
</script>
<style lang="scss" scoped>
  .md-content {
    width: 200px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
   .md-card {
    width: 1000px;
    margin: 40px 250px;
    display: inline-block;
    vertical-align: top;
    align-self: center;
  }
</style>