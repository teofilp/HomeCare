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
            <button class="btn btn-primary">Show Medical Record</button>
          </td>
          <td>
            <button class="btn btn-warning mr-3" @click="openUpdateModal(data)">Edit</button>
            <button class="btn btn-danger mr-3" @click="openDeleteModal(data.Id)">Delete</button>
            <button class="btn btn-success">Create medication plan</button>
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
  </div>
</template>

<script>
import DeleteModal from "../../assets/DeleteModal";
import AddPatientModal from "../../assets/DoctorAddModal";
import EditPatientModal from "../../assets/DoctorEditModal";
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
          Address: "ceva adresa"
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
    addPatient(caregiver) {
      caregiver.Id =
        this.tableData.length == 0
          ? 1
          : Math.max(...this.tableData.map(data => data.Id)) + 1;
      this.tableData.push(caregiver);
    },
    openUpdateModal(caregiver) {
      this.$refs.myEditModal.openDialog(caregiver);
    },
    updatePatient(caregiver) {
      let oldCaregiver = this.tableData.find(cg => cg.Id == caregiver.Id);
      Object.assign(oldCaregiver, caregiver);
    }
  },
  components: {
    DeleteModal,
    AddModal: AddPatientModal,
    EditModal: EditPatientModal
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