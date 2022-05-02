<template>
<td class="w-10 row__stat">
    <span class="px-4 py-2 text-xs font-bold border-2 border-solid rounded-md" v-bind:class="styling">{{value}}</span>
</td>
</template>

<script>
export default {
    props: [
        'index',
        'value',
        'column',
    ],
    computed: {
        styling() {
            switch (this.column.style) {
                case 'outline':
                    return 'border-white bg-dark-900';
                case 'highlight':
                    return 'border-white bg-white text-dark-900';
                default:
                    return 'border-dark-900 bg-dark-900';
            }
        }
    }
}
</script>
