<template>
  <div
    class="modal fade"
    id="updateModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit {{purpose}}</h5>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" id="name" v-model="name" />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Birth Date:</label>
              <input type="date" class="form-control" id="birthDate" v-model="birth_date" />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Gender:</label>
              <select class="form-control" name id="gender" v-model="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Address:</label>
              <input type="text" class="form-control" id="address" v-model="address" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="saveUpdates">Update {{purpose}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["purpose", "update"],
  data() {
    return {
      id: "",
      name: "",
      address: "",
      birth_date: null,
      gender: null
    };
  },
  methods: {
    openDialog(caregiver) {
      $("#updateModal").modal("show");
      this.id = caregiver.id;
      this.name = caregiver.name;
      this.address = caregiver.address;
      this.birth_date = caregiver.birthDate;
      this.gender = caregiver.gender;
    },

    saveUpdates() {
      this.update({
        id: this.id,
        name: this.name,
        address: this.address,
        birthDate: this.birth_date,
        gender: this.gender
      });

      this.name = "";
      this.address = "";
      this.birth_date = null;
      this.gender = null;

      $("#updateModal").modal("hide");
    }
  }
};
</script>