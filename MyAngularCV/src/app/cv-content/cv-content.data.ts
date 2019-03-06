import { CvElement } from './cv-element';


export const menuItems = [
    {
        url: '../skills',
        label: 'compétences',
        iconName: 'code',
        introduction: 'Un aperçu et une évaluation de mes capacités sur différents langages informatiques, frameworks et technologies que j\'ai étudié.'
    },
    {
        url: '../formation',
        label: 'formation',
        iconName: 'graduation-cap',
        introduction: 'Mon parcours, de ma formation universitaire en chimie organique jusqu\'à ma certification en tant que développeur Java J2EE.'
    },
    {
        url: '../projects',
        label: 'projets',
        iconName: 'tasks',
        introduction: 'Une illustration de mes compétences : les projets que j\'ai réalisé au cours de ma formation ainsi que mes projets personnels.'
    },
];

export const presentationData = {
    firstname: 'Aurélien',
    lastname: 'Jacquin-Labarre',
    position: 'Développeur Java - Angular',
    description: 'J\'ai 30 ans et je vis à Caen, en Normandie. Chimiste organicien en reconversion, c\'est par curiosité que je me suis essayé au développement informatique et par passion que j\'ai continué à apprendre le Java ainsi que d\'autres langages et technologies. Je suis recemment certifié par M2i en tant que développeur Java J2EE. Auto-didacte, ma formation s\'est ensuite orientée vers le web et plus précisement Angular. Aujourd\'hui, je suis à la recherche d\'une première expérience en entreprise donc j\'espère que ce CV va vous convaincre.',
    hobbies: 'Au delà l\'informatique, je suis passionné de musique rock (Led Zeppelin, Black Sabbath...), de cinéma ainsi que de sport tel que le volley-ball et le cyclisme. Je suis également, depuis plus d\'un an, accroc au "geocaching", une chasse au trésor qui s\'accompagne d\'énigmes et permet de découvrir notre patrimoine. Mon terrain de jeu étant nos villes, nos fôrêts et nos campagnes, je suis d\'autant plus sensible à prendre soin de la nature.'
};

export const skillsData: CvElement[] = [
    {
        title: 'JAVA',
        logo: '../../assets/icons/java.svg',
        subtitle: 'Langage de programmation back-end',
        tags: ['Java8', 'JavaSE', 'swing', 'awt', 'POO', 'JDBC', 'JavaEE', 'Servlet', 'JSP', 'JSTL', 'Tomcat', 'Eclipse']
        
    },
    {
        title: 'HTML5',
        logo: '../../assets/icons/html5.svg',
        subtitle: 'Langage de balisage pour représenter les pages web',
        tags: ['Flexbox', 'Responsive Design', 'Visual Studio Code']
    },
    {
        title: 'CSS3',
        logo: '../../assets/icons/css3.svg',
        subtitle: 'Langage de mise en forme des fichiers HTML',
        tags: ['Bootstrap', 'Visual Studio Code']
    },
    {
        title: 'Angular 7',
        logo: '../../assets/icons/angular.svg',
        subtitle: 'Framework front-end open-source basé sur TypeScript',
        tags: ['TypeScript', 'ES6', 'databinding', 'directives', 'services', 'DI', 'routing', 'Visual Studio Code']
        
    },
    {
        title: 'Spring 5',
        logo: '../../assets/icons/spring.svg',
        subtitle: 'Framework back-end pour application Java',
        tags: ['Inversion of Control', 'DI', 'JavaBean', 'MVC', 'Data JPA', 'Eclipse']
    },
    {
        title: 'Hibernate',
        logo: '../../assets/icons/hibernate.svg',
        subtitle: 'Framework pour la persistance en base de données relationnel',
        tags: ['Mapping', 'CRUD', 'Eclipse']
    },
    {
        title: 'Git',
        logo: '../../assets/icons/git.svg',
        subtitle: 'Logiciel de gestion de version décentralisé'
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



