// import Revolut from "../assets/Revolut.png";
// import DropBox from "../assets/DropBox.png";
// import Pitch from "../assets/Pitch.png";
// import BlinkList from "../assets/BlinkList.png";
// import ClassPass from "../assets/ClassPass.png";
// import Canva from "../assets/Canva.png";
// import Godaddy from "../assets/Godaddy.png";
// import Twitter from "../assets/Twitter.png";
// import Nomad from "../assets/Nomad.png";
// import Terraform from "../assets/Terraform.png";
// import Packer from "../assets/Packer.png";
// import Netlify from "../assets/Netlify.png";
// import Maze from "../assets/Maze.png";
// import Udacity from "../assets/Udacity.png";
// import Webflow from "../assets/Webflow.png";

// const jobData = [
//   {
//     jobsImg: Revolut,
//     jobTitle: "Email Marketing",
//     jobLocation: "Revolut, Madrid, Spain",
//     jobDescription: "Revolut is looking for a Customer Manager to join the marketing team...",
//     jobTypes: ["marketing", "design"],
//   },
//   {
//     jobsImg: DropBox,
//     jobTitle: "Brand Designer",
//     jobLocation: "Dropbox, San Francisco, US",
//     jobDescription: "DropBox is looking for a Customer Manager to join the marketing team...",
//     jobTypes: ["design", "business"],
//   },
//   {
//     jobsImg: Pitch,
//     jobTitle: "Email Marketing",
//     jobLocation: "Pitch, Berlin, Germany",
//     jobDescription: "Pitch is looking for a Customer Manager to join the marketing team...",
//     jobTypes: ["marketing"],
//   },
//   {
//     jobsImg: BlinkList,
//     jobTitle: "Visual Design",
//     jobLocation: "BlinkList, Berlin, Germany",
//     jobDescription: "BlinkList is looking for a Customer Manager to join the marketing team...",
//     jobTypes: ["design"],
//   },
//   {
//     jobsImg: ClassPass,
//     jobTitle: "Product Designer",
//     jobLocation: "ClassPass, Manchester, UK",
//     jobDescription: "ClassPass is looking for a Visual Designer to help the team design...",
//     jobTypes: ["marketing", "design"],
//   },
//   {
//     jobsImg: Canva,
//     jobTitle: "Lead Designer",
//     jobLocation: "Canva, Ontario, Canada",
//     jobDescription: "Canva is looking for a Lead Engineer to help develop...",
//     jobTypes: ["design", "business"],
//   },
//   {
//     jobsImg: Godaddy,
//     jobTitle: "Brand Strategist",
//     jobLocation: "Godaddy, Marseille, France",
//     jobDescription: "Godaddy is looking for a Lead Engineer to help develop...",
//     jobTypes: ["marketing"],
//   },
//   {
//     jobsImg: Twitter,
//     jobTitle: "Data Analyst",
//     jobLocation: "Twitter, San Diego, USA",
//     jobDescription: "Twitter is looking for a Data Analyst to help develop...",
//     jobTypes: ["technology"],
//   },
// ];

// const latestJobsData = [
//   {
//     jobsImg: Nomad,
//     jobTitle: "Social Media Assistant",
//     jobLocation: "Nomad, Paris, France",
//     jobTypes: ["full-time", "marketing", "design"],
//   },
//   {
//     jobsImg: DropBox,
//     jobTitle: "Brand Designer",
//     jobLocation: "Dropbox, San Francisco, US",
//     jobTypes: ["full-time", "marketing", "design"],
//   },
//   {
//     jobsImg: Terraform,
//     jobTitle: "Interactive Developer",
//     jobLocation: "Terraform, Hamburg, Germany",
//     jobDescription: "Terraform is looking for a Customer Manager to join the marketing team...",
//     jobTypes: ["full-time", "marketing", "design"],
//   },
//   {
//     jobsImg: Packer,
//     jobTitle: "HR Manager",
//     jobLocation: "Packer, Lucerne, Switzerland",
//     jobTypes: ["full-time", "marketing", "design"],
//   },
//   {
//     jobsImg: Netlify,
//     jobTitle: "Social Media Assistant",
//     jobLocation: "Netlify, Paris, France",
//     jobTypes: ["full-time", "marketing", "design"],
//   },
//   {
//     jobsImg: Maze,
//     jobTitle: "Brand Designer",
//     jobLocation: "Maze, San Francisco, USA",
//     jobTypes: ["full-time", "marketing", "design"],
//   },
//   {
//     jobsImg: Udacity,
//     jobTitle: "Interactive Developer",
//     jobLocation: "Udacity, Hamburg, Germany",
//     jobTypes: ["full-time", "marketing", "design"],
//   },
//   {
//     jobsImg: Webflow,
//     jobTitle: "HR Manager",
//     jobLocation: "Webflow, Lucerne, Switzerland",
//     jobTypes: ["full-time", "marketing", "design"],
//   },
// ];

// export const JobInfo = jobData;
// export const LatestJobInfo = latestJobsData;

// export default { JobInfo, LatestJobInfo };


