<template>
  <div class="orion-profile-container">
    <h2 class="profile-title"> Développeuse Full-Stack</h2>
    
    <!-- Profile Section with Image and Description -->
    <div class="profile-intro-section">
      <div class="profile-image-container">
        <img 
          src="../assets/ownPict.png" 
          alt="Profil Développeur" 
          class="profile-image"
          @error="handleImageError"
        />
      </div>
      
      <div class="profile-description">
        <p class="description-text">
         
           Déterminée et passionnée avec plus de 8 ans d’expérience en conception, développement et 
          test de solutions logicielles, je suis une développeuse full-stack polyvalente. 
          Je conçois, maintiens et améliore des applications web tout en développant de nouveaux modules
           pour des systèmes existants. En parallèle, je forme des débutants en ligne sur la bureautique 
           et les bases de la programmation logicielle, partageant mes 
           connaissances et mon expertise pour aider les autres à progresser dans le domaine technologique.
        
        </p>
      </div>
    </div>
    
    <!-- Section Expérience Technique (Accordéon) -->
    <div ref="techSectionRef" class="section accordion-section">
      <button
        ref="techSectionButtonRef"
        type="button"
        class="section-accordion-toggle"
        :aria-expanded="isTechSectionOpen"
        @click="toggleTechSection"
      >
        <h3 class="section-title">💻 Expérience Technique</h3>
        <span class="accordion-icon" :class="{ 'is-open': isTechSectionOpen }">⌄</span>
      </button>

      <transition name="accordion-slide">
        <div v-show="isTechSectionOpen" class="tech-grid">
          <div 
            v-for="(tech, index) in technologies" 
            :key="tech.id"
            class="tech-card"
            :class="'tech-card--' + tech.category"
            @click="animateProgress(index)"
          >
            <div class="tech-icon">{{ tech.icon }}</div>
            <div class="tech-name">{{ tech.name }}</div>
            <div class="tech-category">{{ tech.categoryLabel }}</div>
            <div class="tech-experience">
              <div class="experience-bar">
                <div 
                  class="experience-fill" 
                  :style="{ width: progressWidths[index] + '%' }"
                ></div>
              </div>
              <span class="experience-text">{{ tech.experience }}</span>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Section Compétences (Accordéon) -->
    <div ref="skillsSectionRef" class="section accordion-section">
      <button
        ref="skillsSectionButtonRef"
        type="button"
        class="section-accordion-toggle"
        :aria-expanded="isSkillsSectionOpen"
        @click="toggleSkillsSection"
      >
        <h3 class="section-title">🚀 Compétences Professionnelles</h3>
        <span class="accordion-icon" :class="{ 'is-open': isSkillsSectionOpen }">⌄</span>
      </button>

      <transition name="accordion-slide">
        <div v-show="isSkillsSectionOpen" class="skills-grid">
          <div 
            v-for="skill in professionalSkills" 
            :key="skill.title"
            class="skill-card col-lg-4 col-md-6 col-12"
            @mouseenter="highlightSkill(skill.title)"
            @mouseleave="resetHighlight"
          >
            <div class="skill-header">
              <span class="skill-icon">{{ skill.icon }}</span>
              <h4>{{ skill.title }}</h4>
            </div>
            <p>{{ skill.description }}</p>
            <div class="skill-details" v-if="skill.details">
              <ul>
                <li v-for="detail in skill.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Section Architecture & Bonnes Pratiques (Accordéon) -->
    <div ref="practicesSectionRef" class="section accordion-section">
      <button
        ref="practicesSectionButtonRef"
        type="button"
        class="section-accordion-toggle"
        :aria-expanded="isPracticesSectionOpen"
        @click="togglePracticesSection"
      >
        <h3 class="section-title">🏗️ Architecture & Bonnes Pratiques</h3>
        <span class="accordion-icon" :class="{ 'is-open': isPracticesSectionOpen }">⌄</span>
      </button>

      <transition name="accordion-slide">
        <div v-show="isPracticesSectionOpen" class="practices-grid">
          <div 
            v-for="practice in architecturePractices" 
            :key="practice.name"
            class="practice-card col-md-6 col-lg-3 col-12"
          >
            <div class="practice-icon">{{ practice.icon }}</div>
            <div class="practice-name">{{ practice.name }}</div>
            <div class="practice-description">{{ practice.description }}</div>
          </div>
        </div>
      </transition>
    </div>
      
    
    
    
    <!-- Section Expérience Professionnelle (Accordéon) -->
      <div ref="experienceSectionRef" class="section accordion-section">
      
      
      <!-- <section class="experience-section orion-adaptive-section accordion-section"> -->
        <button
          ref="experienceSectionButtonRef"
          type="button"
          class="section-accordion-toggle experience-accordion-toggle"
          :aria-expanded="isExperienceSectionOpen"
          @click="toggleExperienceSection"
        >
           <h3 class="section-title">💼 Expérience professionnelle</h3>
          <span class="accordion-icon" :class="{ 'is-open': isExperienceSectionOpen }">⌄</span>
        </button>

        <transition name="accordion-slide">
          <div v-show="isExperienceSectionOpen" class="experience-cards">
          <div class="experience-card">
            <h3>Freelance</h3>
            <p><strong>janvier 2025 - jusqu’à présent</strong></p>
            <p>Développeuse full-stack</p>
            <ul>
              <li>Réalisation de nouvelles applications en utilisant .NET 8 (backend) et Angular (frontend)</li>
            </ul>
          </div>
          <div class="experience-card">
            <h3><a href="https://itcomp-dz.com/" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">ITComp</a></h3>
            <p><strong>Novembre 2023 - Novembre 2024</strong></p>
            <p>Développeuse web</p>
            <ul>
              <li>Migration d’une ancienne solution à .NET 8.0</li>
              <li>Ajout de nouvelles fonctionnalités aux solutions existantes</li>
              <li>Réalisation de nouvelles applications</li>
            </ul>
          </div>
          <div class="experience-card">
            <h3><a href="https://nesda.dz/" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">NESDA (EX: ANADE)</a></h3>
            <p><strong>Janvier 2017 - octobre 2023</strong></p>
            <p>Développeuse full-stack</p>
            <ul>
              <li>Concevoir et mettre en œuvre les architectures applicatives</li>
              <li>Participer à l'élaboration de projets à grande complexité</li>
              <li>Participer à la transformation des applications monolithiques vers une architecture micro-services</li>
              <li>Travailler avec des consultants externes et des éditeurs de logiciels pour le développement et le déploiement de solutions métiers</li>
            </ul>
          </div>
          </div>
        </transition>
      <!-- </section> -->
       </div>

      <!-- Section Derniers Projets Réalisés (Accordéon) -->
      <div ref="projectsSectionRef" class="section accordion-section">
        <button
          ref="projectsSectionButtonRef"
          type="button"
          class="section-accordion-toggle"
          :aria-expanded="isProjectsSectionOpen"
          @click="toggleProjectsSection"
        >
          <h3 class="section-title">🚀 Les derniers projets réalisés</h3>
          <span class="accordion-icon" :class="{ 'is-open': isProjectsSectionOpen }">⌄</span>
        </button>

        <transition name="accordion-slide">
          <div v-show="isProjectsSectionOpen" class="projects-list">
          <div class="project-card tarahoum-card">
            <div class="project-logo-wrapper">
              <img src="../assets/tarahoum.png" alt="Logo Tarhoum" class="project-logo" />
            </div>
            <h3 class="project-title"><a href="https://dz.tarahoum.com/" target="_blank" rel="noopener noreferrer">Tarhoum</a></h3>
            <p class="project-desc">Application affiche une liste des défunts avec l'emplacement de leurs tombes. Les utilisateurs peuvent ajouter d'autres défunts à la liste en fournissant des informations détaillées et en capturant les coordonnées GPS pour aider les visiteurs à trouver facilement l'emplacement des tombes de leurs proches et à partager l'emplacement.</p>
          </div>
          <div class="project-card quintessence-card">
            <div class="project-logo-wrapper">
              <img src="../assets/quintessence.png" alt="Logo Quintessence" class="project-logo" />
            </div>
            <h3 class="project-title"><a href="https://miel.aliche.org/" target="_blank" rel="noopener noreferrer">Quintessence</a></h3>
            <strong class="project-subtitle">Application de gestion de commandes</strong>
            <p class="project-desc">Conception et amélioration d’une application de gestion des commandes dédiée à Quintessence, marque engagée dans la production de miel pur et naturel. L’application permet d’optimiser le suivi des commandes ainsi que la gestion des clients et des produits.</p>
          </div>
          </div>
        </transition>
      </div>
        
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

