<template>
  <div>
    <h1>Employee List</h1>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        {{ employee.firstname }} {{ employee.lastname }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getEmployees } from '@/services/employeeService';

const employees = ref([]);

onMounted(async () => {
  try {
    const response = await getEmployees();
    employees.value = response;
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
});
</script>


<style scoped>

</style>