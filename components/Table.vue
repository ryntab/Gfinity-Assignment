<template>
<table v-if="this.rows" class="table table-auto">
    <thead class="bg-dark-900">
        <TableHeader v-if="this.cols != null" :cols="cols" :sortBy="sortBy" />
    </thead>
    <tbody class="h-full overflow-scroll">
        <TableRow :cols="cols" :row="row" v-for="row in this.rows" v-bind:key="row.id" />
    </tbody>
</table>
</template>
<script>
export default {
    props: {
        cols: {
            type: Array,
        },
        rows: {
            type: Array,
        },
        sortBy: {
            type: Object,
            default: () => {
                return {
                    direction: "asc",
                    attribute: "name",
                };
            },
        },
    }
}
</script>

<style>
.table {
    width: 1024px;
    overflow: scroll;
}
</style>
