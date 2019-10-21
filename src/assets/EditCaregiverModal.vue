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
          <h5 class="modal-title" id="exampleModalLabel">New caregiver</h5>
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
          <button type="button" class="btn btn-primary" @click="saveUpdates">Update Caregiver</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["updateCaregiver"],
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
      this.id = caregiver.Id;
      this.name = caregiver.Name;
      this.address = caregiver.Address;
      this.birth_date = caregiver.Birth_Date;
      this.gender = caregiver.Gender;
    },
    saveUpdates() {
      this.updateCaregiver({
        Id: this.id,
        Name: this.name,
        Address: this.address,
        Birth_Date: this.birth_date,
        Gender: this.gender
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