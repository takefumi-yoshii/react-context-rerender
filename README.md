# react-context-rerender

Context 経由で Provider の値を反映する方法について、
構造による ReRender の違いを解説します。

## Motivation

React.memo を適用すれば、コンポーネントの不要な ReRender を防ぐことができます。
しかしながら、Provider 設計・バケツリレーの見直しを行うことで、
React.memo を使わずとも、ReRender の抑止は可能です。

最適な Context Provider 設計とすることで、
React.memo 使用によるオーバーヘッドを削減が期待できます。
