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
            description: "Present a chosen part of Esbjerg",
            projectCover: EsbjergCentrumImg,
            semester: "1st semester",
            group: "Group project"
        },
        {
            id: 2,
            title: "Tony's Chocolonely",
            description: "",
            projectCover: TonyIconImg,
            semester: "1st semester",
            group: "Group project"
        },
        {
            id: 3,
            title: "Logo Project",
            description: "we got assigned to create a logo that included imagery in its text",
            projectCover: ChemistLogoSortImg,
            semester: "1st semester",
            group: "Group project",
        },
        {
            id: 4,
            title: "Exam Project",
            description: "The exam project was about creating awarnes for a global plastic treaty",
            projectCover: CleanAccordImg,
            semester: "1st semester",
            group: "Group project",
        },
        {
            id: 5,
            title: "City Branding",
            description: "This project was about branding the City of Esbjerg in a way that will attract toursits or new residents",
            projectCover: CityBrandingImg,
            semester: "2nd semester",
            group: "Group project",
        },
    ])

    return {
        projects
    }
}