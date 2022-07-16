import TottleHoc from './hoc';

export function HocPage(props) {
  const scroll = function (target) {
    console.log(target);
  };
  return (
    <div
      onScroll={(target) => {
        props.resizeEvent(scroll.bind(this, target));
      }}
      style={{ height: 300, overflow: 'auto' }}
    >
      <div style={{ height: 500 }}>
        <div>滚动我</div>
        <div>此方法为Hoc控制的debounce滚动事件</div>
        <div>现在的滞留时间为100</div>
      </div>
    </div>
  );
}
// waittime 为自定义的滞留时间
export default TottleHoc({ waittime: 100 })(HocPage);
