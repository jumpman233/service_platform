import { Toast } from 'mint-ui'

const showDevelopingToast = () => {
  Toast({
    message: '敬请期待(〃＞皿＜)',
    duration: 1500,
    className: 'common-toast'
  })
}

export {
  showDevelopingToast
}

export default {
  showDevelopingToast
}
