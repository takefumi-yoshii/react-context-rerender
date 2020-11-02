import { Child } from "./Child";
import { Parent } from "./Parent";
import { Provider } from "./Provider";
// ______________________________________________________
//
// モノリス Provider パターン
// Context vlue を object にしてしまっているため、
// 反応して欲しくない Consumer コンポーネントでも反応してしまっている
//
// - PROS: 値の更新が頻繁でなければ問題になることは少ない
// - CONS: 値の更新が頻繁なものが含まれた途端、rerender が多発する
//
export const MonolithProvider = () => (
  <Provider>
    <Parent>
      <Child />
    </Parent>
  </Provider>
);
