import { useContext } from 'react'

import { CaptchaContext } from '../App'

export const useCaptcha = () => {
    const captcha = useContext(CaptchaContext)
    return async () => {
        const c = await captcha
        return await c.execute()
    }
}

export default useCaptcha
