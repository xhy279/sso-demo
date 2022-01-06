export default class Auth {
  constructor(public sso: string) {}

  static init(sso: string) {
    const auth = new Auth(sso)
    auth.initTokenListener()
    auth.createSSOIframe()
  }

  static redirect(url: string) {
    const redirectUrl = window.location.href
    window.location.href = `${url}/login?redirect=${redirectUrl}`
  }

  initTokenListener() {
    window.addEventListener('message', (event: MessageEvent) => {
      const { origin, data } = event
      if (origin !== this.sso) {
        return
      }
      const token = data.token
      if (token) {
        localStorage.setItem('token', token)
      } else {
        Auth.redirect(this.sso)
      }
    })
  }

  createSSOIframe() {
    const iframe = document.createElement('iframe')
    iframe.src = this.sso
    iframe.width = '0'
    iframe.height = '0'
    iframe.style.display = 'none'
    document.body.appendChild(iframe)
  }
}
