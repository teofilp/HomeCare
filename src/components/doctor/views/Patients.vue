<template>
  <div class="container">
    <button class="btn btn-info float-right" @click="openAddDialog">Add Patient</button>
    <table class="table table-striped text-center">
      <thead>
        <th v-for="column in adminTableColumns" :key="column">{{column}}</th>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.id">
          <td>{{data.id}}</td>
          <td>{{data.name}}</td>
          <td>{{data.birthDate}}</td>
          <td>{{data.gender}}</td>
          <td>{{data.address}}</td>
          <td>
            <button
              class="btn btn-primary"
              @click="openMedicalHistoryModal(data)"
            >Show Medical Record</button>
          </td>
          <td>
            <button class="btn btn-warning mr-3" @click="openUpdateModal(data)">Edit</button>
            <button class="btn btn-danger mr-3" @click="openDeleteModal(data.id)">Delete</button>
            <button
              class="btn btn-success"
              @click="openCreateMedicationPlanModal(data.id)"
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
          id: 1,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "female",
          address: "ceva adresa",
          medicalRecord: []
        },
        {
          id: 2,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "male",
          address: "ceva adresa",
          medicalRecord: []
        },
        {
          id: 3,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "male",
          address: "ceva adresa",
          medicalRecord: []
        }
      ]
    };
  },
  methods: {
    openDeleteModal(id) {
      this.$refs.myDeleteModal.openDialog(id);
    },

    deleteCaregiver(id) {
      let index = this.tableData.findIndex(data => data.id === id);
      this.tableData.splice(index, 1);
    },

    openAddDialog() {
      this.$refs.myAddModal.openDialog();
    },

    addPatient(patient) {
      if (!Validator.isValid(this.tableData, patient, "name"))
        return alert("caregiver already exists");

      patient.id = getNextId(this.tableData);
      patient.medicalRecord = [];
      this.tableData.push(patient);
    },

    openUpdateModal(caregiver) {
      this.$refs.myEditModal.openDialog(caregiver);
    },

    updatePatient(caregiver) {
      let oldCaregiver = this.tableData.find(cg => cg.id == caregiver.id);
      Object.assign(oldCaregiver, caregiver);
    },

    openCreateMedicationPlanModal(id) {
      this.$refs.createMedicationPlanRef.openDialog(id);
    },

    addMedicalRecord(userId, medicationPlan) {
      let user = this.tableData.find(user => user.id === userId);
      medicationPlan.id = getNextId(user.medicalRecord);
      user.medicalRecord.push(medicationPlan);
    },

    openMedicalHistoryModal(patient) {
      if (patient.medicalRecord.length === 0)
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

