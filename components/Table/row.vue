<template>
<tr class="text-white border-t border-solid cursor-pointer table__row h-14 bg-dark-600 hover:bg-dark-500 border-dark-900" @click="routeTo">
    <component v-for="(col, index) in cols" v-bind:key="index" :is="componentName(col)" :value="prop(row, col.attribute)" :column="col" :index="index"/>
</tr>
</template>

<script>
export default {
    props: ["row", "cols"],
    methods: {
        prop(obj, prop) {
            return prop.split(".").reduce((r, e) => {
                return r[e];
            }, obj);
        },
        componentName(col){
            return col.type != null ? 'Table' + col.type : 'TableText';
        },
        routeTo(){
            this.$router.push({
                path: `/player/${this.row.slug.current}`,
            });
        }
    },
};
</script>
