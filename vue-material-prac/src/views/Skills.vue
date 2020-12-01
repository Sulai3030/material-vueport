<template>
  <div id="skills">
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item>
                Languages: JavaScript, Python, CSS, HTML5</md-list-item
              >
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item>
                Libraries: VueJs, React.js, React Native, Express, Node JS,
                jQuery, AJAX, Bootstrap</md-list-item
              >
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item>
                Databases: MongoDB, MySQL, NoSQL, Firebase</md-list-item
              >
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item> Templates: Handlebar</md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item> Version Control: Git/GitHub</md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item> Testing: Jest/Enzyme</md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item> Platforms: Drupal, WordPress</md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item>
                Collaboration Software: Slack, Salesforce</md-list-item
              >
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item>
                Creative Cloud: Photoshop, Illustrator, Lightroom</md-list-item
              >
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item> Image Editors: GIMP, Photoshop</md-list-item>
              <md-divider class="md-inset"></md-divider>
            </md-content>
          </md-list>
        </md-ripple>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-actions>
        <md-ripple>
          <md-card-header> </md-card-header>
          <md-list class="md-triple-line">
            <md-content>
              <md-list-item> Amazon Web Services (AWS)</md-list-item>
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
  name: "RegularCards"
};
("PaperContent");

("TripleLine");

("LayoutHorizontalColumns");
</script>

<style lang="scss" scoped>
.md-list {
  width: 1020px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}

.md-card {
  width: 1000px;
  width: 1020px;
  margin: 40px 250px;
  display: inline-block;
  vertical-align: top;
  background-color: #0f4069;
}
.md-list-item-content {
  width: 1000px;
  color: #f29f2c;
}
.md-card-content {
  color: #f29f2c;
}
.md-list-item-content {
  color: #f29f2c;
}
.md-triple-line {
  color: #f29f2c;
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
