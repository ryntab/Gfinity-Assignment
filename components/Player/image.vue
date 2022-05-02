<template>
<div class="justify-center lg:w-1/5 sm:w-full md:w-full">
    <img class="w-7/12 mx-auto lg:w-auto" :alt="imageAlt" :title="title" :src="src">
</div>
</template>
<script>
export default {
    props: [
        'imageSrc',
        'name',
        'club',
    ],
    computed: {
        src() {
            return this.$sanityImage.image(this.imageSrc.asset._ref);
        },
        imageAlt() {
            return `${this.name} - ${this.club}`;
        },
        title(){ 
            return `${this.club}`;
        },
    }
}
</script>
