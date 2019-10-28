<template>
  <div class="container">
    <button class="btn btn-info" @click="openAddDialog">Add Patient</button>
    <table class="table table-striped">
      <thead>
        <th v-for="column in adminTableColumns" :key="column">{{column}}</th>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.Id">
          <td>{{data.Id}}</td>
          <td>{{data.Name}}</td>
          <td>{{data.Birth_Date}}</td>
          <td>{{data.Gender}}</td>
          <td>{{data.Address}}</td>
          <td>
            <button
              class="btn btn-primary"
              @click="openMedicalHistoryModal(data)"
            >Show Medical Record</button>
          </td>
          <td>
            <button class="btn btn-warning mr-3" @click="openUpdateModal(data)">Edit</button>
            <button class="btn btn-danger mr-3" @click="openDeleteModal(data.Id)">Delete</button>
            <button
              class="btn btn-success"
              @click="openCreateMedicationPlanModal(data.Id)"
            >Create medication plan</button>
          </td>
        </tr>
      </tbody>
    </table>

    <delete-modal
      ref="myDeleteModal"
      header="Are you sure you want to delete this patient?"
      confirmMessage="Yes, delete it"
      dismissMessage="No, close"
      :delete="deleteCaregiver"
    ></delete-modal>
    <add-modal ref="myAddModal" purpose="patient" :add="addPatient"></add-modal>
    <edit-modal ref="myEditModal" purpose="patient" :update="updatePatient"></edit-modal>
    <create-medication-plan ref="createMedicationPlanRef" :addMedicationPlan="addMedicalRecord"></create-medication-plan>
    <medical-history ref="medicalHistory"></medical-history>
  </div>
</template>

<script>
import DeleteModal from "../components/DeleteModal";
import AddPatientModal from "../components/DoctorAddModal";
import EditPatientModal from "../components/DoctorEditModal";
import CreateMedicationPlan from "../components/CreateMedicationPlan";
import PatientMedicalHistoryModal from "../components/PatientMedicalHistoryModal";
import Validator from "../../../../util/Validator";
import getNextId from "../../../../util/getNextId";
export default {
  data() {
    return {
      adminTableColumns: [
        "Id",
        "Name",
        "Birth-Date",
        "Gender",
        "Address",
        "Medical record",
        "Operations"
      ],
      tableData: [
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
    openDeleteModal(id) {
      this.$refs.myDeleteModal.openDialog(id);
    },
    deleteCaregiver(id) {
      let index = this.tableData.findIndex(data => data.Id === id);
      this.tableData.splice(index, 1);
    },
    openAddDialog() {
      this.$refs.myAddModal.openDialog();
    },
    addPatient(patient) {
      if (!Validator.isValid(this.tableData, patient, "Name"))
        return alert("caregiver already exists");

      patient.Id = getNextId(this.tableData);
      this.tableData.push(patient);

      this.$refs.myAddModal.closeDialog();
    },
    openUpdateModal(caregiver) {
      this.$refs.myEditModal.openDialog(caregiver);
    },
    updatePatient(caregiver) {
      let oldCaregiver = this.tableData.find(cg => cg.Id == caregiver.Id);
      Object.assign(oldCaregiver, caregiver);
    },
    openCreateMedicationPlanModal(id) {
      this.$refs.createMedicationPlanRef.openDialog(id);
    },
    addMedicalRecord(userId, medicationPlan) {
      let user = this.tableData.find(user => user.Id === userId);
      medicationPlan.Id = getNextId(user.Medical_Record);
      user.Medical_Record.push(medicationPlan);
    },
    openMedicalHistoryModal(patient) {
      if (patient.Medical_Record.length === 0)
        return alert("Patient has no Medical History");
      this.$refs.medicalHistory.openDialog(patient);
    }
  },
  components: {
    DeleteModal,
    AddModal: AddPatientModal,
    EditModal: EditPatientModal,
    CreateMedicationPlan,
    MedicalHistory: PatientMedicalHistoryModal
  }
};
</script>

<style scoped>
table {
  text-align: center;
}
tbody tr:nth-of-type(odd) {
  background: rgba(71, 196, 175, 0.7);
  color: white;
}

tbody tr:nth-of-type(even) {
  background: rgba(71, 196, 175, 0.2);
  color: white;
}

.btn-info {
  float: right;
}

.btn-info:after {
  content: "";
  clear: both;
}
</style>