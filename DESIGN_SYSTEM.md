# Design System Documentation

## 目录
1. [颜色系统](#颜色系统)
2. [间距系统](#间距系统)
3. [圆角](#圆角)
4. [排版](#排版)
5. [阴影](#阴影)
6. [组件](#组件)
7. [使用指南](#使用指南)

## 颜色系统

### 主色调（Primary - 蓝色）
用于主要操作、链接和强调。

```
--color-primary-50  #f0f9ff (浅底)
--color-primary-100 #e0f2fe
--color-primary-200 #bae6fd
--color-primary-300 #7dd3fc
--color-primary-400 #38bdf8
--color-primary-500 #0ea5e9 (品牌色)
--color-primary-600 #0284c7 (按钮基础)
--color-primary-700 #0369a1 (悬停)
--color-primary-800 #075985 (活跃)
--color-primary-900 #0c3d66
--color-primary-950 #051e3e (最深)
```

### 次要色调（Secondary - 灰色）
中性背景和文本。

```
--color-secondary-50  #f8fafc (最浅)
--color-secondary-100 #f1f5f9
--color-secondary-200 #e2e8f0 (边框)
--color-secondary-300 #cbd5e1
--color-secondary-400 #94a3b8 (提示文本)
--color-secondary-500 #64748b
--color-secondary-600 #475569 (主文本)
--color-secondary-700 #334155
--color-secondary-800 #1e293b (深背景)
--color-secondary-900 #0f172a
--color-secondary-950 #020617 (最深)
```

### 强调色（Accent - 青色）
次要操作和交互元素。

```
--color-accent-500: #14b8a6
--color-accent-600: #0d9488
--color-accent-700: #0f766e
```

### 功能色
- **Success（绿色）**: `--color-success-500 #22c55e` - 成功状态
- **Warning（琥珀色）**: `--color-warning-500 #f59e0b` - 警告信息
- **Error（红色）**: `--color-error-500 #ef4444` - 错误状态

### 语义颜色（在 CSS 变量中定义）
```
--color-bg-primary    白色背景
--color-bg-secondary  浅灰背景
--color-bg-tertiary   更浅灰背景
--color-text-primary  深色主文本
--color-text-secondary 灰色副文本
--color-text-tertiary 浅灰辅助文本
--color-border-light   最浅边框
--color-border-base    标准边框
--color-border-strong  深边框
```

## 间距系统

基于 8px 的模块化间距系统：

```
--space-1  4px    --space-10  40px
--space-2  8px    --space-12  48px
--space-3  12px   --space-16  64px
--space-4  16px   --space-20  80px
--space-5  20px   --space-24  96px
--space-6  24px   --space-32  128px
--space-8  32px
```

**使用规则**：
- Padding/Margin: 使用 `space-*` 类名
- 间距规则：4px → 8px → 12px → 16px → 24px
- 避免非标准间距（如 14px、18px）

## 圆角

```
--radius-none    0
--radius-xs      4px    (输入框)
--radius-sm      6px
--radius-md      8px    (卡片)
--radius-lg      12px   (大组件)
--radius-xl      16px   (模态框)
--radius-2xl     24px   (大卡片)
--radius-3xl     32px
--radius-full    9999px (圆形)
```

**建议**：
- 按钮: `radius-md` (8px)
- 输入框: `radius-md` (8px)
- 卡片: `radius-lg` (12px)
- 模态框: `radius-xl` (16px)

## 排版

### 字体
- **Sans**: 系统字体栈（SF Pro, Segoe UI, Roboto）
- **Mono**: Menlo, Monaco, Courier New

### 字体大小
```
--text-xs    12px (标签、小提示)
--text-sm    14px (副文本、输入框)
--text-base  16px (正文)
--text-lg    18px (小标题)
--text-xl    20px (标题)
--text-2xl   24px (中标题)
--text-3xl   30px (大标题)
--text-4xl   36px (更大标题)
--text-5xl   48px (页面标题)
--text-6xl   60px
```

### 字体权重
```
--font-light      300 (细体)
--font-normal     400 (常规)
--font-medium     500 (中等)
--font-semibold   600 (半粗)
--font-bold       700 (粗体)
```

### 行高
```
--leading-tight   1.25   (标题)
--leading-snug    1.375  (小标题)
--leading-normal  1.5    (正文)
--leading-relaxed 1.625  (易读性)
--leading-loose   2      (稀疏)
```

**排版规则**：
- H1: `text-5xl font-bold leading-tight`
- H2: `text-4xl font-bold leading-tight`
- 正文: `text-base font-normal leading-normal`
- 标签: `text-xs font-medium uppercase`

## 阴影

```
--shadow-xs   浅阴影 (悬停效果)
--shadow-base 标准阴影 (卡片)
--shadow-md   中等阴影
--shadow-lg   深阴影 (浮窗)
--shadow-xl   更深阴影 (模态框)
--shadow-2xl  最深阴影 (特殊元素)
--shadow-inner 内阴影
--shadow-focus 焦点环 (蓝色)
```

**使用规则**：
- 普通卡片: `shadow-base` 或 `shadow-md`
- 悬停卡片: `hover:shadow-lg`
- 模态框: `shadow-2xl`
- 焦点态: `shadow-focus`

## 组件

### Button 按钮

#### 变体
- **primary**: 主操作（蓝色）
- **secondary**: 次要操作（灰色）
- **tertiary**: 三级操作（边框）
- **ghost**: 幽灵按钮（无背景）
- **danger**: 危险操作（红色）
- **success**: 成功操作（绿色）

#### 尺寸
- **sm**: 小 (`px-3 py-1.5 text-sm`)
- **md**: 中 (`px-4 py-2 text-base`) - 默认
- **lg**: 大 (`px-6 py-3 text-lg`)

```vue
<!-- 示例 -->
<UIButton variant="primary" size="lg">Click Me</UIButton>
<UIButton variant="secondary" :loading="isLoading">Save</UIButton>
<UIButton variant="danger" @click="delete">Delete</UIButton>
```

### Input 输入框

```vue
<UIInput
  v-model="email"
  type="email"
  label="Email"
  placeholder="your@email.com"
  hint="We'll never share your email"
  :error="error"
  required
/>
```

**Props**:
- `modelValue`: 输入值
- `type`: 输入类型 (text, email, password, number 等)
- `label`: 标签文本
- `placeholder`: 占位符
- `hint`: 提示文本
- `error`: 错误信息
- `required`: 必填
- `disabled`: 禁用
- `readonly`: 只读
- `iconLeft`: 显示左侧图标槽
- `iconRight`: 显示右侧图标槽

### Select 选择框

```vue
<UISelect
  v-model="country"
  label="Country"
  placeholder="Select a country"
  :options="[
    { label: 'USA', value: 'us' },
    { label: 'Canada', value: 'ca' }
  ]"
  required
/>
```

### Textarea 文本域

```vue
<UITextarea
  v-model="message"
  label="Message"
  placeholder="Type your message..."
  :rows="5"
  :charLimit="500"
  required
/>
```

### Card 卡片

```vue
<UICard hoverable>
  <template #header>
    <h3>Card Title</h3>
  </template>

  <p>Card content goes here</p>

  <template #footer>
    <p class="text-sm text-text-tertiary">Footer content</p>
  </template>
</UICard>
```

**Props**:
- `hoverable`: 启用悬停效果
- `padding`: 内边距 (默认 24px)

### Modal 模态框

```vue
<UIModal v-model:visible="showModal" title="Confirm Action">
  <p>Are you sure you want to proceed?</p>

  <template #footer>
    <UIButton variant="tertiary" @click="showModal = false">Cancel</UIButton>
    <UIButton variant="primary" @click="handleConfirm">Confirm</UIButton>
  </template>
</UIModal>
```

**Props**:
- `visible`: 是否显示 (使用 `v-model:visible`)
- `title`: 模态框标题
- `closeOnBackdrop`: 点击背景关闭 (默认 true)

## 使用指南

### 颜色使用
```vue
<!-- 文本 -->
<p class="text-text-primary">主要文本</p>
<p class="text-text-secondary">次要文本</p>
<p class="text-text-tertiary">辅助文本</p>

<!-- 背景 -->
<div class="bg-bg-primary">白色背景</div>
<div class="bg-bg-secondary">浅灰背景</div>

<!-- 边框 -->
<div class="border border-border-light">浅边框</div>
<div class="border border-border-base">标准边框</div>

<!-- 功能色 -->
<p class="text-success-600">成功信息</p>
<p class="text-error-600">错误信息</p>
<p class="text-warning-600">警告信息</p>
```

### 间距使用
```vue
<!-- Margin -->
<div class="m-4">全向外边距</div>
<div class="mb-6">下方外边距</div>

<!-- Padding -->
<div class="p-6">全向内边距</div>
<div class="px-4 py-2">横向内边距 16px，纵向 8px</div>
```

### 响应式设计
```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- 移动设备: 1列
       平板: 2列
       桌面: 4列 -->
</div>
```

### 深色模式
系统自动支持深色模式。在 `<html>` 根元素上添加 `dark` 类自动切换：

```javascript
// 切换深色模式
document.documentElement.classList.toggle('dark')
localStorage.setItem('theme', 'dark')
```

### 禁用状态
```vue
<UIButton disabled>Disabled Button</UIButton>
<UIInput disabled placeholder="Disabled input" />
```

### 加载状态
```vue
<UIButton :loading="isLoading">{{ isLoading ? 'Loading...' : 'Save' }}</UIButton>
```

## Tailwind 快速参考

```vue
<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">
  <!-- 水平布局，垂直居中，两端对齐，间距 16px -->
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <!-- 3列网格，间距 16px -->
</div>

<!-- 圆角 -->
<div class="rounded-lg">标准圆角 8px</div>
<div class="rounded-full">完全圆形</div>

<!-- 阴影 -->
<div class="shadow-base">标准卡片阴影</div>
<div class="hover:shadow-lg">悬停时深阴影</div>

<!-- 过渡 -->
<div class="transition-all duration-200">平滑过渡 200ms</div>

<!-- 响应式 -->
<div class="text-sm md:text-base lg:text-lg">
  手机 12px → 平板 16px → 桌面 18px
</div>
```

## 最佳实践

1. **始终使用设计令牌** - 不要硬编码颜色/间距值
2. **保持一致性** - 使用标准尺寸和间距
3. **可访问性** - 确保文本对比度足够（WCAG AA）
4. **响应式优先** - 从移动设计开始
5. **深色模式支持** - 测试深色主题
6. **性能** - 使用 TailwindCSS 类而非自定义 CSS
7. **测试** - 在多个设备和浏览器上测试
