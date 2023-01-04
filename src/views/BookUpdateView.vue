<template>
  <!-- Skriv ut boken med valt id med get anrop
Gör ett formulär med boken inlagd
vid skicka så gör ett put anrop -->
  <div class="container-md my-5 text-muted">
    <h2 class="text-center">Uppdatera bok från bokhyllan</h2>

    <p class="text-center">
      Du uppdaterar boken med titel: {{ OneBook.title }}
    </p>

    <form @submit.prevent="updateBook(id)">
      <div class="form-group">
        <fieldset>
          <div class="mb-1">
            <legend>Uppdatera {{ OneBook.title }}:</legend>

            <label for="title" class="form-label">Titel: </label>
            <input v-model="OneBook.title" type="text" class="form-control" />
          </div>
          <br />
          <div class="mb-1">
            <label for="author" class="form-label">Författare: </label>
            <input v-model="OneBook.author" type="text" class="form-control" />
          </div>
          <br />
          <div class="mb-1">
            <label for="published" class="form-label">Publicerad </label>
            <input
              v-model="OneBook.published"
              type="text"
              class="form-control"
            />
          </div>
          <br />
          <div class="mb-1">
            <input
              v-model="OneBook.status"
              type="checkbox"
              class="form-check-input"
              id="status"
              name="status"
              value="status"
            />
            <label class="form-check-label" for="status"
              >Jag har läst färdigt boken</label
            >
          </div>
          <br />
          <input type="submit" value="Uppdatera" class="btn btn-primary" />
        </fieldset>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //Save the id from he link
      id: this.$route.params.id,
      OneBook: [],
    };
  },
  methods: {
    //GET the specific book
    async getOneBook(id) {
      const resp = await fetch(
        "https://mysterious-woodland-81234.herokuapp.com/api/Book/" + id
      );
      const data = await resp.json();
      this.OneBook = data;
    },
    async updateBook(id) {
      //Save the input from form in object
      let bookBody = {
        title: this.OneBook.title,
        author: this.OneBook.author,
        published: this.OneBook.published,
        status: this.OneBook.status,
      };
      console.log(bookBody.title + id);
      //PUT the bookBody into API
      const resp = await fetch(
        "https://mysterious-woodland-81234.herokuapp.com/api/Book/" + id,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          //convert bookBody to json and add to body
          body: JSON.stringify(bookBody),
        }
      );
      const data = await resp.json();
    },
  },
  //when compontent is fully loaded then run the function to get book with specific id
  mounted() {
    this.getOneBook(this.$route.params.id);
  },
};
</script>

