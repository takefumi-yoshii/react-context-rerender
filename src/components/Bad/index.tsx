import { Parent } from "./Parent";
import { CounterProvider } from "./CounterProvider";
import { TextProvider } from "./TextProvider";
// ______________________________________________________
//
// モノリス Parent パターン
// 粒度の大きいコンポーネントから値を propsdown しているため、
// 経由コンポーネントで反応してしまっている
// 
// - PROS: 末端コンポーネントが Context 依存している （再利用性：低）
// - CONS: React.memo化 が必要になる
// 
export const Bad = () => (
  <TextProvider>
    <CounterProvider>
      <Parent />
    </CounterProvider>
  </TextProvider>
);
