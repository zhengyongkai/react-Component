import React from 'react';

function ChildPage(props) {
  console.log('我会重新渲染');
  return <div onClick={props.changeFunction}>我是子组件</div>;
}

export default React.memo(ChildPage);
