import express from 'express'
import { getIsMobile, setIsMobile } from './media.mjs'

const app = express()

let isMobile = undefined

// 모듈 파일변수 테스트
app.get('/', (req, res) => {
    // isMobile = req.headers['user-agent']
    setIsMobile(req)

    res.send(getIsMobile())
})

app.listen(5000, null, () => {
    console.log('listen 5000')
})