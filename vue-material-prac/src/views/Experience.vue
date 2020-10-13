<template>
<div>
    <md-content>
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Party Dash App</div>
            <div class="md-subhead">Front End Design</div>
          </md-card-header>
          <md-card-content>
            We built Party Dash with a simple goal in mind: to help party hosts plan parties more easily
            <p></p>Responsibilities:         
          <md-list>
            <md-list-item>
              Follow design specs handed down from site owner
            </md-list-item>
            <md-list-item>
              Used CSS and HTML to create inviting website
            </md-list-item>
            <md-list-item>
            Technologies Used: HTML5, CSS3, Bootstrap 
            </md-list-item>
          </md-list>         
          </md-card-content>
          <md-card-actions>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'PaperContent'
}
</script>


<style lang="scss" scoped>
  .md-content {
    width: 1200px;
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
