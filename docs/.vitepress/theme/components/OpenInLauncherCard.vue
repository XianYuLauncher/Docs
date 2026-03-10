<script setup lang="ts">
interface Props {
  href: string
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  title: '在启动器中打开',
  description: '点击跳转至启动器对应页面'
})
</script>

<template>
  <a :href="href" class="open-in-launcher-card" target="_self" rel="noopener">
    <span class="card-icon">→</span>
    <div class="card-content">
      <span class="card-title">{{ title }}</span>
      <span class="card-desc">{{ description }}</span>
    </div>
  </a>
</template>

<style scoped>
.open-in-launcher-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  margin: 16px 0;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.25s, background 0.25s;
}

.open-in-launcher-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
}

.card-icon {
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-title {
  font-weight: 600;
  font-size: 16px;
}

.card-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>
