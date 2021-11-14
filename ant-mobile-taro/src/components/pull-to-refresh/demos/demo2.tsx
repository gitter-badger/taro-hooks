import React, { useState } from 'react'
import { PullToRefresh, List } from 'ant-mobile-taro'
import { sleep } from 'ant-mobile-taro/es/utils/sleep'
import { PullStatus } from 'ant-mobile-taro/es/components/pull-to-refresh'

let current = 1

function getNextData() {
  const ret: string[] = []
  for (let i = 0; i < 18; i++) {
    ret.unshift(current.toString())
    current++
  }
  return ret
}

const statusRecord: Record<PullStatus, string> = {
  pulling: '用力拉',
  canRelease: '松开吧',
  refreshing: '玩命加载中...',
  complete: '好啦',
}

export default () => {
  const [data, setData] = useState(() => getNextData())
  return (
    <PullToRefresh
      onRefresh={async () => {
        await sleep(1000)
        setData([...getNextData(), ...data])
      }}
      renderText={status => {
        return <div>{statusRecord[status]}</div>
      }}
    >
      <List style={{ minHeight: '100vh' }}>
        {data.map(item => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
    </PullToRefresh>
  )
}
