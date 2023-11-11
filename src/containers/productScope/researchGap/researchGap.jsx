import React from "react";
import { Grid } from "@mui/material";
import "./researchGap.css";

function ResearchGap() {
  return (
    <div className="gpt3__header section__padding" id="project-scope-b">
      <div className="gpt3__header-content">
        <h2 className="gradient__text">Research Gap</h2>
      </div>
      <Grid container justifyContent="flex-start" spacing={2} mt={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <h3>A. Sinhala letter writing component</h3> <br></br>
          <p className="gap">
            Every preschool in the globe teaches kids remotely using digital
            gadgets during the COVID-19 epidemic. because those kids use digital
            devices more frequently than before. Also, rather than learning,
            adolescents are more addicted to playing video games on smartphones.
            When compared to years prior to the Covid 19, children's usage of
            digital devices in Sri Lanka became consistent. Yet, in other
            nations, people employ a different system to improve their language
            proficiency, listening comprehension, critical thinking, excitement
            for learning, writing, and reading, as well as their capacity for
            cultural understanding. Yet, there is less information about
            developing preschoolers' digital device abilities in the Sinhalese
            language in Sri Lanka. Hence, a preschool learning assistance system
            will be implemented to address these issues.
          </p>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <h3>B. Shapes and color component</h3> <br></br>
          <p className="gap">
            Worldwide preschool education underwent a major transition during
            the COVID-19 pandemic, with remote learning becoming typical. In the
            realm of early childhood, the use of electronic devices has become
            increasingly pervasive in the fabric of Western society. The
            utilization of such devices has become a ubiquitous aspect of
            everyday life for young children in this context. The digital device
            usage among children in Sri Lanka slightly increased when compared
            to pre-pandemic years, while other countries adopted digital systems
            to enhance their children’s education background. However, there is
            a lack of research and information specifically focused on fostering
            digital device abilities in the Sinhalese language for preschoolers
            in Sri Lanka. Therefore, the adoption of a preschool learning
            support system becomes crucial to address these issues to
          </p>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <h3>C. Letter-teaching component</h3> <br></br>
          <p className="gap">
            Every preschool in the globe teaches kids remotely using digital
            gadgets during the COVID-19 epidemic. Since these children use
            mobile phones more often compared to the past. Additionally, rather
            than learning, they are more addicted to playing video games on
            devices. When compared to years prior to the Covid 19, children's
            usage of digital devices in Sri Lanka became consistent. However, in
            other nations, people use 5 a different system to improve their
            language proficiency, listening comprehension, critical thinking,
            enthusiasm for learning, writing, and reading, as well as their
            capacity for cultural understanding.
          </p>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <h3>D. Storytelling</h3> <br></br>
          <p className="gap">
            In Sri Lanka, the children's usage of digital devices became the
            same when considering the previous years before the Covid 19. But in
            other countries, they use a different system to enhance their
            listening skills, language skills, creative thinking, cognitive
            skills, enthusiasm for learning, writing, and reading, and
            developing cultural understanding. But in Sri Lanka, there is less
            research on improving the Sinhala language skills through a digital
            device system for preschool children. So, to address these
            improvements, a preschool learning support system will be developed.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResearchGap;
