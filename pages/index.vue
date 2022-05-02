<template>
<Table :cols="this.cols" :rows="this.fifaCards" :sortBy="sort" />
</template>
<script>
import
columns
from '~/assets/columns.json';
export default {
    layout: "default",
    data() {
        return {
            _type: "fifaCard",
            fifaCards: null,
            defaults: ['slug'],
            sort: {
                direction: "asc",
                attribute: "name"
            }
        };
    },
    mounted() {
        this.$root.$off('sortColumn');
        this.$root.$on('sortColumn', meta => {
            this.sortBy(meta)
        });
        this.fetch();
    },
    methods: {
        sortBy(meta) {
            //Update the sortby object and fetch data again.
            this.sort.direction = meta.direction;
            this.sort.attribute = meta.attribute;
            this.fetch();
        },
        fetch() {
            // Generate the query, based on the sortBy and set attributes.
            this.$sanity.fetch(`*[_type == "fifaCard"]{${this.attributes}} | order(${this.sort.attribute} ${this.sort.direction})`)
                .then((fifaCards) => {
                    this.fifaCards = fifaCards;
                });
        }
    },
    computed: {
        attributes() {
            //Create an array of attributes to return in our query, let's not return more data than we need.
            let attributes = new Array();
            columns.forEach(column => {
                attributes.push(column.attribute.split('.')[0]);
            });
            return [...new Set(attributes.concat(this.defaults))];
        },
        cols() {
            return columns;
        }
    },
};
</script>
