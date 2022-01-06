import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Auth from './auth'

router.beforeEach(async (to: any, from: any, next: any) => {
  NProgress.start()
  debugger;
  const token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next(false)
    Auth.redirect(import.meta.env.VITE_SSO as string)
  }
})

router.afterEach(() => {
  NProgress.done()
})
