<template>
<tr class="sticky top-0 z-50 table__header h-14 bg-dark-800">
    <th class="text-sm font-light text-center text-white sm:mx-10"  v-for="(col, index) in this.cols" v-bind:key="col">
        <div class="flex flex-row" :class="{ 'ml-5' : (index < 1) }">
            <span class="mr-2">
                {{col.label}}
            </span>
            <TableSort :col="col" :sortBy="sortBy"/>
        </div>
    </th>
</tr>
</template>

<script>
export default {
    props: {
        cols: {
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
    },
    methods: {
        getProp(obj, prop) {
            return prop.split(".").reduce((r, e) => {
                return r[e];
            }, obj);
        },
    },
}
</script>
