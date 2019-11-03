<template>
  <div
    class="modal fade"
    id="editMedication"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit medication</h5>
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
              class="pt-1"
              style="text-transform: uppercase;
                letter-spacing: 2px;
                background: #efefef;
                margin-bottom: 0.5rem;
                padding-left: 0.5rem;"
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
          <button type="button" class="btn btn-primary" @click="updateMedication">Update medication</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["update"],
  data() {
    return {
      id: "",
      sideEffects: [],
      sideEffect: "",
      name: "",
      dosage: ""
    };
  },
  methods: {
    openDialog(medication) {
      $("#editMedication").modal("show");
      this.id = medication.id;
      if (medication.sideEffects[0] !== "N/a")
        this.sideEffects = [...medication.sideEffects];
      this.name = medication.name;
      this.dosage = medication.dosage;
    },

    closeDialog() {
      $("#editMedication").modal("hide");
    },

    addSideEffect() {
      if (this.sideEffects.findIndex(side => side === this.sideEffect) == -1)
        this.sideEffects.push(this.sideEffect);
      this.sideEffect = "";
    },

    deleteSideEffect(sideEff) {
      let index = this.sideEffects.findIndex(side => side === sideEff);
      this.sideEffects.splice(index, 1);
      this.sideEffect = sideEff;
    },

    updateMedication() {
      if (this.sideEffects.length == 0) this.sideEffects.push("N/a");

      this.update({
        id: this.id,
        name: this.name,
        sideEffects: this.sideEffects,
        dosage: this.dosage
      });

      this.name = "";
      this.sideEffects = [];
      this.sideEffect = "";
      this.dosage = "";

      this.closeDialog();
    }
  }
};
</script>
