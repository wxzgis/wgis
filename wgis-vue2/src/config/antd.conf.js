import Vue from 'vue';
import { Button, Card, Dropdown, Layout, Menu, Tabs } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

[ 
  Layout,
  Button,
  Tabs,
  Card,
  Menu,
  Dropdown
].map(item => Vue.use(item));

