<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" :height="[ size ]" :width="[ size ]" fill="currentColor">
        <path class="fill-current" d="m439 900-53-49Q262 736 171 631.5T80 413q0-90 60.5-150.5T290 202q51 0 101 24.5t89 80.5q44-56 91-80.5t99-24.5q89 0 149.5 60.5T880 413q0 114-91 218.5T574 851l-53 49q-17 16-41 16t-41-16Z" fill="grey"/>
    </svg>
</template>

<script>
export default {
    name: 'IconFavorite',
    props: {
        size: {
            type: Number,
            required: false,
            default: 48
        }
    }
}
</script>