# learn-react-native

注：本练习只针对ios部分。

学习 react-native 入门时的一些小练习，每次要运行某个例子时，将对应部分注释去掉即可。

过程中可能遇到的问题：
1、iphone模拟器红屏问题：
  Could not connect to development server.
  Ensure the following:
    -Node server is running and available on the same network - run'npm start' from react-native root.
    -Node server URL is correctly set in AppDelegate

  URL:http://localhost:8081/index.ios.bundle?platform=ios&dev=true

  Counld not connect to the server.
  
  需要去项目根目录下执行：npm start 启动node server。
  但是有时候还是报错，XCode中重新修改下Appdelegate.m文件中的
    jsCodeLocation =  [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
  localhost为127.0.0.1即可。
  
  
