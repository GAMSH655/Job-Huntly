import Revolut from "../assets/Revolut.png";
import DropBox from "../assets/DropBox.png";
import Pitch from "../assets/Pitch.png";
import BlinkList from "../assets/BlinkList.png"; // Ensure case matches the file system
import ClassPass from "../assets/ClassPass.png";
import Canva from "../assets/Canva.png";
import Godaddy from "../assets/Godaddy.png";
import Twitter from "../assets/Twitter.png";
const JobData = () => {
    const FeatureData = [
        {
            jobsImg: Revolut,
            jobTitle: "Email marketing",
            jobLocation: "Revolut Madrid, Spain",
            jobPP: "Revolut is looking for Customer Manager to join the marketing team...",
            jobType1: "marketing",
            jobType2: "design",
        },
        {
            jobsImg: DropBox,
            jobTitle: "Brand designer",
            jobLocation: "Dropbox San Francisco, US",
            jobPP: "DropBox is looking for a Customer Manager to join the marketing team...",
            jobType1: "design",
            jobType2: "business",
        },
        {
            jobsImg: Pitch,
            jobTitle: "Email Marketing",
            jobLocation: "Pitch Berlin, Germany",
            jobPP: "Pitch is looking for a Customer Manager to join the marketing team...",
            jobType1: "marketing",
        },
        {
            jobsImg: BlinkList,
            jobTitle: "Visual design",
            jobLocation: "BlinkList Berlin, Germany",
            jobPP: "BlinkList is looking for a Customer Manager to join the marketing team...",
            jobType1: "design",
        },
        {
            jobsImg: ClassPass,
            jobTitle: "Product Designer",
            jobLocation: "ClassPass Manchester, UK",
            jobPP: "ClassPass is looking for a Visual Designer to help the team design...",
            jobType1: "marketing",
            jobType2: "design",
        },
        {
            jobsImg: Canva,
            jobTitle: "Lead Designer",
            jobLocation: "Canva Ontario, Canada",
            jobPP: "Canva is looking for a Lead Engineer to help develop...",
            jobType1: "design",
            jobType2: "business",
        },
        {
            jobsImg: Godaddy,
            jobTitle: "Brand Strategist",
            jobLocation: "Godaddy Marseille, France",
            jobPP: "Godaddy is looking for a Lead Engineer to help develop...",
            jobType1: "marketing",
        },
        {
            jobsImg: Twitter,
            jobTitle: "Data Analyst",
            jobLocation: "Twitter San Diego, USA",
            jobPP: "Twitter is looking for a Data Analyst to help develop...",
            jobType1: "technology",
        },
    ]; // Your data here
    return FeatureData;
};

export const FeatureData = JobData(); // Export the data as a named export

export default JobData;