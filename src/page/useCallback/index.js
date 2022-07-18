import { useCallback, useState } from 'react';
import ChildPage from './child';

export default function FatherPage() {
  const [EffectFatherState, setEffectFatherState] = useState(true);

  // 如果传入的是方法  只是用 meno 无法让组件停止重新渲染
  const changeFunction = function () {
    console.log('响应了');
  };

  // 所以只能使用 useCallback 配合 meno 进行渲染
  const pureFunction = useCallback(changeFunction, []);

  return (
    <>
      <div
        onClick={() =>
          setEffectFatherState(EffectFatherState === true ? false : true)
        }
      >
        父组件
      </div>
      <ChildPage changeFunction={changeFunction}></ChildPage>
    </>
  );
}
