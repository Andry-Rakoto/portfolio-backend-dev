<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">
      <span class="bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">Compétences</span>
    </h2>
    <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
      Voici les technologies, outils et méthodologies que j'utilise quotidiennement
    </p>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Soft Skills -->
      <div class="skills-card rounded-xl p-6">
        <div class="flex items-center gap-3 mb-6">
          <Icon name="mdi:brain" class="text-3xl text-[#32bcae]" />
          <h3 class="text-2xl font-semibold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
            Soft Skills
          </h3>
        </div>
        <div class="flex flex-wrap gap-3">
          <span v-for="skill in softSkills" :key="skill.name" 
                class="skill-item px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-default">
            <Icon :name="skill.icon" class="inline mr-2 text-[#32bcae]" />
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- Hard Skills -->
      <div class="skills-card rounded-xl p-6">
        <div class="flex items-center gap-3 mb-6">
          <Icon name="mdi:code-json" class="text-3xl text-[#32bcae]" />
          <h3 class="text-2xl font-semibold bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
            Hard Skills
          </h3>
        </div>
        <div class="space-y-8">
          <div v-for="category in hardSkills" :key="category.name" class="skill-category">
            <h4 class="font-semibold text-[#32bcae] mb-4 flex items-center gap-2">
              <Icon :name="category.icon" class="text-xl" />
              {{ category.name }}
            </h4>
            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div v-for="skill in category.skills" :key="skill.name" 
                   class="tech-item flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-[#32bcae]/10 cursor-default">
                <div class="w-12 h-12 flex items-center justify-center">
                  <img :src="skill.icon" :alt="skill.name" class="w-10 h-10 object-contain" />
                </div>
                <span class="text-xs text-gray-300 text-center">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '~/components/Icon.vue'

const softSkills = [
  { name: "Gestion de projet", icon: "mdi:chart-line" },
  { name: "Travail d'équipe", icon: "mdi:account-group" },
  { name: "Communication", icon: "mdi:chat" },
  { name: "Résolution de problèmes", icon: "mdi:puzzle" },
  { name: "Adaptabilité", icon: "mdi:update" },
  { name: "Autonomie", icon: "mdi:run-fast" },
  { name: "Leadership", icon: "mdi:star" },
  { name: "Sens du détail", icon: "mdi:eye" }
]

const hardSkills = [
  {
    name: "Methodologies",
    icon: "mdi:agile",
    skills: [
      { name: "Agile", icon: "/icons/agile.svg" },
      { name: "Scrum", icon: "/icons/scrum.svg" }
    ]
  },
  {
    name: "Langages",
    icon: "mdi:language-javascript",
    skills: [
      { name: "Java", icon: "/icons/java.svg" },  
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "HTML 5", icon: "/icons/html.svg" },
      { name: "CSS 3", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Python", icon: "/icons/python.svg" }
      
    ]
  },
  {
    name: "Frameworks Backend",
    icon: "mdi:server",
    skills: [
      { name: "Spring Boot", icon: "/icons/spring.svg" },
      { name: "Laravel", icon: "/icons/laravel.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "Flask", icon: "/icons/flask.svg" }
    ]
  },
  {
    name: "Frameworks Frontend",
    icon: "mdi:web",
    skills: [
      { name: "Vue.js", icon: "/icons/vuejs.svg" },
      { name: "Nuxt", icon: "/icons/nuxt.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Angular", icon: "/icons/angular.svg" }
    ]
  },
  {
    name: "Base de données",
    icon: "mdi:database",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "Oracle", icon: "/icons/oracle.svg" }
    ]
  },
  {
    name: "Outils",
    icon: "mdi:docker",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "GitLab CI", icon: "/icons/gitlab.svg" },
      { name: "Postman", icon: "/icons/postman.svg" }
    ]
  },
  {
    name: "Design",
    icon: "mdi:palette",
    skills: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Illustrator", icon: "/icons/illustrator.png" },
      { name: "Indesign", icon: "/icons/indesign.png" },
      { name: "Photoshop", icon: "/icons/photoshop.svg" },
      { name: "XD", icon: "/icons/xd.svg" }
    ]
  }
]
</script>

<style scoped>
.skills-card {
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(50, 188, 174, 0.1);
  transition: all 0.3s ease;
}

.skills-card:hover {
  border-color: rgba(50, 188, 174, 0.3);
  transform: translateY(-5px);
}

.skill-item {
  background: rgba(50, 188, 174, 0.1);
  color: #32bcae;
  border: 1px solid rgba(50, 188, 174, 0.2);
  font-size: 0.9rem;
}

.skill-item:hover {
  background: rgba(50, 188, 174, 0.2);
  border-color: #32bcae;
}

.tech-item {
  background: rgba(50, 188, 174, 0.05);
  border: 1px solid rgba(50, 188, 174, 0.1);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(50, 188, 174, 0.15);
  border-color: rgba(50, 188, 174, 0.4);
  transform: translateY(-5px);
}

.skill-category {
  border-bottom: 1px solid rgba(50, 188, 174, 0.1);
  padding-bottom: 1.5rem;
}

.skill-category:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
</style>