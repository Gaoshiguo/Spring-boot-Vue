<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item style="width: 50%" label="书籍名称" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item style="width: 50%" label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item style="width: 50%" label="价格" prop="price">
            <el-input v-model="ruleForm.price"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
<!--            <el-button @click="test()">测试</el-button>-->
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    title: '',
                    author: '',
                    create_time:'',
                    price:'',

                },
                rules: {
                    title: [
                        { required: true, message: '图书名称不能为空', trigger: 'blur' },
                    ],
                    author: [
                        { required: true, message: '请输入作者名称', trigger: 'blur' }
                    ],
                    price: [
                        { required: true, message: '价格不能为空', trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // console.log(this.ruleForm)
                        var time = new Date();
                        _this.ruleForm.create_time=time;
                        axios.post('http://localhost:8181/book/save',this.ruleForm).then(function (resp) {
                        if(resp.data == 'success'){
                            // _this.$message('书籍添加成功！');
                            _this.$alert('《'+_this.ruleForm.title+'》添加成功')
                            _this.$router.push('/BookManage')
                        }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            test(){
                console.log(this.ruleForm)
            }
        }
    }
</script>

<style scoped>

</style>