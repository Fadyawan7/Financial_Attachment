import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AttachmentsManager from "@/views/AttachmentsManager";
import AddAttachment from "@/views/AddAttachment";
import EditAttachment from "@/views/EditAttachment";
import ViewAttachment from "@/views/ViewAttachment";
import PageNotFound from "@/views/PageNotFound";

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/Attachments",
    component: HomeView
  },
  {
    path: '/Attachments',
    name: 'AttachmentsManager',
    component: AttachmentsManager
  },
  {
    path: '/Attachments/add',
    name: 'AddAttachment',
    component: AddAttachment
  },
  {
    path: '/Attachments/edit/:AttachmentId',
    name: 'EditAttachment',
    component: EditAttachment
  },
  {
    path: '/Attachments/view/:AttachmentId',
    name: 'ViewAttachment',
    component: ViewAttachment
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