import Revolut from "../assets/Revolut.png";
import DropBox from "../assets/Dropbox.png";
import Pitch from "../assets/Pitch.png";
import BlinkList from "../assets/Blinklist.png"; // Ensure case matches the file system
import ClassPass from "../assets/ClassPass.png";
import Canva from "../assets/Canva.png";
import Godaddy from "../assets/Godaddy.png";
import Twitter from "../assets/Twitter.png";
import Nomad from "../assets/Nomad.png";
import Terraform from "../assets/Terraform.png";
import Packer from "../assets/Packer.png";
import Netlify from "../assets/Netlify.png";
import Maze from "../assets/Maze.png";
import Udacity from "../assets/Udacity.png";
import Webflow from "../assets/Webflow.png";

    const FeatureData = [
        {
            jobsImg: Revolut,
            jobTitle: "Email marketing",
            imgName: "Revolut",
            jobLocation: " Madrid, Spain",
            jobPP: "Revolut is looking for Customer Manager to join the marketing team...",
            jobType1: "marketing",
            jobType2: "design",
        },
        {
            jobsImg: DropBox,
            jobTitle: "Brand designer",
            imgName: "DropBox",
            jobLocation: " San Francisco, US",
            jobPP: "DropBox is looking for a Customer Manager to join the marketing team...",
            jobType1: "design",
            jobType2: "business",
        },
        {
            jobsImg: Pitch,
            jobTitle: "Email Marketing",
            imgName: "Pitch",
            jobLocation: "Pitch Berlin, Germany",
            jobPP: "Pitch is looking for a Customer Manager to join the marketing team...",
            jobType1: "marketing",
        },
        {
            jobsImg: BlinkList,
            jobTitle: "Visual design",
            imgName: "BlinkList",
            jobLocation: " Berlin, Germany",
            jobPP: "BlinkList is looking for a Customer Manager to join the marketing team...",
            jobType1: "design",
        },
        {
            jobsImg: ClassPass,
            jobTitle: "Product Designer",
            imgName: "ClassPass",
            jobLocation: " Manchester, UK",
            jobPP: "ClassPass is looking for a Visual Designer to help the team design...",
            jobType1: "marketing",
            jobType2: "design",
        },
        {
            jobsImg: Canva,
            jobTitle: "Lead Designer",
            imgName: "Canva",
            jobLocation: "Ontario, Canada",
            jobPP: "Canva is looking for a Lead Engineer to help develop...",
            jobType1: "design",
            jobType2: "business",
        },
        {
            jobsImg: Godaddy,
            jobTitle: "Brand Strategist",
            imgName: "Godaddy",
            jobLocation: " Marseille, France",
            jobPP: "Godaddy is looking for a Lead Engineer to help develop...",
            jobType1: "marketing",
        },
        {
            jobsImg: Twitter,
            jobTitle: "Data Analyst",
            imgName: "Twitter",
            jobLocation: " San Diego, USA",
            jobPP: "Twitter is looking for a Data Analyst to help develop...",
            jobType1: "technology",
        },
    ]; 


    const LatestJobInfo = [
        {
            jobsImg: Nomad,
            jobTitle: "social media assistant",
            imgName: "Nomad",
            jobLocation: " pasris, france",
            jobType1: "full-time",
            jobType2: "marketing",
            jobType3 : "design"
        },
        {
            jobsImg: DropBox,
            jobTitle: "Brand designer",
            imgName: "DropBox",
            jobLocation: "San Francisco, US",
            jobType1: "full-time",
            jobType2: "marketing",
            jobType3 : "design"
        },
        {
            jobsImg:Terraform,
            jobTitle: "interactive developer",
            imgName: "Terraform",
            jobLocation: " hamburg, Germany",
            jobPP: "Pitch is looking for a Customer Manager to join the marketing team...",
            jobType1: "full-time",
            jobType2: "marketing",
            jobType3 : "design"
        },
        {
            jobsImg:Packer,
            jobTitle: "hr manager",
            imgName: "Packer",
            jobLocation:" lucern,switzerland",
            jobType1: "full-time",
            jobType2: "marketing",
            jobType3 : "design"
        },
        {
            jobsImg: Netlify,
            jobTitle: "social media assistant",
            imgName: "Netlify",
            jobLocation: "paris france ",
            jobType1: "full-time",
            jobType2: "marketing",
            jobType3 : "design",
        },
        {
            jobsImg: Maze,
            jobTitle: "brand Designer",
            imgName: "Maze",
            jobLocation: "sanfrancisco, Usa",
            jobType1: "full-time",
            jobType2: "marketing",
            jobType3 : "design"
        },
        {
            jobsImg: Udacity,
            jobTitle: "interactive developer",
            imgName: "Udacity",
            jobLocation: "hamburg, Germany",
            jobType1: "full-time",
            jobType2: "marketing",
            jobType3 : "design"
        },
        {
            jobsImg: Webflow,
            jobTitle: "hr manager",
            imgName: "Webflow",
            jobLocation:"lucern,switzerland",
            jobType1: "full-time",
            jobType2: "marketing",
            jobType3 : "design"
        },
    ]


    export { FeatureData , LatestJobInfo };