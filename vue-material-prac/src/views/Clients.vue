<template>
  <div>
    <md-toolbar class="md-transparent">
      <h3 class="md-title">Clients and Clips</h3>
    </md-toolbar>
    <md-card md-with-hover>
      <md-content>
        <md-list class="md-triple-line">
          <div class="md-list-item-text">

            <section id="user-goal">
                <span>
                  <a>BlackHealthMatters.com 2020-</a>
                  <p>{{ courseGoal }}</p>
                  <p>Learn More <a v-bind:href="vueLink">about Vue</a></p>
                </span>
                <span>
                  Write Articles focusing on Health targeted to African Americans
                </span>
            </section>

              Regularly manage social media platforms to advertise web content
          </div>
        </md-list>
      </md-content>
    </md-card>
    <md-card md-with-hover>
      <md-content>
        <md-list class="md-triple-line">
          <div class="md-list-item-text">
            <span>New York City Budget Meals Examiner – Examiner.com  2009-2017</span>
            <span>Wrote, cooked and tested new recipes for Examiner.com </span>
            <span>Regularly manage social media platforms to advertise web content</span>
          </div>  
        </md-list> 
      </md-content>
    </md-card>
    <md-card md-with-hover>
      <md-content>
        <md-list class="md-triple-line">
          <div class="md-list-item-text">
            <span>New York Minute Magazine http://newyorkminutemag.com/ 2013-2014</span>  
            <span>Wrote Film and Television Reviews</span>
            <span>Write column on technology start-ups</span>
            <span>Wrote Op-Ed column on life in New York City</span>
          </div>  
        </md-list> 
      </md-content>
    </md-card>
    <md-card md-with-hover>
      <md-content>
        <md-list class="md-triple-line">
          <div class="md-list-item-text">
            <span>TheScriptLab.com</span>  
            <span>Wrote episode summaries for television shows focusing on the</span>
            <span> screenwriting techniques employed</span>
          </div>  
        </md-list> 
      </md-content>
    </md-card>
    <md-card md-with-hover>
      <md-content>
        <md-list class="md-triple-line">
          <div class="md-list-item-text">
            <span>ScreenRant.com</span>  
            <span>Wrote multiple daily posts of varying length about upcoming</span>
            <span> Hollywood movies on deadline</span>
          </div>  
        </md-list> 
      </md-content>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-content {
  width: 1200px;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.md-card {
  width: 1200px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
export default {
  name: "PaperContent"
};
{
 "RegularCards";
}
</script>