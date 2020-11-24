<template>
  <div class="page-container md-layout-column">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"><center>Sulai Sivadel</center></div>
          <div class="md-subhead"><center>Web Developer</center></div>
        </md-card-header>
        <md-content>
          Ambitious, user-focused Web and Software Developer with experience working in teams and independently. Has strong project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for 1.5 million citizens of New York State.
        </md-content>
        <div class="square">  
        </div>
        <md-content>
          <p class="exciting">A flexible and quick learner committed to constantly learning learning and evolving his skills to stay abreast of ever-evolving technologies and trends in the industry. Communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, VueJS, and ReactJS.
          </p>
        </md-content> 
        <div class="square"></div>
      </md-ripple>
    </md-card>
  </div>
</template>


<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid;
  width: 1400px;
}
.md-content {
  height: 200px;
  padding: 10px;
  font-size: 16px;
  color: #0f4069;
  width: 75%;
}
.md-layout-column{
  width: 1800px;
  margin: auto;
}
// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-toolbar + .md-toolbar {
  margin-top: 16px;
  width: 80%;
  color: #0f4f69;
}
.md-card {
  width: 1200px;
  margin: 40px 250px;
  display: inline-block;
  vertical-align: top;
  align-self: center;
  background-color: #ffffff;
}
.md-ripple{
  color: #F29F2C;
  margin: auto;
  width: 1200px;
}
.projects{
  background-color:#0f4069;
}
.md-card-header{
  width: 800px;
  color:  #0f4f69;
  font-size: 2rem;
}
p::after { 
  background-color: #DE841F;
  color: red;
  font-weight: bold;
  height: 500px;
  width: 500px;
}
.square {
  height: 50px;
  width: 1500px;
  background-color:  #DE841F;
  padding: 10px;
}
</style>

<script>
export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false,
    })
  }
  'ThemeColors',
  'MediaCover',
  'Normal',
  'PaperContent',
  'RegularCards',
  'TripleLine'
</script>
