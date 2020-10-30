<template>
  <div class="page-container md-layout-column">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Sulai Sivadel</div>
          <div class="md-subhead">Web Engineer</div>
        </md-card-header>
        <md-content>
          Ambitious, user-focused Web and Software Developer with experience working in teams and independently. Has strong project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for 1.5 million citizens of New York State.
        </md-content>
        <md-content>
          A flexible and quick learner committed to constantly learning learning and evolving his skills to stay abreast of ever-evolving technologies and trends in the industry. Communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, VueJS, and ReactJS.
        </md-content>
      </md-ripple>
    </md-card>
  </div>
</template>
<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid;
}
.md-content {
  width: 1400px;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
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
.md-content {
  width: 1200px;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 16px;
  color:#0f4f69;
}
.md-card {
  width: 1400px;
  margin: 20px, 20px, 20px, 60px;
  display: inline-block;
  vertical-align: top;
  align-self: center;
  padding: 40px;
}
.page-container {
    min-height: 1300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
    margin: 60px;
  }
.md-card-content{
    color:#0F4F69;
  }

   // Demo purposes only
.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
.md-title{
  margin: auto;
  width: 50%;
  padding: 10px;
  color:#0F4F69;

  }
.md-subhead{
  margin: auto;
  width: 50%;
  padding: 10px;
  color:#0F4F69;
  font-size: 18px;

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
  'PaperContent'
</script>
