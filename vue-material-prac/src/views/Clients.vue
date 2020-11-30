<template>
  <div class="main">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div md-alignment="center">
            <h2 class="h2">Clients</h2>
          </div>	
        </md-card-header>
      </md-ripple>
      </md-card>
  <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <a href="https://www.BlackHealthMatters.com" target="_blank">
          <div class="md-subhead">BlackHealth Matters.com</div>
          </a>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text">
          <a href="https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/" target="_blank">
            <span class="md-list-item-text">• "Lauren Lee talks kidney disease breakthroughs"
            </span></a>
          <a href="https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you//" target="_blank">
            <span class="md-list-item-text">•	"Working with your doctor when you have kidney disease empowering yourself to be an advocate for you"
            </span>
          </a>
          <a href="https://blackhealthmatters.com/is-there-a-light-at-the-end-of-the-dark-tunnel-of-kidney-disease-in-children/" target="_blank">
            <span class="md-list-item-text">•	"Is There a Light at the End of the Dark Tunnel of Kidney Disease in Children?" - An Interview with Dr. Gbadegesin
            </span>
          </a>
          <br />
        </div>
        </md-card-content>
        <md-card-actions>
        </md-card-actions>
      </md-ripple>
  </md-card>    
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead"><router-link to="Blog">Examiner.com 	2009 - 2017</router-link> </div>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text" href="https://blackhealthmatters.com"   target="_blank">
          <span class="md-list-item-text">• Wrote, cooked and tested new recipes for Examiner.com</span>
        <span class="md-list-item-text"> • Regularly manage social media platforms to advertise web content</span>
          <span></span>
            <br />
        </div>
        </md-card-content>
        <md-card-actions>
        </md-card-actions>
      </md-ripple>
    </md-card>      <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div 
          class="md-subhead" href="https://blackhealthmatters.com" target="_blank">The Princeton Review.com 2015
          </div>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text" href="https://blackhealthmatters.com"   target="_blank">
          <span class="md-list-item-text">• Proofread and wrote (15-20) articles and promotional copy to adhere to SEO best practices which resulted in
          increased readership</span>
          <span class="md-list-item-text">• Performed Quality Assurance on the company’s web pages to improve readability and page rank in Google
          searches 
          </span>
          <span>•“Strategies to Succeed in Law School”;
          “Strategies for Second–Time Applicants”</span>
          <br />
        </div>
        </md-card-content>
        <md-card-actions>
        </md-card-actions>
      </md-ripple>
  </md-card>
  <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead" href="https://blackhealthmatters.com"   target="_blank">Pearson Education    2013 - 2014</div>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text" href="https://blackhealthmatters.com"   target="_blank">
          <span class="md-list-item-text">•	Assisted Executive Editor for English Composition and Literature by researching, proofing and writing supplemental materials</span>
          <span class="md-list-item-text"> for an ‘Introduction Level English Textbook</span>
          <span class="md-list-item-text">•	Edited and proofread educational materials to ensure accuracy and consistency of information. Designed and formulated writing exercises
          </span>
          <span>and study questions (20+) for each chapter in text and online versions.</span>
          <br /></div>
        </md-card-content>
        <md-card-actions>
        </md-card-actions>
      </md-ripple>
  </md-card>
  <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <a href="https://screenrant.com/author/sulai/" target="_blank">
          <div class="md-subhead">ScreenRant.com</div>
          </a>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text">
          <a href="https://screenrant.com/author/sulai/" target="_blank">
            <span class="md-list-item-text">•	Wrote multiple daily posts of varying length about upcoming Hollywood movies on   deadline
            </span>
          </a>
          <br />
        </div>
        </md-card-content>
        <md-card-actions>
        </md-card-actions>
      </md-ripple>
  </md-card>
  </div>
</template>

<style lang="scss" scoped>
.main{
  background-color: #ffffff;
}
.md-card {
    width: 1000px;
    margin: 40px 250px;
    display: inline-flex;
    vertical-align: top;
    color: #F29F2C;
  }
.md-list {
    width: 1000px;
    height: 600px;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    
}
.md-title{
    width: 1000px
    
}
.md-card-content{
  color:  #F29F2C;
  display: inline-block;
}
.md-list-item-text{
  width: 1000px;
  color:#F29F2C;
}
.md-list-item{
  color:#F29F2C
}
.md-with-hover{
  background-color: #0f4069;
  position: relative;
  color:#F29F2C;
}
.md-subhead{
  color:#ffffff;
}
.md-theme-default{
  color: #F29F2C;
}
small {
    display: block;
  }
.md-content {
    width: 1200px;
    height: 1200px;
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
  background-color: #0f4069;
}
.md-button-content{
    color:#F29F2C
  }
.p{
  color: #F29F2C;
}
.p.exciting{
  width: 700px;
}
.h2{
  text-align: center 
}

</style>

<script>
export default {
  mounted(){
    console.log('Components mounted.')
  },
  data(){
    return{}
  },
name: 'RegularCards'
}
'PaperContent',

'SingleLine',

'ListTypes',

{
  name: 'ButtonVsLink',
  computed: {
    pageUrl () {
      return window.location.href
    }
  }
}
</script>
