<template>
  <div class="orion-profile-container">
    <h2 class="profile-title">Profil Développeur Full-Stack</h2>
    
    <!-- Profile Section with Image and Description -->
    <div class="profile-intro-section">
      <div class="profile-image-container">
        <img 
          src="../assets/profile-image.jpg" 
          alt="Profil Développeur" 
          class="profile-image"
          @error="handleImageError"
        />
      </div>
      
      <div class="profile-description">
        <p class="description-text">
          Determined, passionate, and dedicated software engineer with over 8 years of experience in designing, developing, and testing software solutions. Skilled in designing, maintaining, and enhancing web applications, as well as adding new modules to existing systems. Versatile and solution-oriented, with a clear and effective communication style, always ready to deliver innovative results.
        </p>
      </div>
    </div>
    
    <!-- Section Expérience Technique -->
    <div class="section">
      <h3 class="section-title">💻 Expérience Technique</h3>
      <div class="tech-grid">
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
    </div>

    <!-- Section Compétences -->
    <div class="section">
      <h3 class="section-title">🚀 Compétences Professionnelles</h3>
      <div class="skills-grid">
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
    </div>

    <!-- Section Architecture & Bonnes Pratiques -->
    <div class="section">
      <h3 class="section-title">🏗️ Architecture & Bonnes Pratiques</h3>
      <div class="practices-grid">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
    id: 'dotnet8',
    name: '.NET 8',
    category: 'framework',
    categoryLabel: 'Framework Backend',
    experience: 'Expérience avancée',
    experienceLevel: 90,
    icon: '🔷'
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'language',
    categoryLabel: 'Langage de programmation',
    experience: 'Expert',
    experienceLevel: 95,
    icon: '🔸'
  },
  {
    id: 'vue3',
    name: 'Vue.js 3',
    category: 'framework',
    categoryLabel: 'Framework Frontend',
    experience: 'Expérience avancée',
    experienceLevel: 50,
    icon: '💚'
  },
  {
    id: 'react',
    name: 'React',
    category: 'framework',
    categoryLabel: 'Framework Frontend',
    experience: 'Expérience confirmée',
    experienceLevel: 85,
    icon: '⚛️'
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Base de données',
    experience: 'Expérience confirmée',
    experienceLevel: 85,
    icon: '🐘'
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
    experienceLevel: 88,
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
  {
    id: 'docker',
    name: 'Docker',
    category: 'tool',
    categoryLabel: 'Containerisation',
    experience: 'Expérience avancée',
    experienceLevel: 87,
    icon: '🐳'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'tool',
    categoryLabel: 'Orchestration',
    experience: 'Expérience intermédiaire',
    experienceLevel: 75,
    icon: '⚓'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'tool',
    categoryLabel: 'Cloud Computing',
    experience: 'Expérience confirmée',
    experienceLevel: 82,
    icon: '☁️'
  },
  {
    id: 'azure',
    name: 'Azure',
    category: 'tool',
    categoryLabel: 'Cloud Computing',
    experience: 'Expérience avancée',
    experienceLevel: 88,
    icon: '📊'
  }
])

// État simple pour les animations
const progressWidths = ref<number[]>([])

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

// Initialisation au montage
onMounted(() => {
  progressWidths.value = new Array(technologies.value.length).fill(0)
  
  // Animation initiale avec délai
  technologies.value.forEach((_, index) => {
    setTimeout(() => {
      animateProgress(index)
    }, index * 150)
  })
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
  {
    title: 'DevOps & CI/CD',
    description: 'Mise en place et maintenance de pipelines CI/CD, automatisation des déploiements.',
    icon: '🔄',
    details: [
      'Configuration de pipelines Azure DevOps',
      'Intégration continue avec GitHub Actions',
      'Automatisation des tests et déploiements',
      'Gestion des environnements cloud'
    ]
  },
  {
    title: 'Architecture Cloud',
    description: 'Conception et implémentation de solutions cloud natives.',
    icon: '☁️',
    details: [
      'Architecture microservices',
      'Solutions serverless',
      'Gestion des conteneurs',
      'Haute disponibilité et scalabilité'
    ]
  },
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
  {
    name: 'TDD & BDD',
    description: 'Développement guidé par les tests et le comportement',
    icon: '🎯'
  },
  {
    name: 'DDD',
    description: 'Domain-Driven Design pour des solutions métier complexes',
    icon: '🏢'
  },
  {
    name: 'Event Sourcing',
    description: 'Architecture événementielle pour la traçabilité et la résilience',
    icon: '📊'
  },
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
  max-width: 1200px;
  margin: 0 auto;
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
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Système de grille responsive avec 3 colonnes */
.tech-grid,
.skills-grid,
.practices-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
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
  padding: 1.5rem;
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
  font-size: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.tech-name {
  font-size: 1.25rem;
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
  padding: 1.5rem;
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
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.skill-icon {
  font-size: 1.5rem;
}

.skill-header h4 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--orion-text-primary);
}

.skill-card p {
  color: var(--orion-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
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
  padding: 1.5rem;
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.practice-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--orion-text-primary);
  margin-bottom: 0.5rem;
}

.practice-description {
  font-size: 0.875rem;
  color: var(--orion-text-secondary);
  line-height: 1.5;
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