// Interface simple pour les technologies
interface Technology {
  id: string
  name: string
  category: string
  categoryLabel: string
  experience: string
  experienceLevel: number
  icon: string
}

// Technologies définies de manière simple
const technologies = ref<Technology[]>([
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Base de données',
    experience: 'Expérience confirmée',
    experienceLevel: 70,
    icon: '🐘'
  },
  {
    id: 'vue3',
    name: 'Vue.js 3',
    category: 'framework',
    categoryLabel: 'Framework Frontend',
    experience: 'Expérience avancée',
    experienceLevel: 40,
    icon: '💚'
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    category: 'database',
    categoryLabel: 'Base de données',
    experience: 'Expérience avancée',
    experienceLevel: 88,
    icon: '🗄️'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    categoryLabel: 'Langage de programmation',
    experience: 'Expérience avancée',
    experienceLevel: 75,
    icon: '📘'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'language',
    categoryLabel: 'Langage de programmation',
    experience: 'Expert',
    experienceLevel: 92,
    icon: '📜'
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'frontend',
    categoryLabel: 'Markup Language',
    experience: 'Expert',
    experienceLevel: 95,
    icon: '🌐'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'frontend',
    categoryLabel: 'Styling',
    experience: 'Expérience avancée',
    experienceLevel: 90,
    icon: '🎨'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tool',
    categoryLabel: 'Contrôle de version',
    experience: 'Expérience avancée',
    experienceLevel: 90,
    icon: '🐙'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Framework CSS',
    experience: 'Expérience confirmée',
    experienceLevel: 82,
    icon: '💨'
  },
  {
    id: 'vs2022',
    name: 'Visual Studio 2022',
    category: 'tool',
    categoryLabel: 'IDE',
    experience: 'Expérience avancée',
    experienceLevel: 88,
    icon: '🔧'
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tool',
    categoryLabel: 'Éditeur de code',
    experience: 'Expert',
    experienceLevel: 95,
    icon: '📝'
  },
  {
    id: 'angular18',
    name: 'Angular 18',
    category: 'frontend',
    categoryLabel: 'Framework Frontend',
    experience: 'Expérience confirmée',
    experienceLevel: 85,
    icon: '🅰️'
  },
/*  {
    id: 'docker',
    name: 'Docker',
    category: 'tool',
    categoryLabel: 'Containerisation',
    experience: 'Expérience avancée',
    experienceLevel: 40,
    icon: '🐳'
  },
  
  
  {
    id: 'azure',
    name: 'Azure',
    category: 'tool',
    categoryLabel: 'Cloud Computing',
    experience: 'Expérience avancée',
    experienceLevel: 33,
    icon: '📊'
  }*/
])

