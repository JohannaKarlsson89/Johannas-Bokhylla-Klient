<template>

<div class="container-md my-4">

   <article class="rounded">
        <p><strong>Titel: </strong> {{ book.title }} </p>
        <p><strong>Författare:  </strong>  {{book.author}}</p>
        <p><strong>Publicerad:  </strong>  {{book.published}}</p>
        <p v-if=" book.status == 0" ><strong> Status:  </strong>  Ej läst</p>
        <p v-if=" book.status == 1" ><strong> Status:   </strong> Läst</p>
        <!--Eventlistener that starts an emit to parent component--> 
        <button type="button" class="btn btn-danger"  @click="$emit('deleteBook')">Ta bort</button>
        <br>
        <!-- Send the id of the book with the link so that I can use the id to fetch a specific book -->
        <router-link :to=" {name: 'UpdateBook', params: {id: book.id} } ">
        <p class="btn btn-warning">Uppdatera</p>
        </router-link>
        </article> 
</div>

</template>

<script>
//accept book from BookView
export default {
    props: {
        book:Object
    }
}
</script>

<style scoped>
article {
    background-color: rgb(228, 228, 228);
    padding:2% 4%;
}
button {
    margin-bottom: 1%;
}
</style>