<template>
  <div>
    <Header/>
    <main>
      <div class="module">
        <Headline headline='Welcome to My Website' />
        <section>
          <carousel :perPageCustom="[[0, 1], [640, 2], [1199, 4]]" :autoplay="true">
            <slide>
              <img :src="hero.image" alt="Alt-Text">
            </slide>
            <slide>
              <img :src="hero.image" alt="Alt-Text">
            </slide>
            <slide>
              <img :src="hero.image" alt="Alt-Text">
            </slide>
            <slide>
              <img :src="hero.image" alt="Alt-Text">
            </slide>
            <slide>
              <img :src="hero.image" alt="Alt-Text">
            </slide>
          </carousel>
        </section>
        <section>
          <h2>H2 - Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </section>
        <section>
          <h2>H2 - Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </section>
        <section>
          <h2>H2 - Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue';
import Slide from 'vue-carousel/src/Slide.vue';
import Header from '../components/Header.vue';
import Headline from '../components/Headline.vue';
import Footer from '../components/Footer.vue';
import config from '../config.json';

const pageTitle = 'Welcome';

export default {
  components: {
    Header,
    Headline,
    Footer,
    Carousel,
    Slide,
  },

  head() {
    return {
      title: `${pageTitle} / ${config.title}`,
    };
  },
  data() {
    return {
      hero: config.hero,
    };
  },
};
</script>
