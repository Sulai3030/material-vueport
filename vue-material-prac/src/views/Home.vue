<template>
  <div class="page-container md-layout-column">
    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Sulai Sivadel</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text"></span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text"> </span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text"></span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text"></span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-drawer class="md-right" :md-active.sync="showSidepanel">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title"></span>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <span class="md-list-item-text"></span>
          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary"></md-icon>
          </md-button>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"></span>
          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary"></md-icon>
          </md-button>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"></span>
          <md-button class="md-icon-button md-list-action">
            <md-icon></md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Sulai Sivadel</div>
          <div class="md-subhead">Web Engineer</div>
        </md-card-header>
        <md-card-content>
          Ambitious, user-focused Web and Software Developer with experience working in teams and independently. Has strong project management          experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA         compliant portion of a new healthcare plan for 1.5 million citizens of New York State.
        </md-card-content>
        <md-card-content>
          A flexible and quick learner committed to constantly learning learning and evolving his skills to stay abreast of ever-evolving technologies and trends in the industry. Communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, VueJS, and ReactJS.
        </md-card-content>
        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
   
    
   
  </div>
</template>
<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid;
}
// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-toolbar + .md-toolbar {
  margin-top: 16px;
  width: 80%;
  color: #0066A6;
}
.md-content {
  width: 800px;
  height: 200px;
  display: inline-block;
  padding: 16px;
}
.md-card {
  width: 800px;
  margin: 40px;
  display: inline-block;
  vertical-align: top;
  align-self: center;
}
.page-container {
    min-height: 1300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
    margin: 60px;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  
</style>

<script>
export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>
Code copied!
