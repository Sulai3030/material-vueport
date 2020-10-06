<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Sulai Sivadel</span>
      </md-app-toolbar>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Web Developer</span>
      </md-app-toolbar>
      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>
        <md-list>
          <md-list-item>
            <span class="md-list-item-text">Home</span>
          </md-list-item>
          <md-list-item>
            <span class="md-list-item-text">Apps</span>
          </md-list-item>
          <md-list-item>
            <span class="md-list-item-text">Experince</span>
          </md-list-item>
          <md-list-item>
            <span class="md-list-item-text">Skills</span>
          </md-list-item>
          <md-list-item>
            <span class="md-list-item-text">Recipes</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
    </md-app>
   <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead"></div>
        </md-card-header>
        <md-card-content>
          Ambitious, user-focused Web and Software Developer with experience working in teams and independently. Has strong project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for 1.5 million citizens of New York State.
        </md-card-content>
        <md-card-content>
          A flexible and quick learner committed to constantly learning learning and evolving his skills to stay abreast of ever-evolving technologies and trends in the industry. Communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, VueJS, and ReactJS.
        </md-card-content>
        <md-card-actions>
          <md-button></md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
    width: 80%
  }
  .md-content {
    width: 1000px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .md-card {
    width: 1800px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'RegularToolbar'
}
</script>
Code copied!
