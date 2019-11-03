<template>
  <div class="container">
    <button class="btn btn-info float-right" @click="openAddDialog">Add Caregiver</button>
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
              @click="openAssignedPatients(data.patients)"
            >Show Patients</button>
          </td>
          <td>
            <button class="btn btn-warning mr-3" @click="openUpdateModal(data)">Edit</button>
            <button class="btn btn-danger" @click="openDeleteModal(data.id)">Delete</button>
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
  </div>
</template>

<script>
import DeleteModal from "../components/DeleteModal";
import AddCaregiverModal from "../components/DoctorAddModal";
import EditCaregiverModal from "../components/DoctorEditModal";
import CaregiversAssignedPatientsModal from "../components/CaregiversAssignedPatients";
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
          id: 1,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "female",
          address: "ceva adresa",
          patients: [
            {
              id: 2,
              name: "Andrei",
              birthDate: "2000-02-15",
              gender: "male",
              address: "ceva adresa"
            },
            {
              id: 3,
              name: "Andrei",
              birthDate: "2000-02-15",
              gender: "male",
              address: "ceva adresa"
            }
          ]
        },
        {
          id: 2,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "male",
          address: "ceva adresa"
        },
        {
          id: 3,
          name: "Andrei",
          birthDate: "2000-02-15",
          gender: "male",
          address: "ceva adresa"
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

    addCaregiver(caregiver) {
      if (!Validator.isValid(this.tableData, caregiver, "name"))
        return alert("caregiver already exists");

      caregiver.id = getNextId(this.tableData);
      this.tableData.push(caregiver);
    },

    openUpdateModal(caregiver) {
      this.$refs.myEditModal.openDialog(caregiver);
    },

    updateCaregiver(caregiver) {
      let oldCaregiver = this.tableData.find(cg => cg.id == caregiver.id);
      Object.assign(oldCaregiver, caregiver);
    },

    openAssignedPatients(patients) {
      this.$refs.assignedPatients.openDialog(patients);
    }
  },
  components: {
    DeleteModal,
    AddModal: AddCaregiverModal,
    EditModal: EditCaregiverModal,
    AssignedPatients: CaregiversAssignedPatientsModal
  }
};
</script>