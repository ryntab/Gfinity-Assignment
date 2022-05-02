<template>
<nav class="border-b bg-dark-900 border-dark-500">
    <div class="max-w-screen-lg mx-auto">
        <div class="flex justify-between h-16">
            <nuxt-link to="/" class="w-16 bg-dark-500 sm:flex sm:items-center">
                <IconsMenu class="h-full mx-auto" />
            </nuxt-link>
            <div class="flex">
                <div class="flex items-center flex-shrink-0">
                    <img class="block w-auto h-8 lg:hidden" src="~assets/RS-logo.png" alt="Workflow">
                    <img class="hidden w-auto h-8 lg:block" src="~assets/RS-logo.png" alt="Workflow">
                </div>
            </div>
        </div>
    </div>
</nav>
</template>