// État simple pour les animations
const progressWidths = ref<number[]>([])
const isTechSectionOpen = ref(false)
const isSkillsSectionOpen = ref(false)
const isPracticesSectionOpen = ref(false)
const isExperienceSectionOpen = ref(false)
const isProjectsSectionOpen = ref(false)

const techSectionRef = ref<HTMLElement | null>(null)
const skillsSectionRef = ref<HTMLElement | null>(null)
const practicesSectionRef = ref<HTMLElement | null>(null)
const experienceSectionRef = ref<HTMLElement | null>(null)
const projectsSectionRef = ref<HTMLElement | null>(null)

const techSectionButtonRef = ref<HTMLElement | null>(null)
const skillsSectionButtonRef = ref<HTMLElement | null>(null)
const practicesSectionButtonRef = ref<HTMLElement | null>(null)
const experienceSectionButtonRef = ref<HTMLElement | null>(null)
const projectsSectionButtonRef = ref<HTMLElement | null>(null)

// Animation simplifiée
const animateProgress = (index: number) => {
  const targetWidth = technologies.value[index].experienceLevel
  let currentWidth = 0
  const increment = targetWidth / 20
  
  const animate = () => {
    if (currentWidth < targetWidth) {
      currentWidth += increment
      progressWidths.value[index] = Math.min(currentWidth, targetWidth)
      requestAnimationFrame(animate)
    }
  }
  
  animate()
}

