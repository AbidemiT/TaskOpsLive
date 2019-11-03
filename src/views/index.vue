<template>
  <div class="container">
    <div class="landing">
      <div class="content">
        <h2 class="landing-message">The Best Management tool, Let help you keep track of your Tasks</h2>
        <router-link to="/register" class="cta">Get Started</router-link>
      </div>
      <div class="img-container">
        <img src="@/assets/images/task.png" alt="Task Png">
      </div>
    </div>
    <section id="process">
      <div class="heading"><h1>Due Process</h1></div>
      <div class="cards">
        <div class="card">
          <div class="card_image"><img src="@/assets/icons/list.svg" alt="Add Task SVG"></div>
          <div class="card_title"><h3>Add Task</h3></div>
          <div class="card_content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto consequatur assumenda harum ut pariatur</p></div>
        </div>
        <div class="card">
          <div class="card_image"><img src="@/assets/icons/list-process.svg" alt="process Task SVG"></div>
          <div class="card_title"><h3>Track Task</h3></div>
          <div class="card_content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto consequatur assumenda harum ut pariatur</p></div>
        </div>
        <div class="card">
          <div class="card_image"><img src="@/assets/icons/list-completed.svg" alt="completed task SVG"></div>
          <div class="card_title"><h3>Update Task</h3></div>
          <div class="card_content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto consequatur assumenda harum ut pariatur</p></div>
        </div>
      </div>
    </section>
        <Foot/>
  </div>
</template>

<script>
import Foot from '@/components/Foot.vue';


export default {
  components: {
    Foot
  },
  data() {
    return {
    }
  }
}
</script>

<style>


</style>
