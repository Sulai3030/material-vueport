<template>
  <div class="projects">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header> </md-card-header>
        <md-card-content>
          Project 1.
          <a v-bind:href="link" target="_blank"
            ><p>Party Dash| https://partydash.com/</p></a
          >
          <p>
            Front-End Design
          </p>
          <section id="user-goal">
            We built Party Dash with a simple goal in mind: to help party hosts
            plan parties more easily. Responsibilities: Follow design specs
            handed down from site owner. Used CSS and HTML to create inviting
            website
            <p>Technologies used: HTML, CSS, Bootstrap</p>
            <p></p>
            <p></p>
          </section>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-primary"
            ><a href="https://partydash.com/pages/about-us" target="_blank"
              >Read More</a
            ></md-button
          >
        </md-card-actions>
      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead"></div>
        </md-card-header>
        <md-card-content>
          Project 2.
          <p></p>
          RuneSkype is our final project for the Columbia Coding Bootcamp. It is
          the newest
          <p>
            and best way for you and your friends to interact while playing your
            favorite Role Playing Game
          </p>
          <p>
            (RPG). Getting Started Playing RuneSkype is easy, just download a
            copy from our homepage or our repo:
          </p>
        </md-card-content>
        <md-card-actions>
          <md-button
            ><a href="https://github.com/Sulai3030/RuneSkype" target="_blank"
              >Read More</a
            ></md-button
          >
        </md-card-actions>
      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead"></div>
        </md-card-header>
        <md-card-content>
          <p>Project 3.</p>
          <a href="http://www.goatvoter.org/" target="_blank"
            >The G.O.A.T. Voter App</a
          >
          <p></p>
          <p>
            The GOAT Voter APP provides a one-stop platform where individuals
            can search and access information about candidates that are running
            for political offices anywhere in the United States. The GOAT Voter
            App is a useful tool that streamlines information and helps to
            increase voter participation.
          </p>

          <p>
            The App will allow users to create a user name and pass word to
            store their search history How the GOAT Voter App works: By entering
            their zip code in a search button, users will be able to search and
            access detailed information about all candidates that are running
            for elections in their disctrict. In addition, users can enter their
            exact address to: find out where their polling site is located,
            request for free transportation on election day.
          </p>
          For a full description of the GOAT Voter App, please visit the project
          page:
          <p></p>
          https://github.com/naz585/Project-2 | www.goatvoter.org
          <p></p>
          Requirements: MySQL
          <p></p>
          Recommended module Installation: NPM, Body-parser, .env,
          Express-Handlebars
          <p>Configuration:</p>
          Front End: Handlebars, Bootstrap, CSS, CSS Parallax
          <p></p>
          Back End: Node.js, Express, Sequelize, Google Civic Information API
          <p></p>
          Deployment: Heroku, Google Domain (www.goatvoter.org)
          <p></p>
        </md-card-content>
        <md-card-actions>
          <md-button
            ><a href="https://github.com/Sulai3030/GOAT-voter">
              Read More</a
            ></md-button
          >
        </md-card-actions>
      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead"></div>
        </md-card-header>
        <md-card-content>
          <p>Project 4.</p>
          Beer Near Here
          <p></p>
          <p>
            Beer Near Here Beer Near Here is a project to successfully connect
            discerning beer drinkers in Manhattan with bars in the city that
            serve the beers that they like. We start with a brief survey that
            takes in their preferences and matches those answers with the
            Untappd database. Using this API we can populate a map using the
            Google Maps API that then lists the locations of bars and taverns t
            hat carry the user's beer preference.
          </p>
          <p></p>
          Deployment: Heroku
          <p></p>
        </md-card-content>
        <md-card-actions>
          <md-button
            ><a href="https://github.com/Christiantav/beerNearHere"
              >Read More</a
            ></md-button
          >
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Components mounted.");
  },
  data() {
    return {
      link: "https://partydash.com/"
    };
  },
  name: "RegularCards"
};
("PaperContent");

("SingleLine");

("ListTypes");
</script>

<style lang="scss" scoped>
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
.md-card-content {
  color: #f29f2c;
}
.projects {
  background-color: #fff;
}
</style>
