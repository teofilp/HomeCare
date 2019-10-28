<template>
  <div
    class="modal fade"
    id="addModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add medication</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="medicationName">Name</label>
            <input
              type="text"
              class="form-control"
              id="medicationName"
              placeholder="e.g: Nurofen"
              v-model="name"
            />
          </div>

          <div class="form-group">
            <label for="sideEffect">Add Side Effect</label>
            <input
              type="text"
              class="form-control"
              id="sideEffect"
              placeholder="Description"
              v-model="sideEffect"
            />
            <button class="btn btn-primary my-2 px-4" @click="addSideEffect">Add</button>

            <p
              class="pt-1 sideEffect"
              v-for="sideEf in sideEffects"
              :key="sideEf"
              @click="deleteSideEffect(sideEf)"
            >{{sideEf}}</p>
            <hr v-if="sideEffects.length > 0" />
          </div>

          <div class="form-group">
            <label for="medicationDosage">Add Dosage</label>
            <input
              type="text"
              class="form-control"
              id="medicationDosage"
              placeholder="Dosage"
              v-model="dosage"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="saveMedication">Save medication</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["add"],
  data() {
    return {
      sideEffects: [],
      sideEffect: "",
      name: "",
      dosage: ""
    };
  },
  methods: {
    openDialog() {
      $("#addModal").modal("show");
      this.name = "";
      this.sideEffects = [];
      this.sideEffect = "";
      this.dosage = "";
    },

    closeDialog() {
      $("#addModal").modal("hide");
    },

    addSideEffect() {
      this.sideEffects.push(this.sideEffect);
      this.sideEffect = "";
    },
    deleteSideEffect(sideEff) {
      let index = this.sideEffects.findIndex(side => side === sideEff);
      this.sideEffects.splice(index, 1);
      this.sideEffect = sideEff;
    },
    saveMedication() {
      if (this.sideEffects.length == 0) this.sideEffects.push("N/a");

      this.add({
        Name: this.name,
        Side_Effects: this.sideEffects,
        Dosage: this.dosage
      });
    }
  }
};
</script>

<style scoped>
.sideEffect {
  text-transform: uppercase;
  letter-spacing: 2px;
  background: #efefef;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}

.sideEffect:hover {
  cursor: pointer;
}
</style>