const animateAllTechProgress = () => {
  technologies.value.forEach((_, index) => {
    setTimeout(() => {
      animateProgress(index)
    }, index * 150)
  })
}

const closeAllSections = () => {
  isTechSectionOpen.value = false
  isSkillsSectionOpen.value = false
  isPracticesSectionOpen.value = false
  isExperienceSectionOpen.value = false
  isProjectsSectionOpen.value = false
}

const scrollSectionToCenter = (sectionEl: HTMLElement | null) => {
  if (!sectionEl) return
  nextTick(() => {
    sectionEl.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

const scrollTitleIntoView = (titleEl: HTMLElement | null) => {
  if (!titleEl) return
  nextTick(() => {
    titleEl.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const toggleTechSection = () => {
  if (isTechSectionOpen.value) {
    isTechSectionOpen.value = false
  } else {
    closeAllSections()
    isTechSectionOpen.value = true
    progressWidths.value = new Array(technologies.value.length).fill(0)
    animateAllTechProgress()
    scrollTitleIntoView(techSectionButtonRef.value)
  }
}

const toggleSkillsSection = () => {
  if (isSkillsSectionOpen.value) {
    isSkillsSectionOpen.value = false
  } else {
    closeAllSections()
    isSkillsSectionOpen.value = true
    scrollTitleIntoView(skillsSectionButtonRef.value)
  }
}

const togglePracticesSection = () => {
  if (isPracticesSectionOpen.value) {
    isPracticesSectionOpen.value = false
  } else {
    closeAllSections()
    isPracticesSectionOpen.value = true
    scrollTitleIntoView(practicesSectionButtonRef.value)
  }
}

const toggleExperienceSection = () => {
  if (isExperienceSectionOpen.value) {
    isExperienceSectionOpen.value = false
  } else {
    closeAllSections()
    isExperienceSectionOpen.value = true
    scrollTitleIntoView(experienceSectionButtonRef.value)
  }
}

const toggleProjectsSection = () => {
  if (isProjectsSectionOpen.value) {
    isProjectsSectionOpen.value = false
  } else {
    closeAllSections()
    isProjectsSectionOpen.value = true
    scrollTitleIntoView(projectsSectionButtonRef.value)
  }
}

// Initialisation au montage
onMounted(() => {
  progressWidths.value = new Array(technologies.value.length).fill(0)
})

interface ProfessionalSkill {
  title: string
  description: string
  icon: string
  details?: string[]
}

interface ArchitecturePractice {
  name: string
  description: string
  icon: string
}

const professionalSkills = ref<ProfessionalSkill[]>([
  {
    title: 'Team Collaboration',
    description: 'Expertise en travail d\'équipe et communication interpersonnelle.',
    icon: '👥',
    details: [
      'Animation de réunions techniques',
      'Mentorat de développeurs juniors',
      'Coordination entre équipes multidisciplinaires'
    ]
  },
  {
    title: 'Software Design',
    description: 'Conception d\'architectures logicielles robustes et évolutives.',
    icon: '🏛️',
    details: [
      'Analyse des besoins fonctionnels',
      'Modélisation de données',
      'Architecture microservices'
    ]
  },
  {
    title: 'Stakeholder Communication',
    description: 'Communication efficace avec les parties prenantes projet.',
    icon: '💬',
    details: [
      'Présentation de solutions techniques',
      'Traduction des besoins métier',
      'Reporting d\'avancement'
    ]
  },
  {
    title: 'External Consultants Collaboration',
    description: 'Collaboration avec des consultants externes et partenaires.',
    icon: '🤝',
    details: [
      'Intégration d\'équipes externes',
      'Coordination de projets multi-vendors',
      'Transfert de connaissances'
    ]
  },
  {
    title: 'Performance & Scalability Optimization',
    description: 'Optimisation des performances et de la scalabilité des applications.',
    icon: '⚡',
    details: [
      'Profiling et analyse de performance',
      'Optimisation des requêtes SQL',
      'Architecture haute disponibilité'
    ]
  },
  {
    title: 'Code Reviewing',
    description: 'Révision de code et assurance qualité logicielle.',
    icon: '🔍',
    details: [
      'Code review systématique',
      'Définition de standards de codage',
      'Formation aux bonnes pratiques'
    ]
  },
  // {
  //   title: 'DevOps & CI/CD',
  //   description: 'Mise en place et maintenance de pipelines CI/CD, automatisation des déploiements.',
  //   icon: '🔄',
  //   details: [
  //     'Configuration de pipelines Azure DevOps',
  //     'Intégration continue avec GitHub Actions',
  //     'Automatisation des tests et déploiements',
  //     'Gestion des environnements cloud'
  //   ]
  // },
  // {
  //   title: 'Architecture Cloud',
  //   description: 'Conception et implémentation de solutions cloud natives.',
  //   icon: '☁️',
  //   details: [
  //     'Architecture microservices',
  //     'Solutions serverless',
  //     'Gestion des conteneurs',
  //     'Haute disponibilité et scalabilité'
  //   ]
  // },
  {
    title: 'Sécurité Applicative',
    description: 'Implémentation des meilleures pratiques de sécurité.',
    icon: '🔒',
    details: [
      'Authentication & Authorization',
      'Protection contre les vulnérabilités OWASP',
      'Gestion des secrets',
      'Audit de sécurité'
    ]
  }
])

const architecturePractices = ref<ArchitecturePractice[]>([
  {
    name: 'SOLID Principles',
    description: 'Application rigoureuse des principes SOLID pour un code maintenable',
    icon: '🎯'
  },
  {
    name: 'Clean Architecture',
    description: 'Architecture en couches avec séparation claire des responsabilités',
    icon: '🏗️'
  },
  {
    name: 'Clean Code',
    description: 'Code lisible, testable et maintenable suivant les meilleures pratiques',
    icon: '✨'
  },
  {
    name: 'Design Patterns',
    description: 'Utilisation appropriée des patterns de conception',
    icon: '🔄'
  },
  // {
  //   name: 'TDD & BDD',
  //   description: 'Développement guidé par les tests et le comportement',
  //   icon: '🎯'
  // },
  {
    name: 'DDD',
    description: 'Domain-Driven Design pour des solutions métier complexes',
    icon: '🏢'
  },
  // {
  //   name: 'Event Sourcing',
  //   description: 'Architecture événementielle pour la traçabilité et la résilience',
  //   icon: '📊'
  // },
  {
    name: 'Microservices',
    description: 'Conception de systèmes distribués scalables',
    icon: '🔄'
  }
])

const highlightSkill = (title: string) => {
  console.log('Highlighting skill:', title)
}

const resetHighlight = () => {
  console.log('Reset highlight')
}

// Image error handling
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '../assets/vue.svg' // Fallback to default Vue logo
  target.alt = 'Image de profil par défaut'
}
</script>

<style>
/* Variables CSS globales - non scoped pour être accessible partout */
:root {
  --color-framework: #3b82f6;
  --color-language: #10b981;
  --color-database: #8b5cf6;
  --color-tool: #f59e0b;
  --color-frontend: #ef4444;
}
</style>

<style scoped>
.orion-profile-container {
  max-width: 1700px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--orion-bg-primary);
  color: var(--orion-text-primary);
}

.profile-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--orion-primary) 0%, var(--orion-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-intro-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--orion-bg-secondary);
  border-radius: 16px;
  border: 1px solid var(--orion-border-primary);
  box-shadow: var(--orion-shadow-md);
}

.profile-image-container {
  flex-shrink: 0;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--orion-shadow-xl);
  border: 4px solid var(--orion-bg-card);
  background: linear-gradient(135deg, var(--orion-primary) 0%, var(--orion-secondary) 100%);
  padding: 4px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-description {
  flex: 1;
  min-width: 0;
}

.description-text {
  font-size: 1.3rem;
  color: var(--orion-text-secondary);
  line-height: 1.7;
  margin: 0;
  text-align: justify;
}

/* Section Styles */
.section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--orion-text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.accordion-section {
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.section-accordion-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--orion-border-primary);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  background: var(--orion-bg-secondary);
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
  scroll-margin-top: 1.5rem;
}

.section-accordion-toggle:hover {
  border-color: var(--orion-border-accent);
  background: var(--orion-bg-hover);
}

.section-accordion-toggle .section-title {
  margin-bottom: 0;
}

.accordion-icon {
  font-size: 1.25rem;
  color: var(--orion-text-secondary);
  transition: transform 0.25s ease;
}

.accordion-icon.is-open {
  transform: rotate(180deg);
}

.accordion-slide-enter-active,
.accordion-slide-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.accordion-slide-enter-from,
.accordion-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.tech-grid,
.skills-grid,
.practices-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 14rem;
  padding-right: 14rem;
  margin: 0 auto;
  transition: all 0.3s ease;
}

