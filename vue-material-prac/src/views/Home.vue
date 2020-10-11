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
        <md-toolbar class="md-transparent" md-elevation="0"></md-toolbar>
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
        <md-card-content> </md-card-content>
        <md-card-content> </md-card-content>
        <md-card-actions>
          <md-button>More Info</md-button>
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

export default {}
</script>
Code copied!
