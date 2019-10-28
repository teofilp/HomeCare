<template>
  <div
    class="modal fade"
    id="addPatientToCaregiverModal"
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
          <table class="table table-borderless" v-if="patients.length > 0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patient in patients" :key="patient.Id">
                <td>{{patient.Id}}</td>
                <td>{{patient.Name}}</td>

                <td>{{patient.Birth_Date}}</td>
                <td>{{patient.Gender}}</td>
                <td>{{patient.Address}}</td>
                <td>
                  <button class="btn btn-danger" @click="deletePatientFromCaregiver(patient)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group">
            <label for="medication" class="col-form-label">Search patient:</label>
            <input
              class="form-control"
              id="medication"
              v-model="searchPatientName"
              placeholder="e.g: Gheorghe Lobont"
            />
            <div v-if="getResults(searchPatientName).length > 0">
              <hr />
              <div id="searchResults">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Birth Date</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="patient in getResults(searchPatientName)" :key="patient.Id">
                      <td>{{patient.Id}}</td>
                      <td>{{patient.Name}}</td>

                      <td>{{patient.Birth_Date}}</td>
                      <td>{{patient.Gender}}</td>
                      <td>{{patient.Address}}</td>
                      <td>
                        <button class="btn btn-success" @click="addPatientToCaregiver(patient)">Add</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h5
            v-if="getResults(searchPatientName).length == 0 && searchPatientName !== ''"
          >Patient either doesn't exist or was already assigned to caregiver</h5>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["assign", "unassign"],
  data() {
    return {
      searchPatientName: "",
      caregiver: "",
      patients: [],
      allPatients: [
        {
          Id: 1,
          Name: "Andrei",
          Birth_Date: "2000-02-15",
          Gender: "female",
          Address: "ceva adresa",
          Medical_Record: []
        },
        {
          Id: 2,
          Name: "Andrei",
          Birth_Date: "2000-02-15",
          Gender: "male",
          Address: "ceva adresa",
          Medical_Record: []
        },
        {
          Id: 3,
          Name: "Andrei",
          Birth_Date: "2000-02-15",
          Gender: "male",
          Address: "ceva adresa",
          Medical_Record: []
        }
      ]
    };
  },
  methods: {
    openDialog(caregiver) {
      this.caregiver = caregiver;
      this.patients = caregiver.Assigned_Patients;
      $("#addPatientToCaregiverModal").modal("show");
      this.searchPatientName = "";
    },
    closeDialog() {
      $("#addPatientToCaregiverModal").modal("hide");
    },
    getResults(searchPatientName) {
      if (searchPatientName == "") return [];
      return this.allPatients.filter(
        patient =>
          this.patients.findIndex(pt => pt.Id == patient.Id) == -1 &&
          patient.Name.toLowerCase().startsWith(searchPatientName.toLowerCase())
      );
    },
    addPatientToCaregiver(patient) {
      this.assign(this.caregiver, patient);
      this.searchPatientName = "";
    },
    deletePatientFromCaregiver(patient) {
      this.unassign(this.caregiver, patient);
    }
  }
};
</script>