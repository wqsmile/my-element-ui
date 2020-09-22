<template>
  <div
    :class="[
      'el-row',
      { 'el-row--flex': this.type === 'flex' },
      this.justify !== 'start' && `el-justify-${justify}`,
      this.align !== 'top' && `el-align-${align}`,
    ]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'end', 'center', 'space-between', 'space-around'].includes(val),
    },
    align: {
      type: String,
      default: 'top',
      validator: (val) => ['top', 'middle', 'bottom'].includes(val),
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `${-this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scope>
.el-row {
  &::after {
    content: '';
    display: block;
    clear: both;
  }

  &--flex {
    display: flex;

    &::after,
    &::before {
      display: none;
    }

    &.el-justify-end {
      justify-content: flex-end;
    }
    &.el-justify-center {
      justify-content: center;
    }
    &.el-justify-space-around {
      justify-content: space-around;
    }
    &.el-justify-space-between {
      justify-content: space-between;
    }
    &.el-align-middle {
      align-items: center;
    }
    &.el-align-bottom {
      align-items: flex-end;
    }

  }
}
</style>
