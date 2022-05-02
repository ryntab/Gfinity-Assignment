<template>
<td class="w-40 m-2 text-white row__text">
    <span class="ml-5 text-xs font-bold">{{value}}</span>
</td>
</template>

<script>
export default {
    props: [
        'index',
        'value',
        'column',
    ]
}
</script>
<style>
.row__text {
   min-width: 30px;
}
</style>
