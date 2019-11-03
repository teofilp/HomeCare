<template>
  <nav
    class="navbar navbar-expand-lg navbar-light mb-5"
    style="background: rgba(71, 196, 175, 0.3);"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link class="nav-item active" tag="li" active-class="active" to="/doctor/patients">
          <a class="nav-link" href="#">
            Patients
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <router-link class="nav-item active" tag="li" active-class="active" to="/doctor/caregivers">
          <a class="nav-link" href="#">
            Caregivers
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <router-link
          class="nav-item active"
          tag="li"
          active-class="active"
          to="/doctor/medications"
        >
          <a class="nav-link" href="#">
            Medications
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
