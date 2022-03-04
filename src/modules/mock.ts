/**
 * 该模块主要给生产时的 mock 用，一般情况下你并不需要关注
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import { createFetchSever } from '../../presets/shared/mock'

// 生产环境时才创建服务
if (!import.meta.env.DEV) {
	const mockModules: any[] = []
	const modules = import.meta.globEager('../../mock/*.ts')
	Object.values(modules).forEach(v => {
		if (Array.isArray(v.default)) {
			mockModules.push(...v.default)
		}
	})
	createProdMockServer(mockModules)
	createFetchSever(mockModules)
}
