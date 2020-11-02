import { Child } from "./Child";
import { Parent } from "./Parent";
import { CounterProvider } from "./CounterProvider";
import { TextProvider } from "./TextProvider";
// ______________________________________________________
//
// マイクロ Hook パターン
// 更新が頻繁な値を分配する Provider は細分化すると良い
// 
// - PROS: React.memo化 が不要になる
// - CONS: 末端コンポーネントが Context 依存している （再利用性：低）
//
export const Good = () => (
  <TextProvider>
    <CounterProvider>
      <Parent>
        <Child />
      </Parent>
    </CounterProvider>
  </TextProvider>
);
