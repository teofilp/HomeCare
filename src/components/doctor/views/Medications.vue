<template>
  <div class="container">
    <button class="btn btn-info float-right" @click="openAddDialog">Add Medication</button>
    <table class="table table-striped text-center">
      <thead>
        <th v-for="column in adminTableColumns" :key="column">{{column}}</th>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.id">
          <td>{{data.id}}</td>
          <td>{{data.name}}</td>
          <td>
            <ul>
              <li v-for="side in data.sideEffects" :key="side">{{side}}</li>
            </ul>
          </td>
          <td>{{data.dosage}}</td>
          <td>
            <button class="btn btn-warning mr-3" @click="openUpdateModal(data)">Edit</button>
            <button class="btn btn-danger mr-3" @click="openDeleteModal(data.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <delete-modal
      ref="myDeleteModal"
      header="Are you sure you want to delete this medication?"
      confirmMessage="Yes, delete it"
      dismissMessage="No, close"
      :delete="deleteMedication"
    ></delete-modal>
    <add-modal ref="myAddModal" :add="addMedication"></add-modal>
    <edit-modal ref="myEditModal" :update="updateMedication"></edit-modal>
  </div>
</template>

<script>
import DeleteModal from "../components/DeleteModal";
import AddMedicationModal from "../components/DoctorAddMedicationModal";
import EditMedicationModal from "../components/DoctorEditMedicationModal";
import Validator from "../../../../util/Validator";
import getNextId from "../../../../util/getNextId";
export default {
  data() {
    return {
      adminTableColumns: ["Id", "Name", "Side Effects", "Dosage", "Operations"],
      tableData: [
        {
          id: 1,
          name: "Nurofen",
          sideEffects: ["N/a"],
          dosage: "1 pill"
        },
        {
          id: 2,
          name: "Nurofen",
          sideEffects: ["N/a"],
          dosage: "2 pills"
        },
        {
          id: 3,
          name: "Nurofen",
          sideEffects: ["N/a"],
          dosage: "5 pills"
        }
      ]
    };
  },
  methods: {
    openDeleteModal(id) {
      this.$refs.myDeleteModal.openDialog(id);
    },

    deleteMedication(id) {
      let index = this.tableData.findIndex(data => data.id === id);
      this.tableData.splice(index, 1);
    },

    confirmDeletion(id) {
      this.$refs.myDeleteModal.closeDialog();
    },

    openAddDialog() {
      this.$refs.myAddModal.openDialog();
    },

    addMedication(medication) {
      if (!Validator.isValid(this.tableData, medication, "name"))
        return alert("medication already exists");

      medication.id = getNextId(this.tableData);
      this.tableData.push(medication);
    },

    openUpdateModal(medication) {
      this.$refs.myEditModal.openDialog(medication);
    },

    updateMedication(medication) {
      let oldMedication = this.tableData.find(cg => cg.id == medication.id);
      Object.assign(oldMedication, medication);
    }
  },
  components: {
    DeleteModal,
    AddModal: AddMedicationModal,
    EditModal: EditMedicationModal
  }
};
</script>
