import { useMemo, useState } from 'react';
import ChildPage from './child';

export default function MenoFatherPage() {
  const [childData, setChildData] = useState(true);
  const [fatherData, setFatherData] = useState(true);

  // 效果其实和 React.meno 一致
  //  meno是一个高阶组件Hoc , useMeno 是一个 Hook
  // meno 类似于 PureComponent + shouldComponentUpdate 而 useMemo 类似于 shouldComponentUpdate
  useMemo(() => {
    return childData;
  }, [childData]);

  return (
    <>
      <div onClick={() => setFatherData(fatherData === true ? false : true)}>
        父组件
      </div>
      <ChildPage childData={childData}></ChildPage>
    </>
  );
}
