<template>
	<el-dialog v-model="dialogFormVisible" @close="closeDialog">
		<template #header>{{ roleInfo.id ? "编辑角色" : "新增角色" }}</template>
		<el-form :model="form" :rules="rules" :label-width="formLabelWidth" ref="formRef">
			<el-form-item prop="realName" label="名称">
				<el-input v-model="form.name" placeholder=""></el-input>
			</el-form-item>
			<el-form-item prop="mail" label="编码">
				<el-input v-model="form.number" placeholder=""></el-input>
			</el-form-item>
			<el-form-item prop="desc" label="备注">
				<el-input type="textarea" v-model="form.desc" placeholder="" :autosize="{ minRows: 2, maxRows: 5 }"></el-input>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="closeDialog">取消</el-button>
				<el-button type="primary" @click="changeRoleInfo">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup name="AddEdit">
	import type { FormInstance, FormRules } from "element-plus";
	import { Role } from "@/interface/data";

	// 组件内部函数 接收及传递结果
	const propsData = defineProps({
		data: {
			type: Object,
			default: () => {
				return {};
			},
		},
	});
	const emits = defineEmits(["result"]);

	// 表单
	const formLabelWidth = "100px";
	const formRef = ref<FormInstance>();
	const form = ref<Role>({});
	const rules = reactive<FormRules>({});
	const roleInfo = ref<Role>({});

	// 弹窗
	const dialogFormVisible = ref(false);
	const openDialog = () => {
		dialogFormVisible.value = true;
	};
	const closeDialog = () => {
		form.value = {};
		roleInfo.value = {};
		dialogFormVisible.value = false;
	};

	// 数据信息
	const changeRoleInfo = () => {
		closeDialog();
		emits("result", true);
	};
	onUpdated(() => {
		if (propsData.data && dialogFormVisible.value) {
			form.value = propsData.data;
			roleInfo.value = propsData.data;
		}
	});

	// 组件内部函数 供外部调用函数
	defineExpose({
		openDialog,
		closeDialog,
	});
</script>

<style scoped lang="scss"></style>
