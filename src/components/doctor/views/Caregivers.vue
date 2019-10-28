<template>
  <div class="container">
    <button class="btn btn-info" @click="openAddDialog">Add Caregiver</button>
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
              @click="openAssignedPatients(data.Assigned_Patients)"
            >Show Patients</button>
          </td>
          <td>
            <button class="btn btn-warning mr-3" @click="openUpdateModal(data)">Edit</button>
            <button class="btn btn-danger mr-3" @click="openDeleteModal(data.Id)">Delete</button>
            <button class="btn btn-success" @click="openAddPatientModal(data)">Add Patient</button>
          </td>
        </tr>
      </tbody>
    </table>

    <delete-modal
      ref="myDeleteModal"
      header="Are you sure you want to delete this caregiver?"
      confirmMessage="Yes, delete it"
      dismissMessage="No, close"
      :delete="deleteCaregiver"
    ></delete-modal>
    <add-modal ref="myAddModal" purpose="caregiver" :add="addCaregiver"></add-modal>
    <edit-modal ref="myEditModal" purpose="caregiver" :update="updateCaregiver"></edit-modal>
    <assigned-patients ref="assignedPatients"></assigned-patients>
    <assign-patient
      ref="assignPatient"
      :assign="addPatientToCaregiver"
      :unassign="deletePatientFromCaregiver"
    ></assign-patient>
  </div>
</template>

<script>
import DeleteModal from "../components/DeleteModal";
import AddCaregiverModal from "../components/DoctorAddModal";
import EditCaregiverModal from "../components/DoctorEditModal";
import CaregiversAssignedPatientsModal from "../components/CaregiversAssignedPatients";
import CaregiverAssignPatientModal from "../components/CaregiverAssignPatient";
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
        "Patients",
        "Operations"
      ],
      tableData: [
        {
          Id: 1,
          Name: "Andrei",
          Birth_Date: "2000-02-15",
          Gender: "female",
          Address: "ceva adresa",
          Assigned_Patients: [
            {
              Id: 2,
              Name: "Andrei",
              Birth_Date: "2000-02-15",
              Gender: "male",
              Address: "ceva adresa"
            },
            {
              Id: 3,
              Name: "Andrei",
              Birth_Date: "2000-02-15",
              Gender: "male",
              Address: "ceva adresa"
            }
          ]
        },
        {
          Id: 2,
          Name: "Andrei",
          Birth_Date: "2000-02-15",
          Gender: "male",
          Address: "ceva adresa"
        },
        {
          Id: 3,
          Name: "Andrei",
          Birth_Date: "2000-02-15",
          Gender: "male",
          Address: "ceva adresa"
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
    addCaregiver(caregiver) {
      if (!Validator.isValid(this.tableData, caregiver, "Name"))
        return alert("caregiver already exists");
      caregiver.Id = getNextId(this.tableData);
      this.tableData.push(caregiver);
      this.$refs.myAddModal.closeDialog();
    },
    openUpdateModal(caregiver) {
      this.$refs.myEditModal.openDialog(caregiver);
    },
    updateCaregiver(caregiver) {
      let oldCaregiver = this.tableData.find(cg => cg.Id == caregiver.Id);
      Object.assign(oldCaregiver, caregiver);
    },
    openAssignedPatients(patients) {
      this.$refs.assignedPatients.openDialog(patients);
    },
    openAddPatientModal(caregiver) {
      this.$refs.assignPatient.openDialog(caregiver);
    },
    addPatientToCaregiver(caregiver, patient) {
      caregiver.Assigned_Patients.push(patient);
    },
    deletePatientFromCaregiver(caregiver, patient) {
      let patientIndex = caregiver.Assigned_Patients.findIndex(
        pt => pt.Id == patient.Id
      );
      caregiver.Assigned_Patients.splice(patientIndex, 1);
    }
  },
  components: {
    DeleteModal,
    AddModal: AddCaregiverModal,
    EditModal: EditCaregiverModal,
    AssignedPatients: CaregiversAssignedPatientsModal,
    AssignPatient: CaregiverAssignPatientModal
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