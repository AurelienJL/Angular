import { presentationData, skillsData, formationData } from './cv-content.data';
import { CvElement } from './cv-element';


export class CvContentService {

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