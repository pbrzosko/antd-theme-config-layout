import {ConfigProvider, Layout} from "antd";

export function App() {

  return (
    <ConfigProvider theme={{components: {Layout: {headerBg: 'tomato'}}}}>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>Content</Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}