/* Pour tablettes - 2 colonnes */
@media (max-width: 992px) {
  .tech-grid,
  .skills-grid,
  .practices-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Pour mobiles - 1 colonne */
@media (max-width: 768px) {
  .tech-grid,
  .skills-grid,
  .practices-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .profile-intro-section {
    flex-direction: column;
    align-items: center;
  }
  
  .profile-description {
    margin-left: 0;
    margin-top: 1rem;
    text-align: center;
  }
}

/* Couleurs thématiques par catégorie */
.tech-card--framework {
  --theme-color: #3b82f6;
  --theme-bg: rgba(59, 130, 246, 0.1);
}

.tech-card--language {
  --theme-color: #10b981;
  --theme-bg: rgba(16, 185, 129, 0.1);
}

.tech-card--database {
  --theme-color: #8b5cf6;
  --theme-bg: rgba(139, 92, 246, 0.1);
}

.tech-card--tool {
  --theme-color: #f59e0b;
  --theme-bg: rgba(245, 158, 11, 0.1);
}

.tech-card--frontend {
  --theme-color: #ef4444;
  --theme-bg: rgba(239, 68, 68, 0.1);
}

/* Technical Experience Styles */
.tech-card {
  background: var(--orion-bg-card);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: var(--orion-shadow-md);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border-left: 4px solid var(--theme-color);
  margin-bottom: 1rem;
  border: 1px solid var(--orion-border-primary);
}

.tech-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--orion-shadow-xl);
  background: var(--orion-bg-hover);
  border-color: var(--orion-border-accent);
}

