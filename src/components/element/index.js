import Row from './row';
import Col from './col';

const components = [
  Row,
  Col,
];

const install = (Vue) => {
  components.forEach((c) => {
    Vue.component(c.name, c);
  });
};

export default {
  install,
  Row,
  Col,
};
