<template>
<div class="container-md my-5 text-muted">
    <h2 class="text-center">Böcker som jag har läst 2022</h2>
   
    </div>
    <!--Loop for every book i database and also ad key with id -->
    <Book @deleteBook="deleteBook(book.id)" v-for="book in books" :book="book" :key="book.id"/>


    <AddBook @bookAdded="getBooks()" />
</template>

<script>
import Book from "../components/Onebook.vue"
import AddBook from "../components/AddBook.vue";

export default {
//reactive data
    data() {
        return {
            books: []
        }
    },
    components: {
        Book,
        AddBook
    },
    methods: {
        async getBooks() {
            //save the response from API 
            const resp = await fetch("https://mysterious-woodland-81234.herokuapp.com/api/Book");
           //save the data from API and convert to json
           const data = await resp.json();
           //add data to books
           this.books =data;

        },

 async deleteBook(id) {;
 //send id with fetch and save response from API
            const resp = await fetch("https://mysterious-woodland-81234.herokuapp.com/api/Book/" + id, {
               //what method we want to use
               method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                }

            });
            //Save the respone in json
            const data = await resp.json();
            //reload the books
            this.getBooks();
        }

  }, 
    //when compontent is fully loaded then run the function to get all books
    mounted() {
        this.getBooks();
    }
}
</script>

<style scoped>

</style>