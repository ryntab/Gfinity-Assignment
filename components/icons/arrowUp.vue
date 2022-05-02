<template>
<svg :class="styling" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z"/>
</svg>
</template>
<script>
export default {
    props: [
        'active',
    ],
    computed: {
        styling() {
            switch (this.active) {
                case true:
                    return 'fill-white w-4';
                case false:
                    return 'fill-dark-100 w-4';
                default:
                    return 'bg-red-300';
            }
        }
    }
}
</script>
