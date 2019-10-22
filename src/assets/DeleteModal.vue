<template>
  <div id="myModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{header}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">{{dismissMessage}}</button>
          <button
            type="button"
            class="btn btn-danger"
            @click="confirmDeletion"
          >{{confirmMessage}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "header",
    "confirmMessage",
    "dismissMessage",
    "delete"
  ],
  data() {
    return {
      id: ""
    };
  },
  methods: {
    openDialog(id) {
      this.id = id;
      $("#myModal").modal("show");
    },
    closeDialog() {
      $("#myModal").modal("hide");
      this.delete(this.id);
    },
    confirmDeletion() {
      $('#myModal').modal('hide');
    }
  }
};
</script>

<style scoped>
</style>