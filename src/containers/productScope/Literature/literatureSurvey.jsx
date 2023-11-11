import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { sinhala, survey } from "../import.js";
import "./literature.css";
import { Grid, Typography } from "@mui/material";

function MediaControlCard(props) {
  const {image, isText} = props;
  return (
    <Card sx={{ display: "flex", minWidth: "250px", mt: "20px" }}>
    {isText ? 
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Live from space album cover"
      />
      : 
      <CardMedia
        component="img"
        image={image}
        alt="Live from space album cover"
      />
    }
      {isText && (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography>
            The Sinhalese make up 74.9% of the population of Sri Lanka
          </Typography>
        </CardContent>
      </Box>
      )}
    </Card>
  );
}

const LiteratureSurvey = () => {
  return (
    <div className="gpt3__header section__padding" id="project-scope-a">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Product Scope</h1>
        <h2 className="gradient__text">Literature Survey</h2>
      </div>
      <Grid container justifyContent="flex-start" spacing={1} mt={2}>
      <Grid item xs={12} sm={6}>
        <div className="card">
          <MediaControlCard image={sinhala} isText={true}/>
          <p className="caption">Figure 1: Wikipedia</p>
          <MediaControlCard image={survey}/>
          <p className="caption">Figure 2: Statistics of Sinhala medium students in Sri Lanka 2021</p>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className="gap">
            A. In the domain of Sinhala alphabet education for young learners,
            mobile applications are being integrated, but they lack tailored
            features for fostering writing skills and auditory acumen. Notably,
            Asitha Ishantha's research on Sinhala handwriting serves as a
            catalyst for exploring transformative avenues. The integration of
            mobile apps for language learning prompts tailored approaches for
            young learners in alphabet education. However, a research gap
            persists in developing comprehensive solutions that encompass
            dynamic video tutorials and engaging pedagogical methods.
            <br></br>
            <br></br>
            B. Teaching shapes and colors to children is essential for fostering
            creativity and cognitive development. Innovative technologies, such
            as Arduino, have been employed to create effective learning tools,
            achieving high accuracy in recognizing colors and shapes.
            Tablet-based learning activities have led to enhanced cognitive
            levels and geometric shape understanding among kindergarden children
            . The effectiveness of mobile and multimedia learning in early
            childhood education has been emphasized from 2003-2014.
            <br></br>
            <br></br>
            C. Mobile apps have become popular for teaching languages like
            Sinhala to children, especially through game-based learning.
            Usability is a critical factor in consumer acceptance, as
            demonstrated by the "BenKids" app designed for preschoolers.
            Another study introduced a machine-learning app for English language
            learning, garnering enthusiasm among Sri Lankan primary students
            .
            <br></br>
            <br></br>
            D. Storytelling plays a pivotal role in enhancing thinking and
            creativity from an early age. Various studies have employed modern
            technologies and neural networks, such as CNN and RNN, to generate
            human-readable stories. These approaches combine
            images and text to create engaging storytelling experiences.
          </p>
        </Grid>
        </Grid>
    </div>
  );
};

export default LiteratureSurvey;
