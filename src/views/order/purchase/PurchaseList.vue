<template>
	<el-form ref="formSearchRef" :model="formSearch" status-icon label-width="" :inline="true">
		<el-form-item prop="name" label="名称">
			<el-input v-model="formSearch.name" placeholder=""></el-input>
		</el-form-item>
		<el-form-item prop="" label="">
			<el-button type="primary">查询</el-button>
			<el-button @click="resetForm(formSearchRef)">重置</el-button>
			<el-button @click="resetForm(formSearchRef)">库存对比</el-button>
		</el-form-item>
	</el-form>
	<el-table :data="tableData" style="width: 100%" @selection-change="selectChangeData">
		<el-table-column type="selection" width="55" />
		<el-table-column prop="number" label="单号" width="120" />
		<el-table-column prop="number" label="时间" width="120" />
		<el-table-column prop="number" label="状态" width="120" />
		<el-table-column prop="unit" label="操作人" width="120" />
		<el-table-column prop="desc" label="备注" />
		<el-table-column prop="" label="操作" width="120">
			<template #default="scope">
				<el-tooltip effect="dark" content="库存对比" placement="bottom">
					<el-button type="info" link @click="openEditStock(scope.row)">
						<el-icon><Odometer /></el-icon>
					</el-button>
				</el-tooltip>
				<el-button type="success" link @click="openEditStock(scope.row)">
					<el-icon><EditPen /></el-icon>
				</el-button>
				<el-popconfirm title="确认删除？">
					<template #reference>
						<el-button type="danger" link>
							<el-icon><Delete /></el-icon>
						</el-button>
					</template>
				</el-popconfirm>
			</template>
		</el-table-column>
	</el-table>
	<RePagination :current="params.pageCurrent" :total="params.pageTotal" @change-size="pageChangeSize" @change-current="pageChangeCurrent"></RePagination>
	<AddEdit :data="stockInfo" ref="dialogForm" @result="getStockList"></AddEdit>
</template>

<script lang="ts" setup name="PurchaseList">
	import { FormInstance } from "element-plus";
	// import AddEdit from "./components/AddEdit.vue";

	const formSearchRef = ref();
	const formSearch = reactive({
		name: "",
	});
	const resetForm = (formEl: FormInstance | undefined) => {
		if (!formEl) return false;
		formEl.resetFields();
		getStockList();
	};

	const stockInfo = ref();
	const dialogForm = ref();
	const openEditStock = (item: any) => {
		stockInfo.value = item;
		dialogForm.value.openDialog();
	};

	const tableData = ref<any[]>([]);
	const params = reactive({
		pageCurrent: 1,
		pageSize: 10,
		pageTotal: 100,
	});
	const pageChangeSize = (val: number) => {
		params.pageSize = val;
		getStockList();
	};
	const pageChangeCurrent = (val: number) => {
		params.pageCurrent = val;
		getStockList();
	};
	const initData = () => {
		params.pageSize = 1;
		params.pageTotal = 100;
		getStockList();
	};
	const getStockList = () => {
		tableData.value = [
			{
				id: 1,
				name: "外丝接头",
				type: "NPT螺纹",
				criterion: "国标",
				number: "DN1233",
				material: "钢",
				specification: "DN52'R33",
				weight: 123,
				weightUnit: "g",
				price: 3.33,
				priceUnit: "元",
				volumeLength: 12,
				volumeWight: 23,
				volumeHeight: 33,
				volumeUnit: "m³",
				unit: "个",
				total: 123,
			},
			{
				id: 1,
				name: "扳手",
				type: "配件",
				criterion: "欧标",
				number: "DN1233",
				material: "",
				specification: "DN52'R33",
				weight: 123,
				weightUnit: "g",
				price: 3.33,
				priceUnit: "元",
				volumeLength: 12,
				volumeWight: 23,
				volumeHeight: 33,
				volumeUnit: "m³",
				unit: "个",
				total: 123,
			},
		];
	};
	const selectChangeData = () => {};
	onMounted(() => {
		initData();
	});
</script>

<style scoped lang="scss"></style>
