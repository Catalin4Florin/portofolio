import {ref} from 'vue'

export const  useProjectsDatabase = () => {
    const projects = ref([
        {
            id: 1,
            title: "Project 1",
            description: "Schizo guy becomes terrorist",
            projectCover: "https://picsum.photos/400/600",
            duration: "1h 30m",
            genre: "Thriller",
            rating: 4.5,
            publisher: "20th century studios",
            ageRecommendation: "7+",
            director: "Tyler Durden",
            releaseDate: "5 november 1999",
            actors: ["Edward Northon, Brad Pitt, Marla Singer"]
        },
        {
            id: 2,
            title: "Spermageddon",
            description: "Schzio teens learn pp and puzzy",
            projectCover: "https://picsum.photos/400/600",
            duration: "2h 10m",
            genre: "Softcore",
            rating: 1.5,
            publisher: "20th cum shot",
            ageRecommendation: "13+",
            director: "Jeffrey Epstein",
            releaseDate: "6 marts 2025",
            actors: ["idk, some bitch, another bitch"]
        },
        {
            id: 3,
            title: "Ghostfacekil;a",
            description: "doick dick dick dick",
            projectCover: "https://picsum.photos/400/600",
            duration: "1h 45m",
            genre: "Horror",
            rating: 1.5,
            publisher: "20th cum shot",
            ageRecommendation: "13+",
            director: "Jeffrey Epstein",
            releaseDate: "6 marts 2025",
        },
        {
            id: 4,
            title: "logo project",
            description: "we got assigned to create a logo that included imagery in its text",
            projectCover: "/src/assets/ChemistLogoSort.png",
            semester: "1st semester",
            group: "Group project",
        },
        {
            id: 5,
            title: "Exam project",
            description: "The exam project was about creating awarnes for a global plastic treaty",
            projectCover: "/src/assets/ChemistLogoSort.png",
            semester: "1st semester",
            group: "Group project",
        }

    ])

    return {
        projects
    }

}   