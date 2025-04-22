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
            title: "",
            description: "",
            projectCover: "/src/assets/ChemistLogoSort.png",
            semester: "1st semester",
            group: "Group project"
        },

        {
            id: 3,
            title: "logo project",
            description: "we got assigned to create a logo that included imagery in its text",
            projectCover: "/src/assets/ChemistLogoSort.png",
            semester: "1st semester",
            group: "Group project",
        },
        {
            id: 4,
            title: "Exam project",
            description: "The exam project was about creating awarnes for a global plastic treaty",
            projectCover: "/src/assets/CleanAccord.png",
            semester: "1st semester",
            group: "Group project",
        },
        {
            id: 5,
            title: "City branding",
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