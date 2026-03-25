import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Home, 
  BookOpen, 
  Timer, 
  BarChart3, 
  Heart, 
  Star,
  User,
  LogOut,
  Library,
  NotebookPen,
  X,
  Trophy,
  Moon,
  Sun,
  ClipboardCheck,
  Upload,
  Gem,
  Store,
  Users,
  FilePenLine,
  ArrowLeft,
  FolderPlus
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";

const navigationItems = [
  {
    title: "Página Inicial",
    url: createPageUrl("Dashboard"),
    icon: Home,
  },
  {
    title: "Temas",
    url: createPageUrl("Subjects"),
    icon: Library,
  },
  {
    title: "Questões",
    url: createPageUrl("Questions"),
    icon: BookOpen,
    hidden: true,
  },
  {
    title: "Simulados",
    url: createPageUrl("Simulados"),
    icon: Timer,
  },
  {
    title: "Estatísticas",
    url: createPageUrl("EnhancedStatistics"),
    icon: BarChart3,
  },
  {
    title: "Favoritas",
    url: createPageUrl("Favorites"),
    icon: Star,
  },
  {
    title: "Meu Caderno",
    url: createPageUrl("Notebook"),
    icon: NotebookPen,
  },
  {
    title: "Questões Erradas",
    url: createPageUrl("WrongQuestions"),
    icon: X,
    hidden: true,
  },
  {
    title: "Temas Quentes",
    url: createPageUrl("HotTopics"),
    icon: Trophy,
  },
];

const mainNavigationItems = navigationItems.slice(0, 5);
const studyToolsNavigationItems = navigationItems.slice(5);