.tech-icon {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  display: inline-block;
}

.tech-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--theme-color);
  margin-bottom: 0.25rem;
}

.tech-category {
  font-size: 0.875rem;
  color: var(--orion-text-tertiary);
  margin-bottom: 1rem;
}

.tech-experience {
  margin-top: 1rem;
}

.experience-bar {
  width: 100%;
  height: 8px;
  background: var(--orion-border-primary);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.experience-fill {
  height: 100%;
  background: var(--theme-color);
  border-radius: 4px;
  transition: width 0.8s ease-out;
  transform-origin: left;
}

.experience-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--theme-color);
}

/* Skills Styles */
.skill-card {
  background: var(--orion-bg-card);
  border: 1px solid var(--orion-border-primary);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  box-shadow: var(--orion-shadow-sm);
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--orion-shadow-lg);
  border-color: var(--orion-border-accent);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.skill-icon {
  font-size: 1.25rem;
}

.skill-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--orion-text-primary);
}

.skill-card p {
  color: var(--orion-text-secondary);
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.skill-details ul {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--orion-text-secondary);
}

.skill-details li {
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}

/* Architecture Practices Styles */
.practice-card {
  background: var(--orion-bg-card);
  border: 2px solid var(--orion-border-primary);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  box-shadow: var(--orion-shadow-sm);
}

