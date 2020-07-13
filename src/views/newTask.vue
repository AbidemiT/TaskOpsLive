<template>
  <div class="">
    <Navbar></Navbar>
        <div class="flex justify-center items-center mt-10">
            <input :class="{error: isErr}" class="rounded py-2 px-3 border border-gray-700 hover:border-yellow focus:border-yellow" type="text" placeholder="Enter new Task" @keyup.enter="addTask" v-model="inputValue"/>
            <button class="btn py-2 px-3 bg-yellow text-white ml-1 rounded" @click="addTask">Add Task</button>
        </div>
        <div class="flex justify-center items-center">
          <small v-if="isErr">Can't Add an empty task</small>
        </div>
        <Foot></Foot>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Foot from "@/components/Foot.vue";
// import { mapMutations } from 'vuex'

  export default {
    components: {
      Navbar,
    Sidebar,
    Foot
    },
      data() {
          return {
              inputValue: '',
              isErr: false,
              tasks: JSON.parse(localStorage.getItem('tasks')) || []
          }
      },
    methods: {
        addTask() {
            if(this.inputValue === ''){
              this.isErr = !this.isErr;
              setTimeout(() => {
                this.isErr = !this.isErr;
              }, 5000);
            } else {
              this.tasks.push({title: this.inputValue, status: false});
              this.saveTask();
              this.$router.push('/tasks');
            }
        },

        saveTask() {
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
  }
</script>

<style lang="scss" scoped>
    small {
      color: red;
      text-align: center;
    }
    .new_task {
      width: 100%;
      display: grid;
      justify-content: center;
      align-items: center;

        .input_block {
            width: 100%;
            margin: 0 auto;

            input {
                min-width: 250px;
                margin: 10px auto;
                padding: 15px;
                border: none;
                outline: none;
                border-radius: 5px;
            }
            .error {
              border: 1px solid red;
            }

            .btn {
                font-family: DINPro-Bold;
                background: #FF9C00;
                text-transform: uppercase;
                cursor: pointer;
                padding: 10px;
                border: none;
                min-width: 250px;
                margin: 0 auto;
                outline: none;

                &:hover {
                    background: darken(#FF9C00, 5%);
                    color: #fff;
                    outline: none;
                    transition: all 2s ease-in;
                }
            }
        }
    }
</style>
