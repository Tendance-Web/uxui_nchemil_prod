import { Project, Experience, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nchemil/",
  behance: "https://www.behance.net/nassim_chemil",
  email: "mailto:nchemil@gmail.com",
  phone: "06 16 39 53 40"
};

export const HARD_SKILLS = [
  "Figma", "Figma Make", "Sketch", "Miro", "Notion", "Photoshop",
  "Html5/CSS3", "React", "Vanilla JS", "ChatGPT", "Git",
  "Webflow", "WordPress", "NodeJS", "Supabase"
];

export const SOFT_SKILLS = [
  "Méthodes UX", "Travail en équipe", "Empathie", "Sens créatif",
  "Autonomie", "Esprit d’innovation", "Design centré utilisateur (UCD)",
  "Méthodes Agiles", "Design Sprint"
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp0",
    role: "UX/UI designer - NoCode/AI",
    company: "Autodidacte / Freelance",
    period: "Juin 2025 - Aujourd'hui",
    description: [
      "Formation autodidacte et intensive sur les technologies IA et NoCode : AI Studio, Antigravity, Gemini, MCP Server, Figma Make.",
      "Conception et production de livrables UX/UI : Création de designs sous Figma, prototypage d'applications et développement de sites responsives modernes.",
      "Exploration de nouvelles méthodes de conception assistée par l'intelligence artificielle pour optimiser les workflows de design."
    ]
  },
  {
    id: "exp1",
    role: "UX UI Designer",
    company: "Total Energies",
    period: "Février 2022 - Juin 2025",
    description: [
      "Refonte Web/App mobile et création des parcours de recharge pour les véhicules électriques.",
      "Réduction de la friction pour charger des voitures électriques avec un téléphone, en créant des interfaces repensées et des flux d’utilisateurs plus directs. Travaux réalisés avec des PO, des PM et des développeurs (+200 écrans, UX Writing, ateliers d’Idéation) via Figma.",
      "Lancement d'un « design system » conforme aux normes WCAG - tokens, variables, auto-layout, grid.",
      "Réduction du temps de lancement de charge de 50 % grâce au développement de prototypes interactifs pour iOS, Android et site web.",
      "Écrans livrés en marque blanche, Belib Paris, Spot2Charge (UK), Source London et Total Energies."
    ]
  },
  {
    id: "exp2",
    role: "UX UI Designer",
    company: "HighCube, Audencia, Palo IT",
    period: "Décembre 2018 - Janvier 2022",
    description: [
      "Création et refonte de plateformes numériques - CMS, outil de gestion de projet, CRM, boutique en ligne.",
      "Augmentation des nouveaux contacts de +30 % grâce à la refonte d'un CRM pour intégrer de nouveaux clients. Analyse de produits, entretiens avec les utilisateurs, analyse concurrentielle, création de wireframes Figma pour JOOZY (PaloIt).",
      "Réduction des étapes pour créer un projet de -40% en centralisant les demandes de gestion de projet, en donnant la priorité aux informations utiles pour le parcours de création du projet et en prototypant un nouveau parcours (Audencia).",
      "Création et développement de maquettes d'interface utilisateur avec des composants Figma, React, Vscode, Html et Css pour un CMS et un site Web (HighCube, secteur de la construction écologique)."
    ]
  },
  {
    id: "exp3",
    role: "UX, UI Designer",
    company: "CDC, Greenfusion, Léa, Cognitis (GFI)",
    period: "Octobre 2018 - Novembre 2020",
    description: [
      "Création d'applications mobiles et refonte de plateformes numériques.",
      "Réduction du temps de traitement des questions RH de -45 %, réduction du temps d'attente téléphonique de 30 % grâce à la refonte du portail RH de la Caisse des Dépôts et Consignations (CDC), conception au sein d'une équipe de développement, organisation des ateliers d'Idéation (job to be done, tri des cartes), prototypage, en appliquant une méthodologie agile et en améliorant le système d'information.",
      "Rendre les actions écologiques amusantes en créant une application de jeu mobile, réalisation de Benchmarks, de cartes XP, d’ateliers d’Idéation et de tests utilisateur via prototypes (GreenFusion).",
      "Optimisation des réservations et réduction du « no-show » de -25 % grâce à la réalisation de benchmarks, d'entretiens, d’ateliers d’Idéation, de prototypes interactifs via Figma et de tests utilisateurs pour l’application mobile dans le secteur de la restauration (Léa).",
      "Cas d’usages détectés, création de personas et entretiens gérés avec les utilisateurs de la Blockchain (Cognitis GFI)."
    ]
  },
  {
    id: "exp4",
    role: "Web Designer, UI Designer",
    company: "Generali",
    period: "Janvier 2008 - Septembre 2018",
    description: [
      "Refonte d’espaces clients, amélioration de l’engagement et du taux de souscription.",
      "Simplification des transactions et consultations de produits d'assurance Generali par la création, la refonte et l'intégration de l'interface utilisateur Web (500 boutiques virtuels).",
      "Réduction du temps de transaction à 72 heures grâce à la diminution du nombre d'étapes et à la mise en œuvre d'un rachat partiel repensé ergonomiquement (UX writing, UI). Réalisations en équipe DSI, produits.",
      "Accélération du processus de validation par la mise en œuvre d’une solution partagée collaborative.",
      "Réduction du temps de chargement des pages de 50 % grâce à la refonte des pages web et aux audits ergonomiques des systèmes d’information existants.",
      "Sensibilisation des services au design émotionnel afin d’accélérer les modifications d’interface utilisateur et d’accompagner les changements d’affichage des contenus."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "UX",
    skills: [
      "Définition de problèmes liés à un produit ou à un service (définition du projet, \"benchmarking\", recherche utilisateur).",
      "Analyse des besoins utilisateurs (création de questionnaire qualitatif et quantitatif).",
      "Idéation (élaboration de personas, création de cartes d'expérience et organisation de brainstorming, tri de cartes, atelier idéation).",
      "Évaluation (test utilisateurs, analyse insights)."
    ]
  },
  {
    title: "UI",
    skills: [
      "Création de maquettes graphiques avec les logiciels du métier (Figma, Photoshop, Illustrator, Adobe XD).",
      "Maintenance et évolution de \"design system\" (base atomic design).",
      "Création de prototypes interactifs (Figma, Adobe XD, Framer).",
      "Bonne notion de code, Vanilla JS, React, Node.js, Git, SQL, MongoDb, CSS3, html5, Boostrap, Foundation.",
      "Responsive design."
    ]
  },
  {
    title: "Project Management",
    skills: [
      "Stratégie de contenu pour le web.",
      "Analyse de données quantitatives (google stat., \"heatmap\", test A/B, taux de conversion).",
      "Méthodes Agiles / Scrum.",
      "Aisance relationnelle et négociation."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  // TotalEnergies
  {
    id: "ev-charge",
    title: "EV Charge",
    client: "TotalEnergies",
    category: "UX/UI & Design System",
    description: "Unification de l'écosystème de recharge électrique. Lancement d'un Design System et refonte de l'expérience mobile et desktop",
    image: "https://github.com/Tendance-Web/visuelsPortfolio/blob/b0aed1079e7bd70902aa57ec09be155e1cb8a25a/images/TE/showEvCharge.png?raw=true",
    tags: ["Design System", "Mobile App", "Figma", "SaaS"],
    fullDetails: {
      context: "Dans le cadre de la transition vers la mobilité électrique, TotalEnergies souhaitait repenser l’expérience de recharge des conducteurs, en harmonisant ses différents canaux (marque blanche, applications mobiles, web et bornes). Le projet visait à unifier l’expérience utilisateur autour d’un “design system” commun et à simplifier les parcours.",
      mission: "Concevoir une expérience fluide, cohérente et inclusive sur l’ensemble de l’écosystème digital TotalEnergies. Simplifier l'accès à la recharge, optimiser la recherche de bornes, repenser les parcours d'achat et initier un Design System unifié.",
      challenges: "Les parcours historiques présentaient une fragmentation importante entre les supports et les marques (TotalEnergies, partenaires, marque blanche). Cette multiplication des déclinaisons d’interfaces compliquait la maintenance interne et créait des frictions pour l'utilisateur (navigation, cohérence graphique et incompréhension des fonctionnalités).",
      role: "Alignement des contraintes techniques et objectifs produit. Cadrage des fonctionnalités et identification des leviers de mise en œuvre (ateliers de cadrage technique). Animation de la co-idéation fonctionnelle avec PO et développeurs. Réalisation de la phase de discovery (faisabilité/objectifs). Conception des variations de composants et choix des meilleurs composants pour le Design System.",
      solutionBlocks: [
        {
          type: 'text',
          content: "Réalisation d’un inventaire complet et refonte des écrans existants avec revue des users flow, afin d’identifier les points de friction à la fois graphiques, fonctionnels et structurels."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/TE-AppFlow.png?raw=true",
          caption: "Revue des différents flux utilisateurs de l'application."
        },
        {
          type: 'text',
          content: "Analyse comparative entre les différentes marques et déclinaisons en marque blanche, Belib réseau de bornes électriques parisien en faisait partie.\n Harmonisation de l’ensemble des écrans pour uniformiser les fonctionnalités avec l'intégration des composants du design system."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/redesignCoherence.png?raw=true",
          caption: "Exemple, sur l'application Belib, de la rubrique abonnement avec à gauche l'ancien design."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/marqueBlanche.png?raw=true",
          caption: "Exemple d'écrans déclinés en marque blanche. Conservation de la même architecture d'information."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/icoBornesPuissances.png?raw=true",
          caption: "Exemple de déclinaison colorimétrique des icônes pour les différentes marques partenaires de Total Énergies"
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/Composants.png?raw=true",
          caption: "Extrait visuel des composants créés et utilisés pour les différents écrans de l'application"
        },
        {
          type: 'text',
          content: "Création de nouvelles features dont l'une d'entre elles était de pouvoir ajouter en favoris une borne de recharge."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/solutionFavoris.png?raw=true",
          caption: "L'affichage prioritaire des favoris lors d'une recherche réduisait les temps de prise de décisions."
        },
        {
          type: 'text',
          content: "La recherche d’une borne disponible constituait un point de friction essentiel. Grâce à la création d’une librairie commune, regroupant les différents états et leurs couleurs, nous avons pu revoir durant nos ateliers d’alignement, les principaux points de friction."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/uiLibraryDS.png?raw=true",
          caption: "Extrait d'une partie du design system, qui se focalise sur les couleurs servant à la prise de décision."
        },
        {
          type: 'text',
          content: "Sur cet exemple, ci-dessous, on peut voir que la couleur du “design system” “State/Sucess” est réutilisée dans différents contextes mais avec pour objectif, côté user, de lui signaler le côté positif d’une action à venir ou déjà réalisée."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/stateSucessExample.png?raw=true",
          caption: "Illustration du comment le choix d'une couleur peut avoir un impact sur le feedback de l'interface."
        },
        {
          type: 'text',
          content: "Toujours dans un souci de cohérence, le site a également été revu. Toutes les fonctionnalités de l'application n'étaient pas présentes. Mais certaines parties et notamment la recherche d'une borne disponible étaient une adaptation du design présent dans l'application. L'objectif étant de pouvoir proposer la même expérience sur mobile et desktop. Un des autres objectifs était également de pouvoir créer une expérience continue entre plusieurs devices.\n\n Sur l'écran de recherche ci-dessous, la proposition des bornes se fait directement sur la page affichant la map. Alors que dans l’application cette étape arrive après avoir consulté la map et les bornes qui s’y trouvent. C'est donc le nombre d'étapes nécessaires pour effectuer une action qui différait entre la vue desktop et l'application."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/TE/DesktopSearch.jpg?raw=true",
          caption: "Exemple d'affichage responsive de la partie recherche d'une borne de recharge"
        },
        {
          type: 'text',
          content: "C'est en partie l'ensemble de ces solutions qui ont amené aux résultats suivants."
        },
      ],
      kpi: [
        "Réduction de 50% du temps de lancement de charge",
        "+200 écrans livrés",
        "Design System conforme WCAG",
        "Augmentation du taux de conversion abonnement"
      ],
    }
  },
  // Portail RH
  {
    id: "portail-rh",
    title: "Portail RH",
    client: "Caisse des Dépôts",
    category: "SaaS & Dashboard",
    description: "Centralisation des données retraites et RH. Tableau de bord complexe et gestion des droits utilisateurs.",
    image: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/coverPortailRH_CDC.png?raw=true",
    tags: ["Dashboard", "B2B", "Accessibilité", "Agile"],
    fullDetails: {
      context: "Dans le cadre de la réforme des retraites, la Caisse des Dépôts avait pour objectif de centraliser l'ensemble des données liées aux ressources humaines.",
      mission: "En tant qu'UX/UI Designer, j'avais pour mission de travailler en équipe AGILE avec les développeurs Front et Back ainsi qu'avec les Product Owners. J'ai également rencontré les futurs utilisateurs. Nous devions amener un point de vision central pour la gestion des différentes caisses de retraite.",
      challenges: "Multiplicité des systèmes de gestion existants. Nécessité de gagner du temps sur le traitement des données.",
      role: "Animation de Focus Groups et ateliers 'Job to be done' pour relever les points d'amélioration. Définition des cas d'usage et synthèse des datas (API) avec les développeurs Back. Création du 'styleguide' et des prototypes fonctionnels respectant les normes d'accessibilité (RGAA).",
      solutionBlocks: [
        {
          type: 'text',
          content: "Durant les phases d'idéation des “focus group”, avec des ateliers 'Job to be done' organisés autour de différentes thématiques, nous ont permis de relever des points d’améliorations."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/jobToBeDone.png?raw=true",
          caption: "Verbatim des participants lors des ateliers"
        },
        {
          type: 'text',
          content: "Exemples de points détectés:\n Adapter l’aspect visuel et l’ergonomie de la plateforme aux standards actuels (accès intuitif aux fonctionnalités, développement des icônes et images,...). \n Pour cela nous avons créé un “styleguide” bribe d’un premier design system. Cette étape a été cruciale pour la communication et le “handoff” avec les développeurs. Cela m’a également permis de travailler plus étroitement avec les équipes de développement lors des phases d’intégration."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/styleGuideCDC.png?raw=true",
          caption: "Extrait du styleguide qui nous a permis d'initier le handoff avec les développeurs"
        },
        {
          type: 'text',
          content: "Un autre point qui est ressorti durant ces ateliers, qui allait dans le sens de la centralisation des données avec l'objectif d'un point de communication direct avec les utilisateurs, était le besoin d'avoir une page d’accueil sous forme de « tableau de bord » contenant des informations utiles et personnalisables."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/dashBoardRH.png?raw=true",
          caption: "Première version du tableau de bord"
        },
        {
          type: 'text',
          content: "Afin de répondre à la nécessité de gagner du temps sur le traitement des données. La création de l’interface de gestion des utilisateurs a permis aux RH de gagner en efficacité et en visibilité. Grâce à cette nouvelle interface, les données primordiales pour une bonne gestion des données ont été mises en avant."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/gestioUserCDC.png?raw=true",
          caption: "Extrait de la gestion des utilisateurs"
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/droitUserCDC.png?raw=true",
          caption: "Écran de visualisation des droits utilisateurs."
        },
        {
          type: 'text',
          content: "Un des points, qui est également ressorti durant les ateliers, était le besoin d'avoir plus de visibilité sur ses données. \n Pour cela il a également fallu améliorer et revoir le parcours utilisateur des administrés. \n Dans ce parcours l'écran de consultation de ses droits était le plus important car il allait permettre à l'administré d'avoir les mêmes informations qu'un administrateur. Ce qui a été le point de bascule pour une meilleure communication entre les différentes parties prenantes."
        },
        {
          type: 'image',
          url: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/CDC/mesDroitsCDC.png?raw=true",
          caption: "Écran de visualisation de ses droits en tant qu'administré."
        },
        {
          type: 'text',
          content: "En conclusion, ces nouveaux outils ont permis également de faire évoluer les “process” en interne. Ce qui a donné les résultats qui vont suivre."
        },
      ],
      kpi: [
        "Centralisation réussie des données",
        "réduction du temps d'attente téléphonique de 30 %",
        "Conformité RGAA",
        "Réduction du temps de traitement des questions RH de -45 %"
      ]
    }
  },
  // LEA Project (PDF Content)
  {
    id: "lea-app",
    title: "LEA",
    client: "Agence Tabem",
    category: "UX Research & App Design",
    isUpcoming: true,
    description: "Solution globale pour restaurateurs. Module de prise de réservation intelligent et gestion dynamique du plan de salle.",
    image: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/LEA/coverLea.png?raw=true",
    tags: ["User Research", "Experience Map", "Restaurant Tech", "Figma"],
    fullDetails: {
      context: "Le projet Léa repose sur la conception d'une solution globale pensée pour répondre aux problématiques des restaurateurs. Le projet d'UX se focalisera sur le module de prise de réservation et la gestion de leurs tables.",
      mission: "Faciliter la gestion quotidienne des restaurants, optimiser le remplissage des tables et réduire le 'no-show'.",
      challenges: "Gestion manuelle complexe, perte de chiffre d'affaires liée aux annulations (15% du CA annuel), visibilité réduite sur le taux d'occupation en temps réel.",
      role: "UX Researcher & UI Designer. Réalisation d'entretiens individuels, création de personas, cartographie de l'expérience et prototypage haute fidélité sur Figma.",
      kpi: [
        "Réduction du no-show de 15%",
        "Optimisation du flux en période d'affluence",
        "Gain de temps sur la gestion des réservations",
        "Satisfaction client accrue"
      ]
    }
  },
  // NoCode Project
  {
    id: "nocode",
    title: "NoCode & Automation",
    client: "Projets Personnels",
    category: "Product Building",
    isUpcoming: true,
    description: "Création de workflows automatisés et d'interfaces rapides via Webflow et outils d'automation.",
    image: "https://github.com/Tendance-Web/visuelsPortfolio/blob/main/images/NoCode/coverIANoCode.png?raw=true",
    tags: ["Webflow", "Zapier", "Airtable", "AI Automation"],
    fullDetails: {
      context: "Exploration des capacités du NoCode pour accélérer le déploiement de MVP et automatiser des processus métiers répétitifs.",
      mission: "Démontrer l'efficacité des solutions NoCode couplées à l'IA.",
      challenges: "Intégration complexe de différentes APIs sans code, maintenance des workflows à grande échelle.",
      role: "Product Builder. Architecture des données et design des automatisations."
    }
  }
];