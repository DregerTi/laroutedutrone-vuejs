<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" :height="[ size ]" :width="[ size ]" fill="currentColor" >
        <path d="M15.75 21.7q-.9 0-1.325-.775-.425-.775.025-1.525L22.8 6.05q.4-.7 1.25-.7t1.25.7l8.35 13.35q.45.75.025 1.525-.425.775-1.325.775ZM35.3 44q-3.7 0-6.2-2.5t-2.5-6.2q0-3.7 2.5-6.2t6.2-2.5q3.7 0 6.2 2.5t2.5 6.2q0 3.7-2.5 6.2T35.3 44ZM7.5 42.75q-.65 0-1.075-.425Q6 41.9 6 41.25v-12.2q0-.65.425-1.075.425-.425 1.075-.425h12.2q.65 0 1.075.425.425.425.425 1.075v12.2q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </svg>
</template>

<script>
export default {
    name: 'IconPlace',
    props: {
        size: {
            type: Number,
            required: false,
            default: 48
        }
    }
}
</script>