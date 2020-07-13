<template>
  <div class="">
    <Navbar @sidebarStatus="updateSidebar" />
    <Sidebar v-if="status" />
    <div class="text-center grid md:flex justify-center items-center mx-8">
      <div class="order-2 md:order-1 md:w-1/2">
        <h2
          class="md:text-3xl font-bold mb-8"
        >The Best Management tool, Let help you keep track of your Tasks</h2>
        <router-link to="/register" class="rounded-full bg-yellow text-white py-2 px-4">Get Started</router-link>
      </div>
      <div class="order-1 md:order-2 img-container md:w-1/2">
        <img src="@/assets/images/task.png" alt="Task Png" />
      </div>
    </div>
    <section id="process">
      <div class="heading">
        <h1>Due Process</h1>
      </div>
      <div class="cards">
        <div class="card" data-aos="fade-up">
          <div class="card_image">
            <img src="@/assets/icons/list.svg" alt="Add Task SVG" />
          </div>
          <div class="card_title">
            <h3>Add Task</h3>
          </div>
          <div class="card_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto consequatur assumenda harum ut pariatur</p>
          </div>
        </div>
        <div class="card" data-aos="fade-right">
          <div class="card_image">
            <img src="@/assets/icons/list-process.svg" alt="process Task SVG" />
          </div>
          <div class="card_title">
            <h3>Track Task</h3>
          </div>
          <div class="card_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto consequatur assumenda harum ut pariatur</p>
          </div>
        </div>
        <div class="card" data-aos="fade-left">
          <div class="card_image">
            <img src="@/assets/icons/list-completed.svg" alt="completed task SVG" />
          </div>
          <div class="card_title">
            <h3>Update Task</h3>
          </div>
          <div class="card_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto consequatur assumenda harum ut pariatur</p>
          </div>
        </div>
      </div>
    </section>
    <Foot></Foot>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Foot from "@/components/Foot.vue";

export default {
  components: {
    Navbar,
    Foot,
    Sidebar
  },
    data() {
    return {
      status: false
    };
  },
  methods: {
    updateSidebar(value) {
      if (value === "sm-menu") {
        this.status = false;
      } else {
        this.status = true;
      }
    }
  },
};
</script>

<style>
</style>
