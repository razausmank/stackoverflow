<template>
  <div class="card m-3">
    <div class="card-body">
      <h5 class="card-title fw-semibold">{{ question.title }}</h5>
      <p class="card-text">
        {{ question.body }}
      </p>
    <p>
        <span class="badge rounded-pill text-bg-primary me-2" v-for="tag in tags" :key="tag">{{tag}}</span>
    </p>
    </div>
  </div>
</template>


<script>
export default {
  props: ["question"],
  data() {
    return {
        tags : this.question.tags.split(" ")
    };
  },
};
</script>
