import { presentationData, skillsData, formationData, menuItems, navItems } from './cv-content.data';
import { CvElement } from './cv-element';


export class CvContentService {

    getNavItems() {
        return navItems;
    }

    getMenuItems() {
        return menuItems;
    }

    getPresentationData() {
        return presentationData;
    }

    getSkillsData(): Promise<CvElement[]> {
        return Promise.resolve(skillsData);
    }

    getFormationData() :Promise<CvElement[]> {
        return Promise.resolve(formationData);
    }
}