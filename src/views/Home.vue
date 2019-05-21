<template>
  <div class="home">
    <LionGamesDescription></LionGamesDescription>
    <FeaturedGameCard></FeaturedGameCard>
    <ArticleCard></ArticleCard>
  </div>
</template>

<script>


import LionGamesDescription from '@/components/LionGamesDescription.vue'
import FeaturedGameCard from '@/components/FeaturedGameCard.vue'
import ArticleCard from '@/components/ArticleCard.vue'

export default {
  name: 'home',
  components: {
    LionGamesDescription,
    FeaturedGameCard,
    ArticleCard
  }
};
</script>
