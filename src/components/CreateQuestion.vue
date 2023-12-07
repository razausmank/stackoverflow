<template>
  <div class="card m-3">
    <div class="card-header">New Question</div>
    <div class="card-body">
      <div class="my-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
          v-model="title"
        />
      </div>

      <div class="my-3">
        <label for="body" class="form-label">Body</label>
        <textarea
          type="text"
          class="form-control"
          id="body"
          placeholder="Body"
          v-model="body"
          rows="4"
        ></textarea>
      </div>

      <div class="my-3">
        <label for="tags" class="form-label">Tags</label>
        <input
          type="text"
          class="form-control"
          id="tags"
          placeholder="Tags"
          v-model="tags"
        />
      </div>

      <div class="mt-3">
        <button
          type="submit"
          @click="createQuestion"
          class="btn btn-primary float-end"
        >
          Create Question
        </button>
      </div>
    </div>
  </div>
  <modal-component v-if="showModal" @closeModal="toggleModal" heading="Error">
    <p class="text-danger">
       {{ errorMessage }}
    </p>
    <template v-slot:footer="{ customClick }">
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
          @click="customClick"
        >
          ok
        </button>
      </div>
    </template>
  </modal-component>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      body: "",
      tags: "",
      showModal: false,
      errorMessage: ' The values in the form are invalid. Please enter correct Values'
    };
  },

  emits: ["new-question"],

  methods: {
    createQuestion: function () {
      console.log(this.isValid);
      if (this.isValid) {
        axios
          .post("http://localhost:8000/api/questions", {
            title: this.title,
            body: this.body,
            tags: this.tags,
          })
          .then((response) => {
            this.$emit("new-question");
            this.title = "";
            this.body = "";
            this.tags = "";
            console.log(response); 
          })
          .catch(() => { 
            this.toggleModal('Something went wrong'); 
          });
      } else {
        // this.showModal = true;
        this.toggleModal('The values in the form are invalid Please enter correct Values')
      }
    },

    toggleModal: function (error) {
      this.showModal = !this.showModal;
      this.errorMessage = error; 
    },

    isEmptyOrSpaces: function (str) {
      return str === null || str.match(/^ *$/) !== null;
    },
  },

  computed: {
    isValid() {
      if (
        this.isEmptyOrSpaces(this.title) ||
        this.isEmptyOrSpaces(this.body) ||
        this.isEmptyOrSpaces(this.tags)
      ) {
        return false;
      }

      return true;
    },
  },
};
</script>
