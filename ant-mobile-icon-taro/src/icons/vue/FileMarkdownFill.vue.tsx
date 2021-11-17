// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'FileMarkdownFill',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      const { size = 18, style = {}, color, usePX, ...restProps } = props;

      const renderSize = () => {
        return usePX
          ? pxTransform(size!).replace(/rpx|rem/gi, 'px')
          : pxTransform(size!);
      };

      const background = () => {
        const base64SVG = template(
          "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.975a16.003 16.003 0 0 0 14.624 9.503h24.055c6.33 0 12.065-3.732 14.63-9.518l59.109-133.35v157.458c0 8.838 7.165 16.003 16.003 16.003h27.337c8.838 0 16.003-7.165 16.003-16.003V486.002c0-8.838-7.165-16.003-16.003-16.003h-34.746a16.003 16.003 0 0 0-14.673 9.616l-79.473 182.587-79.473-182.587A16.003 16.003 0 0 0 417.96 470h-34.958c-8.838 0-16.003 7.165-16.003 16.003v271.996c0 8.838 7.165 16.003 16.003 16.003h27.126c8.838 0 16.003-7.165 16.003-16.003V600.929z' fill='<%= color %>' /></svg>",
          { size: renderSize(), color: hex2rgb(color || '') },
        );
        const escape = base64SVG.replace(/<|>/g, (str: string) =>
          encodeURIComponent(str),
        );
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <view
          onClick={onClick}
          class="adm-icon"
          {...restProps}
          style={{
            ...style,
            background: background(),
            width: renderSize(),
            height: renderSize(),
          }}
        ></view>
      );
    };
  },
});
