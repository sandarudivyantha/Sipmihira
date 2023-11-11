import * as React from "react";
import {
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import "./downloads.css";
import PdfIcon from "./Icons";
import downloadLinks from "./DownloadLinks";

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: #ffffff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0, .125);
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: #ffffff;
    transform: scale(1.1);
  };
  `}
`;

const StyledHeading = styled(Typography)`
  ${({ theme }) => `
    font-weight: bold;
    font-size: 20px;
  `}
`;

const StyledBody = styled(Typography)`
  ${({ theme }) => `
    font-weight: normal;
    font-size: 14px;
`}
`;

const StyledAction = styled(Typography)`
  ${({ theme }) => `
    font-weight: normal;
    font-size: 18px;
    margin-left: 5px;
  `}
`;


const CardComponent = (props) => {
  const { icon, title, date, isActions, action, handleIndividualLink, handleGroupLink } = props;
  
  const handleIndividualClick = () => {
    window.open(handleIndividualLink, "_blank")
  };

  const handleGroupClick = () => {
    window.open(handleGroupLink, "_blank")
  };

  return (
    <Box sx={{ width: "100%", marginBottom: "1rem" }}>
      <StyledCard
        variant="outlined"
        sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", minHeight: "280px"}}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} className="pdf-icon">
              {icon}
            </Avatar>
          }
        />
        <CardContent>
          <StyledHeading gutterBottom variant="h5" component="div">
            {title}
          </StyledHeading>
          <StyledBody variant="body2" color="text.secondary">
            {`Submitted on ${date}`}
          </StyledBody>
        </CardContent>
        {isActions ? (
          <>
            <CardActions sx={{justifyContent: "space-between" }}>
              <StyledAction>Individual</StyledAction>
              <Button size="small" onClick={handleIndividualClick}><StyledAction >Download</StyledAction></Button>
            </CardActions>
            <CardActions sx={{justifyContent: "space-between" }}>
              <StyledAction>Group</StyledAction>
              <Button size="small" onClick={handleGroupClick}><StyledAction >Download</StyledAction></Button>
            </CardActions>
          </>
        ) : (
          <>
            <CardActions></CardActions>
            <CardActions sx={{mb: "2px", justifyContent: "space-between" }}>
            <StyledAction>{action}</StyledAction>
            <Button size="small" onClick={handleIndividualClick}><StyledAction >Download</StyledAction></Button>
          </CardActions>
          </>
          
        )}
      </StyledCard>
    </Box>
  );
};

const Downloads = () => (
  <div className="sipmihira__features section__padding" id="downloads">
    <div className="sipmihira__features-heading">
      <h1 className="gradient__text" id="documents">Documents</h1>
    </div>
    <div className="sipmihira__features-container">
      <Grid
        container
        justifyContent="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Topic Assessment"}
            date={"2023/02/13"}
            isActions={false}
            action={"Group"}
            handleIndividualLink={downloadLinks.TOPIC_ASSESSMENTS}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Project Charter"}
            date={"2023/04/09"}
            isActions={false}
            action={"Group"}
            handleIndividualLink={downloadLinks.CHARTER}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Project Proposal"}
            date={"2023/05/05"}
            isActions={false}
            action={"Individual"}
            handleIndividualLink={downloadLinks.PROPOSAL_DOCUMENTS}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Status Document 1"}
            date={"2023/05/22"}
            isActions={false}
            action={"Individual"}
            handleIndividualLink={downloadLinks.STATUS_DOCUMENTS_1}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Status Document 2"}
            date={"2023/09/4"}
            isActions={false}
            action={"Individual"}
            handleIndividualLink={downloadLinks.STATUS_DOCUMENTS_2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Research Paper"}
            date={"2023/06/20"}
            isActions={false}
            action={"Group"}
            handleIndividualLink={downloadLinks.RESEARCH_PAPER}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Poster"}
            date={"2023/11/6"}
            isActions={false}
            action={"Group"}
            handleIndividualLink={downloadLinks.POSTER}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Final Report"}
            date={"2023/11/27"}
            isActions={true}
            handleIndividualLink={downloadLinks.FINAL_REPORT_INDIVIDUAL}
            handleGroupLink={downloadLinks.FINAL_REPORT_GROUP}
          />
        </Grid>
      </Grid>
    </div>
    <div className="sipmihira__features-heading">
      <h1 className="gradient__text" id="presentations">Presentations</h1>
    </div>
    <div className="sipmihira__features-container">
      <Grid
        container
        justifyContent="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Project Proposal"}
            date={"2023/03/27"}
            isActions={false}
            action={"Group"}
            handleIndividualLink={downloadLinks.PROPOSAL_PRESENTATION}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Progress Presentation 1"}
            date={"2023/05/22"}
            isActions={false}
            action={"Group"}
            handleIndividualLink={downloadLinks.PROGRESS_1}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Progress Presentation 2"}
            date={"2023/09/04"}
            isActions={false}
            action={"Group"}
            handleIndividualLink={downloadLinks.PROGRESS_2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            icon={<PdfIcon />}
            title={"Final Presentation"}
            date={"2023/11/01"}
            isActions={false}
            action={"Group"}
            handleIndividualLink={downloadLinks.FINAL}
          />
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Downloads;
