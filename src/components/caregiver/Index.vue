<template>
    <div class="dashboard_wrapper">
        <table class="table table-borderless"> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="patient in caregiver.Assigned_Patients" :key="patient.Id">
                        <td>
                            {{patient.Id}}
                        </td>
                        <td>
                            {{patient.Name}}
                        </td>
                        
                        <td>
                            {{patient.Birth_Date}}
                        </td>
                        <td>
                            {{patient.Gender}}
                        </td>
                        <td>
                            {{patient.Address}}
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
           caregiver: {
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
            }
        }
    }
}
</script>

<style scoped>
.dashboard_wrapper {
  position: relative;
  width: 50%;
  max-height: 75vh;
  background: rgba(71, 196, 175, 0.3);
  box-shadow: 1px 4px 3px #ccc;
  border-radius: 0.5rem;
  margin-top: 12.5vh;
  margin-left: 25%;
  overflow: auto;
  text-align: center;
}

::-webkit-scrollbar {
  width: 0.2rem;
}
::-webkit-scrollbar-track {
  background: rgba(71, 196, 175, 0.3);
}

::-webkit-scrollbar-thumb {
  background: rgba(71, 196, 175, 0.5);
}

</style>