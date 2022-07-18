import React from 'react';

function ChildPage(props) {
  console.log('我会重新渲染');
  return <div>我是子组件 我是父组件穿过来的值 {props.childData}</div>;
}

export default React.memo(ChildPage);
