**简版的停车场系统**，包含：

* **前端**：用户选择入场时间、出场时间，显示费用
* **后端 (Node.js + Express)**：计算费用、保存记录
* **数据库 (SQLite)**：保存停车记录（方便测试，不用复杂配置）



---

## 1. 项目结构

```
parking-system/
│
├─ index.html       # 前端页面
├─ server.js        # 后端代码
├─ database.js      # 数据库初始化
└─ package.json     # Node.js 项目依赖
```

---

## 2. 启动步骤

1. 安装 Node.js
2. 打开终端，进入项目文件夹
3. 初始化并安装依赖：

   ```bash
   npm init -y
   npm install express body-parser sqlite3
   ```
4. 启动服务器：

   ```bash
   node server.js
   ```
5. 浏览器打开：`http://localhost:3000`

   * 选择入场/出场时间
   * 点击 “Calculate Fee”
   * 显示总费用，并记录到数据库 `parking.db`


