export const list = [
  {
    title: {
      name: '华毓安全-后台',
      date: '2023.01 - 至今'
    },
    content: [
      {
        title: '项目介绍',
        children: ['华毓安全后台是一个集物联网平台、3d园区管理于一体的大型后台管理系统。']
      },
      {
        title: '技术栈',
        children: ['框架： Vue3 + Pinia + Vue-router + ElementPlus + Cesium + Threejs + CtyCmsUI ；', '构建、CI/CD ： vite + typescript + gitlab CI + 阿里云；']
      },
      {
        title: '工作和成就',
        children: [
          '1. 负责 CtyCmsUI 前端UI组件库推进，从 0 到 1 推动前端实践，搭建项目结构、代码规范等；',
          '2. 负责 后台性能优化方案文档输出和实施，比如：首屏性能优化，提升 fp 、 fcp 等指标，渲染性能提高 25%；',
          '3. 基于 ElementPlus 的公共组件库二次开发，发布 table 、 form 、 upload 等共用组件，导航管理、用户管理等业务组件。比如： cty-table组件 配置 JsonSchema 渲染页面，提升开发效率 50%，代码量减少 70%；',
          '4. 基于 Cesium 、 Threejs 的封装室外和室内地图组件，重构地图相关页面，将业务代码量减少 50%。'
        ]
      }
    ]
  },
  {
    title: {
      name: '铃铛保-App',
      date: '2022.06 - 2022.12'
    },
    content: [
      {
        title: '项目介绍',
        children: ['铃铛保App是一款帮助保险人数字化、精英化转型的精准营销平台。']
      },
      {
        title: '技术栈',
        children: ['框架： Ionic + Angular + Typescript + Cordova；', '构建、CI/CD ： AndroidX + gitlab CI + 阿里云']
      },
      {
        title: '工作和成就',
        children: [
          '1. 负责 首页模块，使用图片懒加载、虚拟列表、骨架屏、瀑布流等提高APP内页面渲染速度和使用体验；',
          '2. 负责 Tab 标签页、 IndexBar 索引栏、 Area 地区选择等公共组件，提升开发效率 50%；',
          '3. 负责 前端日志上报 SDK 设计、 Nodejs 开发日志告警方案，完善 前端日志监控流程，让监控可视化、数据化；提高了错误日志、bug的发现率，减少了公司的损失，获得团队一致好评。'
        ]
      }
    ]
  },
  {
    title: {
      name: '雨途-智慧水务',
      date: '2020.03 - 2020.11'
    },
    content: [
      {
        title: '项目介绍',
        children: [
          '雨途-智慧水务管理系统使用 qiankun 微前端架构，拆分用户管理、员工管理、用户包装、设置发票、打印收费、报表等多个子应用；集中运维管理系统、经营管理系统、客户服务系统实现智慧水务一体化平台。'
        ]
      },
      {
        title: '技术栈',
        children: ['框架： Vue2 + Vuex + Vue-router + ElementUI + GraphQL + printJS + qiankun ；', '构建、CI/CD ： webpack + babel + gitlab CI + 腾讯云；']
      },
      {
        title: '工作和成就',
        children: [
          '1. 负责 qiankun 微前端架构，从0到1 推动微前端实践，设计项目结构、代码规范等；',
          '2. 基于 axios 进行封装，设置拦截器统一处理错误及配置请求信息，统一请求格式，提升了开发效率；',
          '3. 封装 防抖、节流、权限等自定义指令，优化相关页面的逻辑，减少了 5% 的代码量；',
          '4. 基于 ElementUI + printJS + xlsx 进行组件二次开发，发布 upload 等共用组件，Excel文件的上传、print打印等业务组件。提升开发效率 20%，代码量减少 30%。'
        ]
      }
    ]
  },
  {
    title: {
      name: '沃顿健康新零售-H5',
      date: '2019.02 - 2019.06'
    },
    content: [
      {
        title: '项目介绍',
        children: ['沃顿健康新零售是一个可以帮助广大职场人买到更有性价比、更健康产品的平台。']
      },
      {
        title: '技术栈',
        children: ['框架： React + Redux + React-Redux + React-Router-Dom + Antd-Mobile + Swiper + Less；', '构建、CI/CD ： webpack + babel + gitlab CI + jenkins + IT私有云；']
      },
      {
        title: '工作和成就',
        children: [
          '1. 负责 登录、注册、分享、自定义弹窗等公共逻辑的抽离 Hook ，100% 统一H5登录、注册等组件的逻辑复用；',
          '2. 负责 H5 性能优化方案，比如：离线包方案，提前定义需要加载的网页资源，提高APP内页面渲染速度；',
          '3. 负责 前端日志上报 SDK 设计、 Nodejs 开发日志告警方案，完善 前端日志监控流程，让监控可视化、数据化；提高了错误日志、bug的发现率，减少了公司的损失，获得团队一致好评。'
        ]
      }
    ]
  }
];
