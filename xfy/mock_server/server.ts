import path from 'path';
// import fs from 'fs-extra';
import { MockServer } from 'mqk-mock-server';

const config = {
  port: 3030
}

const mockServer = new MockServer({
  mockHome: path.resolve(__dirname, './mock_home')
});

const server = mockServer.listen(config.port, () => {
  console.log(`Mock Server is running on port: ${config.port}`);
});

// SIGINT事件：接收到系统信号SIGINT时触发，主要是用户按Ctrl + c时触发
process.on('SIGINT', () => {
  mockServer.close(() => {
    console.log('Mock server close')
    // const uploadDest = path.resolve('mock_home/upload');
    // fs.emptyDirSync(uploadDest);
  });
});