const secondaryNavItems = [
    {
        title: "Planos",
        url: createPageUrl("Plans"),
        icon: Gem
    }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  
  // Root pages (show logo instead of back button)
  const rootPages = [
    createPageUrl("Dashboard"),
    createPageUrl("Subjects"),
    createPageUrl("Questions"),
    createPageUrl("Profile")
  ];
  
  const isRootPage = rootPages.includes(location.pathname);

  React.useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await base44.auth.me();
      setUser(userData);
    } catch (error) {
      console.log("User not logged in");
    }
  };

  const handleLogout = async () => {
    await base44.auth.logout();
  };

  const adminNavItems = [
    {
      title: "Gerenciar Usuários",
      url: createPageUrl("Admin"),
      icon: Users,
    },
    {
      title: "Gerenciar Questões",
      url: createPageUrl("QuestionManager"),
      icon: FilePenLine,
    },
    {
      title: "Criar Temas/Provas",
      url: createPageUrl("QuestionTools"),
      icon: FolderPlus,
    },
    {
      title: "Gerenciar Temas",
      url: createPageUrl("TopicManager"),
      icon: Library,
    },

    {
      title: "Temas Quentes Admin",
      url: createPageUrl("HotTopicsAdmin"),
      icon: Trophy,
    },
    {
      title: "Importar Dados",
      url: createPageUrl("DataImport"),
      icon: Upload,
    },
    {
      title: "Limpar Dados",
      url: createPageUrl("DataCleanup"),
      icon: Upload,
    },
  ];

  // Mobile bottom navigation items
  const mobileNavItems = [
    { title: "Início", url: createPageUrl("Dashboard"), icon: Home },
    { title: "Temas", url: createPageUrl("Subjects"), icon: Library },
    { title: "Perguntas", url: createPageUrl("Questions"), icon: BookOpen },
    { title: "Perfil", url: createPageUrl("Profile"), icon: User }
  ];

  return (
    <SidebarProvider>
      <style>{`
        /* Safe area insets for notches */
        :root {
          --safe-area-inset-top: env(safe-area-inset-top, 0px);
          --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
          --safe-area-inset-left: env(safe-area-inset-left, 0px);
          --safe-area-inset-right: env(safe-area-inset-right, 0px);
        }

        /* Disable bounce/elastic scrolling on mobile */
        html, body {
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
        }

        /* Disable text selection on interactive UI components */
        button, a, [role="button"], .interactive {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -webkit-touch-callout: none;
        }

        /* Mobile bottom navigation */
        .mobile-bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        /* Mobile header */
        .mobile-header {
          position: sticky;
          top: 0;
          z-index: 40;
          padding-top: var(--safe-area-inset-top);
        }

        /* Add padding for mobile nav */
        @media (max-width: 1024px) {
          .main-content-mobile {
            padding-bottom: calc(4rem + var(--safe-area-inset-bottom));
          }
        }

        :root {
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --border-color: #e2e8f0;
          --hover-bg: #f1f5f9;
        }
        
        .dark {
          --bg-primary: #0b1120;
          --bg-secondary: #1e293b;
          --text-primary: #e2e8f0;
          --text-secondary: #94a3b8;
          --border-color: #334155;
          --hover-bg: #334155;
        }
        
        body {
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        .dark .bg-gradient-to-br {
          background: linear-gradient(to bottom right, var(--bg-primary), #020617) !important;
        }
        
        .dark .bg-slate-50 {
          background-color: var(--bg-secondary) !important;
        }
        
        .dark .bg-white, .dark .bg-white\\/80, .dark .bg-white\\/90 {
          background-color: var(--bg-secondary) !important;
        }
        
        .dark .text-slate-900 {
          color: var(--text-primary) !important;
        }
        
        .dark .text-slate-600, .dark .text-slate-700, .dark .text-slate-500 {
          color: var(--text-secondary) !important;
        }

        .dark .text-slate-400 {
            color: #64748b !important;
        }
        
        .dark .border-slate-200 {
          border-color: var(--border-color) !important;
        }
        
        .dark .hover\\:bg-slate-100:hover {
          background-color: var(--hover-bg) !important;
        }

        .dark .from-slate-50 {
            --tw-gradient-from: #0f172a !important;
            --tw-gradient-to: #0f172a !important;
        }
        .dark .to-blue-50 {
            --tw-gradient-to: #1e293b !important;
        }
      `}</style>
      
      <div className="min-h-screen flex w-full bg-slate-50 dark:bg-slate-900">
        <Sidebar className="border-r border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <SidebarHeader className="border-b border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg">MedQuest</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Provas e Questões</p>
                </div>
                </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-3 py-2">
                Navegação
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navigationItems.filter(item => !item.hidden).map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`rounded-xl transition-all duration-200 ${
                          location.pathname === item.url 
                            ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700' 
                            : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-4">
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {secondaryNavItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                              asChild
                              className={`rounded-xl transition-all duration-200 ${
                                  location.pathname === item.url
                                      ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
                                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                              }`}
                          >
                              <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                                  <item.icon className="w-5 h-5" />
                                  <span className="font-medium">{item.title}</span>
                              </Link>
                          </SidebarMenuButton>
                      </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            {user && user.role === 'admin' && (
              <SidebarGroup className="mt-6">
                <SidebarGroupLabel className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-3 py-2">
                  Admin
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-1">
                    {adminNavItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className={`rounded-xl transition-all duration-200 ${
                            location.pathname === item.url 
                              ? 'bg-red-600 text-white shadow-md hover:bg-red-700' 
                              : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}
          </SidebarContent>

          <SidebarFooter className="border-t border-slate-200 dark:border-slate-700 p-4">
            {user ? (
              <Link to={createPageUrl("Profile")} className="flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-full flex items-center justify-center overflow-hidden">
                  {user.profile_image ? (
                    <img src={user.profile_image} alt="Perfil" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">
                      {user.full_name?.charAt(0) || 'U'}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm truncate">
                    {user.full_name || 'Usuário'}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleLogout();
                  }}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  title="Sair"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </Link>
            ) : (
              <button
                onClick={() => base44.auth.redirectToLogin()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-medium transition-colors"
              >
                Fazer Login
              </button>
            )}
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          {/* Mobile Header */}
          <header className="mobile-header bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 px-4 py-3 lg:hidden">
            <div className="flex items-center gap-3">
              {!isRootPage ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(-1)}
                  className="hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100">MedQuest</h1>
                </div>
              )}
            </div>
          </header>

          {/* Desktop Sidebar Trigger - Hidden on Mobile */}
          <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 px-6 py-4 hidden md:block lg:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors" />
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">MedQuest</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto main-content-mobile">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Bottom Navigation */}
          <nav className="mobile-bottom-nav bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 lg:hidden">
            <div className="flex items-center justify-around px-2 py-2">
              {mobileNavItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <Link
                    key={item.url}
                    to={item.url}
                    className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <item.icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                    <span className="text-xs font-medium">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </main>
      </div>
    </SidebarProvider>
  );
}
