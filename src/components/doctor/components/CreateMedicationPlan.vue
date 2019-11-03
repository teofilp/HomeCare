<template>
  <div
    class="modal fade"
    id="createMedicationPlan"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Medication Plan</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="treatmentPeriod" class="col-form-label">Treatment Period:</label>
            <input
              type="text"
              class="form-control"
              id="treatmentPeriod"
              v-model="treatmentPeriod"
              placeholder="e.g: 3 months"
            />
          </div>
          <div class="form-group">
            <label for="medication" class="col-form-label">Search medication:</label>
            <input
              class="form-control"
              id="medication"
              v-model="searchMedication"
              placeholder="e.g: Nurofen"
            />
            <hr v-if="getResults(searchMedication).length > 0" />
            <div id="searchResults">
              <div
                class="row mb-3 px-3"
                v-for="result in getResults(searchMedication)"
                :key="result.id"
              >
                <input type="text" class="form-control col-4" disabled :value="result.name" />
                <input
                  type="number"
                  class="form-control col-4 offset-sm-1"
                  placeholder="times / day"
                  v-model="result.intakeIntervals"
                />
                <button
                  class="btn btn-primary col-2 offset-sm-1"
                  @click="addMedicationToPlan(result)"
                >Add</button>
              </div>
            </div>
            <h5
              v-if="getResults(searchMedication).length == 0 && searchMedication !== ''"
            >No result for the given name</h5>
            <div id="planMedications" class="mt-2">
              <div class="row mb-2 px-3" v-for="med in planMedications" :key="med.id">
                <input type="text" class="form-control col-4" :value="med.Name" disabled />
                <input
                  type="text"
                  class="form-control col-4 offset-sm-1"
                  :value="med.intakeIntervals + ' times / day'"
                  disabled
                />
                <button
                  class="btn btn-danger col-2 offset-sm-1"
                  @click="deleteMedicationFromPlan(med)"
                >Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="saveMedicationPlanToUser"
          >Save medication Plan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addMedicationPlan"],
  data() {
    return {
      searchMedication: "",
      id: "",
      treatmentPeriod: "",
      planMedications: [],
      availableMedication: [
        {
          id: 1,
          name: "Nurofen",
          sideEffects: ["N/a"],
          dosage: "1 pill"
        },
        {
          Id: 2,
          name: "Paracetamol",
          sideEffects: ["N/a"],
          dosage: "2 pills"
        },
        {
          id: 3,
          name: "Xanax",
          sideEffects: ["N/a"],
          dosage: "5 pills"
        },
        {
          id: 4,
          name: "Med 1",
          sideEffects: ["N/a"],
          dosage: "1 pill"
        },
        {
          id: 5,
          name: "Med 2",
          sideEffects: ["N/a"],
          dosage: "2 pills"
        },
        {
          id: 6,
          name: "Med 3",
          sideEffects: ["N/a"],
          dosage: "5 pills"
        }
      ]
    };
  },
  methods: {
    openDialog(id) {
      this.id = id;
      $("#createMedicationPlan").modal("show");
      this.treatmentPeriod = "";
      this.planMedications = [];
      this.searchMedication = "";
    },

    closeDialog() {
      $("#createMedicationPlan").modal("hide");
    },

    getResults(searchKey) {
      if (searchKey == "") return [];
      return this.availableMedication.filter(
        med =>
          this.planMedications.findIndex(md => md.id == med.id) == -1 &&
          med.name.toLowerCase().startsWith(searchKey)
      );
    },

    addMedicationToPlan(med) {
      this.planMedications.push(med);
      this.searchMedication = "";
    },

    deleteMedicationFromPlan(med) {
      let index = this.planMedications.findIndex(md => md.id === med.id);
      delete this.planMedications[index].intakeIntervals;
      this.planMedications.splice(index, 1);
    },

    saveMedicationPlanToUser() {
      this.addMedicationPlan(this.id, {
        treatmentPeriod: this.treatmentPeriod,
        planMedications: this.planMedications
      });

      this.closeDialog();
    }
  }
};
</script>