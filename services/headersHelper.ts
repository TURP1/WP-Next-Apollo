import {headers} from 'next/headers';

export const getDataFromHeaders = async() => {
    const headersList = headers();

    //pathname
    const serverPathname = headersList.get('x-invoke-path') || '';

    //isMobile
    const userAgent = headersList.get('user-agent') || '';
    const isMobile = /mobile/i.test(userAgent);

    //language
    const headersLanguage = headersList.get('accept-language')?.split(',')[0] || ''


    return {serverPathname, isMobile, headersLanguage}
}
