<template>
  <div class="personal">
    <Contain>
      <div>
        <p>这些将作为组件自身的模板。</p>
        <p>而非父组件透传进来的内容。</p>
      </div>
    </Contain>
  </div>
</template>

<script>

import Contain from '@/components/Contain/index'

export default {
  'name': 'personal',
  'components': { Contain }
}

</script>

<style scoped lang="less">
</style>
