<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" :height="[ size ]" :width="[ size ]" fill="currentColor" >
        <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM11 40q-1.25 0-2.125-.875T8 37v-1.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V37q0 1.25-.875 2.125T37 40Z"/>
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