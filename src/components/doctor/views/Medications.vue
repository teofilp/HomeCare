<template>
  <div class="container">
    <button class="btn btn-info" @click="openAddDialog">Add Medication</button>
    <table class="table table-striped">
      <thead>
        <th v-for="column in adminTableColumns" :key="column">{{column}}</th>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.Id">
          <td>{{data.Id}}</td>
          <td>{{data.Name}}</td>
          <td>
            <ul>
              <li v-for="side in data.Side_Effects" :key="side">{{side}}</li>
            </ul>
          </td>
          <td>{{data.Dosage}}</td>
          <td>
            <button class="btn btn-warning mr-3" @click="openUpdateModal(data)">Edit</button>
            <button class="btn btn-danger mr-3" @click="openDeleteModal(data.Id)">Delete</button>
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
export default {
  data() {
    return {
      adminTableColumns: ["Id", "Name", "Side Effects", "Dosage", "Operations"],
      tableData: [
        {
          Id: 1,
          Name: "Nurofen",
          Side_Effects: ["N/a"],
          Dosage: "1 pill"
        },
        {
          Id: 2,
          Name: "Nurofen",
          Side_Effects: ["N/a"],
          Dosage: "2 pills"
        },
        {
          Id: 3,
          Name: "Nurofen",
          Side_Effects: ["N/a"],
          Dosage: "5 pills"
        }
      ]
    };
  },
  methods: {
    openDeleteModal(id) {
      this.$refs.myDeleteModal.openDialog(id);
    },
    deleteMedication(id) {
      let index = this.tableData.findIndex(data => data.Id === id);
      this.tableData.splice(index, 1);
    },
    confirmDeletion(id) {
      this.$refs.myDeleteModal.closeDialog();
    },
    openAddDialog() {
      this.$refs.myAddModal.openDialog();
    },
    addMedication(medication) {
      medication.Id =
        this.tableData.length == 0
          ? 1
          : Math.max(...this.tableData.map(data => data.Id)) + 1;
      this.tableData.push(medication);
    },
    openUpdateModal(medication) {
      this.$refs.myEditModal.openDialog(medication);
    },
    updateMedication(medication) {
      let oldMedication = this.tableData.find(cg => cg.Id == medication.Id);
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