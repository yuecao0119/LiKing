import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import LoginRegister from '../views/LoginRegister.vue'
import Search from '../views/Home/Search.vue';
import CommonApp from '../views/Home/CommonApp.vue'
import Todo from '../views/Home/Todo.vue'
import Note from '../views/Home/Note.vue'
import FileSystems from '../views/Home/FileSystems.vue'
import Translation from '../views/Home/Translation.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '主页',
    component: Home,
    redirect: '/search', // 地址重定向
    children: [ // 这样路径跳转会匹配到Home中的router-view
      {
        path: '/search',
        name: '首页',
        component: Search,
      },
      {
        path: '/commonApp',
        name: '常用',
        component: CommonApp,
      },
      {
        path: '/todo',
        name: '日程',
        component: Todo,
      },
      {
        path: '/note',
        name: '笔记',
        component: Note,
      },
      {
        path: '/fileSystems',
        name: '文件',
        component: FileSystems,
      },
      {
        path: '/translation',
        name: '翻译',
        component: Translation,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginRegister,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
