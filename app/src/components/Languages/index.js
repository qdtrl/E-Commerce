import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie';

const languages = [
	{
		code: 'fr',
		name: 'Francais',
		country_code: 'fr'
	},
	{
		code: 'en',
		name: 'English',
		country_code: 'gb'
	}
]
const Languages = () => {
	const currentLanguageCode = cookies.get('i18next') || 'en'
	const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
	const { t } = useTranslation()

	useEffect(() => {
		document.title = t('app_title');
	}, [currentLanguage, t])
	
	return (
		<div>
			<button>
				BUTTON
			</button>
			<ul>
				<li>
				{t('language')}
				</li>
				{languages.map(({ code, name, country_code }) => (
				<li key={country_code}>
					<a href={'/'} onClick={() => {i18next.changeLanguage(code)}}>
						{name}
					</a>
				</li>
				))}
			</ul>
		</div>
  )
}

export default Languages;