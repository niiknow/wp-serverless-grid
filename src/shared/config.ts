import axios from './axios'

export default function(win: any) {
  win.$appConfig = {}
  win.$appConfig.axios = axios

  return win
}
