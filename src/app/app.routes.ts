import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Infrastructure } from './components/infrastructure/infrastructure';
import { SchoolHistory } from './components/ourschool/school-history/school-history';
import { PSection } from './components/ourschool/p-section/p-section';
import { PpSection } from './components/ourschool/pp-section/pp-section';
import { SSection } from './components/ourschool/s-section/s-section';
import { Activities } from './components/schoolActivity/activities/activities';
import { Achievements } from './components/schoolActivity/achievements/achievements';
import { Contact } from './components/contact/contact';
import { PrePrimaryActivity } from './components/schoolActivity/pre-primary-activity/pre-primary-activity';
import { PrimaryActivity } from './components/schoolActivity/primary-activity/primary-activity';
import { SecondaryActivity } from './components/schoolActivity/secondary-activity/secondary-activity';
import { PrePrimaryAchievements } from './components/schoolActivity/pre-primary-achivements/pre-primary-achivements';
import { PrimaryAchievements } from './components/schoolActivity/primary-achivements/primary-achivements';
import { SecondaryAchievements } from './components/schoolActivity/secondary-achivements/secondary-achivements';
import { Management } from './components/ourschool/management/management';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'infrastructure',
        component: Infrastructure
    },
    {
        path: 'schoolHistory',
        component: SchoolHistory
    },
    {
        path: 'shri-rhtt-section',
        component:PpSection
    },
    {
        path: 'rnsheth-section',
        component: PSection
    },
    {
        path:'stmehta-section',
        component:SSection
    },
    {
        path:'activities',
        component:Activities
    },
    {
        path:'achievements',
        component:Achievements
    },
    {
        path:'contact',
        component:Contact
    },
    {
        path:'shri-rhtt-activity',
        component:PrePrimaryActivity
    },
    {
        path:'rnsheth-activity',
        component:PrimaryActivity
    },
    {
        path:'stmehta-activity',
        component:SecondaryActivity
    },
    {
        path:'shri-rhtt-achievements',
        component:PrePrimaryAchievements
    },
    {
        path:'rnsheth-achievements',
        component:PrimaryAchievements
    },
    {
        path:'stmehta-achievements',
        component:SecondaryAchievements
    },
    {
        path:'management',
        component:Management
    }
];
