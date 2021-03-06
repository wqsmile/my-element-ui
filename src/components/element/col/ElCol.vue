<template>
  <div
    :class="['el-col', classList]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          classList.push(
            prop === 'span'
              ? `el-col-${this[prop]}`
              : `el-col-${prop}-${this[prop]}`,
          );
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          const props = this[size];
          Object.keys(props).forEach((prop) => {
            classList.push(
              prop === 'span'
                ? `el-col-${size}-${props[prop]}`
                : `el-col-${size}-${prop}-${props[prop]}`,
            );
          });
        }
      });
      return classList;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  float: left;
  box-sizing: border-box;
}
@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i / 24 * 100%;
  }
  .el-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .el-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }
  .el-col-pull-#{$i} {
    position: relative;
    right: $i / 24 * 100%;
  }
}

@media screen and (max-width: 768px - 1) {
  @for $i from 0 through 24 {
    .el-col-xs-0 {
      display: none;
    }
    .el-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xs-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
  }
}
@media screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .el-col-sm-0 {
      display: none;
    }
    .el-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-sm-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
  }
}
@media screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .el-col-md-0 {
      display: none;
    }
    .el-col-md-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-md-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
  }
}
@media screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .el-col-lg-0 {
      display: none;
    }
    .el-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-lg-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
  }
}
@media screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .el-col-xl-0 {
      display: none;
    }
    .el-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xl-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
  }
}
</style>
