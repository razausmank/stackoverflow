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
      questions: [
        {
          title: "How to get lorem ipsum to instantiate on multiple lines instead of 1 in VS Code?",
          body: "In VS Code if I type lorem and then press enter it will generate a paragraph of lorem ipsum. The only problem is that the paragraph comes out as one very long line of text as opposed to several lines in the text editor. Is there a setting I can change so that it automatically generates my lorem ipsum on multiple lines?",
          tags: "html visual-studio-code lorem-ipsum",
        },
      ],
    };
  },
  mounted() {
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
