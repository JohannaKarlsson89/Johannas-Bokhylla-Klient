<template>
<!--Eventlisten that starts the addbook -- prevent= submitting does not reload the page -->

 <form @submit.prevent="addBook()">
   <div class="form-group">
    <fieldset>
      <div class="mb-1">
    <legend>Lägg till en bok i bokhyllan:</legend>
    
    <label for="title" class="form-label">Titel: </label>
    <input v-model="title" type="text"  class="form-control">
    </div>
    <br>
    <div class="mb-1">
    <label for="author" class="form-label">Författare: </label>
    <input v-model="author"  type="text"  class="form-control">
    </div>
    <br>
    <div class="mb-1">
      <label for="published" class="form-label">Publicerad </label>
    <input v-model="published"  type="text"  class="form-control">
    </div>
    <br>
    <div class="mb-1">
    <input v-model="status" type="checkbox" class="form-check-input" id="status" name="status" value="status"/>
    <label  class="form-check-label" for="status">Jag har läst färdigt boken</label>
    </div>
    <br>
    <input type="submit" value="Lägg till" class="btn btn-primary">
    </fieldset>
    </div>
  </form>


  
</template>


<script>
//data object where the input from v-model in form
export default {
  data() {
    return {
      title: "",
      author:"",
      published:"",
      status:false
    }
  },
  //declare the emits
  emits: ["bookAdded"],
  methods: {
     async addBook() {
         //controlls the inputs
          if (this.title.length && this.author.length > 5) {
              //saves the inputs in varible as javascript object
              let bookBody = {
                  title: this.title,
                  author: this.author,
                  published: this.published,
                  status: this.status
              };
              const resp = await fetch("https://mysterious-woodland-81234.herokuapp.com/api/Book", {
                    method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                //convert bookBody to json and add to body
                body: JSON.stringify(bookBody)
              });
              const data = await resp.json();
//empty inputs
              this.title = "";
              this.author = "";
              this.published = "";
//emit to reload the getBook function 
              this.$emit("bookAdded");
          }
          
      }
  }
};
</script>

<style scoped>
.form-group {
  width: 90%;
  background-color: rgb(233, 233, 233);
  margin: 0 auto;
  padding: 2% 7%;
}

@media (min-width: 992px) { 
  .form-group {
  width: 50%;
  }
}

</style>