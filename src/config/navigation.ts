export interface NavItem { title:string; key:string; href:string; description?:string; descriptionKey?:string; disabled?:boolean; external?:boolean; children?:NavItem[]; }
export const mainNav: NavItem[] = [
{title:'Home',key:'home',href:'/'},
{title:'About',key:'about',href:'/about',children:[{title:'About AIRI',key:'aboutAiri',href:'/about'},{title:'Leadership',key:'leadership',href:'/about#leadership'},{title:'Our Impact',key:'ourImpact',href:'/about#impact'}]},
{title:'Research',key:'research',href:'/research',children:[{title:'Research Areas',key:'researchAreas',href:'/research#areas'},{title:'Projects',key:'researchProjects',href:'/research#projects'},{title:'Publications and Insights',key:'publications',href:'/insights'}]},
{title:'Technical Implementation',key:'technicalImplementation',href:'/technical-implementation'},
{title:'Community Services',key:'communityServices',href:'/community-services',children:[{title:'AI for Seniors',key:'forSeniors',href:'/community-services/seniors'},{title:'Kids Coding and AI',key:'codeAiClub',href:'/community-services/code-ai-club'}]},
{title:'AIRI Conversations',key:'conversations',href:'/airi-conversations'},
{title:'Opportunities',key:'opportunities',href:'/volunteer',children:[{title:'Volunteer & Internship',key:'volunteer',href:'/volunteer'},{title:'Careers',key:'careers',href:'/career'}]},
{title:'Contact',key:'contact',href:'/contact'}
];
export const footerNav = {
quickLinks:[{title:'Home',key:'home',href:'/'},{title:'Research',key:'research',href:'/research'},{title:'Technical Implementation',key:'technicalImplementation',href:'/technical-implementation'},{title:'Community Services',key:'communityServices',href:'/community-services'},{title:'About',key:'about',href:'/about'},{title:'Contact',key:'contact',href:'/contact'}],
opportunities:[{title:'Volunteer & Internship',key:'volunteerInternship',href:'/volunteer'},{title:'Careers',key:'careers',href:'/career'}],
programs:[{title:'Research',key:'research',href:'/research'},{title:'Technical Implementation',key:'technicalImplementation',href:'/technical-implementation'},{title:'Community Services',key:'communityServices',href:'/community-services'}]
};