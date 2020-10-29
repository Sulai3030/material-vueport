<template>
  <div id="app">
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header></md-card-header>
          <h3 class="md-title"><center>Blog and  Recipes!</center></h3>
            <md-list class="md-triple-line">
              <md-content>
              Summer is upon us which means two things, one, it is too hot to turn
              on the stove and two salads are at their apex of deliciousness.
            
              <p></p>Middle Eastern Summer Salad
              Summer is upon us which means two things, one, it is too hot to turn on the stove and two salads are at their apex of deliciousness.

              <p></p>While I was walking the aisles of my local supermarket, I walked past a can of chickpeas and for some reason I grabbed it and put it in my cart along with some black beans. I had an idea.

              <p></p>“Lets make a Greek type salad I thought.” So I bought what in my mind were Greek              seeming ingredients and set about making a sort of Greek salad.
              Ingredients:

              <p></p>
              For the Dressing:

              <ul>
              <li>4 cloves diced garlic (less if you are sensitive to the strength of garlic but honestly the more the merrier!</li>
              <li>3 Tablespoons of Lemon juice (1 fresh lemon)</li>
              <li>6 Tablespoons of Lime juice (2 fresh Limes)</li>
              <li>3 Tablespoons of Olive Oil plus more to taste</li>
              <li>¼ cup minced fresh Basil or 1/3 cup dried basil</li>
              <li>1 Tablespoon chopped Parsley</li>
              <li>1 Teaspoon Honey</li>
              <li>Salt (to taste)</li>
              <li>Pepper</li>
              <li>¼ Teaspoon cayenne pepper</li>
              <li>Dash Mint</li>
              <li>Dash Oregano For the Salad:</li>
              <li>1 Can Chickpeas, drained</li>
              <li>1 Can Black beans, drained</li>
              <li>½ Cup diced onion (red onion is less aggressive)</li>
             <li> 1 Pint grape Tomatoes or 1 large vine ripened Tomato, diced</li>
              <li>4 sweet peppers (Red, Yellow, Orange) seeded and diced</li>
              </ul>
              <p></p>Start by whisking the dressing ingredients. Taste your dressing and add more of whatever seems to be lacking. Typically that’s salt but I found
              that I needed more cayenne and oregano too. <p></p>Place the chickpeas, black beans, diced red onion, diced tomatoes, and diced peppers in a separate bowl.
              <p></p>Toss with the dressing to coat and let sit for about an hour to really get the flavors mixing. Serve with a nice lamb chop or alone, your choice. 
              <p></p>Mangia and enjoy!         
            </md-content>
              <md-content>
              <md-divider class="md-inset"></md-divider>
              </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions> 
    </md-card>
  </div>
</template>


<script>
// @ is an alias to /src
export default {
  name: 'RegularCards'
}
'PaperContent'

'TripleLine'

'LayoutHorizontalColumns'


</script>



<style lang="scss" scoped>
  .md-list {
    width: 1020px;
    height: 1000px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

  .md-card {
    width: 1020px;
    margin: 40px 250px;
    display: inline-block;
    vertical-align: top;
  }
  .md-list-item-content{
    width: 1000px;
  }

  .md-layout-item {
    height: 40px;

    &:nth-child(1) {
      background: md-get-palette-color(grey, 300);
    }

    &:nth-child(2) {
      background: md-get-palette-color(grey, 400);
    }

    &:nth-child(3) {
      background: md-get-palette-color(grey, 500);
    }
  }
</style>