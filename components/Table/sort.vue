<template>
<div class="content-center h-full table--sort">
    <div class="flex flex-col">
        <span @click="sort('asc')" class="cursor-pointer" >
            <IconsArrowUp :active="this.active && this.direction == 'asc'"/>
        </span>
        <span @click="sort('desc')" class="cursor-pointer">
            <IconsArrowDown :active="this.active && this.direction == 'desc'" />
        </span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        col: {
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
        sort(direction) {
            this.$root.$emit("sortColumn", {
                direction: direction,
                attribute: this.col.attribute
            });
        },
    },
    computed: {
        active(){
            return this.sortBy.attribute === this.col.attribute;
        },
        direction(){
            return this.sortBy.direction;
        }
    }
};
</script>
