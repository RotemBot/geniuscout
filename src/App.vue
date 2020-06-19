<template>
    <div id="q-app">
        <router-view />
    </div>
</template>

<script lang="ts">
    export default {
        name: 'App'
    }
</script>
<style lang="stylus">
    .clickable {
        cursor pointer
    }
    /* Customize website's scrollbar like Mac OS
   Not supports in Firefox and IE */

    /* total width */
    ::-webkit-scrollbar {
        background-color $dark
        width 5px
        height 5px
    }

    /* scrollbar itself */
    ::-webkit-scrollbar-thumb {
        background-color $primary
        opacity 0.7
        border-radius 16px
    }

    /* set button(top and bottom of the scrollbar) */
    ::-webkit-scrollbar-button {display:none}

    ::-webkit-scrollbar-corner {
        background-color $accent
    }

    .fa, .fas {
        font-size 20px !important
    }
</style>
