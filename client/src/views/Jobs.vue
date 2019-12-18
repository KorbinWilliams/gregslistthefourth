<template>
  <div class="jobsmain container-fluid">
    <header class="row">
      <div class="col">
        <h1>Jobs</h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12">
        <form @submit.prevent="createJob">
          <input required type="text" v-model="newJob.jobTitle" placeholder="job title" />
          <input required type="text" v-model="newJob.requirements" placeholder="requirements" />
          <input required type="number" v-model="newJob.wage" placeholder="wage" />
          <input required type="text" v-model="newJob.jobImg" placeholder="imgUrl" />
          <input required type="text" v-model="newJob.description" placeholder="description" />
          <button class="btn btn-success" type="submit">Add Job</button>
        </form>
      </div>
      <div class="col-12">
        <div class="row jobs">
          <div class="col-4" v-for="job in jobs" :key="job.id">
            <job-component :jobData="job" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import JobComponent from "@/components/Job";
export default {
  name: "jobsmain",
  mounted() {
    this.$store.dispatch("getJobs");
  },
  data() {
    return {
      newJob: {
        jobTitle: "",
        requirements: "",
        wage: 0,
        jobImg: "",
        description: ""
      }
    };
  },
  methods: {
    createJob() {
      let job = { ...this.newJob };
      this.$store.dispatch("createJob", job);
      this.newJob = {
        jobTitle: "",
        requirements: "",
        wage: 0,
        jobImg: "",
        description: ""
      };
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  components: {
    JobComponent
  }
};
</script>
<style>
</style>

