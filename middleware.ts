import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



export function getUserPreferredLanguage(acceptLanguage:string|null) {
	try{
		const preferredLanguage = acceptLanguage?.split(',')[0];
		if (preferredLanguage?.startsWith('ru')) {
			return 'ru';
		}
	}catch {
	}
	return 'en';
}

type TRedirect ={
	redirectPath:string,
	query:string,
	pathname:string,
	request:NextRequest
}

const customRedirect = ({redirectPath, pathname , query ,request} :TRedirect )=>{

	if(pathname !==redirectPath){
		return NextResponse.redirect(new URL(redirectPath+query, request.url))
	}
}



export function middleware(request: NextRequest) {

	const { pathname } = request.nextUrl
	const  headersList = request.headers ;
	const cookiesList = request.cookies
	const userAgent = headersList.get("user-agent") || "";
	const defaultLang  =getUserPreferredLanguage(headersList.get("accept-language"))  ;
	const changedLang = cookiesList.get('userLanguage')?.value;
	const lang = changedLang||defaultLang

	
	const isMobile = /mobile/i.test(userAgent);


	const pagesPull=["/", "/home","/r","/home/r"]	;

	if(pagesPull.includes(pathname) ){
		const  url = new URL(request.url);
		const query =url.search||"";
		if ( isMobile) {
			if (lang === "ru") {
				return		customRedirect({redirectPath:"/r", query, pathname, request} );
			}else{
				return 	customRedirect({redirectPath:"/", query, pathname, request} );
			}
		}  else {
			if (lang === "ru") {
				return 	customRedirect({redirectPath:"/home/r", query, pathname, request} );
			} else {
				return	customRedirect({redirectPath:"/home", query, pathname, request} );
			}
		}

	}

}
