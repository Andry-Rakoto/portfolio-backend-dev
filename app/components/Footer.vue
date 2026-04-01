<template>
  <footer class="bg-[#101324] border-t border-gray-800 py-12 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- À propos -->
        <div>
          <h3 class="text-xl font-bold mb-4 bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
            À propos
          </h3>
          <p class="text-gray-400 leading-relaxed">
            Développeur, Designer passionné par la création d'applications robustes, 
            évolutives et performantes. Disponible pour des missions freelance ou CDI.
          </p>
        </div>
        
        <!-- Contact -->
        <div>
          <h3 class="text-xl font-bold mb-4 bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
            Contact
          </h3>
          <div class="space-y-3">
            <a href="https://linkedin.com" target="_blank" 
               class="flex items-center space-x-3 text-gray-400 hover:text-[#32bcae] transition-all duration-300 group">
              <Icon name="mdi:linkedin" class="text-2xl group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:andrikelinay@gmail.com" 
               class="flex items-center space-x-3 text-gray-400 hover:text-[#32bcae] transition-all duration-300 group">
              <Icon name="mdi:email" class="text-2xl group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
            <a href="https://github.com/Andry-Rakoto" target="_blank" 
               class="flex items-center space-x-3 text-gray-400 hover:text-[#32bcae] transition-all duration-300 group">
              <Icon name="mdi:github" class="text-2xl group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a href="#" target="_blank" 
               class="flex items-center space-x-3 text-gray-400 hover:text-[#32bcae] transition-all duration-300 group">
              <Icon name="mdi:cellphone" class="text-2xl group-hover:scale-110 transition-transform" />
              <span>0349156352</span>
            </a>
          </div>
        </div>
        
        <!-- Navigation -->
        <div>
          <h3 class="text-xl font-bold mb-4 bg-gradient-to-r from-[#32bcae] to-[#13514b] bg-clip-text text-transparent">
            Navigation
          </h3>
          <div class="space-y-2">
            <a v-for="item in menuItems" :key="item.name" 
               :href="item.href" 
               class="block text-gray-400 hover:text-[#32bcae] transition-colors duration-300">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-500 text-sm">
          &copy; {{ currentYear }} Andry Ny Aina RAKOTONIRINA - Développeur web & UI/UX designer. 
          Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Icon from '~/components/Icon.vue'
const currentYear = new Date().getFullYear()

const menuItems = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Profil', href: '#apropos' },
  { name: 'Réalisations', href: '#realisations' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Projets', href: '#projets' }
]
</script>