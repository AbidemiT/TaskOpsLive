<template>
  <div>
    <Navbar></Navbar>
    <div class="tasks_page">
      <div class="new_task">
      <button @click="newTask">New Task</button>
    </div>
    <div class="tasks" v-if="noTask !== 0">
      <div class="task" v-for="(task,i) in tasks" :key="i">
        <h3 class="task_title">{{task.title}}</h3>
        
        <div class="task_status">
          <span v-if="task.status" class="on cursor-pointer" @click="toggle(i)"></span>
          <span v-else class="off cursor-pointer" @click="toggle(i)"></span>
        </div>
      </div>
    </div>
    <div class="heading" v-else>
      <h3>No Task available</h3>
    </div>

    <div class="heading" v-if="noTask !== 0">
      <h3>Completed Tasks</h3>
    </div>
    <div class="tasks">
      <div class="task" v-for="(task,index) in completed" :key="index">
        <h3 class="task_title">{{task.title}}</h3>
        <!-- <div class="task_status">
          <span v-if="task.status" class="on" @click="completedToggle(i)"></span>
          <span v-else class="off" @click="completedToggle(i)"></span>
        </div> -->
        <span @click="remove(index)" class="remove cursor-pointer">x</span>
      </div>
    </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Foot from "@/components/Foot.vue";
// import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Navbar,
    Foot
  },
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    if(localStorage.getItem('tasks')) {
      let localTasks = localStorage.getItem('tasks')
      this.tasks = JSON.parse(localTasks);
    } else {
      this.tasks = [];
    }
  },
  computed: {
    noTask() {
      return this.tasks.length;
    },
    completed() {
     return this.tasks.filter(task => task.status === true);
    }
  },
  methods: {
    toggle(i) {
      this.tasks[i].status = !this.tasks[i].status;
    },
    completedToggle(i) {
      this.tasks[i].status = !this.tasks[i].status;
    },
    newTask() {
      this.$router.push('/newTask')
    },
    remove(i) {
      this.tasks.splice(i, 1);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
</script>

<style lang="scss" scoped>
.remove {
  width: 30px;
  height: 30px;
  background: rgb(231, 21, 21);
  text-align: center;
  color: white;
  border-radius: 5px;
}
</style>