.practice-card:hover {
  border-color: var(--orion-border-accent);
  transform: translateY(-6px);
  box-shadow: var(--orion-shadow-lg);
}

.practice-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.practice-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--orion-text-primary);
  margin-bottom: 0.5rem;
}

.practice-description {
  font-size: 0.8rem;
  color: var(--orion-text-secondary);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .orion-profile-container {
    padding: 1rem;
  }
  
  .profile-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .tech-grid,
  .skills-grid,
  .practices-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<style scoped>
/* --- Projets & Expérience: adaptatif clair/sombre --- */
.orion-adaptive-section {
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 2.5rem 1.5rem;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(108, 99, 255, 0.10);
  background: var(--orion-bg-card, #fff);
  color: var(--orion-text-primary, #22223b);
  border: 1.5px solid var(--orion-border-primary, #e0e7ff);
  transition: background 0.3s, color 0.3s;
}

[data-theme="dark"] .orion-adaptive-section,
.dark-theme .orion-adaptive-section {
  background: var(--orion-bg-card, #1e293b) !important;
  color: var(--orion-text-primary, #f1f5f9);
  border-color: var(--orion-border-primary, #334155);
}


.projects-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #6c63ff 0%, #5a52d5 50%, #4a42b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  text-shadow: 0 4px 8px rgba(108, 99, 255, 0.15);
  position: relative;
  padding-bottom: 1rem;
}

.projects-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #6c63ff, #f59e0b);
  border-radius: 2px;
}

[data-theme="dark"] .projects-title,
.dark-theme .projects-title {
  background: linear-gradient(135deg, #8b83ff 0%, #7b73ff 50%, #6c63ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.projects-icon {
  font-size: 2.5rem;
  vertical-align: middle;
  margin-right: 0.8rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  padding-left: 4rem;
  padding-right: 4rem;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.project-card {
  background: var(--orion-bg-surface, #fff);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(108, 99, 255, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.2rem;
  max-width: 450px;
  min-width: 300px;
  flex: 1 1 350px;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  color: #22223b;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.03) 0%, rgba(245, 158, 11, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:not(:last-child) {
  margin-bottom: 1.5rem;
}

[data-theme="dark"] .project-card,
.dark-theme .project-card {
  background: var(--orion-bg-card, #1e293b) !important;
  color: #f1f5f9;
  border-color: #334155;
}

[data-theme="dark"] .project-title,
[data-theme="dark"] .project-title a,
[data-theme="dark"] .project-desc,
[data-theme="dark"] .project-subtitle,
.dark-theme .project-title,
.dark-theme .project-title a,
.dark-theme .project-desc,
.dark-theme .project-subtitle {
  color: #f1f5f9 !important;
}

[data-theme="light"] .project-card,
.light-theme .project-card {
  background: var(--orion-bg-card, #ffffff) !important;
  color: #1f2937;
  border-color: #e5e7eb;
}

[data-theme="light"] .project-title,
[data-theme="light"] .project-title a,
[data-theme="light"] .project-desc,
[data-theme="light"] .project-subtitle,
.light-theme .project-title,
.light-theme .project-title a,
.light-theme .project-desc,
.light-theme .project-subtitle {
  color: #1f2937;
}
.project-card:not(:last-child) {
  margin-bottom: 1.5rem;
}
.project-card:hover {
  box-shadow: 0 20px 60px rgba(108, 99, 255, 0.25), 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: rgba(108, 99, 255, 0.3);
  transform: translateY(-12px) scale(1.02);
}

.tarahoum-card:hover {
  box-shadow: 0 20px 60px rgba(108, 99, 255, 0.35), 0 8px 16px rgba(108, 99, 255, 0.15);
  border-color: #6c63ff;
}

.quintessence-card:hover {
  box-shadow: 0 20px 60px rgba(245, 158, 11, 0.35), 0 8px 16px rgba(245, 158, 11, 0.15);
  border-color: #f59e0b;
}

.tarahoum-card {
  border-left: 5px solid #6c63ff;
  border-top: 1px solid rgba(108, 99, 255, 0.1);
}

.tarahoum-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(180deg, #6c63ff, #5a52d5);
  box-shadow: 0 0 20px rgba(108, 99, 255, 0.4);
}

.quintessence-card {
  border-left: 5px solid #f59e0b;
  border-top: 1px solid rgba(245, 158, 11, 0.1);
}

.quintessence-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(180deg, #f59e0b, #d97706);
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.4);
}


[data-theme="dark"] .tarahoum-card,
[data-theme="dark"] .quintessence-card,
.dark-theme .tarahoum-card,
.dark-theme .quintessence-card {
  background: var(--orion-bg-card, #1e293b) !important;
}
.project-logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75rem;
  min-height: 50px;
  position: relative;
  padding: 0.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%);
  transition: all 0.3s ease;
}

.project-logo-wrapper:hover {
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%);
  transform: scale(1.05);
}

.project-logo {
  max-width: 100%;
  max-height: 45px;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.project-logo:hover {
  transform: scale(1.1) rotate(2deg);
  filter: drop-shadow(0 8px 16px rgba(108, 99, 255, 0.3));
}
.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0.6rem 0 0.4rem 0;
  color: var(--orion-text-primary, #22223b);
  text-align: center;
  transition: all 0.3s ease;
  line-height: 1.3;
}

.project-title a {
  color: var(--orion-text-primary, #22223b);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.project-title a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6c63ff, #5a52d5);
  transition: width 0.3s ease;
}

.project-title a:hover::after {
  width: 100%;
}

.project-title a:hover {
  color: #6c63ff;
  transform: translateY(-2px);
}

.quintessence-card .project-title a::after {
  background: linear-gradient(90deg, #f59e0b, #d97706);
}

.quintessence-card .project-title a:hover {
  color: #f59e0b;
}

.project-subtitle {
  font-size: 0.75rem;
  color: #f59e0b;
  margin-bottom: 0.4rem;
  font-weight: 600;
  display: inline-block;
  text-align: center;
  padding: 0.2rem 0.6rem;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.project-subtitle:hover {
  background: rgba(245, 158, 11, 0.15);
  transform: scale(1.05);
}

.project-desc {
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: justify;
  margin-top: 0.5rem;
  color: inherit;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-desc {
  opacity: 1;
}


/* --- Expérience professionnelle --- */

.experience-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  padding-left: 4rem;
  padding-right: 4rem;
  margin: 0 auto;
}
.experience-card {
  background: var(--orion-bg-card, #fff);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(108, 99, 255, 0.10);
  padding: 1.2rem 1rem 1rem 1rem;
  max-width: 410px;
  min-width: 270px;
  flex: 1 1 320px;
  border: 2px solid var(--orion-border-primary, #e0e7ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
  position: relative;
  color: var(--orion-text-primary, #22223b);
}
.experience-card:not(:last-child) {
  margin-bottom: 1.5rem;
}
.experience-card:hover {
  box-shadow: 0 8px 32px rgba(108, 99, 255, 0.18);
  border-color: var(--orion-border-accent, #6c63ff);
  transform: translateY(-8px) scale(1.03);
}
.experience-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0.3rem 0 0.15rem 0;
  color: var(--orion-text-primary, #3f3d56);
  text-align: center;
}
.experience-card p,
.experience-card ul {
  color: var(--orion-text-secondary, #444);
  font-size: 0.85rem;
  text-align: justify;
  margin-top: 0.3rem;
}
.experience-card a {
  color: inherit;
  text-decoration: underline;
  transition: color 0.2s;
}
.experience-card a:hover {
  color: var(--orion-border-accent, #6c63ff);
}
@media (max-width: 900px) {
  .experience-cards {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  .experience-card {
    max-width: 100%;
    min-width: 0;
    width: 100%;
  }
}
</style>