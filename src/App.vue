<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <header-component />
  <div class="row mb-3 ">
    <div class="col-md-3 themed-grid-col">.col-md-3</div>
    <div class="col-md-6 themed-grid-col container">
      <create-question @new-question="addQuestion"></create-question>
      <question-component
        v-for="question in questions"
        :key="question.title"
        :question="question"
      ></question-component>
    </div>
    <div class="col-md-3 themed-grid-col">.col-md-3 
      <modal-component></modal-component>
    </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
  </div>
  <!-- <div class="container text-center"></div> -->
</template>
<script>
import CreateQuestion from "./components/CreateQuestion.vue";
import QuestionComponent from "./components/QuestionComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import ModalComponent from "./components/ModalComponent.vue"
export default {
  name: "App",
  components: {
    CreateQuestion,
    QuestionComponent,
    HeaderComponent,
    ModalComponent
  },
  data() {
    return {
      questions: [
        {
          title: "How to get lorem ipsum to instantiate on multiple lines instead of 1 in VS Code?",
          body: "In VS Code if I type lorem and then press enter it will generate a paragraph of lorem ipsum. The only problem is that the paragraph comes out as one very long line of text as opposed to several lines in the text editor. Is there a setting I can change so that it automatically generates my lorem ipsum on multiple lines?",
          tags: "html visual-studio-code lorem-ipsum",
        },
      ],
    };
  },
  methods: {
    addQuestion: function (title, body, tags) {
      this.questions.push({
        title,
        body,
        tags,
      });
      console.log(this.questions);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>