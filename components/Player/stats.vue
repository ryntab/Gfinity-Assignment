<template>
<div class="w-full p-6 lg:w-4/5 sm:full md:w-full">
    <div class="flex flex-row">
        <div class="grid grid-cols-3 gap-6 text-white grow md:grid-cols-3 lg:grid-cols-6">
            <div v-for="(stat, index) in personalStats" v-bind:key="index">
                <div class="flex justify-between py-1 uppercase border-solid text-mdfont-medium border-y-2">
                    <span class="text-md">{{stat.label}}</span>
                    <span class="text-md">{{stats[stat.attribute].average}}</span>
                </div>
                <div class="flex flex-row items-center justify-between mt-4" v-for="(stat, name, index) in secondaryStats(stats[stat.attribute])" v-bind:key="index">
                    <span class="overflow-hidden text-xs font-medium whitespace-nowrap text-ellipsis">
                        {{name | toWords}}
                    </span>
                    <span class="font-medium text-md">
                        {{stat}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import
personalStats
from '~/assets/personal/stats.json';
export default {
    props: {
        stats: {
            type: Object,
        },
    },
    methods: {
        secondaryStats(statsObj) {
            let stats = {... statsObj};
            if (stats['average'] != null) {
                delete stats['average'];
            }
            return stats;
        }
    },
    computed: {
        personalStats() {
            return personalStats;
        }
    }
}
</script>
