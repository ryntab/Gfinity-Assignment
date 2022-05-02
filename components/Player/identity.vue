<template>
<div v-if="player != null" class="flex flex-col space-y-8">
    <div class="inline-flex items-center w-full space-x-4 text-white justify-middle row">
        <h3 class="text-2xl font-bold">{{player.name}}</h3>
        <nuxt-link to="/" class="ml-4 border-b-2 border-dashed border-dark-400">View all cards</nuxt-link>
    </div>
    <div class="grid w-full gap-4 lg:grid-cols-7 sm:grid-cols-1 md:grid-cols-1">
        <div v-for="(identity, index) in attributes" v-bind:key="index">
            <div class="flex flex-row justify-between mt-10 text-white bor lg:flex-col lg:border-r-2 border-dark-500 lg:text-dark-400">
                <span class="text-xl font-medium lg:text-sm justify-middle">{{identity.label}}</span>
                <span class="overflow-hidden text-xl text-white capitalize lg:my-4 lg:text-sm whitespace-nowrap text-ellipsis" v-for="(attribute, index) in forceArray(identity.attribute)" v-bind:key="index">
                    {{player[attribute]}}
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import
personalAttributes
from '~/assets/personal/attributes.json';
export default {
    props: {
        player: {
            type: Object,
            required: true,
        },
    },
    methods: {
        forceArray(item) {
            return (typeof (item) === 'string') ? [item] : item;
        }
    },
    computed: {
        attributes() {
            return personalAttributes;
        }
    }
}
</script>
