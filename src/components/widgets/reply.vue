<template>
  <div>
    <div>
      {{reply.create_at | fromNow}} by {{reply.author.loginname}}
    </div>
    <div>
      {{{reply.content | marked}}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import filters from '../../filters'

  export default{
    props: {
      reply: {
        type: Object,
        default: {}
      }
    },
    filters
  }
</script>
