import { ref } from 'vue'

// Import images
import EsbjergCentrumImg from '@/assets/EsbjergCentrum.png'
import TonyIconImg from '@/assets/TonyIcon.png'
import ChemistLogoSortImg from '@/assets/ChemistLogoSort.png'
import CleanAccordImg from '@/assets/CleanAccord.png'
import CityBrandingImg from '@/assets/CityBranding.jpeg'

export const useProjectsDatabase = () => {
    const projects = ref([
        {
            id: 1,
            title: "Esbjerg Centrum",
            shortDescription: "Present a chosen part of Esbjerg",
            description:"This project was about creating a presentation of a chosen part of Esbjerg, in this case the city center. The goal was to create a presentation that would showcase the city's history, culture, and attractions, while also highlighting its unique features and characteristics. The project included a video presentation, a poster, and a brochure.",
            projectCover: EsbjergCentrumImg,
            semester: "1st semester",
            group: "Group project",
            projectLink: "https://indd.adobe.com/view/2338bafc-efdd-4b9d-b5d8-186aa377bbce",
        },
        {
            id: 2,
            title: "Tony's Chocolonely",
            shortDescription: "Branding and campaign for Tony's Chocolonely",
            description:"This project was about creating a campaign for Tony's Chocolonely, a chocolate brand that is known for its commitment to fair trade and sustainability. The goal was to create a campaign that would raise awareness about the brand and its mission, while also promoting its products, in the same way the do it on their SoMe, so the product for this project was a SoMe post.",
            projectCover: TonyIconImg,
            semester: "1st semester",
            group: "Group project"
        },
        {
            id: 3,
            title: "Logo Project",
            shortDescription: "We got assigned to create a logo that included imagery in its text",
            description:"This project was about creating a logo that included imagery in its text. The goal was to create a logo that would be visually appealing and memorable, while also conveying the brand's message and values.",
            projectCover: ChemistLogoSortImg,
            semester: "1st semester",
            group: "Group project",
        },
        {
            id: 4,
            title: "Exam Project",
            shortDescription: "The exam project was about creating awarnes for a global plastic treaty",
            description:"This project was about creating a campaign that would raise awareness about the global plastic treaty, which is an international agreement that aims to reduce plastic pollution and promote sustainable practices. The goal was to create a campaign that would educate the public about the issue and encourage them to take action.",
            projectCover: CleanAccordImg,
            semester: "1st semester",
            group: "Group project",
            projectLink: "https://www.youtube.com/watch?v=bHHru_m3lmo",
        },
        {
            id: 5,
            title: "City Branding",
            shortDescription: "This project was about branding the City of Esbjerg in a way that will attract toursits or new residents",
            description:"This project was about branding the City of Esbjerg in a way that will attract tourists or new residents. The goal was to create a brand that would showcase the city's unique features and characteristics, while also promoting its attractions and amenities. The project included a video presentation and SoMe posts.",
            projectCover: CityBrandingImg,
            semester: "2nd semester",
            group: "Group project",
            projectLink: "https://www.youtube.com/watch?v=lWCSB6nJdwM",
        },
    ])

    return {
        projects
    }
}