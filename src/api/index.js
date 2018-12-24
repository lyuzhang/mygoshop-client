/**
 * Created by DeLL on 2018/12/22.
 */
/*接口文件*/
import ajax from './ajax'

const BASE = '/api'
//const BASE = 'http://localhost:5000'
export const reqAddress =  (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)
export const reqCategorys = () => ajax(BASE + '/index_category')
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {longitude, latitude})
