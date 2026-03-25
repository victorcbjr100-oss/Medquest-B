/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Admin from './pages/Admin';
import Challenges from './pages/Challenges';
import DataCleanup from './pages/DataCleanup';
import DataImport from './pages/DataImport';
import DraftNotebook from './pages/DraftNotebook';
import EnhancedStatistics from './pages/EnhancedStatistics';
import Exams from './pages/Exams';
import Favorites from './pages/Favorites';
import HotTopics from './pages/HotTopics';
import HotTopicsAdmin from './pages/HotTopicsAdmin';
import Leaderboard from './pages/Leaderboard';
import Marketplace from './pages/Marketplace';
import Notebook from './pages/Notebook';
import Plans from './pages/Plans';
import Profile from './pages/Profile';
import QuestionManager from './pages/QuestionManager';
import QuestionTools from './pages/QuestionTools';
import SimuladoConfig from './pages/SimuladoConfig';
import SimuladoResultPrint from './pages/SimuladoResultPrint';
import Statistics from './pages/Statistics';
import StudyMaterials from './pages/StudyMaterials';
import Subjects from './pages/Subjects';
import WrongQuestions from './pages/WrongQuestions';
import Dashboard from './pages/Dashboard';
import Simulados from './pages/Simulados';
import Questions from './pages/Questions.jsx';
import TopicManager from './pages/TopicManager.jsx';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Admin": Admin,
    "Challenges": Challenges,
    "DataCleanup": DataCleanup,
    "DataImport": DataImport,
    "DraftNotebook": DraftNotebook,
    "EnhancedStatistics": EnhancedStatistics,
    "Exams": Exams,
    "Favorites": Favorites,
    "HotTopics": HotTopics,
    "HotTopicsAdmin": HotTopicsAdmin,
    "Leaderboard": Leaderboard,
    "Marketplace": Marketplace,
    "Notebook": Notebook,
    "Plans": Plans,
    "Profile": Profile,
    "QuestionManager": QuestionManager,
    "QuestionTools": QuestionTools,
    "SimuladoConfig": SimuladoConfig,
    "SimuladoResultPrint": SimuladoResultPrint,
    "Statistics": Statistics,
    "StudyMaterials": StudyMaterials,
    "Subjects": Subjects,
    "WrongQuestions": WrongQuestions,
    "Dashboard": Dashboard,
    "Simulados": Simulados,
    "Questions": Questions,
    "TopicManager": TopicManager,
}

export const pagesConfig = {
    mainPage: "Admin",
    Pages: PAGES,
    Layout: __Layout,
};
