import { CounterProvider } from "./CounterProvider";
import { Parent } from "./Parent";
import { TextProvider } from "./TextProvider";
// ______________________________________________________
//
// モノリス Parent パターン
// 粒度の大きいコンポーネントから値を バケツリレー しているため、
// 経由コンポーネントで反応してしまっている

// - PROS: 末端コンポーネントが Context 非依存 （再利用性：高）
// - CONS: React.memo化 が末端コンポーネントで必要になる
//
export const MonolithParent = () => (
  <TextProvider>
    <CounterProvider>
      <Parent />
    </CounterProvider>
  </TextProvider>
);
