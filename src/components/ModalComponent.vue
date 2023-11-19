<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ heading }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('closeModal')"
          ></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <slot name="footer" :custom-click="handleCloseModalButtonClick">
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="$emit('closeModal')"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading"],

  emits: ["closeModal"],

  methods: {
    handleCloseModalButtonClick() {
      this.$emit('closeModal');
    },
  },
};
</script>
