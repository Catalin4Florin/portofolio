import {ref} from 'vue'

export const  useProjectsDatabase = () => {
    const projects = ref([
        {
            id: 1,
            title: "Esbjerg Centrum",
            description: "Present a chosen part of Esbjerg",
            projectCover: "/src/assets/EsbjergCentrum.png",
            semester: "1st semester",
            group: "Group project"
        },
        {
            id: 2,
            title: "Tony's Chocolonely",
            description: "",
            projectCover: "/src/assets/TonyIcon.png",
            semester: "1st semester",
            group: "Group project"
        },

        {
            id: 3,
            title: "Logo Project",
            description: "we got assigned to create a logo that included imagery in its text",
            projectCover: "/src/assets/ChemistLogoSort.png",
            semester: "1st semester",
            group: "Group project",
        },
        {
            id: 4,
            title: "Exam Project",
            description: "The exam project was about creating awarnes for a global plastic treaty",
            projectCover: "/src/assets/CleanAccord.png",
            semester: "1st semester",
            group: "Group project",
        },
        {
            id: 5,
            title: "City Branding",
            description: "This project was about branding the City of Esbjerg in a way that will attract toursits or new residents",
            projectCover: "/src/assets/CityBranding.jpeg",
            semester: "2nd semester",
            group: "Group project",
        },

    ])

    return {
        projects
    }

}   