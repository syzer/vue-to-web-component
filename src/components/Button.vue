<template>
  <div
    v-if="plain"
    class="Button"
    :class="[buttonColor(color), buttonSize(size)]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span class="Button-inner">
      <i v-if="icon" class="material-icons Button-inner-icon">{{icon}}</i>
      <slot></slot>
    </span>
    <Spinner v-if="loading"/>
  </div>
  <a
    v-else-if="href"
    class="Button"
    :class="[buttonColor(color), buttonSize(size), buttonDisabled(disabled)]"
    :href="href"
    rel="noopener"
    target="_blank"
  >
    <span class="Button-inner">
      <i v-if="icon" class="material-icons Button-inner-icon">{{icon}}</i>
      <slot></slot>
    </span>
    <Spinner v-if="loading"/>
  </a>
  <nuxt-link
    v-else-if="to"
    class="Button"
    :class="[{'Button--loading': loading}, buttonColor(color, disabled), buttonSize(size), buttonDisabled(disabled)]"
    :to="localePath(to)"
  >
    <span class="Button-inner">
      <i v-if="icon" class="material-icons Button-inner-icon">{{icon}}</i>
      <slot></slot>
    </span>
    <Spinner v-if="loading"/>
  </nuxt-link>
  <button
    v-else
    class="Button"
    :class="[{'Button--loading': loading}, buttonColor(color, disabled), buttonSize(size), buttonDisabled(disabled)]"
    :disabled="disabled"
    type="submit"
  >
    <span class="Button-inner">
      <i v-if="icon" class="material-icons Button-inner-icon">{{icon}}</i>
      <slot></slot>
    </span>
    <Spinner v-if="loading"/>
  </button>
</template>

<script>
import Spinner from './Spinner'

export default {
  components: {
    Spinner
  },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },

  methods: {
    buttonColor: (color, disabled) => ({
      'Button--primary': color === 'primary',
      'Button--secondary': color === 'secondary',
      'Button--attention': color === 'attention',
      'Button--transparent': color === 'transparent',
      'Button--disabled': disabled
    }),
    buttonSize: size => ({
      'Button--large': size === 'large',
      'Button--small': size === 'small'
    }),
    buttonDisabled: isDisabled => (isDisabled ? 'Button--disabled' : '')
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';


.Button {
  align-items: center;
  -webkit-appearance: none;
  background-clip: padding-box;
  border: 0;
  border-radius: $radius;
  box-shadow: none;
  color: #363636;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.2rem;
  font-weight: 600;
  justify-content: center;
  line-height: 1;
  margin: 0 0.2rem;
  padding: 0.8em 1.2em;
  position: relative;
  text-align: center;
  transition: 200ms ease-out;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;

  @include small {
    font-size: 1.4rem;
  }

  .Button-inner {
    align-items: center;
    display: inline-flex;
  }

  .Button-inner-icon {
    font-size: 1.3em;
    margin-right: 0.6rem;
    transition: 200ms;
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }

  &:disabled,
  &--disabled {
    filter: grayscale(1);
    pointer-events: none;
  }

  &--primary {
    background-clip: padding-box;
    background-image: $colorGradientSimpego;
    color: #fff;
  }

  &--secondary {
    background-color: $colorSimpegoBlue;
    color: #fff;
  }

  &--attention {
    background-color: $colorAttention;
    color: #fff;
  }

  &--transparent {
    background-color: transparent;
    color: $colorText;
    font-weight: normal;

    &:hover {
      box-shadow: none;
    }
  }

  &--small {
    font-size: 1rem;
    padding: 0.5em 1em;
  }

  &--large {
    font-size: 1.6rem;
  }

  &--loading {
    > *:not(.Spinner) {
      opacity: 0;
    }
  }
}
</style>
