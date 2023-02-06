<template>
    <div class="card">
        <div class="card-header" @back="goBack">
            <h1>Student Form</h1>
        </div>
        <form :model="model" :rules="rules" ref="studentForm">
            @csrf
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Class</th>
                            <th>Student Section</th>
                            <th>Student Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><input name="name" v-model="model.name" placeholder="Name" type="text"/></th>
                            <th><input name="class" v-model="model.class" placeholder="Class" type="text"/></th>
                            <th><input name="section" v-model="model.section" placeholder="Section" type="text"/></th>
                            <th><input name="email" v-model="model.email" placeholder="Email" type="text"/></th>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-success" @click="saveForm('studentForm')" type="button">Save Student</button>
            </div>
        </form>
    </div>
</template>



<script>
    export default {
        name: 'student-form-component',
        data(){
            return{
                model: {
                    name: '',
                    class: '',
                    section: '',
                    email: '',
                },
                rules:{

                }
            }
        },
        methods:{
            goBack(){
                window.location.href = "/students";
            },
            saveForm(formName){
                this.$store.dispatch('saveStudent',this.model);
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


