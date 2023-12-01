<template>
  <div class="row mb-3">
    <div class="col-md-3 themed-grid-col">.col-md-3</div>
    <div class="col-md-6 themed-grid-col container">
      <create-question @new-question="addQuestion"></create-question>
      <question-component
        v-for="question in questions"
        :key="question.title"
        :question="question"
      ></question-component>
    </div>
    <div class="col-md-3 themed-grid-col">.col-md-3</div>
  </div>
</template>

<script>
import CreateQuestion from "./CreateQuestion.vue";
import QuestionComponent from "./QuestionComponent.vue";
import axios from "axios";

export default {
  components: {
    CreateQuestion,
    QuestionComponent,
  },
  data() {
    return {
      questions: null,
    };
  },
  mounted() {
    this.loadQuestions(); 
  },
  methods: {
    loadQuestions: function () {
      axios
        .get("http://localhost:8000/api/questions")
        .then((response) => {
          this.questions = response.data;
          console.log(response);
          console.log(response.json());
        })
        .catch((response) => {
          console.log(response);
        });
    },
    addQuestion: function () {
      this.loadQuestions() ;
    },
  },
};
</script>
