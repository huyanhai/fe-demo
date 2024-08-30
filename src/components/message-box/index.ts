import { createApp } from 'vue';
import MessageBox from './index.vue';

// 定义组件
// const MessageBox = defineComponent({
//   props: {
//     message: String
//   },
//   setup(props, { emit }) {
//     return () => (
//       <div class={styles.message_box}>
//         <p>{props.message}</p>
//         <button onClick={() => emit('close')}>关闭</button>
//       </div>
//     );
//   }
// });

/**
 * 显示消息框
 * @param {String} message 消息内容
 */
export default (message: string) => {
  const div = document.createElement('div');

  const app = createApp(MessageBox, {
    message,
    onClose() {
      app.unmount();
      div.remove();
    }
  });
  document.body.appendChild(div);

  app.mount(div);
};
