<template>
    <div class="dashboard_wrapper">
         <table class="table table-borderless mt-3"> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
            <hr>

            <div class="container">
                <div v-for="medicalRecord in patient.Medical_Record" :key="medicalRecord.Id">
                    <div class="row">
                        <h5 class="col-12">Period of Treatment: {{medicalRecord.Treatment_Period}}</h5>
                        <div class="row p-3 mb-2 col-12" v-for="medication in medicalRecord.Plan_Medications" :key="medication.Id">
                            <div class="col-5 offset-sm-1">
                                <label for="">Medication</label>
                                <input type="text" class="form-control" name="" id="" disabled :value="medication.Name">
                            </div>
                            <div class="col-5 ml-2">
                                <label for="">Intake Intervals</label>
                                <input type="text" class="form-control" name="" id="" disabled :value="medication.Intake_Intervals + ' times / day'">
                            </div>
                            <div class="col-12 mt-3" v-if="getSideEffects(medication.Side_Effects).length > 0">
                                <label for="">Medication Side Effects</label>
                                <div class="row">
                                    <p class="col-6" v-for="sideEffect in getSideEffects(medication.Side_Effects)" :key="sideEffect">
                                        {{sideEffect}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <hr>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            patient: {
                Id: 3,
                Name: "Andrei",
                Birth_Date: "2000-02-15",
                Gender: "male",
                Address: "ceva adresa",
                Medical_Record: [
                    {
                        Id: 1,
                        Treatment_Period: '3 months',
                        Plan_Medications: [
                            {
                                Id: 2,
                                Name: "Nurofen",
                                Side_Effects: ["N/a"],
                                Dosage: "2 pills",
                                Intake_Intervals: 2
                            },
                            {
                                Id: 3,
                                Name: "Nurofen",
                                Side_Effects: ["N/a"],
                                Dosage: "5 pills",
                                Intake_Intervals: 2
                            }
                        ]
                    },
                    {
                        Id: 2,
                        Treatment_Period: '5 months',
                        Plan_Medications: [
                            {
                                Id: 2,
                                Name: "Nurofen",
                                Side_Effects: ["N/a"],
                                Dosage: "2 pills",
                                Intake_Intervals: 2
                            },
                            {
                                Id: 3,
                                Name: "Nurofen",
                                Side_Effects: ["N/a"],
                                Dosage: "5 pills",
                                Intake_Intervals: 2
                            }
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        getSideEffects(sideEffs) {
            if(sideEffs.length == 1 && sideEffs[0] == 'N/a')
                return [];
            return sideEffs; 
        }
    }
}
</script>

<style scoped>
.dashboard_wrapper {
  position: relative;
  width: 50%;
  height: 75vh;
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