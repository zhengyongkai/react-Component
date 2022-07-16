import { debounce } from 'lodash';

export default function TottleHoc(options = {}) {
  return function components(WrapConment) {
    // debounce 执行一遍 然后把 res 当成参数需要才执行
    // 类似 dom.addEventListener
    const resizeEvent = debounce((res) => res(), options.waittime || 500);
    return function Hoc() {
      return <WrapConment resizeEvent={resizeEvent}></WrapConment>;
    };
  };
}
