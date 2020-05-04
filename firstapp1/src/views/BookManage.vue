<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 70%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="图书名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="create_time"
                    label="上架时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            edit(row) {
                this.$router.push('/BookEdit')
            },
            deleteBook(row){
                this.$router.push('/DeleteBook')
            },
            page(currentPage){
                const _this=this
                axios.get('http://127.0.0.1:8181/book/findall/'+(currentPage-1)+'/5').then(function (resp) {
                    _this.tableData = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })
            }
        },
        data() {
            return {
                pageSize:'0',
                total:'3',
                tableData: [
                    {
                        id: 1,
                        title: '钢铁是怎样炼成的',
                        author: '保尔柯察金',
                    },
                    {
                        id: 2,
                        title: '钢铁是怎样炼成的',
                        author: '保尔柯察金',
                    },
                    {
                        id: 3,
                        title: '钢铁是怎样炼成的',
                        author: '保尔柯察金',
                    },
                    {
                        id: 4,
                        title: '钢铁是怎样炼成的',
                        author: '保尔柯察金',
                    },
                ]
            }
        },
        created() {
            const _this=this
            axios.get('http://127.0.0.1:8181/book/findall/0/5').then(function (resp) {
                    _this.tableData = resp.data.content
                    console.log(resp)
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
            })
        }
    }
</script>