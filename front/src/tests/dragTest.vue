<template>
  <draggable :list="list" class="drag-area" @change="handleChange">
    <div v-for="element in list" :key="element.id" class="drag-item">
      {{ element.name }}
    </div>
  </draggable>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      list: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    }
  },
  methods: {
    handleChange(event: any) {
      console.log('Changed:', event)
    },
  },
})
</script>
