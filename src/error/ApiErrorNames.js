// API错误名称
var ApiErrorNames = {
  UNKNOW_ERROR: 'unknowError',
  USER_NOT_EXIST: 'userNotExist',
  ADD_USER_ERROR: 'addUserError',
  UPDATE_USER_ERROR: 'updateUserError',
  DELETE_USER_ERROR: 'deleteUserError'
}

// API错误名称对应的错误信息
const errorMap = new Map()

errorMap.set(ApiErrorNames.UNKNOW_ERROR, {
  code: -1,
  message: '未知错误'
})
errorMap.set(ApiErrorNames.USER_NOT_EXIST, {
  code: 101,
  message: '用户不存在'
})
errorMap.set(ApiErrorNames.ADD_USER_ERROR, {
  code: 102,
  message: '添加用户失败'
})
errorMap.set(ApiErrorNames.UPDATE_USER_ERROR, {
  code: 103,
  message: '更新用户失败'
})
errorMap.set(ApiErrorNames.DELETE_USER_ERROR, {
  code: 104,
  message: '删除用户失败'
})

// 根据错误名称获取错误信息
ApiErrorNames.getErrorInfo = errorName => {
  var errorInfo

  if (errorName) {
    errorInfo = errorMap.get(errorName)
  }

  // 如果没有对应的错误信息，默认'未知错误'
  if (!errorInfo) {
    errorName = ApiErrorNames.UNKNOW_ERROR
    errorInfo = errorMap.get(errorName)
  }

  return errorInfo
}

export default ApiErrorNames
