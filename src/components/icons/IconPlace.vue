<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" :height="[ size ]" :width="[ size ]" fill="currentColor">
        <path d="M24 23.5q1.45 0 2.475-1.025Q27.5 21.45 27.5 20q0-1.45-1.025-2.475Q25.45 16.5 24 16.5q-1.45 0-2.475 1.025Q20.5 18.55 20.5 20q0 1.45 1.025 2.475Q22.55 23.5 24 23.5Zm.05 19.9q-.35 0-.65-.1-.3-.1-.55-.3-7.45-6.55-11.15-12.15Q8 25.25 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 4.85-3.7 10.45T25.15 43q-.25.2-.525.3-.275.1-.575.1Z"/>
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