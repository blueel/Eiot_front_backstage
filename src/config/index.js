/**环境封装
 * 
 */
const env = process.env.NODE_ENV || 'prod';
const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/19a379d1042a7387e16b62455dab309a/api'
    },
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/19a379d1042a7387e16b62455dab309a/api'
    },
    production: {
        baseApi: '//futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/19a379d1042a7387e16b62455dab309a/api'
    }
}
export default {
    env: 'dev',
    mock: true,
    nameSpace: 'manager',
    baseApi: 'www.baidu.com/api', // test-www.baidu.com/api
    ...EnvConfig[env]
}