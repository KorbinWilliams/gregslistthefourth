<template>
  <div class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: JobData.id } }">
      <img :src="JobData.jobImg" alt />
      <p>{{ JobTitleUpperCase }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["JobData"],
  computed: {
    JobMakeUpperCase() {
      return this.JobData.jobTitle.toUpperCase();
    }
  },
  methods: {}
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
