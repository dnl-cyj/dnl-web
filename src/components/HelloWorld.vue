<script setup>
import {ref} from 'vue'
import {demoStore} from "@/stores/modules/demo";
const demo = demoStore()
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <el-card class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]">
    <template #header> 子组件</template>
    <el-form>
      <el-form-item label="数字："> {{ demo.count }}</el-form-item>
      <el-form-item label="加倍："> {{ demo.double }}</el-form-item>
    </el-form>
  </el-card>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
    >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <el-button type="success">1111</el-button>
  <el-button type="primary">2222</el-button>
  <el-button type="primary">
    <IconMakiArrow/>
  </el-button>
  <!--  Icon(前缀) Base(报名) Xitongshezhi(svg文件名) -->
  <el-button type="primary">
    <el-icon>
      <IconBaseXitongshezhi/>
    </el-icon>
  </el-button>
  <div class="scss-demo"></div>
  <h1 class="text-red">text-red</h1>
  <div class="w-25 h-25 bg-amber"></div>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}

.scss-demo {
  width: 100px;
  height: 100px;
  background-color: $bg-color;
}
</style>
