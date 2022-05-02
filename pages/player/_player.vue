<template>
<div class="flex flex-col bg-dark-900">
    <PlayerCard v-if="this.player" class="m-6 mt-10">
        <PlayerImage slot="cardImage" :imageSrc="this.player.cardImage" :name="this.player.name" :club="this.player.club" />
        <PlayerStats slot="cardDetails" :stats="this.player.statistics" />
    </PlayerCard>
    <PlayerIdentity v-if="this.player" :player="this.player" class="m-6" />
</div>
</template>

<script>
export default {
    layout: "default",
    data() {
        return {
            player: null,
            defaults: ['slug']
        };
    },
    mounted() {
        this.$sanity
            .fetch(`*[_type == "fifaCard" && slug.current == "${this.path}"]`)
            .then((player) => {
                //Get the first player from the query
                this.player = player[0];
            });
    },
    computed: {
        path() {
            return this.$route.params.player;
        },
    },
};
</script>
