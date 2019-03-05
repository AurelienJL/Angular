import { CvElement } from './cv-element';


export const menuItems = [
    {
        url: '../skills',
        label: 'compétences',
        iconName: 'code'
    },
    {
        url: '../formation',
        label: 'formation',
        iconName: 'graduation-cap'
    },
    {
        url: '../projects',
        label: 'projets',
        iconName: 'tasks'
    },
];

export const presentationData = {
    name: 'Aurélien Jacquin-Labarre',
    position: 'Développeur JAVA-EE',
    description: 'Bonjour, je m\'appelle Aurélien et je vis actuellement à Caen, en Normandie!'
};

export const skillsData: CvElement[] = [
    {
        title: 'JAVA',
        logo: '../../assets/icons/java.svg',
        subtitle: '',
        description: 'Java est le langage avec lequel j\' le plus d\'expériences'
    },
    {
        title: 'HTML5',
        logo: '../../assets/icons/html5.svg',
        subtitle: '',
        description: 'language Front-end'
    },
    {
        title: 'CSS3',
        logo: '../../assets/icons/css3.svg',
        subtitle: '',
        description: 'language Front-end'
    },
    {
        title: 'Angular7',
        logo: '../../assets/icons/angular.svg',
        subtitle: '',
        description: 'Framework'
    },
    {
        title: 'Spring',
        logo: '../../assets/icons/spring.svg',
        subtitle: '',
        description: 'Framework'
    },
    {
        title: 'Hibernate',
        logo: '../../assets/icons/hibernate.svg',
        subtitle: '',
        description: 'Framework'
    },
    {
        title: 'Git',
        logo: '../../assets/icons/git.svg',
        subtitle: '',
        description: ''
    }
];

export const formationData: CvElement[] = [
    {
        title: 'Udemy',
        subtitle: 'Plateforme online internationale d\'enseignement et d\'apprentissage.',
        logo: '../../assets/icons/UdemyLogo.svg.png',
        description: 'Sur Udemy.com, je me suis orienté vers le cours d\'Angular 7, dispensé par Maximillian Schwarzmuller, et le cours de Spring & Hibernate de Chad Darby.',
        dateBegin: '11-01-2019',
        dateEnd: 'maintenant',
        link: 'https://www.udemy.com/user/aurelien-jacquin-labarre/',
        tags: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Spring', 'Java']
    },
    {
        title: 'Openclassrooms',
        subtitle: 'Plateforme française de référence pour les cours en ligne',
        logo: '../../assets/icons/OpenClassrooms.png',
        description: 'Sur Openclassrooms, j\'ai validé la certification "Apprenez à programmer en Java" après complétion du cours référence de Cyrille Herby. Je suis également titulaire du certificat HTML5 - CSS3. ',
        dateBegin: '25-05-2018',
        dateEnd: 'maintenant',
        link: 'https://openclassrooms.com/fr/',
        tags: ['Java8', 'Swing', 'awt', 'JDBC', 'SQL', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
        title: 'M2i formation',
        subtitle: 'POEC certifiante - Rennes',
        logo: '../../assets/icons/m2i.jpg',
        description: 'M2i propose une formation de 3 mois afin de devenir développeur Java',
        dateBegin: '09-10-2018',
        dateEnd: '08-01-2019',
        link: 'https://www.m2iformation.fr/uploads/browser/documents/pdf/normandie/formation-developpeur-java-jee-rennes.pdf',
        tags: ['Java', 'JavaSE', 'JavaEE', 'Hibernate', 'Spring 4', 'JSF 2', 'HTML5', 'CSS3', 'JavaScript', 'UML', 'Agile', 'Scrum']
    },
    {
        title: 'Doctorat',
        subtitle: 'Chimie organique - University of Glasgow',
        logo: '../../assets/icons/glasgow.png',
        description: 'Thèse en chimie organocatalytique et chimie organométallique réalisée à l\'Université de Glasgow. 4 années en Ecosse m\'ont permis devenir bilingue.',
        dateBegin: '2012',
        dateEnd: '2016'
    },
    {
        title: 'Master',
        subtitle: 'Chimie fine et thérapeutique - Université de Nantes',
        logo: '../../assets/icons/nantes.jpg',
        description: '',
        dateBegin: '2012',
        dateEnd: '2009'
    }
];

export const projectsData: CvElement[] = [

    {
        title: 'Mon CV Angular',
        subtitle: '',
        logo: '',
        description: 'ce CV'
    }
];

export const ContactData = {

    adress: '10, rue des muets',
    zipcode: '14000',
    city: 'caen',
    email: 'aurelienjl@live.fr',
    facebook: 'https://www.facebook.com/aurelien.jacquinlabarre',
    twitter: 'https://twitter.com/AurelienJL',
    linkedin: 'https://www.linkedin.com/in/aur%C3%A9lien-jacquin-labarre-8b9929130/',
    github: 'https://github.com/AurelienJL'
}



