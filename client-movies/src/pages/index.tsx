import styles from './index.less';
import { Typography } from 'antd';
 function IndexPage() {
  return (
    <div>
      <Typography.Title>欢迎使用本系统</Typography.Title>
    </div>
  );
}

IndexPage.wrappers = ["@/components/Auto"]
export default IndexPage;