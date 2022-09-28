import {
    SiJavascript,
    SiCss3,
    SiHeroku,
    SiHtml5,
    SiMongodb,
    SiReact,
    SiGit,
    SiGithub,
    SiLinux,
    SiNetlify,
    SiUbuntu,
    SiVercel,
    SiCplusplus,
    SiCanva,
    SiMysql,
    SiSolidity,
    SiExpress,
    SiPython,
    SiPostman,
    SiThreedotjs,
    SiNodemon,
    SiBootstrap,
    SiJquery,
    SiNpm,
    SiDart,
    SiAdobepremierepro,
    SiMaterialui
} from "react-icons/si";

import {
    FaNodeJs,    
} from "react-icons/fa"

const data = [{
        name: 'JavaScript',
        icon: SiJavascript,
        options: {
            color: 'yellow'
        }
    },
    {
        name: 'CSS3',
        icon: SiCss3,
        options: {
            color: '#1572B6',
        }
    },
    {
        name: 'Heroku',
        icon: SiHeroku,
        options: {
            color: '#cfa9ff'
        }
    },
    {
        name: 'HTML5',
        icon: SiHtml5,
        options: {
            color: '#E34F26'
        }
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        options: {
            color: '#47A248'
        }
    },
    {
        name: 'NodeJS',
        icon: FaNodeJs,
        options: {
            color: '#339933'
        }
    },
    {
        name: 'Python',
        icon: SiPython,
        options: {
            color: '#3776AB'
        }
    },
    {
        name: 'React',
        icon: SiReact,
        options: {
            color: '#61DAFB'
        }
    },
    {
        name: 'Git',
        icon: SiGit,
        options: {
            color: '#F05032'
        }
    },
    {
        name: 'GitHub',
        icon: SiGithub,
        options: {
            color: 'white'
        }
    },
    {
        name: 'Linux',
        icon: SiLinux,
        options: {
            color: '#FCC624'
        }
    },
    {
        name: 'Material-Ui',
        icon: SiMaterialui,
        options: {
            color: 'blue'
        }
    },
    {
        name: 'Ubuntu',
        icon: SiUbuntu,
        options: {
            color: '#E95420'
        }
    },
    {
        name: 'Vercel',
        icon: SiVercel,
        options: {
            color: 'white'
        }
    },
    {
        name: 'C++',
        icon: SiCplusplus,
        options: {
            color: '#00599C'
        }
    },
    {
        name: 'Canva',
        icon: SiCanva,
        options: {
            color: '#00C4CC'
        }
    },
    {
        name: 'MySQL',
        icon: SiMysql,
        options: {
            color: '#4479A1'
        }
    },
    {
        name: 'Solidity',
        icon: SiSolidity,
        options: {
            color: 'white'
        }
    },
    {
        name: 'Express',
        icon: SiExpress,
        options: {
            color: 'white'
        }
    },
    {
        name: 'Postman',
        icon: SiPostman,
        options: {
            color: '#FF6C37'
        }
    },
    {
        name: 'Three-js',
        icon: SiThreedotjs,
        options: {
            color: 'white'
        }
    },
    {
        name: 'Nodemon',
        icon: SiNodemon,
        options: {
            color: "green"
        }
    },
    {
        name: 'Bootstrap',
        icon: SiBootstrap,
        options: {
            color: "purple"
        }
    },
    {
        name: 'jquerry',
        icon: SiJquery,
        options: {
            color: "#00599C"
        }
    },
    {
        name: 'Npm',
        icon: SiNpm,
        options: {
            color: "red"
        }
    },
    {
        
            name: 'Adobe-premiere-pro',
            icon: SiAdobepremierepro,
            options: {
                color: "blue"
            }
    },
    {
        
        name: 'Dart',
        icon: SiDart,
        options: {
            color: "#00599C"
        }
},
    

]

export const Icons = data.sort((a, b) => a.name.localeCompare(b.name));