import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const Dashboard: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>
        Settings
        <LoadingOutlined />
      </h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: '2rem',
  },
};

export default Dashboard;
