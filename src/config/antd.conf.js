import { Button, Card, Layout, Tabs } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

function init(app) {
  [ 
    Layout,
    Button,
    Tabs,
    Card
  ].map(item => app.use(item));
}

export default init;
