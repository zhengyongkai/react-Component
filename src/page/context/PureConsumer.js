import React from 'react';

function PureConsumer() {
  console.log('render');
  return (
    <div>
      我是PureConsumer，可以通过Console观察是否重新加载,加上React.meno后就不会重新加载啦
    </div>
  );
}

export default React.memo(PureConsumer);
