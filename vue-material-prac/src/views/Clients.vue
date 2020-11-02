<template>
  <div class="main">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">
            <h3 class="md-title"><center>Clients</center></h3>
          </div>	
        </md-card-header>
      </md-ripple>
      </md-card>
      <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead">
            <a v-bind:href="link" target=_blank>BlackHealthMatters 2019- Present</a>
          </div>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text">
          <span class="md-list-item-text">• Write Health Articles targeted to an          African American audience</span>
          <span class="md-list-item-text" href="https://blackhealthmatters.com"   target="_blank">• https://blackhealthmatters.com/       working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to      -be-an-advocate-for-you/</span>
          <span>• https://blackhealthmatters.com/       lauren-lee-talks-kidney-disease-breakthroughs/</span>
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
          <div class="md-subhead" href="https://blackhealthmatters.com"   target="_blank">Examiner.com 	2009 - 2017	</div>
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
  </md-card>
  <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead" href="https://blackhealthmatters.com"   target="_blank">The Princeton Review.com 2015</div>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text" href="https://blackhealthmatters.com"   target="_blank">
          
          <span class="md-list-item-text">• Proofread and wrote (15-20) articles and promotional copy to adhere to SEO best practices which resulted in
          increased readership.</span>
          <span class="md-list-item-text">• Performed Quality Assurance on the company’s web pages to improve readability and page rank in Google
          searches: FAQs: The Best 169 Law Schools: 2015 Edition”; 
          </span>
          <span>“Strategies to Succeed in Law School”;
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
          <div class="md-subhead" href="https://blackhealthmatters.com"   target="_blank">Pearson Education</div>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text" href="https://blackhealthmatters.com"   target="_blank">
          <span class="md-list-item-text">•	Assisted Executive Editor for English Composition and Literature by researching, proofing and writing
            supplemental materials for an ‘Introduction Level English Textbook</span>
          <span class="md-list-item-text">•	Edited and proofread educational materials to ensure accuracy and consistency of information. Designed 
            and formulated writing exercises and study questions (20+) for
          </span>
          <span>each chapter in text and online versions.</span>
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
          <div class="md-subhead" href="https://screenrant.com/author/sulai/"   target="_blank">ScreenRant.com</div>
        </md-card-header>
        <md-card-content>
          <div class="md-list-item-text" href="https://screenrant.com/author/sulai/"   target="_blank">
          <span class="md-list-item-text">
            • https://screenrant.com/author/sulai/
          </span>
          <span class="md-list-item-text">•	Wrote multiple daily posts of varying length about upcoming Hollywood movies on deadline</span>
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
    width: 1120px;
    margin: 40px 250px;
    display: inline-block;
    vertical-align: top;
  }
.md-list {
    width: 1000px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    height: 600px;
  }
.md-ripple{
    width: 1000px;
    color: #F29F2C;
  }
.md-title{
    width: 1000px
  }
.md-card-content{
  color: #0f4069;
  display: inline-block;
}
.center{
    color: #0f4069;
}
.md-list-item-text{
  width: 1000px;
  color:#F29F2C;
}
.md-with-hover{
  background-color: #0f4069;
  position: relative;
}
.md-subhead{
  color:#ffffff
}
</style>

<script>
export default {
  mounted(){
    console.log('Components mounted.')
  },
  data(){
    return{
      link: 'https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you/'
    }
  },
  name: 'RegularCards'
}
'PaperContent'

'SingleLine'

'ListTypes'
</script>
