<template>
    <div class="card">
        <div class="card-header" @back="goBack">
            <h1>Student Data</h1>
            <button class="btn btn-primary" @click="create">Add Student</button>
        </div>
           
            <div class="card-body">
                <table class="table" :data="tableData">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Class</th>
                            <th>Student Section</th>
                            <th>Student Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="table in tableData" :key="table"> 
                            <th>{{ table.name }}</th>
                            <th>{{ table.class }}</th>
                            <th>{{ table.section }}</th>
                            <th>{{ table.email }}</th>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name:'student-table-component',
    data(){
        return{
            design:{
                color : 'red'
            },
        }
    },
    methods: {
        create(){
            window.location.href = "/add-student";
        }
    },
    computed:{
        ...mapGetters({ tableData: "tableData" })
    },
    mounted(){
        this.$store.dispatch('getStudents')
    }
}
</script>

<style scoped>
  
</style>