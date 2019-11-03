<template>
  <div class="new_task">
        <div class="input_block">
            <input :class="{error: isErr}" type="text" placeholder="Enter new Task" @keyup.enter="addTask" v-model="inputValue"/>
            <button class="btn" @click="addTask">Add Task</button>
            <small v-if="isErr">Can't Add an empty task</small>
        </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

  export default {
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
        margin: 40px;

        .input_block {
            width: 80%;
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
