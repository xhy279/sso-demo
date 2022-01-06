import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach(async (to: any, from: any, next: any) => {
  NProgress.start()
  const token = localStorage.getItem('token')
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
