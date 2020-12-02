<template>
  <div class="projects">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header> </md-card-header>
        <md-card-content>
          Project 1.
          <p>
            Party Dash App |
            <a href="https://partydash.com/" target="_blank">
              https://partydash.com/</a
            >
          </p>
          <p>
            Front-End Design
          </p>
          <section id="user-goal">
            We built Party Dash with a simple goal in mind: to help party hosts
            plan parties more easily.
            <p></p>
            Responsibilities: Follow design specs handed down from site owner.
            Used CSS and HTML to create inviting website
            <p>Technologies used: HTML, CSS, Bootstrap</p>
            <p></p>
          </section>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-primary"
            ><a href="https://partydash.com/pages/about-us"
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
          <a href="http://www.mayapplecenter.org/" target="_blank"
            >Mayapple Center for the Arts and Humanities.</a
          >
          <p></p>
          Webmaster Jan 2019 - Present
          <p>
            Updated and maintained website (Drupal 7 platform), creating links
            between Mayapple’s homepage and their yearly summer program at Sarah
            Lawrence College. Added, removed, and refined content for Events,
            Faculty, Executive Staff, Executive Board, and Advisory Board pages.
          </p>
          <p>Key Accomplishments:</p>
          <p>
            ● Removed departed Advisory Board members from Advisory Board page
            and added new Advisory Board Members
          </p>
          <p>
            ● Input new faculty on Faculty page and Executive Board listing and
            names.
          </p>
          <p>
            ● Communicated foundation’s message through updates on homepage
            about mission, events, enrollment opportunities and scholarships
          </p>
        </md-card-content>
        <md-card-actions>
          <md-button>Read More</md-button>
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
          <p>Regeneron Inc.</p>
          <p>
            Technical Writer/ Content Management Writer/Editor, Independent
            Contractor
          </p>
          <p>
            Created and edited complex technical documentation (Runbooks, cheat
            sheets, etc.) in plain language that allowed clear communication
            between technical and non-technical end-users in understanding
            standard operating procedure (SOP) of different departments (IT,
            Laboratories, etc.).
          </p>
          <p></p>
          Collaborated with Project Managers & Subject Matter Experts (SMEs) to
          develop and maintain site content (FTP, Networking, etc.) for
          divisions by conducting face-to-face and teleconference interviews
          with SMEs about the day-to-day operations of each division to
          accumulate Mission Critical data.
          <p></p>
          Individually created User-facing documentation through SharePoint to
          implement a smooth continuation of company business if Mission
          Critical issues occurred.
          <p>
            Key Accomplishments:
          </p>

          <p>
            ● Interviewed 8 SMEs (division heads and assistant managers) for
            each division to accumulate all necessary data
          </p>
          <p>
            ● Utilized SME-obtained data to create FTP, Network, and IT Runbook
            from project start to project finish
          </p>
          <p></p>
        </md-card-content>
        <md-card-actions>
          <md-button>Read More</md-button>
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
          <p>Spruce Technology Inc.</p>
          Technical Writer, Independent Contractor
          <p>
            <a href="http://www1.nyc.gov/site/buildings/index.page"
              >City of New York Department of Bulidings
            </a>
          </p>
          <p>
            Wrote and edited complex technical information to present in a clear
            concise way as User Guides and Manuals to aid end-users such as
            architects, contractors, superintendents and the general public in
            understanding and using the online portal for the New York City’s
            Department of Buildings’ website (Microsoft Dynamics CRM platform).
            Transformed pre-existing design specifications, project plans, text
            plans, research and business correspondence into online templates
            for general public access. Read More
          </p>

          <p>Key Accomplishments</p>
          <p>
            ● Converted thousands of pre-existing paper documents from the
            Department of Building’s inception in 1936 into easily-accessible
            and understandable online information that is easily accessed and
            used by the general public
          </p>
          <p>
            ● Transformed paper documents required of NYC citizens, businesses,
            homeowners, architects, etc. seeking government permission to
            perform repairs, modifications, builds, scaffoldings, etc., into
            easily found usable online templates
          </p>
          <p>
            ● Created content for About, Tenant, Homeowner, Business, Industry,
            Safety, and Codes portals.
          </p>
          <p></p>
          ● Designed flowcharts in MS Visio for Instruction Manuals
        </md-card-content>
        <md-card-actions>
          <md-button
            ><a href="http://www1.nyc.gov/site/buildings/index.page"
              >Read More</a
            ></md-button
          >
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

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
  background-color: #ffffff;
}
.md-card-content {
  color: #0f4069;
}
.projects {
  background-color: #0f4069;
}
</style>

<script>
export default {
  name: "RegularCards"
};
("PaperContent");

("TripleLine");
</script>
