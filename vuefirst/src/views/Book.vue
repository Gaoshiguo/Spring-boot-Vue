<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>书名</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "Book",
        data(){
            return{
                books:[
                    // {   id:1,
                    //     title:'Java',
                    //     author:'高世国'
                    // },
                    // {
                    //     id:2,
                    //     title:'python',
                    //     author:'高世国'
                    // }
                ]
            }
        },
        created() {
            const _this=this
            this.$http.get('http://127.0.0.1:8181/book/findall').then(response=>{
                _this.books=response.data
            })
        }



    }
</script>

<style scoped>

</style>